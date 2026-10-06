import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Use AVIF first (smallest), fall back to WebP — both served by Vercel's Image CDN
    formats: ["image/avif", "image/webp"],

    // Vercel's CDN caches images for 1 year (31536000s) — maximum CDN cache
    minimumCacheTTL: 31536000,

    // Device breakpoints for srcset generation — covers mobile → 4K
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920, 2560],

    // Image size breakpoints for fill/fixed/intrinsic usage
    imageSizes: [16, 32, 64, 96, 128, 256, 384, 512],
  },

  // Compress text assets (JS/CSS) with gzip on Vercel
  compress: true,

  // Power-user: strip unused React internals from production bundle
  reactStrictMode: true,

  // Turbopack config (Next.js 16 default bundler — used by Vercel production builds)
  // Mirrors the webpack GLSL rule so shader imports work under both bundlers.
  turbopack: {
    rules: {
      "*.{glsl,vs,fs,vert,frag}": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
  },

  // Webpack config — used only when running `next dev --webpack` locally
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ["raw-loader"],
    });
    return config;
  },
};

export default nextConfig;
