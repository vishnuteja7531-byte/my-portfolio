"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What do you build?",
    answer: "I design and engineer digital products across full-stack development, AI systems, SaaS platforms, and interactive web experiences — from the interface down to the infrastructure."
  },
  {
    question: "What technologies do you work with?",
    answer: "React, Next.js, TypeScript, Node.js, PostgreSQL, and Supabase for full-stack work; OpenAI, Gemini, and other LLM platforms for AI systems; and Kotlin, Jetpack Compose, and Flutter for mobile."
  },
  {
    question: "Do you work on AI and agentic products?",
    answer: "Yes. I build with LLM applications, RAG pipelines, AI agents, tool calling, multi-step workflows, and AI-powered product experiences — not just chatbot wrappers."
  },
  {
    question: "Can you work across design and engineering?",
    answer: "Yes. I work across interface design, interaction systems, frontend architecture, APIs, databases, and AI infrastructure — the whole product, not just one layer of it."
  },
  {
    question: "Are you available for projects?",
    answer: "I'm open to select projects, collaborations, and interesting product opportunities. Reach out and tell me what you're building."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-black text-white pt-24 pb-12 md:pt-32 md:pb-16 border-t border-white/10 z-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-condensed font-black tracking-tighter leading-none text-white uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-white/50 mt-4 max-w-md font-body text-sm leading-relaxed">
            Answers to the questions I get most often.
          </p>
        </div>

        {/* Accordion Rows */}
        <div className="border-t border-white/10">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-white/10 transition-colors duration-300"
                style={{ backgroundColor: isOpen ? "rgba(255, 255, 255, 0.01)" : "transparent" }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between py-7 text-left group"
                >
                  <span className="font-heading text-lg md:text-xl font-bold text-white/80 group-hover:text-white transition-colors duration-300">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                    className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 text-white/60 group-hover:text-white group-hover:border-white/20 transition-all duration-300 ml-4 flex-shrink-0"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      <line x1="5" y1="1" x2="5" y2="9" />
                      <line x1="1" y1="5" x2="9" y2="5" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE_PREMIUM }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pr-12">
                        <p className="font-body text-sm md:text-base text-white/50 leading-relaxed max-w-3xl">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
