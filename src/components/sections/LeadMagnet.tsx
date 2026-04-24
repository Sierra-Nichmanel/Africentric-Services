"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, CheckCircle, Loader2, Sparkles } from "lucide-react";

const LeadMagnet = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (status === "loading") {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
      }, 150);
    } else {
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      
      if (res.ok) {
        // Wait for progress bar to finish for effect
        setTimeout(() => setStatus("success"), 1500);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 px-8 bg-[#002349] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Free Tax Compliance <br />
            Checklist for Nigerian <br />
            Businesses
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-xl">
            Ensure your organization meets all regulatory requirements and avoids costly penalties. Our 2025 updated guide covers everything from VAT to Corporate Income Tax.
          </p>
          <ul className="space-y-4 mb-8">
            {["VAT Filings Guide", "Corporate Income Tax (CIT)", "Withholding Tax (WHT)", "Education Tax Compliance"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white/80">
                <CheckCircle className="text-[#e9c176]" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 rounded-xl shadow-2xl relative"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#002349] mb-4">Checklist Ready!</h3>
                <p className="text-slate-600 mb-8">
                  Check your email (<b>{email}</b>). <br />Your comprehensive checklist is on its way.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[#002349] font-bold underline hover:text-[#775a19] transition-colors"
                >
                  Send to another email
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#002349] focus:ring-2 focus:ring-[#002349]/10 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#002349] focus:ring-2 focus:ring-[#002349]/10 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    disabled={status === "loading"}
                    className="w-full bg-[#775a19] text-white py-4 rounded font-bold hover:bg-[#5d4613] hover:shadow-lg transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
                  >
                    <div className="relative z-10 flex items-center gap-2">
                      {status === "loading" ? (
                        <>
                          <Loader2 className="animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                          <span>Download Free Checklist</span>
                        </>
                      )}
                    </div>
                    {status === "loading" && (
                      <motion.div 
                        className="absolute inset-0 bg-[#5d4613]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                      />
                    )}
                  </motion.button>
                  {status === "error" && (
                    <p className="text-red-500 text-xs text-center">Connection error. Please try again.</p>
                  )}
                  <p className="text-[10px] text-slate-400 text-center">
                    By downloading, you agree to receive strategic financial insights. <br />We respect your privacy.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnet;
