"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Image from "next/image";
import { Calculator, ShieldCheck, BarChart4, Lightbulb, Check } from "lucide-react";
import { motion } from "framer-motion";

const serviceDetails = [
  {
    icon: Calculator,
    title: "Accounting & Financial Reporting",
    description: "We provide rigorous financial reporting frameworks, ensuring your statements reflect economic reality while complying with local and international standards. Our services enhance transparency and stakeholder confidence.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1WZqeDrq22HGJTBZJxuoiaUWAWFOGAp4BaQaBgQkxo1ShAWDzWi_xSpWCZQsiim-FwcEU-oITO5fulELF__Ob5fha17xqdvWrjpn2rtTfF_8k0gjL1dQ43PyBmRhSUu2rmkllGPrQFlOG47oGoO_uK8d5RdaZ9s-z3Vs10sMtDHQA1nD_DwQOcgi3sVTHg_O8xccAGF5ZoChbIGD73hMNqo9b_ORJqX1FXob__hvgIALUUlFMccoexE07ATnNLz6amE6S4monPNZ6",
    features: ["IFRS Compliance", "Management Accounting", "Financial Consolidations"],
  },
  {
    icon: ShieldCheck,
    title: "Tax Advisory & Compliance",
    description: "Navigating complex tax landscapes requires strategic foresight. We optimize your tax position while ensuring absolute compliance, minimizing risk, and aligning tax strategy with overarching business objectives.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7KFO7dRsamoCn7y8Yqo5Yb4NoHcMOW1vxflxfOLI94R4SqUmoUMmguEUzyKmvXH-ulLJVKCch30YTB7sFSdPJcSOGbKowgw4D83VETT4YNa-kQquyolR2CSdaMH0HcDSv9VuZLTLwmHSym1PlwpYs-VCRGgQ5r947BIIuCeTIjYBTFMXpKkrbQ7KLy_26UTqVUkDnQtOPwMvXKkV8VFHSuhkWmhF_HeZ6BhZLWuQmy-B-3mGpiV8S1QoRLCq-BBd3VSCOHLnw5Bu",
    features: ["Corporate Tax Planning", "Cross-Border Structuring", "Regulatory Compliance"],
  },
  {
    icon: BarChart4,
    title: "Audit & Assurance",
    description: "Our independent audit services deliver robust assurance on your financial information. We deploy advanced methodologies to identify operational vulnerabilities and strengthen internal control environments.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGbAirPDycBC0zHrCmSq316uK1pFbv9P8dT291uAYnA-KgAW-opqVXxPQHyAbqQ55CA60QoG9TpdJNRnHH1VnniyfjcJzN7ixb4qPISsWRUmdL5oUFIztvOTi867h7UxxuaCH27tv7TacJBtV58D_HDO_D_rw1caxPXQcRRY9y8jHh6FKVvU1eUFP9A7b3oKPMvLA3FBhDLfOSCknLsboT1ha_Al5Btt_3IBqNZvwJIwv5KZ8hVy3Kl_qBRsnn9AeHv5QGpE9PFjY7",
    features: ["Statutory Audits", "Internal Control Reviews", "Risk Assessment"],
  },
  {
    icon: Lightbulb,
    title: "Business Advisory",
    description: "We translate market complexity into actionable strategy. Our advisory practice supports structural transformation, M&A integrations, and operational restructuring to drive sustainable enterprise value.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP8RsZ0lM6QZ7uDUXNq6DChMQS3mi3hR74TXE2ZpgPKYMuUPwyMo7WSR6RagvRv7WkZ_TVQm5xgGEpt88zeRegTDe5yiWSikTxAWZBHNfdSOAXL2BqaAnY617IjERNFIOU2lxGaFnvqytubeJMsJvndT2s_h9QLIGZ2jrxKjJqZHdzyDmjs9gQgdOhtJqMY--8ezNs-UTDZ_sTTHc0S1VnnFy_ZMT3uRWFvL_Jrffz_sSc5E_Kfd0LP75FIZYGiyLvoUgiXFleJElA",
    features: ["Mergers & Acquisitions", "Restructuring & Turnaround", "Corporate Governance"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      <Navbar />
      
      {/* Services Hero */}
      <section className="py-24 px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#002349] mb-8">
              Our Professional Services
            </h1>
            <div className="h-1 w-16 bg-[#e9c176] mb-8" />
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Comprehensive advisory, audit, and tax solutions designed to empower organizations with rigorous oversight and strategic foresight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {serviceDetails.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#fbf9f8] border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#002349]/5 rounded-lg flex items-center justify-center text-[#002349]">
                    <service.icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#002349]">{service.title}</h2>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-10 border-l-2 border-[#e9c176] pl-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-800">
                      <Check size={16} className="text-[#775a19]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full border-2 border-[#002349] text-[#002349] py-4 rounded font-bold hover:bg-[#002349] hover:text-white transition-all">
                  Inquire about this service
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
