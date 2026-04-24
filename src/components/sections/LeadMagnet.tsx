"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, CheckCircle, Loader2 } from "lucide-react";

const LeadMagnet = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section className="py-24 px-8 bg-[#002349]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
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
        </div>

        <div className="bg-white p-10 rounded-xl shadow-2xl">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#002349] mb-4">Checklist Sent!</h3>
              <p className="text-slate-600 mb-8">
                Please check your email (<b>{email}</b>) for the download link.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-[#002349] font-bold underline"
              >
                Send to another email
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#002349] focus:ring-0 transition-all outline-none"
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
                  className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#002349] focus:ring-0 transition-all outline-none"
                />
              </div>
              <button
                disabled={status === "loading"}
                className="w-full bg-[#775a19] text-white py-4 rounded font-bold hover:bg-[#5d4613] transition-all flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Preparing Guide...
                  </>
                ) : (
                  <>
                    <Download size={20} />
                    Download Free Checklist
                  </>
                )}
              </button>
              <p className="text-[10px] text-slate-400 text-center">
                By downloading, you agree to receive strategic financial insights from us. You can unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
