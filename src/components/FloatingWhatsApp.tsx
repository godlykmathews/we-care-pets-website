import { businessConfig } from "@/lib/business";

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
      className="fixed bottom-4 left-4 right-4 z-50 flex h-14 items-center justify-center rounded-full bg-[#25D366] text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_18px_36px_rgba(37,211,102,0.28)] transition hover:-translate-y-1 md:left-auto md:right-5 md:h-16 md:w-16 md:text-lg md:tracking-normal"
    >
      <span className="md:hidden">Book on WhatsApp</span>
      <span className="hidden md:inline">WA</span>
    </a>
  );
}
