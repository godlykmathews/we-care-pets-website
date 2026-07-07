import { steps } from "@/lib/siteData";
import SectionHeading from "./SectionHeading";

export default function HowItWorks() {
  return (
    <section className="bg-[#F8EFE3] px-4 py-14 md:px-5 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple direct booking flow."
          text="The form gathers the important care details. Final pricing, availability, and booking confirmation happen through direct communication with We Care Pets."
        />
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-[#E8DCCB] bg-white p-5 shadow-[0_12px_30px_rgba(31,61,54,0.06)]"
              data-reveal
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D9903D] text-base font-black text-white">
                {index + 1}
              </div>
              <div>
                <h3 className="mt-4 text-xl font-black text-[#1F3D36]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#1C1C1A]/72">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
