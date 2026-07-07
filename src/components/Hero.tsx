import { business } from "@/lib/siteData";
import Image from "next/image";

const heroCards = [
  {
    src: "/images/gallery-play.svg",
    alt: "Happy dog guest at We Care Pets",
    label: "Happy Stays",
  },
  {
    src: "/images/gallery-yard.svg",
    alt: "Outdoor care space at We Care Pets",
    label: "Outdoor Care",
  },
  {
    src: "/images/gallery-care.svg",
    alt: "Dog care notes and daily attention at We Care Pets",
    label: "Personal Care",
  },
];

export default function Hero() {
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
        <div className="relative h-[330px] md:h-[470px]" data-reveal>
          <div className="hero-poster-stage relative h-full w-full">
            {heroCards.map((card, index) => (
              <div
                key={card.src}
                className={`hero-poster-card hero-poster-${index}`}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={780}
                  height={780}
                  priority={index === 0}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D36]/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#1F3D36] shadow-sm">
                  {card.label}
                </p>
              </div>
            ))}
          </div>
          <div className="hero-badge-float absolute left-1 top-7 rounded-2xl border border-[#E8DCCB] bg-white px-4 py-3 shadow-[0_14px_30px_rgba(31,61,54,0.10)] md:left-8 md:top-14">
            <p className="text-sm font-black text-[#1F3D36]">Open 24 hours</p>
            <p className="mt-1 text-sm text-[#1C1C1A]/62">Flexible stays</p>
          </div>
          <div className="hero-badge-float-alt absolute bottom-9 right-0 rounded-2xl bg-[#1F3D36] px-4 py-3 text-white shadow-[0_16px_35px_rgba(31,61,54,0.22)] md:bottom-12 md:right-3 md:px-5 md:py-4">
            <p className="text-sm font-black">Indoor and outdoor</p>
            <p className="mt-1 text-sm text-white/68">Cage facilities</p>
          </div>
        </div>
      </div>
    </section>
  );
}
