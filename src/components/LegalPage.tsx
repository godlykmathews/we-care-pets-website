import Link from "next/link";
import { businessConfig, fullAddress } from "@/lib/business";

type LegalPageProps = {
  title: string;
  intro: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

export default function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#FFF8EF] px-5 py-16 text-[#1C1C1A]">
      <article className="mx-auto max-w-4xl rounded-[2rem] border border-[#E8DCCB] bg-white p-6 shadow-[0_24px_70px_rgba(31,61,54,0.10)] md:p-10">
        <Link
          href="/"
          className="mb-8 inline-flex text-sm font-black uppercase tracking-[0.08em] text-[#1F3D36]"
        >
          Back to We Care Pets
        </Link>
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#D9903D]">
          We Care Pets
        </p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-[#1F3D36] md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#1C1C1A]/74">{intro}</p>
        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section
              key={section.heading}
              className="paw-pattern overflow-hidden rounded-2xl p-4"
            >
              <h2 className="text-2xl font-black text-[#1F3D36]">
                {section.heading}
              </h2>
              <p className="mt-3 leading-7 text-[#1C1C1A]/74">
                {section.body}
              </p>
            </section>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-[#FFF8EF] p-5 text-sm leading-6 text-[#1C1C1A]/70">
          <p className="font-black text-[#1F3D36]">
            {businessConfig.businessName}
          </p>
          <p>{fullAddress}</p>
          <p>{businessConfig.openingHours}</p>
        </div>
      </article>
    </main>
  );
}
