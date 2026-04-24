"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  BarChart4, 
  ShieldCheck, 
  Calculator, 
  TrendingUp, 
  ChevronRight 
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Accounting",
    description: "Comprehensive financial reporting, bookkeeping, and payroll management tailored to your enterprise.",
  },
  {
    icon: ShieldCheck,
    title: "Tax Advisory",
    description: "Strategic tax planning, compliance, and advisory to optimize your liabilities and ensure adherence.",
  },
  {
    icon: BarChart4,
    title: "Audit & Assurance",
    description: "Independent statutory and internal audits delivering transparency, assurance, and risk mitigation.",
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    description: "Strategic business consulting, financial modeling, and restructuring for sustainable growth.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#775a19] font-bold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002349]">What We Do</h2>
          <div className="w-12 h-1 bg-[#e9c176] mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-lg border border-gray-100 bg-[#fbf9f8] hover:bg-white hover:shadow-2xl transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#e9c176] transform -translate-y-full group-hover:translate-y-0 transition-transform" />
              <div className="w-14 h-14 bg-[#002349]/5 rounded-xl flex items-center justify-center text-[#002349] mb-6 group-hover:bg-[#002349] group-hover:text-white transition-all">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#002349] mb-4 group-hover:text-[#775a19] transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <Link
                href="/services"
                className="flex items-center gap-2 text-[#002349] font-bold text-xs uppercase tracking-widest group/link"
              >
                Learn More
                <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
