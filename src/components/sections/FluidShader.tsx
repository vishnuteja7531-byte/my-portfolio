"use client";

import { useEffect, useRef } from "react";

export default function FluidShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.warn("WebGL not supported, falling back to CSS gradients.");
      return;
    }

    // Vertex shader source
    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader source: Ultra-smooth, highly-blurred moving radial color blobs (fake mesh gradient)
    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float aspect = u_resolution.x / u_resolution.y;
        vec2 p = uv;
        p.x *= aspect;

        float t = u_time * 0.25;

        // Blob 1: Neon Lime (#C8F000)
        vec2 c1 = vec2(
          0.5 * aspect + 0.35 * cos(t * 0.8 + 1.0),
          0.5 + 0.3 * sin(t * 0.9 + 2.5)
        );
        float d1 = length(p - c1);
        // Large radius + smooth step = extremely soft, blurry transition
        float w1 = smoothstep(0.95, 0.0, d1);

        // Blob 2: Vibrant Teal (#2DD4BF) - Adds high-contrast multi-color premium vibe
        vec2 c2 = vec2(
          0.5 * aspect + 0.4 * sin(t * 0.65 + 4.2),
          0.5 + 0.35 * cos(t * 0.75 + 0.8)
        );
        float d2 = length(p - c2);
        float w2 = smoothstep(1.1, 0.0, d2);

        // Blob 3: Soft Mint / Lime Highlight (#D4F54D)
        vec2 c3 = vec2(
          0.5 * aspect + 0.3 * cos(t * 1.1 + 3.0),
          0.5 + 0.25 * sin(t * 0.55 + 5.2)
        );
        float d3 = length(p - c3);
        float w3 = smoothstep(0.85, 0.0, d3);

        // Blob 4: Deep Royal Blue / Purple (#3B82F6 / #4F46E5) - Blends background to match the second reference depth
        vec2 c4 = vec2(
          0.5 * aspect + 0.45 * sin(t * 0.5 + 2.0),
          0.5 + 0.3 * cos(t * 0.7 + 6.0)
        );
        float d4 = length(p - c4);
        float w4 = smoothstep(1.2, 0.0, d4);

        // Colors
        vec3 bg = vec3(0.015, 0.02, 0.015);            // Deep obsidian-green tint base
        vec3 colLime = vec3(0.784, 0.941, 0.0);        // #C8F000
        vec3 colTeal = vec3(0.176, 0.831, 0.749);        // #2DD4BF
        vec3 colSoftLime = vec3(0.831, 0.961, 0.302);    // #D4F54D
        vec3 colDeepBlue = vec3(0.05, 0.15, 0.35);       // Deep blue glow for color depth

        // Smoothly combine colors with radial weight overlays
        vec3 color = bg;
        color = mix(color, colDeepBlue, w4 * 0.45);
        color = mix(color, colTeal, w2 * 0.48);
        color = mix(color, colLime, w1 * 0.52);
        color = mix(color, colSoftLime, w3 * 0.25);

        // Soft vignette to keep the edges beautifully dark and smooth
        vec2 dist = uv - vec2(0.5);
        float vignette = 1.0 - dot(dist, dist) * 1.2;
        color *= clamp(vignette, 0.0, 1.0);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Helper to compile shaders
    const createShader = (glContext: WebGLRenderingContext, type: number, source: string) => {
      const shader = glContext.createShader(type);
      if (!shader) return null;
      glContext.shaderSource(shader, source);
      glContext.compileShader(shader);
      if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
        console.error(glContext.getShaderInfoLog(shader));
        glContext.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    // Create and link program
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Setup screen quad positions
    const vertices = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const resolutionLoc = gl.getUniformLocation(program, "u_resolution");

    let animationId: number;
    let startTime = Date.now();

    // Resize handler
    const resize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    // Render loop
    const render = () => {
      resize();

      const time = (Date.now() - startTime) / 1000;
      gl.uniform1f(timeLoc, time);
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationId = requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-90 transition-opacity duration-1000"
      style={{ mixBlendMode: "normal" }}
    />
  );
}
