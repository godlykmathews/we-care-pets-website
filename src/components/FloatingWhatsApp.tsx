import { businessConfig } from "@/lib/business";
import Image from "next/image";

export default function FloatingWhatsApp() {
  if (!businessConfig.whatsappNumber) {
    return (
      <a
        href="#contact"
        aria-label="WhatsApp number coming soon"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#A9B8AD] text-xs font-black text-white shadow-[0_18px_36px_rgba(31,61,54,0.18)] md:h-16 md:w-16"
      >
        Soon
      </a>
    );
  }

  const href = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi We Care Pets, I would like to ask about dog boarding.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with We Care Pets on WhatsApp"
      className="fixed bottom-4 left-4 right-4 z-50 flex h-14 items-center justify-center gap-3 rounded-full bg-white px-4 text-sm font-black uppercase tracking-[0.08em] text-[#1F3D36] shadow-[0_18px_36px_rgba(37,211,102,0.28)] ring-1 ring-[#25D366]/20 transition hover:-translate-y-1 md:left-auto md:right-5 md:h-16 md:w-16 md:p-1 md:tracking-normal"
    >
      <Image
        src="/images/we-care-pets/whatsapp-icon.png"
        alt=""
        aria-hidden
        width={256}
        height={256}
        className="h-9 w-9 shrink-0 md:h-full md:w-full"
      />
      <span className="md:hidden">Book on WhatsApp</span>
    </a>
  );
}
