"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export default function FooterSection() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-black text-white pt-32 pb-8 overflow-hidden z-20">
      
      {/* Top Block: CTA Content & Portrait Image */}
      <div className="max-w-6xl mx-auto px-6 mb-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading & Contact Action (Grid Span 7) */}
        <div className="md:col-span-7 flex flex-col items-start gap-8">
          <h2 
            className="font-condensed font-black tracking-tighter leading-[0.9] uppercase text-white"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            LET&apos;S BUILD<br />
            SOMETHING<br />
            TOGETHER
          </h2>
          
          <p className="font-body text-sm md:text-base text-white/50 italic max-w-md leading-relaxed">
            &ldquo;Collaborate with me to build intelligent products that actually ship.&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto mt-4">
            <a
              href="mailto:contact@vishnuteja.dev"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white text-black font-body font-semibold text-sm px-8 py-4 transition-all duration-300 hover:bg-neutral-100 hover:scale-[1.03]"
            >
              Contact Now
            </a>

            {/* Social Links Row */}
            <div className="flex items-center gap-8 pl-2 sm:pl-0">
              <a 
                href="https://www.instagram.com/golden.afterthought" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-body text-xs font-semibold tracking-wider text-white/40 hover:text-white uppercase transition-colors duration-300"
              >
                Instagram ↗
              </a>
              <a 
                href="https://github.com/vishnuteja7531-byte" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-body text-xs font-semibold tracking-wider text-white/40 hover:text-white uppercase transition-colors duration-300"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Portrait image (Grid Span 5) */}
        <div className="md:col-span-5 relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl">
          <Image
            src="/images/footer-image.png"
            alt="Vishnu Teja"
            fill
            sizes="(max-w-768px) 100vw, 400px"
            className="object-cover"
            priority
          />
        </div>

      </div>

      {/* Giant Typography Wordmark: Breaks Container Constraints to Edge-to-Edge */}
      <div className="w-full overflow-hidden select-none border-t border-white/5 pt-12 pb-4">
        <h1 
          className="w-full text-center font-condensed font-black leading-none text-white tracking-tighter uppercase whitespace-nowrap"
          style={{ fontSize: "clamp(6rem, 16vw, 15rem)" }}
        >
          VISHNU TEJA
        </h1>
      </div>

      {/* Bottom Bar: Copyright & Location metadata */}
      <div className="max-w-6xl mx-auto px-6 pt-8 mt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-white/40">
        <div>
          ©2026 Vishnu Teja
        </div>
        <div className="flex items-center gap-6">
          <span>India</span>
          <span className="text-white/20">•</span>
          <a 
            href="#" 
            onClick={scrollToTop} 
            className="hover:text-white transition-colors duration-300 flex items-center gap-1.5"
          >
            Back to Top
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" />
            </svg>
          </a>
        </div>
      </div>

    </footer>
  );
}
