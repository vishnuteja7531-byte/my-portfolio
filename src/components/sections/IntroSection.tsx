"use client";

import { motion } from "framer-motion";

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export default function IntroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-light pt-24 pb-12 md:pt-32 md:pb-16 text-text-dark-primary">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Main intro layout (Two columns on desktop: Eyebrow on left, Statement + Button on right) */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-8 md:gap-12 mb-16 md:mb-24">
          {/* Left side: Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            className="font-heading italic text-text-dark-secondary text-lg"
          >
            / Hey, Just An Intro
          </motion.div>

          {/* Right side: Large statement & CTA button */}
          <div className="flex flex-col gap-8 md:gap-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_PREMIUM }}
              className="font-heading font-bold leading-[1.15] tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)" }}
            >
              A Full-Stack & AI Engineer from India, focused on building intelligent products, scalable software, and thoughtful digital experiences. From AI agents and RAG pipelines to production SaaS platforms, I work across the entire stack — turning ideas into shipped, working systems.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE_PREMIUM }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-white p-2 pr-5 transition-opacity hover:opacity-90 self-start"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-lime text-bg">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
                <span className="font-body text-sm font-medium text-bg">
                  Get in touch
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Hairline Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE_PREMIUM }}
          className="w-full h-[1px] bg-white/10 origin-left mb-12 md:mb-16"
        />

        {/* Two-Column Supporting Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_PREMIUM }}
            className="flex flex-col gap-3"
          >
            <h3 className="font-heading text-xl font-bold text-text-dark-primary">
              Bringing Ideas to Life
            </h3>
            <p className="font-body text-sm leading-relaxed text-text-dark-secondary">
              Whether it&apos;s an AI-powered platform, a scalable SaaS application, or an agentic system, I build software that&apos;s fast, intentional, and engineered to solve real problems.
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_PREMIUM }}
            className="flex flex-col gap-3"
          >
            <h3 className="font-heading text-xl font-bold text-text-dark-primary">
              Collaborate with Me
            </h3>
            <p className="font-body text-sm leading-relaxed text-text-dark-secondary">
              Have an idea worth building? From full-stack applications to AI-powered products, I develop software that&apos;s reliable, scalable, and designed to grow with your product.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
