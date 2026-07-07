import { trustItems } from "@/lib/siteData";

export default function TrustStrip() {
  const items = [...trustItems, ...trustItems];

  return (
    <section className="paw-pattern overflow-hidden border-y border-[#D9903D]/20 bg-[#1F3D36] py-4 text-[#F5B35F] md:py-5">
      <div className="trust-marquee flex w-max gap-8">
        {items.map((item, index) => (
          <div
            className="flex shrink-0 items-center gap-3 text-sm font-black uppercase tracking-[0.12em] md:text-base"
            key={`${item}-${index}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#F5B35F]" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
