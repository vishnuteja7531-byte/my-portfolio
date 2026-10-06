"use client";

import Image from "next/image";

interface SurfaceBreakSectionProps {
  image: string;
}

export default function SurfaceBreakSection({ image }: SurfaceBreakSectionProps) {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] bg-black overflow-hidden z-20">
      {/* Top soft gradient overlay to blend into the preceding section */}
      <div className="absolute top-0 left-0 right-0 h-[10vh] bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      
      {/* Bottom soft gradient overlay to blend into the succeeding section */}
      <div className="absolute bottom-0 left-0 right-0 h-[10vh] bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* Full-bleed background image */}
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt="Surface break texture"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
