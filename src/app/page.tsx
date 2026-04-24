import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import IndustriesPreview from "@/components/sections/IndustriesPreview";
import Testimonials from "@/components/sections/Testimonials";
import LeadMagnet from "@/components/sections/LeadMagnet";
import ContactPreview from "@/components/sections/ContactPreview";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <IndustriesPreview />
      <Testimonials />
      <LeadMagnet />
      <ContactPreview />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
