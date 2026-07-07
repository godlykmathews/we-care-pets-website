"use client";

import { galleryItems } from "@/lib/siteData";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const items = [...galleryItems, ...galleryItems];
  const uniqueCount = galleryItems.length;
  const stripRef = useRef<HTMLDivElement>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((index) => index + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const strip = stripRef.current;
    const activeCard = strip?.querySelector<HTMLElement>(
      `[data-gallery-index="${activeIndex}"]`,
    );

    if (!strip || !activeCard) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    strip.scrollTo({
      left: activeCard.offsetLeft,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }

    if (activeIndex === uniqueCount) {
      resetTimerRef.current = setTimeout(() => {
        strip.scrollTo({ left: 0, behavior: "auto" });
        setActiveIndex(0);
      }, 720);
    }

    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, [activeIndex, uniqueCount]);

  return (
    <section id="gallery" className="overflow-hidden px-4 py-14 md:px-5 md:py-24">
      <SectionHeading
        eyebrow="Gallery"
        title="Happy guests at We Care Pets"
        text="A glimpse of the dogs, cages, care spaces, and happy stays at We Care Pets."
      />
      <div
        ref={stripRef}
        className="cinematic-strip mt-8 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="cinematic-track flex gap-4">
          {items.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              data-gallery-card
              data-gallery-index={index}
              className={`cinematic-card h-64 w-[78vw] shrink-0 overflow-hidden rounded-[1.25rem] border border-[#E8DCCB] bg-white shadow-[0_14px_34px_rgba(31,61,54,0.08)] sm:w-[360px] md:h-80 md:w-[460px] ${
                activeIndex % uniqueCount === index % uniqueCount
                  ? "is-active"
                  : ""
              }`}
            >
              <Image
                src={item.src}
                alt={index >= uniqueCount ? "" : item.alt}
                aria-hidden={index >= uniqueCount}
                width={780}
                height={780}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
