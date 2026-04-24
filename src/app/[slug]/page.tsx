import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import LeadMagnet from "@/components/sections/LeadMagnet";
import { notFound } from "next/navigation";

// Mock data for SEO landing pages
const seoPages: Record<string, any> = {
  "tax-advisory-nigeria": {
    title: "Expert Tax Advisory Services in Nigeria",
    description: "Navigate the complex Nigerian tax landscape with Africentric's strategic advisory and compliance services.",
    content: "We provide comprehensive tax solutions for businesses operating in Nigeria, ensuring compliance with FIRS and state-level tax authorities.",
  },
  "audit-services-abuja": {
    title: "Professional Audit Services in Abuja",
    description: "World-class auditing and assurance services for organizations in Nigeria's capital.",
    content: "Our Abuja-based team provides rigorous statutory and internal audits for corporate and public sector clients.",
  },
  "accounting-for-smes": {
    title: "Tailored Accounting Solutions for Nigerian SMEs",
    description: "Scale your business with precision. Professional bookkeeping and financial reporting for growth-focused SMEs.",
    content: "We understand the unique challenges faced by small and medium enterprises in Nigeria and offer scalable accounting solutions.",
  }
};

export default function SeoLandingPage({ params }: { params: { slug: string } }) {
  const page = seoPages[params.slug];
  
  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 bg-white">
      <Navbar />
      
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#002349] mb-8">{page.title}</h1>
          <div className="h-1 w-16 bg-[#e9c176] mb-8" />
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            {page.description}
          </p>
          <div className="prose prose-lg text-slate-600 mb-16">
            <p>{page.content}</p>
            <p>
              At Africentric Professional Services, we combine global methodologies with deep local expertise to deliver results that matter.
            </p>
          </div>
          
          <button className="bg-[#002349] text-white px-10 py-5 rounded font-bold hover:shadow-xl transition-all">
            Request a Specialized Quote
          </button>
        </div>
      </section>

      <LeadMagnet />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
