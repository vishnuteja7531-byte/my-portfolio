"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ViperSliderProps {
  heroComponent: React.ReactNode;
  children: React.ReactNode;
}

export default function ViperSlider({ heroComponent, children }: ViperSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);

  // Tracks the scroll position over the first 100vh (curtain animation window)
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end start"],
  });

  // Staggered timing timelines matching the sequence in image_465126.jpg
  // Each bar starts and ends its upward wipe at a staggered offset
  const bar1Y = useTransform(scrollYProgress, [0.00, 0.40], ["100%", "0%"]);
  const bar2Y = useTransform(scrollYProgress, [0.06, 0.46], ["100%", "0%"]);
  const bar3Y = useTransform(scrollYProgress, [0.12, 0.52], ["100%", "0%"]);
  const bar4Y = useTransform(scrollYProgress, [0.18, 0.58], ["100%", "0%"]);
  const bar5Y = useTransform(scrollYProgress, [0.24, 0.64], ["100%", "0%"]);

  const bars = [bar1Y, bar2Y, bar3Y, bar4Y, bar5Y];

  return (
    <div ref={containerRef} className="relative w-full bg-[#0a0a0a]">

      {/* 1. STICKY HERO CONTAINER */}
      {/* This also acts as the scroll target for the curtain animation */}
      <div ref={spacerRef} className="sticky top-0 left-0 w-full h-screen z-10 overflow-hidden">
        {heroComponent}
      </div>

      {/* 2. THE CONTENT GATEWAY & STAGGERED CURTAIN */}
      {/* Sits naturally below the sticky hero in document flow — scrolls up over it */}
      <div className="relative w-full min-h-screen bg-black text-text-primary z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">

        {/* The Curtain Overlay Layer */}
        {/* Sits completely invisible inside the content section until scrolled, then shoots upward */}
        <div className="absolute bottom-full left-0 w-full h-[100vh] grid grid-cols-5 pointer-events-none overflow-hidden">
          {bars.map((yTimeline, index) => (
            <motion.div
              key={index}
              style={{ y: yTimeline }}
              // Uses 101% width and slight horizontal overlap to prevent rendering sub-pixel micro gaps
              className="w-[101%] h-[102%] bg-black will-change-transform origin-bottom border-none"
            />
          ))}
        </div>

        {/* MAIN BODY PAGES INSERTION */}
        <div className="relative w-full bg-black">
          {children}
        </div>
      </div>

    </div>
  );
}
