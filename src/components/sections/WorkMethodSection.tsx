"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

const workItems = [
  {
    number: "01",
    image: "/images/k1.png",
    eyebrow: "Intelligent Systems",
    title: "Modern AI Engineering",
    description:
      "Designing AI-powered products with modern architectures, autonomous workflows, LLMs, agentic systems, APIs, and scalable engineering.",
  },
  {
    number: "02",
    image: "/images/k2.png",
    eyebrow: "Component Architecture",
    title: "Design Systems",
    description:
      "Building comprehensive design systems — typography, spacing, and reusable components engineered for consistency and speed.",
  },
  {
    number: "03",
    image: "/images/k3.png",
    eyebrow: "Communication",
    title: "Editorial Interfaces",
    description:
      "Using typography and layout as structural tools — creating hierarchy, rhythm, and clarity across every product I build.",
  },
  {
    number: "04",
    image: "/images/k4.png",
    eyebrow: "How I Build",
    title: "Product Philosophy",
    description:
      "A transparent look into my process — from understanding problems and architecting systems to engineering, shipping, and refining.",
  },
];

export default function WorkMethodSection() {
  return (
    <section className="relative w-full bg-black pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE_PREMIUM }}
          className="mb-20 max-w-3xl"
        >
          <h2
            className="font-heading font-black leading-[1.05] tracking-tight text-white"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)", letterSpacing: "-0.02em" }}
          >
            Full-Stack Engineering built through systems, AI, and intentional craft.
          </h2>
        </motion.div>

        {/* Top hairline divider */}
        <div className="w-full h-[1px] bg-white/10 mb-0" />

        {/* Numbered Rows */}
        <div className="flex flex-col">
          {workItems.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, delay: i * 0.08, ease: EASE_PREMIUM }}
              className="border-b border-white/10 py-12 md:py-16"
            >
              {/* Desktop Row: Number — Image — Text */}
              <div className="hidden md:grid grid-cols-[80px_minmax(0,1fr)_minmax(0,1.8fr)] gap-x-10 items-center">

                {/* Number */}
                <span
                  className="font-condensed font-black text-white/25 leading-none"
                  style={{ fontSize: "clamp(2.5rem, 4vw, 4.5rem)" }}
                >
                  {item.number}
                </span>

                {/* Image */}
                <div
                  className="relative w-full overflow-hidden rounded-xl border border-white/10"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="30vw"
                    quality={85}
                    className="object-cover"
                  />
                </div>

                {/* Text block */}
                <div className="pl-4">
                  <p className="font-body text-xs font-semibold tracking-widest text-white/40 uppercase mb-4">
                    {item.eyebrow}
                  </p>
                  <h3
                    className="font-heading font-bold text-white leading-snug mb-4"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-white/55 max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Mobile Stack: Number + Title → Image → Description */}
              <div className="flex flex-col gap-6 md:hidden">
                <div className="flex items-baseline gap-4">
                  <span className="font-condensed font-black text-white/25 text-4xl leading-none flex-shrink-0">
                    {item.number}
                  </span>
                  <div>
                    <p className="font-body text-xs font-semibold tracking-widest text-white/40 uppercase mb-1">
                      {item.eyebrow}
                    </p>
                    <h3 className="font-heading text-2xl font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div
                  className="relative w-full overflow-hidden rounded-xl border border-white/10"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="100vw"
                    quality={85}
                    className="object-cover"
                  />
                </div>

                <p className="font-body text-sm leading-relaxed text-white/55">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
