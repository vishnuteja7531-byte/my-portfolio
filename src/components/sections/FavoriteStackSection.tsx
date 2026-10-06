"use client";

import type { IconType } from "react-icons";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPostgresql, 
  SiSupabase, SiOpenaigym, SiGooglegemini, SiGreensock, 
  SiJetpackcompose, SiTailwindcss, SiVercel, SiKotlin, SiFlutter 
} from "react-icons/si";

type StackItem = {
  name: string;
  category: string;
  Icon?: IconType;
  color?: string;
  badge?: string;
  needsBg?: boolean;
};

const stackItems: StackItem[] = [
  { name: "React", category: "FRONTEND LIBRARY", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", category: "REACT FRAMEWORK", Icon: SiNextdotjs, color: "#ffffff", needsBg: true },
  { name: "TypeScript", category: "LANGUAGE", Icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", category: "RUNTIME", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "PostgreSQL", category: "DATABASE", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Supabase", category: "BACKEND PLATFORM", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "OpenAI", category: "AI MODELS", Icon: SiOpenaigym, color: "#ffffff" },
  { name: "Gemini", category: "AI MODELS", Icon: SiGooglegemini, color: "#8E75B2" },
  { name: "RAG", category: "AI ARCHITECTURE", badge: "RAG" },
  { name: "AI Agents", category: "AI ARCHITECTURE", badge: "AGENTS" },
  { name: "GSAP", category: "ANIMATION", Icon: SiGreensock, color: "#88CE02" },
  { name: "Jetpack Compose", category: "ANDROID UI", Icon: SiJetpackcompose, color: "#4285F4" },
  { name: "Tailwind CSS", category: "STYLING", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Vercel", category: "DEPLOYMENT", Icon: SiVercel, color: "#ffffff", needsBg: true },
  { name: "Kotlin", category: "LANGUAGE", Icon: SiKotlin, color: "#7F52FF" },
  { name: "Flutter", category: "CROSS-PLATFORM", Icon: SiFlutter, color: "#02569B" },
];

export default function FavoriteStackSection() {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-condensed font-black tracking-tighter leading-none text-white">
            FAVOURITE STACK
          </h2>
          <p className="text-white/60 mt-4 max-w-md font-body text-sm leading-relaxed">
            The technologies I reach for most, across frontend, backend, AI, and mobile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 border-t border-white/10">
          {stackItems.map((tech) => (
            <div 
              key={tech.name} 
              className="flex items-center justify-between py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-300 px-4"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 flex items-center justify-center rounded-lg border border-white/5 ${tech.needsBg ? "bg-white/10" : "bg-[#111111]"}`}>
                  {tech.Icon ? (
                    <tech.Icon size={20} color={tech.color} />
                  ) : (
                    <span className="font-body text-[9px] font-bold text-white/70 border border-white/10 rounded px-1.5 py-0.5 bg-white/5">
                      {tech.badge}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg font-heading">{tech.name}</h3>
                  <p className="text-white/40 text-[9px] font-semibold uppercase tracking-widest font-body mt-0.5">
                    {tech.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
