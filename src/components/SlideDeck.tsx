"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

interface SlideProps {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  children: React.ReactNode;
  bg?: string;
}

/**
 * Individual slide: pinned absolutely inside the sticky viewport.
 * Enters via scale-up + fade-in, exits via slight scale-up + fade-out.
 */
function Slide({ index, total, scrollYProgress, children, bg = "#ffffff" }: SlideProps) {
  // Each slide owns 1/total of the scroll range
  const segLen = 1 / total;
  const segStart = index * segLen;
  const segEnd = (index + 1) * segLen;

  // Overlap window: 15% of a segment for cross-dissolve
  const overlap = segLen * 0.18;

  // Opacity: 0 → 1 (entry), 1 (hold), 1 → 0 (exit)
  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, segStart - overlap),  // start entering
      segStart,                          // fully entered
      Math.max(segStart, segEnd - overlap), // start exiting
      Math.min(1, segEnd),               // fully exited
    ],
    index === 0
      ? [1, 1, 1, 0]       // first slide: no entry fade (visible on load)
      : [0, 1, 1, 0]
  );

  // Scale: 0.95→1 (entry), 1 (hold), 1→1.04 (exit — slightly zooms out)
  const scale = useTransform(
    scrollYProgress,
    [
      Math.max(0, segStart - overlap),
      segStart,
      Math.max(segStart, segEnd - overlap),
      Math.min(1, segEnd),
    ],
    index === 0
      ? [1, 1, 1, 1.04]     // first slide: no entry scale
      : [0.94, 1, 1, 1.04]
  );

  // Last slide never exits — it stays at opacity 1 / scale 1
  const finalOpacity = index === total - 1
    ? useTransform(scrollYProgress, [segStart - overlap, segStart], [0, 1])
    : opacity;

  const finalScale = index === total - 1
    ? useTransform(scrollYProgress, [segStart - overlap, segStart], [0.94, 1])
    : scale;

  return (
    <motion.div
      className="absolute inset-0 w-full h-full will-change-transform overflow-auto"
      style={{
        opacity: finalOpacity,
        scale: finalScale,
        backgroundColor: bg,
        // Stack slides via z-index so they layer correctly
        zIndex: index + 1,
      }}
    >
      {children}
    </motion.div>
  );
}

interface SlideDeckProps {
  slides: Array<{
    id: string;
    content: React.ReactNode;
    bg?: string;
  }>;
}

/**
 * SlideDeck: the outer scroll track.
 * Height = slides.length * 100vh gives each slide 100vh of scroll runway.
 * The inner sticky container locks the viewport and stacks all slides absolutely.
 */
export default function SlideDeck({ slides }: SlideDeckProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={trackRef}
      // Total scroll runway: each slide gets its own 100vh
      style={{ height: `${slides.length * 100}vh` }}
      className="relative w-full"
    >
      {/* Sticky viewport lock */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {slides.map((slide, i) => (
          <Slide
            key={slide.id}
            index={i}
            total={slides.length}
            scrollYProgress={scrollYProgress}
            bg={slide.bg}
          >
            {slide.content}
          </Slide>
        ))}
      </div>
    </div>
  );
}
