"use client";

import { galleryItems } from "@/lib/siteData";
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((index) => (index + 1) % galleryItems.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const getPosterPosition = (index: number) => {
    const total = galleryItems.length;
    const previousIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;

    if (index === activeIndex) {
      return "active";
    }

    if (index === previousIndex) {
      return "previous";
    }

    if (index === nextIndex) {
      return "next";
    }

    return "hidden";
  };

  return (
    <section id="gallery" className="overflow-hidden px-4 py-14 md:px-5 md:py-24">
      <SectionHeading
        eyebrow="Gallery"
        title="Happy guests at We Care Pets"
        text="A glimpse of the dogs, cages, care spaces, and happy stays at We Care Pets."
      />
      <div
        className="gallery-poster-stage relative mx-auto mt-8 h-[320px] max-w-5xl md:h-[390px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        data-reveal
      >
        {galleryItems.map((item, index) => {
          const position = getPosterPosition(index);
          const isActive = position === "active";

          return (
            <figure
              key={item.src}
              className={`gallery-poster-card gallery-poster-${position}`}
            >
              <Image
                src={item.src}
                alt={isActive ? item.alt : ""}
                aria-hidden={!isActive}
                width={780}
                height={780}
                className="gallery-poster-image h-full w-full object-cover"
                priority={index === 0}
              />
            </figure>
          );
        })}
      </div>
    </section>
  );
}
