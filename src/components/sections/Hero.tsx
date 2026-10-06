"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

const navLinks = [
  { label: "Home", num: "01" },
  { label: "About", num: "02" },
  { label: "Projects", num: "03" },
  { label: "Contact", num: "04" },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [activeLink, setActiveLink] = useState("Home");

  const navVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1, ease: EASE_PREMIUM },
    },
  };

  const photoVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 1.1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.4 : 1.6,
        ease: EASE_PREMIUM,
      },
    },
  };

  const wordmarkVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.4 : 1,
        delay: 0.5,
        ease: EASE_PREMIUM,
      },
    },
  };

  const sideTextVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 1.0, ease: EASE_PREMIUM },
    },
  };

  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-bg">
      {/* Full-bleed photo background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial="hidden"
        animate="visible"
        variants={photoVariants}
      >
        <div className="hidden h-full w-full md:block">
          <Image
            src="/images/hero-image.png"
            alt="Midhun Reddy"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={90}
            className="object-cover object-top"
            style={{
              objectPosition: "42% top",
              transform: "scale(1.15)",
            }}
          />
        </div>
        <div className="block h-full w-full md:hidden">
          <Image
            src="/images/hero-mobile.png"
            alt="Midhun Reddy"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={90}
            className="object-cover object-top"
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.08) 0%, rgba(10,10,10,0.0) 25%, rgba(10,10,10,0.05) 55%, rgba(10,10,10,0.45) 80%, rgba(10,10,10,0.88) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-[15vh]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, transparent 100%)",
          }}
        />
        {/* soft vignette for subject separation */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 35%, transparent 40%, rgba(10,10,10,0.35) 100%)",
          }}
        />

      </motion.div>

      {/* Top Nav */}
      <motion.nav
        className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between"
        style={{
          paddingInline: "clamp(1.5rem, 4vw, 3rem)",
          paddingBlock: "clamp(1.5rem, 3vh, 2rem)",
        }}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <span
          className="font-heading font-bold tracking-tighter text-text-primary"
          style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)" }}
        >
          KVT<span className="text-lime">*</span>
        </span>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.label.toLowerCase()}`}
              onClick={() => setActiveLink(link.label)}
              className={`font-heading text-sm font-bold tracking-wide transition-colors ${
                activeLink === link.label
                  ? "text-text-primary"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              {link.label}
              <sup className="ml-0.5 text-[10px] font-normal">{link.num}</sup>
            </a>
          ))}

          {/* Single capsule CTA: white pill containing lime circle+arrow and dark text */}
          <a
            href="#contact"
            className="flex items-center gap-3 rounded-full bg-white p-2 pr-5 transition-opacity hover:opacity-90"
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
              Let&apos;s Talk
            </span>
          </a>
        </div>

        <button
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 backdrop-blur-sm md:hidden"
        >
          <span className="font-body text-sm text-text-primary">≡</span>
        </button>
      </motion.nav>

      {/* Skill tags - left side, mid-height */}
      <motion.div
        className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 pl-[clamp(1.5rem,4vw,3rem)] md:block"
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.0, ease: EASE_PREMIUM }}
      >
        <p
          className="font-body font-semibold leading-relaxed text-text-primary"
          style={{ fontSize: "clamp(0.95rem, 1.15vw, 1.1rem)" }}
        >
          Full-Stack Dev /<br />
          AI Engineering /<br />
          Agentic Systems /
        </p>
      </motion.div>

      {/* About Me - right side, condensed single block */}
      <motion.div
        className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 pr-[clamp(2rem,6vw,4.5rem)] md:block"
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease: EASE_PREMIUM }}
      >
        <div className="ml-auto max-w-[260px] text-right">
          <svg
            className="ml-auto mb-3 text-text-primary"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <circle cx="12" cy="12" r="10" />
            <ellipse cx="12" cy="12" rx="4.5" ry="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
          </svg>
          <p
            className="font-body font-semibold leading-snug text-text-primary"
            style={{ fontSize: "clamp(0.95rem, 1.15vw, 1.1rem)" }}
          >
            Hi, I&apos;m Vishnu — a Full-Stack & AI Engineer building intelligent
            products from interface to infrastructure.
          </p>
        </div>
      </motion.div>

      {/* Wordmark - bottom left, overlapping photo */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-20"
        style={{
          paddingInline: "clamp(1.5rem, 4vw, 3rem)",
          paddingBottom: "clamp(2rem, 5vh, 3.5rem)",
        }}
        initial="hidden"
        animate="visible"
        variants={wordmarkVariants}
      >
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p
              className="mb-2 font-heading font-bold text-text-primary"
              style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}
            >
              ©2026
            </p>
            <h1
              className="font-condensed font-black leading-[0.82] text-text-primary mix-blend-difference"
              style={{
                fontSize: "clamp(4rem, 13vw, 11rem)",
                letterSpacing: "-0.04em",
              }}
            >
              Vishnu
              <span
                className="text-lime font-heading"
                style={{
                  fontSize: "0.55em",
                  verticalAlign: "middle",
                  fontWeight: 900,
                }}
              >
                *
              </span>
            </h1>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
