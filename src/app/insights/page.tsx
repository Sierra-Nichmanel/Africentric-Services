"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const insights = [
  {
    category: "Advisory",
    title: "Navigating Cross-Border Mergers in the Emerging African Market",
    excerpt: "An in-depth analysis of regulatory frameworks and strategic considerations for multinational corporations expanding operations.",
    date: "Oct 12, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3GHmmxcYnfwzxSgcyaUmbvUFfSjr2WPIUzJ7O5Kef8Lywie_Y5X2q3pZxl-rFhx7mBNhc7_MywfFAzZDQWjkVotrci9FxiNhZmAIdO832jALBdLhsZ8u6K7tfjyDAJiZW-DFY9S4rRa-Kc7nZRFKjdyfi0zSxzQGDXhpHfCUPMflouo2np2dWWOekehqwA4McQ1bwcsZRXxFuOZGSIlie-OywF78GmntvF-0O1L28_gBO-pxjnv4bizHH1g57Wy7rH-wKdG27ucrx",
    large: true,
  },
  {
    category: "Tax",
    title: "2025 Corporate Tax Reforms: What Boardrooms Need to Know",
    excerpt: "Preparing for impending legislative shifts affecting digital services and international transfer pricing.",
    date: "Oct 10, 2024",
    image: null,
  },
  {
    category: "Audit",
    title: "Enhancing Transparency with AI-Driven Audit Methodologies",
    excerpt: "How algorithmic assurance is setting new benchmarks for institutional trust and data fidelity.",
    date: "Oct 05, 2024",
    image: null,
  },
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      <Navbar />
      
      {/* Insights Header */}
      <header className="py-24 px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#002349] mb-8">Insights & Perspectives</h1>
          <p className="text-lg md:text-xl text-slate-600 border-t-2 border-[#e9c176] pt-8 max-w-2xl leading-relaxed">
            Authoritative analysis and strategic foresight from our network of professionals across Africa and the globe.
          </p>
        </motion.div>
      </header>

      {/* Insights Content */}
      <section className="px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Feature */}
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 flex flex-col bg-[#fbf9f8] border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group cursor-pointer"
          >
            <div className="h-80 relative overflow-hidden">
              <Image
                src={insights[0].image!}
                alt={insights[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#775a19] mb-4 block">{insights[0].category}</span>
                <h2 className="text-2xl md:text-4xl font-bold text-[#002349] mb-6 group-hover:text-black transition-colors">{insights[0].title}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">{insights[0].excerpt}</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{insights[0].date}</span>
                <ArrowRight className="text-[#002349] group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.article>

          {/* Side Features */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {insights.slice(1).map((post, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#fbf9f8] border border-gray-100 p-8 rounded-xl hover:shadow-2xl transition-all group cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#775a19] mb-4 block">{post.category}</span>
                  <h3 className="text-xl font-bold text-[#002349] mb-4 group-hover:text-black transition-colors">{post.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{post.date}</span>
                  <ArrowRight className="text-[#002349] group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-8 pb-24 max-w-7xl mx-auto">
        <div className="bg-[#002349] rounded-2xl p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay informed with our latest financial insights</h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto">Subscribe to receive curated perspectives, industry updates, and firm news directly to your inbox.</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Corporate Email Address" 
              className="flex-grow px-6 py-4 rounded bg-white text-black outline-none focus:ring-2 ring-[#e9c176]"
            />
            <button className="bg-[#775a19] px-8 py-4 rounded font-bold hover:bg-[#5d4613] transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
