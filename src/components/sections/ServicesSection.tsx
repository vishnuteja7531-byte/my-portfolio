"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  body: string;
  checklist: string[];
  stack?: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "01",
    title: "Full-Stack Development",
    tagline: "Production-ready web applications, built end-to-end.",
    body: "I build modern web products across frontend, backend, APIs, databases, authentication, and deployment.",
    checklist: [
      "React / Next.js applications",
      "TypeScript development",
      "REST APIs",
      "Database architecture",
      "Authentication & user systems",
      "Third-party API integrations",
      "Deployment & production setup"
    ]
  },
  {
    id: "02",
    title: "AI & Agentic Systems",
    tagline: "AI products that do more than generate text.",
    body: "I build intelligent applications using LLMs, AI agents, RAG, tool calling, and automated workflows.",
    checklist: [
      "LLM integrations",
      "AI chat interfaces",
      "RAG pipelines",
      "AI agents",
      "Agentic workflows",
      "MCP & tool integration",
      "Multi-model architectures",
      "Streaming AI experiences",
      "AI automation"
    ],
    stack: "AI stack: OpenAI · Gemini · Grok · DeepSeek · OpenRouter"
  },
  {
    id: "03",
    title: "SaaS Product Development",
    tagline: "From product idea to a scalable SaaS platform.",
    body: "I engineer SaaS products with the core systems needed to support real users and production workloads.",
    checklist: [
      "Product architecture",
      "Authentication",
      "User dashboards",
      "Subscriptions",
      "Payments",
      "Database systems",
      "APIs",
      "Usage / quota systems",
      "Deployment",
      "Scalable application architecture"
    ]
  },
  {
    id: "04",
    title: "Product Engineering",
    tagline: "Turning ideas into complete digital products.",
    body: "I work across product thinking, UX, design, and engineering to turn an idea into something people can actually use.",
    checklist: [
      "Product architecture",
      "User flows",
      "Feature planning",
      "MVP development",
      "UX implementation",
      "Frontend engineering",
      "Backend integration",
      "Launch-ready products"
    ]
  },
  {
    id: "05",
    title: "Design Engineering",
    tagline: "Interfaces designed to feel as good as they work.",
    body: "I combine design and engineering to create polished, responsive digital experiences instead of simply translating static designs into code.",
    checklist: [
      "UI implementation",
      "Responsive design",
      "Design systems",
      "Micro-interactions",
      "Motion design",
      "GSAP / Framer Motion",
      "Interactive experiences",
      "Performance & accessibility",
      "Pixel-accurate implementation"
    ]
  },
  {
    id: "06",
    title: "AI Product Integration",
    tagline: "Adding meaningful AI capabilities to existing products.",
    body: "Already have a product? I can integrate intelligent capabilities into it without turning the experience into a generic chatbot.",
    checklist: [
      "AI feature integration",
      "Existing product AI upgrades",
      "AI assistants",
      "Semantic search",
      "RAG",
      "AI-powered workflows",
      "Model selection & routing",
      "AI API integration",
      "Streaming responses"
    ]
  }
];

export default function ServicesSection() {
  const [openServices, setOpenServices] = useState<Record<string, boolean>>({});

  const toggleService = (id: string) => {
    setOpenServices((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="relative w-full bg-black pt-24 pb-12 md:pt-32 md:pb-16 text-white overflow-hidden z-10">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE_PREMIUM }}
          className="mb-16"
        >
          <h2
            className="font-condensed font-black tracking-tighter leading-none text-white"
            style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
          >
            SERVICES
          </h2>
          <p className="font-heading text-xs font-semibold tracking-widest text-white/50 uppercase mt-3">
            From full-stack applications to AI-powered products — here&apos;s what I build
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="flex flex-col border-t border-white/10">
          {servicesData.map((service, i) => {
            const isOpen = !!openServices[service.id];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: EASE_PREMIUM }}
                className={`border-b border-white/10 transition-colors duration-300 ${
                  isOpen ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                }`}
              >
                {/* Accordion Row Header */}
                <div
                  onClick={() => toggleService(service.id)}
                  className="py-6 md:py-8 px-4 cursor-pointer flex items-center justify-between gap-6 select-none"
                >
                  <div className="flex items-start gap-6 md:gap-12">
                    {/* Number */}
                    <span className="font-body text-sm font-medium text-white/40 mt-1">
                      {service.id}
                    </span>
                    {/* Title & Tagline */}
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="font-body text-sm text-white/60">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Plus/Close Icon */}
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-black text-white/70 hover:text-white transition-colors duration-300">
                    <motion.svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                    >
                      <path d="M6 1V11M1 6H11" />
                    </motion.svg>
                  </div>
                </div>

                {/* Accordion Row Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE_PREMIUM }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-14 md:pl-24 pr-4 flex flex-col gap-6">
                        {/* Body Intro Text */}
                        <p className="font-body text-base text-white/70 max-w-2xl">
                          {service.body}
                        </p>

                        {/* Checklist Grid */}
                        <div className="flex flex-col gap-3">
                          <h4 className="font-heading text-xs font-semibold tracking-wider text-white/40 uppercase">
                            What I handle
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 max-w-3xl">
                            {service.checklist.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3 py-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                                <span className="font-body text-sm text-white/80">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Optional Tech Stack Badges */}
                        {service.stack && (
                          <div className="mt-2 pt-4 border-t border-white/5">
                            <span className="font-body text-xs text-white/45">
                              {service.stack}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
