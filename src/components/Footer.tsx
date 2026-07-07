import { business, navItems } from "@/lib/siteData";
import { businessConfig } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-[#1F3D36] px-4 pb-24 pt-12 text-white md:px-5 md:py-14">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
        <div>
          <h2 className="text-3xl font-black">We Care Pets</h2>
          <p className="mt-4 max-w-md leading-7 text-white/72">
            {businessConfig.tagline} Safe dog boarding, day care, and flexible
            short-term and long-term stays in Eraviperoor, Kerala.
          </p>
        </div>
        <div>
          <h3 className="font-black text-[#F5B35F]">Quick Links</h3>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-white/72 hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black text-[#F5B35F]">Contact</h3>
          <div className="mt-4 space-y-2 text-white/72">
            <p>{business.address}</p>
            <p>Open 24 hours</p>
            <p>Phone: {business.phone || "Coming soon"}</p>
            <p>Email: {business.email || "Coming soon"}</p>
            <p>WhatsApp: {business.whatsappDisplayNumber}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap gap-4 text-sm text-white/72">
        <a href="/privacy-policy" className="hover:text-white">
          Privacy Policy
        </a>
        <a href="/terms-and-conditions" className="hover:text-white">
          Terms and Conditions
        </a>
        <a href="/boarding-policy" className="hover:text-white">
          Boarding Policy
        </a>
        <a href="/cancellation-policy" className="hover:text-white">
          Cancellation Policy
        </a>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/12 pt-6 text-sm text-white/50">
        (c) 2026 We Care Pets. All rights reserved.
      </div>
    </footer>
  );
}
