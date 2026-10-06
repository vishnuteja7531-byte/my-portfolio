"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { IconType } from "react-icons";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPostgresql,
  SiOpenaigym,
  SiSupabase, SiVercel, SiGithub,
  SiFigma, SiFramer, SiGsap
} from "react-icons/si";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

type IconItem = { Icon: IconType; color: string; name: string; badge?: never } | { badge: string; Icon?: never; color?: never; name?: never };

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

const timeline = [
  { role: "Founder & CEO", org: "Athera Labs", start: "2025", end: "Now" },
  { role: "Full-Stack & AI Engineer", org: "Freelance / Contract Projects", start: "2023", end: "Now" },
  { role: "AI & Agentic Systems", org: "Independent Projects", start: "2024", end: "Now" },
  { role: "B.Tech Computer Science", org: "VNR VJIET", start: "2022", end: "2026" },
];

const expertiseList: { id: string; title: string; description: string; icons: IconItem[] }[] = [
  {
    id: "01",
    title: "Full-Stack Engineering",
    description: "Building robust, scalable applications from database architecture to modern frontend interfaces.",
    icons: [
      { Icon: SiReact, color: "#61DAFB", name: "React" },
      { Icon: SiNextdotjs, color: "#ffffff", name: "Next.js" },
      { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
      { Icon: SiNodedotjs, color: "#5FA04E", name: "Node.js" },
      { Icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" }
    ]
  },
  {
    id: "02",
    title: "AI Engineering & Agentic Systems",
    description: "Integrating LLMs, building RAG pipelines, and developing autonomous agents for complex workflows.",
    icons: [
      { Icon: SiOpenaigym, color: "#ffffff", name: "OpenAI" },
      { badge: "Gemini" },
      { badge: "DeepSeek" },
      { badge: "MCP" },
      { badge: "RAG" }
    ]
  },
  {
    id: "03",
    title: "SaaS Architecture",
    description: "Designing reliable cloud infrastructure, authentication, and database schemas for production SaaS.",
    icons: [
      { Icon: SiSupabase, color: "#3ECF8E", name: "Supabase" },
      { Icon: SiVercel, color: "#ffffff", name: "Vercel" },
      { Icon: SiGithub, color: "#ffffff", name: "GitHub" }
    ]
  },
  {
    id: "04",
    title: "Design Engineering",
    description: "Bridging the gap between design and engineering with fluid animations and pixel-perfect UIs.",
    icons: [
      { Icon: SiFigma, color: "#F24E1E", name: "Figma" },
      { Icon: SiFramer, color: "#0055FF", name: "Framer Motion" },
      { Icon: SiGsap, color: "#88CE02", name: "GSAP" }
    ]
  },
  {
    id: "05",
    title: "Product Thinking",
    description: "Focusing on user experience, business logic, and the actual problems software needs to solve.",
    icons: []
  }
];

export default function AboutSection() {
  const [hoveredExpertise, setHoveredExpertise] = useState<string | null>(null);

  return (
    <section id="about" className="relative w-full bg-black pt-24 pb-12 md:pt-32 md:pb-16 text-text-primary">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* --- PART 1: Bio + Timeline Block --- */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE_PREMIUM }}
            className="mb-16"
          >
            <p className="mb-3 font-heading italic text-text-secondary">
              / Who Am I
            </p>
            <h2
              className="font-heading font-bold tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Building <span className="text-white/40">Since 2022</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {/* Left: Image & Identity */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, ease: EASE_PREMIUM }}
            >
              <div
                className="relative w-full overflow-hidden rounded-2xl bg-[#111] border border-white/10"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src="/images/about-me.png"
                  alt="Vishnu Teja"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex gap-4 items-center">
                  <a href="https://linkedin.com/in/vishnutejakvt" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-white hover:scale-110 transition-all">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://github.com/vishnutejakvt" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/70 hover:text-white hover:scale-110 transition-all">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://twitter.com/vishnutejakvt" target="_blank" rel="noreferrer" aria-label="X/Twitter" className="text-white/70 hover:text-white hover:scale-110 transition-all">
                    <FaXTwitter size={20} />
                  </a>
                </div>
                
                <div className="sm:text-right">
                  <p className="font-body text-base font-bold text-white">
                    Vishnu Teja
                  </p>
                  <p className="font-body text-sm text-white/60">
                    Full-Stack & AI Engineer
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Bio Paragraph & Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.1, ease: EASE_PREMIUM }}
            >
              <p className="font-body text-lg leading-relaxed text-white/80 max-w-lg mb-10">
                A Full-Stack & AI Engineer building intelligent products from 
                interface to infrastructure. I care about the full system — frontend, 
                backend, AI agents, and everything that connects them into something 
                that actually ships.
              </p>

              <div className="w-full h-[1px] bg-white/10 mb-8" />

              <div className="flex flex-col">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_PREMIUM }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 py-5 gap-2 sm:gap-4"
                  >
                    <div>
                      <p className="font-body text-base font-semibold text-white">
                        {item.role}
                      </p>
                      <p className="font-body text-sm text-white/50 mt-0.5">
                        {item.org}
                      </p>
                    </div>
                    <p className="font-body text-sm text-white/60 whitespace-nowrap">
                      {item.start} <span className="mx-1 opacity-50">→</span> {item.end}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* --- PART 2: Areas of Expertise --- */}
        <div className="mt-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            className="font-heading font-black leading-[0.95] tracking-tight text-white mb-12"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Areas of Expertise
          </motion.h2>

          <div className="flex flex-col">
            <div className="w-full h-[1px] bg-white/10" />
            
            {expertiseList.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE_PREMIUM }}
                className="group relative border-b border-white/10"
                onMouseEnter={() => setHoveredExpertise(exp.id)}
                onMouseLeave={() => setHoveredExpertise(null)}
                onClick={() => setHoveredExpertise(hoveredExpertise === exp.id ? null : exp.id)}
              >
                <div className="py-6 md:py-8 cursor-pointer flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex items-center gap-6 md:gap-12 flex-grow">
                    <span className="font-body text-sm font-medium text-white/40 w-6">
                      {exp.id}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold text-white transition-colors duration-300 group-hover:text-lime">
                      {exp.title}
                    </h3>
                  </div>
                </div>

                <AnimatePresence>
                  {hoveredExpertise === exp.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE_PREMIUM }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-12 md:pl-24">
                        <p className="font-body text-base text-white/60 max-w-2xl mb-6">
                          {exp.description}
                        </p>
                        
                        {exp.icons && exp.icons.length > 0 && (
                          <div className="flex flex-wrap items-center gap-6">
                            {exp.icons.map((item, idx) => {
                              if (item.Icon) {
                                return (
                                  <div key={idx} className="flex items-center gap-2" title={item.name}>
                                    <item.Icon size={26} color={item.color} />
                                  </div>
                                );
                              } else if (item.badge) {
                                return (
                                  <span key={idx} className="px-3 py-1 text-xs font-semibold rounded bg-white/10 text-white/80 border border-white/5">
                                    {item.badge}
                                  </span>
                                );
                              }
                              return null;
                            })}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
