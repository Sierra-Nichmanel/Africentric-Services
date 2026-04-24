"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Image from "next/image";
import { ArrowRight, Search, Loader2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const insights = [
  {
    category: "Advisory",
    title: "Navigating Cross-Border Mergers in the Emerging African Market",
    excerpt: "An in-depth analysis of regulatory frameworks and strategic considerations for multinational corporations expanding operations.",
    date: "Oct 12, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3GHmmxcYnfwzxSgcyaUmbvUFfSjr2WPIUzJ7O5Kef8Lywie_Y5X2q3pZxl-rFhx7mBNhc7_MywfFAzZDQWjkVotrci9FxiNhZmAIdO832jALBdLhsZ8u6K7tfjyDAJiZW-DFY9S4rRa-Kc7nZRFKjdyfi0zSxzQGDXhpHfCUPMflouo2np2dWWOekehqwA4McQ1bwcsZRXxFuOZGSIlie-OywF78GmntvF-0O1L28_gBO-pxjnv4bizHH1g57Wy7rH-wKdG27ucrx",
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
  {
    category: "Compliance",
    title: "Regulatory Compliance for NGOs in Nigeria: A 2025 Guide",
    excerpt: "Essential steps for non-profits to maintain their status and avoid regulatory hurdles in the coming year.",
    date: "Sept 28, 2024",
    image: null,
  },
];

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "loading" | "success">("idle");
  const [email, setEmail] = useState("");

  const filteredInsights = insights.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubStatus("loading");
    
    try {
      await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Newsletter Subscriber", email, type: "Newsletter" }),
      });
      setSubStatus("success");
      setEmail("");
      setTimeout(() => setSubStatus("idle"), 5000);
    } catch (err) {
      setSubStatus("idle");
    }
  };

  return (
    <main className="min-h-screen pt-24 bg-white">
      <Navbar />
      
      {/* Insights Header */}
      <header className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#002349] mb-8">Insights & Perspectives</h1>
            <p className="text-lg md:text-xl text-slate-600 border-t-2 border-[#e9c176] pt-8 max-w-xl leading-relaxed">
              Authoritative analysis and strategic foresight from our network of professionals across Africa and the globe.
            </p>
          </motion.div>
          
          <div className="relative max-w-md w-full lg:ml-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search perspectives (e.g. Tax, Audit)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-xl bg-[#fbf9f8] border border-gray-100 focus:border-[#002349] focus:ring-4 focus:ring-[#002349]/5 transition-all outline-none"
            />
          </div>
        </div>
      </header>

      {/* Insights Content */}
      <section className="px-8 pb-24 max-w-7xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredInsights.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInsights.map((post, i) => (
                <motion.article 
                  key={post.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col bg-[#fbf9f8] border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group cursor-pointer"
                >
                  {post.image ? (
                    <div className="h-56 relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="h-56 bg-[#002349] p-8 flex items-center justify-center text-center">
                      <h3 className="text-xl font-bold text-white/90">{post.title}</h3>
                    </div>
                  )}
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#775a19] mb-4 block">{post.category}</span>
                      <h2 className="text-xl font-bold text-[#002349] mb-4 group-hover:text-black transition-colors">{post.title}</h2>
                      <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{post.date}</span>
                      <div className="flex items-center gap-2 text-[#002349] font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                        Read Full <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-[#fbf9f8] rounded-2xl"
            >
              <Search className="mx-auto text-slate-300 mb-4" size={48} />
              <p className="text-slate-500 font-medium">No perspectives found matching &quot;{searchQuery}&quot;</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-4 text-[#775a19] font-bold underline"
              >
                Clear search
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Newsletter */}
      <section className="px-8 pb-24 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#002349] rounded-2xl p-10 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay informed with our latest financial insights</h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto">Subscribe to receive curated perspectives, industry updates, and firm news directly to your inbox.</p>
            
            <AnimatePresence mode="wait">
              {subStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4"
                >
                  <CheckCircle className="text-green-400" size={48} />
                  <p className="text-xl font-bold">You&apos;re subscribed!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
                  <input 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Corporate Email Address" 
                    className="flex-grow px-6 py-4 rounded bg-white text-black outline-none focus:ring-4 ring-[#e9c176]/50 transition-all"
                  />
                  <button 
                    disabled={subStatus === "loading"}
                    className="bg-[#775a19] px-8 py-4 rounded font-bold hover:bg-[#5d4613] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {subStatus === "loading" ? <Loader2 className="animate-spin" /> : "Subscribe"}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
