"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Image from "next/image";
import { Landmark, Building2, Rocket, HeartHandshake, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Mock for CorporateFare icon if not in lucide
const CorporateFare = Building2; 

const sectors = [
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Navigating complex regulatory frameworks and driving digital transformation for banks, insurance providers, and asset management firms. Our advisory services ensure compliance while optimizing operational efficiency and risk management in a rapidly evolving financial landscape.",
    span: "md:col-span-8",
  },
  {
    icon: Building2,
    title: "Public Sector",
    description: "Partnering with public institutions to enhance service delivery, ensure fiscal responsibility, and implement sustainable policy frameworks. We provide strategic consulting for infrastructure development.",
    span: "md:col-span-4",
  },
  {
    icon: CorporateFare,
    title: "Corporate Enterprises",
    description: "Strategic advisory for established corporations focusing on restructuring, mergers & acquisitions, and operational scaling across African markets.",
    span: "md:col-span-4",
  },
  {
    icon: Rocket,
    title: "SMEs & Startups",
    description: "Providing foundational financial structuring, tax advisory, and growth strategy for emerging businesses to secure funding and scale operations sustainably.",
    span: "md:col-span-4",
  },
  {
    icon: HeartHandshake,
    title: "NGOs",
    description: "Ensuring transparency, fund management, and compliance reporting for non-governmental organizations to maintain donor trust and maximize impact.",
    span: "md:col-span-4",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      <Navbar />
      
      {/* Industries Hero */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="w-16 h-1 bg-[#e9c176] mb-8" />
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#002349]">Industries We Serve</h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
              Africentric Professional Services delivers tailored expertise across key sectors. We understand the unique regulatory landscapes, operational challenges, and growth opportunities within each industry.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-lg overflow-hidden border border-gray-100 shadow-xl"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWgvPPy0pe1lVOZkYHgJ2zglNGQotM43Ou7qjuYoIWse8VycLgkTFq8GJHOhMNGgHnqY9fCBuEgbb0hNAoshnQYmqjk0k01X1uYqAOMWrTOKGrsSyLTRQcMJCjFYqr0Av4hrN7l8J8m_3NbjyJIRbyrCLx4WQnbfk9EoN-lcqC36NLO_cATdJIFaU3ENX4nLxQYF6um48rkFNUrGYZLSoZ2Qvurb_nsPLmZ_WmEoS54OJNadG93NY0LqOTqGfwjQ2PJJNM1bYmrscY"
              alt="Corporate Excellence"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {sectors.map((sector, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${sector.span} bg-[#fbf9f8] border border-gray-100 p-10 rounded-xl hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col justify-between`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#e9c176] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div>
                <div className="w-14 h-14 bg-white shadow-sm flex items-center justify-center rounded-lg mb-8 text-[#002349]">
                  <sector.icon size={28} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#002349] mb-6">{sector.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {sector.description}
                </p>
              </div>
              <button className="flex items-center gap-2 text-[#002349] font-bold group-hover:text-[#775a19] transition-colors">
                Explore Sector Insights <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="bg-[#002349] rounded-2xl p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Require Specialized Sector Advice?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Connect with our industry-specific partners to discuss how our tailored methodologies can address your organizational challenges.
          </p>
          <button className="bg-[#775a19] text-white px-10 py-5 rounded font-bold hover:bg-transparent hover:border-2 border-[#775a19] transition-all">
            Schedule an Industry Briefing
          </button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
