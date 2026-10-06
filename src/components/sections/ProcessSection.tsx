"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const EASE = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understanding the problem first — the product, the users, the technical constraints — before writing a line of code.",
  },
  {
    number: "02",
    title: "Design & Architect",
    description:
      "Structuring the system: information architecture, data models, and technical direction, alongside the interface itself.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Building the frontend, backend, APIs, and AI systems — turning the architecture into working software.",
  },
  {
    number: "04",
    title: "Ship & Refine",
    description:
      "Deploying, testing against real usage, and continuously improving performance and experience post-launch.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-light py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <SectionHeader
          tag="Process"
          headline="Here's How I Work"
          subtext="From first idea to shipped product — a look at how I actually approach building software."
        />

        {/* Desktop: Horizontal 4-column layout with connecting hairline */}
        <div className="hidden md:block relative">

          {/* Horizontal connecting line behind step numbers */}
          <div className="absolute top-[2.5rem] left-[calc(12.5%)] right-[calc(12.5%)] h-[1px] bg-white/10 z-0" />

          <div className="relative z-10 grid grid-cols-4 gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="flex flex-col px-6 pt-0 pb-8 border-r border-white/10 last:border-r-0"
              >
                {/* Step Number - visual anchor */}
                <span
                  className="font-condensed font-black text-white mb-8 leading-none"
                  style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}
                >
                  {step.number}
                </span>

                {/* Divider */}
                <div className="w-8 h-[1px] bg-lime mb-6 flex-shrink-0" />

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-text-dark-primary mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm leading-relaxed text-text-dark-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical stacked clean rows */}
        <div className="flex flex-col md:hidden border-t border-white/10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="flex gap-6 py-8 border-b border-white/10"
            >
              <span
                className="font-condensed font-black text-white/30 flex-shrink-0 leading-none mt-1"
                style={{ fontSize: "2.5rem" }}
              >
                {step.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-xl font-bold text-text-dark-primary">
                  {step.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-text-dark-secondary">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
