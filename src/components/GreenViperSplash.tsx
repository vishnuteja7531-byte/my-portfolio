"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GreenViperSplashProps {
  children: React.ReactNode; // Drops your hero image/background layer directly underneath
}

export default function GreenViperSplash({ children }: GreenViperSplashProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Staggered sequence timings matching the column wave behavior from the clip
  const columnDelays = [0.35, 0.48, 0.42, 0.55, 0.46];
  
  // Custom sharp cubic-bezier curve matching the native transition speed
  const customEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

  return (
    <div className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden">
      
      {/* LAYER 1: Underlying Hero Graphic Asset */}
      <div className="absolute inset-0 w-full h-full z-0">
        {children}
      </div>

      {/* LAYER 2: Staggered Opening Curtain (Green Family) */}
      <div className="absolute inset-0 w-full h-full z-10 grid grid-cols-5 pointer-events-none">
        {columnDelays.map((delayTime, index) => (
          <motion.div
            key={index}
            initial={{ y: "0%" }}
            animate={isMounted ? { y: "-100%" } : { y: "0%" }}
            transition={{
              duration: 1.0,
              delay: delayTime,
              ease: customEase,
            }}
            style={{ width: "101.5%" }}
            className="h-[102%] bg-[#022c22] will-change-transform -ml-[1px] border-none"
          />
        ))}
      </div>

    </div>
  );
}
