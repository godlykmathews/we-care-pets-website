import { galleryItems } from "@/lib/siteData";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="paw-pattern overflow-hidden border-t border-[#E8DCCB] bg-[#FFF8EF] px-4 py-14 md:px-5 md:py-24"
    >
      <SectionHeading
        eyebrow="Gallery"
        title="Happy guests at We Care Pets"
        text="A glimpse of the dogs, cages, care spaces, and happy stays at We Care Pets."
      />

      <div
        className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3"
        data-reveal
      >
        {galleryItems.map((item, index) => (
          <figure
            key={item.src}
            className="gallery-motion-tile group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_14px_30px_rgba(31,61,54,0.08)] transition duration-300 active:scale-[0.985]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={900}
              height={720}
              sizes="(max-width: 768px) 50vw, 33vw"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
              priority={index < 3}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1F3D36]/20 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
          </figure>
        ))}
      </div>
    </section>
  );
}
