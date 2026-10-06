"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LimeViperSplashProps {
  children: React.ReactNode;
}

export default function LimeViperSplash({ children }: LimeViperSplashProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Asset preloading sequence
  useEffect(() => {
    const criticalImages = [
      "/images/hero-image.png",
      "/images/hero-mobile.png",
    ];

    let loadedCount = 0;
    const totalAssets = criticalImages.length;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === totalAssets) {
        // Delay opening slightly for a premium transition buffer
        setTimeout(() => {
          setIsLoaded(true);
        }, 400);
      }
    };

    // Preload critical images into browser cache
    criticalImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded; // don't freeze on error
    });

    // Fallback: If network is extremely slow, force load after 3.5 seconds
    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 3500);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Manage body scroll lock during loading and opening animation
  useEffect(() => {
    if (isLoaded) {
      document.body.style.overflow = "hidden";
      const scrollTimer = setTimeout(() => {
        document.body.style.overflow = "";
      }, 1800); // Wait for columns delay + slide transition to finish
      return () => {
        document.body.style.overflow = "";
        clearTimeout(scrollTimer);
      };
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isLoaded]);

  // Staggered progressive left-to-right sweep timings
  const columnDelays = [0.2, 0.32, 0.44, 0.56, 0.68];
  
  // Custom sharp cubic-bezier curve matching the native transition speed
  const customEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

  return (
    <div className="relative w-full">
      
      {/* LAYER 1: Underlying Content */}
      <div className="relative w-full z-0">
        {children}
      </div>

      {/* LAYER 2: Staggered Opening Curtain (Lime Green #C8F000 splitting from the center) */}
      <div className="fixed inset-0 w-full h-screen z-50 grid grid-cols-5 pointer-events-none">
        {columnDelays.map((delayTime, index) => (
          <div 
            key={index} 
            className="relative h-full -ml-[1px]" 
            style={{ width: "101.5%" }}
          >
            {/* TOP PANEL: Slides UP from center seam */}
            <motion.div
              initial={{ y: "0%" }}
              animate={isLoaded ? { y: "-100%" } : { y: "0%" }}
              transition={{
                duration: 1.0,
                delay: delayTime,
                ease: customEase,
              }}
              style={{ backgroundColor: "#C8F000" }}
              className="absolute top-0 left-0 w-full h-[50.5%] will-change-transform border-none"
            />

            {/* BOTTOM PANEL: Slides DOWN from center seam */}
            <motion.div
              initial={{ y: "0%" }}
              animate={isLoaded ? { y: "100%" } : { y: "0%" }}
              transition={{
                duration: 1.0,
                delay: delayTime,
                ease: customEase,
              }}
              style={{ backgroundColor: "#C8F000" }}
              className="absolute bottom-0 left-0 w-full h-[50.5%] will-change-transform border-none"
            />
          </div>
        ))}
      </div>

    </div>
  );
}
