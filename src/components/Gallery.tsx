"use client";

import { galleryItems } from "@/lib/siteData";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
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
        className="gallery-cycle-stage relative mx-auto mt-8 h-[300px] max-w-6xl md:h-[370px]"
        data-reveal
      >
        {galleryItems.map((item, index) => (
          <figure
            key={item.src}
            className={`gallery-cycle-card gallery-cycle-card-${index}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={520}
              height={420}
              className="gallery-cycle-image h-full w-full object-cover"
              priority={index < 5}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
