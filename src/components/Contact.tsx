import { business } from "@/lib/siteData";
import { businessConfig, fullAddress } from "@/lib/business";
import SectionHeading from "./SectionHeading";

const mapSearchQuery = [
  businessConfig.businessName,
  businessConfig.address.line1,
  businessConfig.address.line2,
  businessConfig.address.locality,
  businessConfig.address.region,
  businessConfig.address.postalCode,
].join(", ");

const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  mapSearchQuery,
)}&z=17&output=embed`;

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-4 py-14 md:px-5 md:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-6 lg:grid-cols-[0.9fr_1fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="We Care Pets in Eraviperoor, Kerala."
            text="Visit details, phone, WhatsApp, email, and Google Maps are ready for direct enquiries."
          />
          <div className="mt-6 grid gap-3" data-reveal>
            <ContactCard label="Business" value={business.name} />
            <ContactCard label="Address" value={fullAddress} />
            <ContactCard label="Hours" value={business.hours} />
            <ContactCard label="Phone" value={business.phone || "Coming soon"} />
            <ContactCard
              label="WhatsApp"
              value={business.whatsappDisplayNumber || "Coming soon"}
            />
            <ContactCard label="Email" value={business.email || "Coming soon"} />
          </div>
        </div>
        <div
          className="rounded-[1.4rem] border border-[#E8DCCB] bg-[#FFF8EF] p-3 shadow-[0_16px_38px_rgba(31,61,54,0.08)]"
          data-reveal
        >
          <div className="overflow-hidden rounded-[1.1rem] border border-[#E8DCCB] bg-white">
            <iframe
              src={mapEmbedUrl}
              title="Google Map showing We Care Pets in Eraviperoor, Kerala"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0 md:h-[360px]"
              allowFullScreen
            />
            <div className="border-t border-[#E8DCCB] p-4 md:p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D9903D]">
                Location
              </p>
              <h3 className="mt-1 text-xl font-black text-[#1F3D36]">
                We Care Pets
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#1C1C1A]/70">
                {fullAddress}
              </p>
            </div>
            <div className="flex flex-col gap-3 border-t border-[#E8DCCB] p-4 sm:flex-row md:p-5">
              {businessConfig.googleMapsUrl ? (
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full bg-[#1F3D36] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white"
                >
                  Get Directions
                </a>
              ) : (
                <span className="inline-flex justify-center rounded-full bg-[#1F3D36]/65 px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white">
                  Get Directions
                </span>
              )}
              {businessConfig.whatsappNumber ? (
                <a
                  href={`https://wa.me/${businessConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white"
                >
                  Contact on WhatsApp
                </a>
              ) : (
                <span className="inline-flex justify-center rounded-full bg-[#A9B8AD] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white">
                  WhatsApp number coming soon
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <p className="text-sm font-black uppercase tracking-[0.14em] text-[#D9903D]">
        {label}
      </p>
      <p className="mt-2 text-base font-black leading-6 text-[#1F3D36] md:text-lg">
        {value}
      </p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="rounded-2xl border border-[#E8DCCB] bg-[#FFF8EF] p-4 transition hover:bg-white"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-[#E8DCCB] bg-[#FFF8EF] p-4">
      {content}
    </div>
  );
}
