import BookingForm from "./BookingForm";
import { business } from "@/lib/siteData";

export default function BookingSection() {
  return (
    <section id="booking" className="bg-white px-4 py-14 md:px-5 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-start">
        <div
          className="rounded-[1.4rem] border border-[#E8DCCB] bg-[#FFF8EF] p-5 shadow-[0_18px_42px_rgba(31,61,54,0.08)] md:p-8"
          data-reveal
        >
          <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#D9903D]">
            Boarding Enquiry
          </p>
          <h2 className="text-2xl font-black leading-tight text-[#1F3D36] md:text-4xl">
            Check availability in under a minute.
          </h2>
          <p className="mb-6 mt-3 text-base leading-7 text-[#1C1C1A]/72">
            Submit the details below and the form will open WhatsApp with a
            clean, prefilled enquiry message for We Care Pets.
          </p>
          <BookingForm />
        </div>
        <aside className="grid gap-4" data-reveal>
          {[
            ["Open 24 hours", business.hours],
            ["WhatsApp", business.whatsappDisplayNumber],
            ["Direct confirmation", "Availability and pricing are confirmed by We Care Pets."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-[1.25rem] border border-[#E8DCCB] bg-white p-5 shadow-[0_12px_30px_rgba(31,61,54,0.06)]"
            >
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D9903D]">
                {title}
              </p>
              <p className="mt-2 text-base font-bold leading-6 text-[#1F3D36]">
                {text}
              </p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
