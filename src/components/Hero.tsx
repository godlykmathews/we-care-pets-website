"use client";

import { business } from "@/lib/siteData";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "/images/we-care-pets/outdoor-cage-facility.webp",
    alt: "Outdoor cage facility at We Care Pets",
  },
  {
    src: "/images/we-care-pets/labrador-personal-care.webp",
    alt: "Labrador receiving personal care at We Care Pets",
  },
  {
    src: "/images/we-care-pets/husky-indoor-boarding-cage.webp",
    alt: "Husky guest in an indoor boarding cage at We Care Pets",
  },
  {
    src: "/images/we-care-pets/beagle-cuddle-care.webp",
    alt: "Beagle guest receiving affectionate care at We Care Pets",
  },
  {
    src: "/images/we-care-pets/golden-retriever-indoor-kennel.webp",
    alt: "Golden retriever in a clean indoor kennel at We Care Pets",
  },
];

const rotationDelay = 3200;
const transitionDuration = 1050;

export default function Hero() {
  const [slotImages, setSlotImages] = useState([0, 1]);
  const [frontSlot, setFrontSlot] = useState(0);
  const [isSwapping, setIsSwapping] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const backSlot = frontSlot === 0 ? 1 : 0;

  useEffect(() => {
    if (isPaused || isSwapping) {
      return;
    }

    const timer = setTimeout(() => {
      setIsSwapping(true);
    }, rotationDelay);

    return () => clearTimeout(timer);
  }, [frontSlot, isPaused, isSwapping]);

  useEffect(() => {
    if (!isSwapping) {
      return;
    }

    const timer = setTimeout(() => {
      setSlotImages((current) => {
        const updated = [...current];
        updated[frontSlot] = (current[backSlot] + 1) % heroImages.length;
        return updated;
      });
      setFrontSlot(backSlot);
      setIsSwapping(false);
    }, transitionDuration);

    return () => clearTimeout(timer);
  }, [backSlot, frontSlot, isSwapping]);

  const preloadImage =
    heroImages[(slotImages[backSlot] + 1) % heroImages.length];

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-4 pb-12 pt-28 md:px-5 md:pb-20 md:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(217,144,61,0.14),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(107,143,113,0.18),transparent_30%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.95fr_0.9fr]">
        <div data-reveal>
          <p className="mb-4 inline-flex rounded-full border border-[#E8DCCB] bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.08em] text-[#1F3D36] shadow-sm md:text-sm">
            Premium dog boarding in {business.location}
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.04] text-[#1F3D36] md:text-6xl">
            Dog Boarding at We Care Pets in Eraviperoor, Kerala
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#1C1C1A]/74 md:text-lg md:leading-8">
            Safe dog boarding, day care, and short-term and long-term pet stays
            with indoor and outdoor cage facilities, daily care, and over 25
            years of hands-on pet care experience.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#booking"
              className="rounded-full bg-[#1F3D36] px-6 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_16px_30px_rgba(31,61,54,0.20)] transition hover:-translate-y-0.5"
            >
              Book on WhatsApp
            </a>
            <a
              href="#facilities"
              className="rounded-full border border-[#1F3D36] bg-white/45 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-[#1F3D36] transition hover:bg-white"
            >
              View Facilities
            </a>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[470px]" data-reveal>
          <div
            className={`hero-depth-stage relative h-full w-full ${
              isSwapping ? "is-swapping" : ""
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[0, 1].map((slot) => {
              const image = heroImages[slotImages[slot]];
              const isFront = slot === frontSlot;
              const role = isSwapping
                ? isFront
                  ? "outgoing"
                  : "incoming"
                : isFront
                  ? "front"
                  : "back";
              const isPrimaryImage = role === "front" || role === "incoming";

              return (
                <div
                  key={slot}
                  className={`hero-depth-card hero-depth-card-${role}`}
                >
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={isPrimaryImage ? image.alt : ""}
                    aria-hidden={!isPrimaryImage}
                    width={1200}
                    height={900}
                    priority={slot === 0}
                    className="hero-depth-image h-full w-full object-cover"
                  />
                </div>
              );
            })}
            <Image
              src={preloadImage.src}
              alt=""
              aria-hidden
              width={32}
              height={32}
              className="pointer-events-none absolute h-px w-px opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
