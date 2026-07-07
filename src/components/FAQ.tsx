import { faqs } from "@/lib/siteData";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="paw-pattern overflow-hidden bg-[#F8EFE3] px-4 py-14 md:px-5 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers before you book."
          text="The final booking conversation happens on WhatsApp, but these cover the most common boarding questions."
        />
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-[#E8DCCB] bg-white p-5 shadow-[0_10px_28px_rgba(31,61,54,0.06)]"
              data-reveal
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-black text-[#1F3D36]">
                {faq.question}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF8EF] text-[#D9903D] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-7 text-[#1C1C1A]/72">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
