"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ViperSplashLoaderProps {
  heroComponent: React.ReactNode;
}

export default function ViperSplashLoader({ heroComponent }: ViperSplashLoaderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Custom staggered sequence delays for each column slice (Left to Right)
  const columnDelays = [0.4, 0.52, 0.45, 0.58, 0.48];

  // Custom premium easing curve mirroring the snappy bounce-out in the recording
  const luxuryEase: [number, number, number, number] = [0.85, 0, 0.15, 1];

  return (
    <div className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden">
      
      {/* 1. HERO SECTION: Mounts and animates elements as columns clear */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.97 }}
        animate={isMounted ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0"
      >
        {heroComponent}
      </motion.div>

      {/* 2. SPLASH CURTAIN LAYER: Green Family Theme */}
      <div className="absolute inset-0 w-full h-full z-50 grid grid-cols-5 pointer-events-none">
        {columnDelays.map((delayTime, index) => (
          <motion.div
            key={index}
            initial={{ y: "0%" }}
            animate={isMounted ? { y: "-100%" } : { y: "0%" }}
            transition={{
              duration: 1.1,
              delay: delayTime,
              ease: luxuryEase,
            }}
            style={{
              // Overlap width to fix sub-pixel layout gaps on 2K/4K scaling displays
              width: "101.5%",
            }}
            // Using a premium deep Emerald Green family palette (#042f1a)
            className="h-[102%] bg-[#042f1a] border-none will-change-transform -ml-[1px]"
          />
        ))}
      </div>

    </div>
  );
}
