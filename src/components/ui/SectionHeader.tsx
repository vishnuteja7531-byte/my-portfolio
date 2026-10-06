"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  headline: string;
  subtext?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  tag,
  headline,
  subtext,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-16 ${isCenter ? "text-center" : "text-left"}`}>
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-block rounded-full bg-lime/10 px-4 py-1.5 font-body text-sm font-medium text-lime-glow ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        {tag}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 font-heading font-black leading-[0.95] tracking-tight text-text-dark-primary"
        style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
      >
        {headline}.
      </motion.h2>

      {subtext && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-5 font-body text-text-dark-secondary ${
            isCenter ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
          style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
        >
          {subtext}
        </motion.p>
      )}
    </div>
  );
}
