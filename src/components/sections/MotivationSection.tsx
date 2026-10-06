"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export default function MotivationSection() {
  return (
    <section className="relative w-full bg-black pt-24 pb-12 md:pt-32 md:pb-16 text-white overflow-hidden z-10">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* 1. Header: MOTIVATION + Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE_PREMIUM }}
          className="mb-12"
        >
          <h2
            className="font-condensed font-black tracking-tighter leading-none text-white"
            style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
          >
            MOTIVATION
          </h2>
          <p className="font-heading text-xs font-semibold tracking-widest text-white/50 uppercase mt-3">
            THE STORY THAT KEEPS ME BUILDING
          </p>
        </motion.div>

        {/* 2. Two-column row: [Text + Quote Backdrop] [Image + Caption] */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1.4fr] gap-12 md:gap-16 items-center">
          
          {/* Left Column: Body paragraphs with low-opacity ghost quote backdrop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_PREMIUM }}
            className="relative flex flex-col gap-6 max-w-xl"
          >
            {/* Ghosted Giant Quote Mark behind the text */}
            <div 
              className="absolute -top-16 -left-10 select-none pointer-events-none font-heading font-black text-white/[0.04] leading-none"
              style={{ fontSize: "16rem" }}
            >
              &ldquo;
            </div>

            <p className="relative z-10 font-body text-base md:text-lg leading-relaxed text-white/70">
              Raj Shamani started helping run his family&apos;s chemical business at 
              sixteen, after his father&apos;s health forced him into it — long before 
              he became one of India&apos;s biggest voices in business media. What stays 
              with me isn&apos;t the podcast or the investments, it&apos;s the pattern behind 
              them: he built before he talked about building.
            </p>
            
            <p className="relative z-10 font-body text-base md:text-lg leading-relaxed text-white/70">
              That&apos;s the standard I hold myself to. Ship the product, build the 
              system, do the work — let that be the case for itself, not the 
              narrative around it.
            </p>
          </motion.div>

          {/* Right Column: Image and right-aligned caption */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_PREMIUM }}
            className="flex flex-col gap-3 justify-self-center md:justify-self-end w-full max-w-[340px]"
          >
            <div
              className="relative overflow-hidden rounded-2xl border border-white/10"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Image
                src="/images/raj-sha.png"
                alt="Raj Shamani portrait"
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                quality={90}
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
            <p className="font-body text-xs text-white/50 leading-relaxed text-right">
              Raj Shamani — entrepreneur, investor, host of Figuring Out
            </p>
          </motion.div>

        </div>

        {/* 3. Full-width closing pull-quote line below both columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE_PREMIUM }}
          className="mt-20 pt-10 border-t border-white/10 flex flex-col gap-2"
        >
          <span className="font-body text-[10px] font-semibold tracking-widest text-white/40 uppercase">
            [ MY MOTTO ]
          </span>
          <p className="font-heading text-2xl md:text-3xl font-bold text-white italic leading-snug">
            &ldquo;Build first. Talk later.&rdquo;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
