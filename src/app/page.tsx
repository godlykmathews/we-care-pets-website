import About from "@/components/About";
import BookingSection from "@/components/BookingSection";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Facilities from "@/components/Facilities";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import { ScrollReveal } from "@/components/ScrollReveal";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Facilities />
        <HowItWorks />
        <BookingSection />
        <Reviews />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
