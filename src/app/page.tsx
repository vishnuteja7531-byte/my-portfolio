import Hero from "@/components/sections/Hero";
import ViperSlider from "@/components/ViperSlider";
import IntroSection from "@/components/sections/IntroSection";
import WorksSection from "@/components/sections/WorksSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WorkMethodSection from "@/components/sections/WorkMethodSection";
import SurfaceBreakSection from "@/components/sections/SurfaceBreakSection";
import MotivationSection from "@/components/sections/MotivationSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FavoriteStackSection from "@/components/sections/FavoriteStackSection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";
import LimeViperSplash from "@/components/LimeViperSplash";

export default function Home() {
  return (
    <main className="w-full bg-black overflow-x-hidden select-none">
      <LimeViperSplash>
        <ViperSlider heroComponent={<Hero />}>
          <IntroSection />
          <WorksSection />
          <AboutSection />
          <ProcessSection />
          <WorkMethodSection />
          <SurfaceBreakSection image="/images/surface.png" />
          <MotivationSection />
          <ServicesSection />
          <SurfaceBreakSection image="/images/surface-2.png" />
          <FavoriteStackSection />
          <FAQSection />
          <FooterSection />
        </ViperSlider>
      </LimeViperSplash>
    </main>
  );
}

