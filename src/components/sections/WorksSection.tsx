"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

const filterCategories = [
  "All",
  "AI / Agents",
  "Full-Stack",
  "Product / UI",
  "Experiments",
];

const projectsData = [
  {
    image: "/images/projects/x1.png",
    title: "Vishnu — Portfolio",
    description: "Personal portfolio presenting full-stack development, AI engineering, and product design.",
    tags: ["Product / UI", "Portfolio"],
  },
  {
    image: "/images/projects/x2.png",
    title: "Athera AI",
    description: "AI-first platform combining conversational AI, research workflows, and agentic execution.",
    tags: ["AI / Agents", "Full-Stack"],
  },
  {
    image: "/images/projects/x3.png",
    title: "Athera Labs — Developer Certification",
    description: "Developer certification platform with programs, assessments, benefits, and enrollment flows.",
    tags: ["Product / UI", "Platform"],
  },
  {
    image: "/images/projects/x4.png",
    title: "Athera Labs — Builder Programs",
    description: "Developer programs platform for modern builders, with learning, assessments, and industry credentials.",
    tags: ["Product / UI", "Platform"],
  },
  {
    image: "/images/projects/x5.png",
    title: "Athera Flow",
    description: "Unified environment for intelligent backend generation and modern frontend crafting.",
    tags: ["AI / Agents", "Full-Stack"],
  },
  {
    image: "/images/projects/x6.png",
    title: "Athera AI — Interface",
    description: "Multi-model AI chat interface with streaming responses and agentic tool use.",
    tags: ["AI / Agents"],
  },
  {
    image: "/images/projects/x7.png",
    title: "Athera Labs — Platform",
    description: "Core platform experience for Athera Labs, spanning product and learning surfaces.",
    tags: ["Product / UI", "Platform"],
  },
  {
    image: "/images/projects/x8.png",
    title: "Midhun — Portfolio",
    description: "Client portfolio presenting UI/UX design, frontend development, and problem solving.",
    tags: ["Product / UI", "Portfolio"],
  },
];

export default function WorksSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects based on the active tag category
  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "All") return true;
    return project.tags.includes(activeFilter);
  });

  return (
    <section id="projects" className="relative w-full bg-surface-light pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      
      {/* Decorative typographic backdrop background */}
      <div className="absolute inset-x-0 top-0 pointer-events-none select-none z-0 flex justify-center overflow-hidden">
        <h2 
          className="font-condensed font-black text-white/[0.03] leading-none text-center"
          style={{ 
            fontSize: "clamp(6rem, 16vw, 15rem)",
            letterSpacing: "-0.04em",
            transform: "translateY(5px)"
          }}
        >
          PORTFOLIO
        </h2>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 z-10">
        
        {/* Header Block */}
        <div className="mb-12 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-lime/10 px-4 py-1.5 font-body text-sm font-medium text-lime-glow"
          >
            / SELECTED WORK
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_PREMIUM }}
            className="mt-4 font-heading font-black leading-[0.95] tracking-tight text-text-dark-primary"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Selected Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_PREMIUM }}
            className="mt-4 font-body text-text-dark-secondary mx-auto max-w-xl text-base"
          >
            Selected products, systems, and experiments I&apos;ve designed, engineered, and shipped.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-10">
          {filterCategories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full font-body text-xs font-semibold tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-lime text-black shadow-md shadow-lime/20"
                    : "border border-white/10 text-white/60 hover:text-white hover:border-white/30 bg-transparent"
                }`}
              >
                {category.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Projects Grid Container with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, i) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE_PREMIUM }}
                  key={project.title}
                  className="flex flex-col group cursor-pointer"
                >
                  {/* Image Card Container */}
                  <div 
                    className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#1c1c1c] to-[#111111] p-3 md:p-4 mb-5"
                    style={{ aspectRatio: "16 / 10" }}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-xl bg-black">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={85}
                        priority={i < 2}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  {/* Copy Row */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-xl font-bold text-text-dark-primary group-hover:text-lime transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-text-dark-secondary">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1 font-body text-xs text-text-dark-secondary bg-transparent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              /* Empty State */
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-20 text-center flex flex-col items-center justify-center border border-dashed border-white/15 rounded-3xl bg-[#111111]/30"
              >
                <p className="font-heading text-lg text-text-dark-primary mb-2">No experiments launched yet</p>
                <p className="font-body text-sm text-text-dark-secondary">Stay tuned! Exciting projects will be published here soon.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
