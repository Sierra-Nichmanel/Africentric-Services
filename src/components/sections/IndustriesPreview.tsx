"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Landmark, Building2, Rocket, HeartHandshake } from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Navigating complex regulatory frameworks for banks and insurance providers.",
    link: "/industries#financial",
  },
  {
    icon: Building2,
    title: "Public Sector",
    description: "Enhancing service delivery and fiscal responsibility for public institutions.",
    link: "/industries#public",
  },
  {
    icon: Rocket,
    title: "SMEs & Startups",
    description: "Foundational financial structuring and growth strategy for emerging businesses.",
    link: "/industries#smes",
  },
  {
    icon: HeartHandshake,
    title: "NGOs",
    description: "Ensuring fund transparency and donor compliance for non-profits.",
    link: "/industries#ngos",
  },
];

const IndustriesPreview = () => {
  return (
    <section className="py-24 px-8 bg-[#fbf9f8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#775a19] font-bold uppercase tracking-widest text-xs mb-4 block">Sector Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002349]">Industries We Serve</h2>
          </div>
          <Link href="/industries" className="text-[#002349] font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
            View All Sectors <span className="text-xl">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-[#002349]/5 flex items-center justify-center rounded mb-6 group-hover:bg-[#002349] group-hover:text-white transition-colors">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#002349] mb-4">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <Link href={item.link} className="text-[#775a19] text-xs font-bold uppercase tracking-widest hover:underline">
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesPreview;
