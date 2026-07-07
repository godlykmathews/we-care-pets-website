import { careFeatures, facilities } from "@/lib/siteData";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function Facilities() {
  return (
    <section id="facilities" className="bg-white px-4 py-14 md:px-5 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Facilities"
          title="Indoor and outdoor cage facilities for safe stays."
          text="Premium cage facilities and attentive routines support day care, short-term boarding, and long-term boarding for dogs and puppies."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {facilities.map((facility, index) => (
            <article
              key={facility.title}
              className="overflow-hidden rounded-[1.4rem] border border-[#E8DCCB] bg-[#FFF8EF] shadow-[0_14px_34px_rgba(31,61,54,0.07)]"
              data-reveal
            >
              <Image
                src={facility.image}
                alt={facility.title}
                width={1000}
                height={720}
                className="h-44 w-full object-cover md:h-52"
              />
              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D9903D]">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-black text-[#1F3D36]">
                  {facility.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#1C1C1A]/72">
                  {facility.text}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2" data-reveal>
          {careFeatures.slice(0, 6).map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-[#E8DCCB] bg-white px-4 py-2 text-xs font-black text-[#1F3D36]"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
