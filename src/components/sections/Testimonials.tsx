"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Africentric's strategic advisory was instrumental in our successful expansion into the West African market. Their local expertise is unmatched.",
    author: "Samuel Okoro",
    position: "CFO, Pan-African Logistics",
  },
  {
    quote: "The depth of their audit methodologies gave our board the institutional confidence required for our major capital raising round in 2024.",
    author: "Dr. Elena Mensah",
    position: "Chairperson, Heritage Bank",
  },
  {
    quote: "Professional, thorough, and strategically aligned. They don't just provide reports; they provide actionable intelligence for growth.",
    author: "Marcus Tunde",
    position: "CEO, TechNode Africa",
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#fbf9f8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#775a19] mb-4 block">Institutional Trust</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#002349]">Trusted by Industry Leaders</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all relative group"
            >
              <Quote className="absolute top-6 right-8 text-[#e9c176]/20 group-hover:text-[#e9c176]/40 transition-colors" size={60} />
              <p className="text-slate-600 italic mb-8 relative z-10 leading-relaxed text-lg">
                &quot;{item.quote}&quot;
              </p>
              <div>
                <h4 className="font-bold text-[#002349] text-lg">{item.author}</h4>
                <p className="text-slate-400 text-sm font-medium">{item.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
