"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PanelSliderProps {
  children: React.ReactNode;
}

export default function PanelSlider({ children }: PanelSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position relative to the reveal window
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // Smoothly maps scroll progress to the vertical translation
  // It starts lower down and locks perfectly into 0% as the hero completes its transition
  const panelY = useTransform(scrollYProgress, [0, 1], ["15vh", "0vh"]);

  // Optional: subtle scale up for that premium elastic depth effect
  const panelScale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);

  return (
    <div ref={containerRef} className="relative w-full z-20 pointer-events-none">
      <motion.div
        style={{
          y: panelY,
          scale: panelScale
        }}
        className="relative w-full min-h-screen bg-[#0a0a0a] text-white rounded-t-[32px] md:rounded-t-[48px] border-t border-white/5 shadow-[0_-20px_60px_rgba(0,0,0,0.6)] will-change-transform pointer-events-auto"
      >
        {/* Modern decorative drag/pull handle bar */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-zinc-800/60" />

        {/* Main Content Injector */}
        <div className="w-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}