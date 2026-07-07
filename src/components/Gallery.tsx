"use client";

import { galleryItems } from "@/lib/siteData";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const marqueeItems = [...galleryItems, ...galleryItems];

  return (
    <section
      id="gallery"
      className="overflow-hidden border-t border-[#E8CFC5] bg-[#FFF1F0] px-4 py-14 shadow-[inset_0_18px_34px_rgba(217,144,61,0.07)] md:px-5 md:py-24"
    >
      <SectionHeading
        eyebrow="Gallery"
        title="Happy guests at We Care Pets"
        text="A glimpse of the dogs, cages, care spaces, and happy stays at We Care Pets."
      />
      <div
        className="gallery-curve-stage mx-auto mt-8 max-w-6xl"
        data-reveal
      >
        <div className="gallery-curve-track">
          {marqueeItems.map((item, index) => (
            <figure
              key={`${item.src}-${index}`}
              className={`gallery-curve-card gallery-curve-card-${index % 5}`}
            >
              <Image
                src={item.src}
                alt={index < galleryItems.length ? item.alt : ""}
                aria-hidden={index >= galleryItems.length}
                width={520}
                height={420}
                className="gallery-curve-image h-full w-full object-cover"
                priority={index < 5}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
