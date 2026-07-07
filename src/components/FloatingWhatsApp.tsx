import { businessConfig } from "@/lib/business";
import Image from "next/image";

const quickEnquiryMessage = encodeURIComponent(
  "Hi We Care Pets, I have a quick enquiry about dog boarding. Please share availability and details.",
);

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${quickEnquiryMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Send a quick WhatsApp enquiry"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white p-2.5 shadow-[0_16px_34px_rgba(37,211,102,0.28),0_0_0_8px_rgba(37,211,102,0.08)] ring-1 ring-[#25D366]/30 transition hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(37,211,102,0.34),0_0_0_10px_rgba(217,144,61,0.12)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#D9903D]/35 md:bottom-6 md:right-6 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/20 opacity-0 transition group-hover:opacity-100" />
      <Image
        src="/images/we-care-pets/whatsapp-icon.png"
        alt=""
        aria-hidden
        width={256}
        height={256}
        className="relative h-full w-full"
      />
      <span className="absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#D9903D] text-[10px] font-black text-white shadow-[0_8px_18px_rgba(217,144,61,0.24)]">
        +
      </span>
    </a>
  );
}
