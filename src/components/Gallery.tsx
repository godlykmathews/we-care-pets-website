import { galleryItems } from "@/lib/siteData";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const items = [...galleryItems, ...galleryItems];

  return (
    <section id="gallery" className="overflow-hidden px-4 py-14 md:px-5 md:py-24">
      <SectionHeading
        eyebrow="Gallery"
        title="Happy guests at We Care Pets"
        text="A glimpse of the dogs, cages, care spaces, and happy stays at We Care Pets."
      />
      <div className="cinematic-strip mt-8 overflow-hidden">
        <div className="cinematic-track flex gap-4">
          {items.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="h-64 w-[78vw] shrink-0 overflow-hidden rounded-[1.25rem] border border-[#E8DCCB] bg-white shadow-[0_14px_34px_rgba(31,61,54,0.08)] sm:w-[360px] md:h-80 md:w-[460px]"
            >
              <Image
                src={item.src}
                alt={item.alt}
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
