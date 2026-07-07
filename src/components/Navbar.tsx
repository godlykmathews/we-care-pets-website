import { business, navItems } from "@/lib/siteData";
import { businessConfig } from "@/lib/business";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="hidden border-b border-white/10 bg-[#1F3D36] px-5 py-2 text-sm text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p>Open 24 hours in Eraviperoor, Kerala</p>
          <div className="flex items-center gap-6">
            <span>Phone: {business.phone || "Coming soon"}</span>
            <a href="#booking" className="font-bold text-[#F5B35F]">
              {businessConfig.whatsappNumber
                ? "WhatsApp enquiry"
                : "WhatsApp coming soon"}
            </a>
          </div>
        </div>
      </div>
      <nav className="border-b border-[#E8DCCB]/80 bg-[#FFF8EF]/90 px-4 py-3 shadow-sm backdrop-blur-xl md:px-5 md:py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
          <a href="#home" className="shrink-0 text-lg font-black text-[#1F3D36] md:text-xl">
            We Care Pets
          </a>
          <div className="hidden items-center gap-6 text-sm font-bold text-[#1C1C1A]/72 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[#1F3D36]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden text-sm font-bold text-[#1F3D36] sm:inline"
            >
              Contact
            </a>
            <a
              href="#booking"
              className="rounded-full bg-[#D9903D] px-4 py-3 text-xs font-black uppercase tracking-[0.08em] text-white shadow-[0_12px_24px_rgba(217,144,61,0.22)] transition hover:-translate-y-0.5 hover:bg-[#c97f2d] md:px-5 md:text-sm"
            >
              Book
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
