"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen pt-24 bg-white">
      <Navbar />
      
      {/* Contact Hero */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="h-1 w-12 bg-[#e9c176] mb-8" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#002349] mb-8">Get in Touch</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Partner with Africentric Professional Services. Connect with our experts to discuss how our bespoke solutions can drive your institutional or corporate objectives forward.
          </p>
        </motion.div>
      </section>

      {/* Contact Grid */}
      <section className="px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[#fbf9f8] p-10 rounded-xl border border-gray-100 shadow-sm"
          >
            {status === "success" ? (
              <div className="text-center py-20">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-[#002349] mb-4">Message Sent!</h2>
                <p className="text-slate-600 mb-8">Thank you for reaching out. A partner will be in touch with you shortly.</p>
                <button onClick={() => setStatus("idle")} className="text-[#775a19] font-bold underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-4 rounded border border-gray-200 outline-none focus:border-[#002349] transition-all" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="jane@company.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-4 rounded border border-gray-200 outline-none focus:border-[#002349] transition-all" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+234 (0) 000 0000" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-5 py-4 rounded border border-gray-200 outline-none focus:border-[#002349] transition-all" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Service Needed</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-5 py-4 rounded border border-gray-200 outline-none focus:border-[#002349] transition-all bg-white"
                    >
                      <option value="">Select an area of expertise</option>
                      <option value="Accounting">Accounting & Reporting</option>
                      <option value="Tax">Tax Advisory</option>
                      <option value="Audit">Audit & Assurance</option>
                      <option value="Advisory">Business Advisory</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                  <textarea 
                    required
                    rows={5} 
                    placeholder="How can we assist your organization?" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-4 rounded border border-gray-200 outline-none focus:border-[#002349] transition-all" 
                  />
                </div>
                <button 
                  disabled={status === "loading"}
                  className="bg-[#002349] text-white px-10 py-5 rounded font-bold flex items-center justify-center gap-3 w-full md:w-auto hover:bg-[#003366] transition-all group"
                >
                  {status === "loading" ? <Loader2 className="animate-spin" /> : "Send Message"}
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="bg-[#fbf9f8] p-10 rounded-xl border border-gray-100 shadow-sm space-y-8">
              <h3 className="text-2xl font-bold text-[#002349] border-b border-gray-200 pb-6">Nigeria Headquarters</h3>
              <div className="flex gap-6">
                <MapPin className="text-[#e9c176] shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Address</p>
                  <p className="text-slate-700">Central Business District, <br />Abuja, Nigeria</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Mail className="text-[#e9c176] shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email</p>
                  <p className="text-slate-700">advisory@africentric.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Phone className="text-[#e9c176] shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Phone</p>
                  <p className="text-slate-700">+234 (0) 800 AFRICENTRIC</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden border border-gray-100 shadow-sm group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMn_0X5ffjQyOdMbXK-byUhgfZYxR_6GyT6MZmtSvAFCsGvemR9TLe0qt7WczNOb729JOd4QiPdFaOL7KwzUGgogd99nbPCZkq-3ZXTGw4tCNzppNsXoqY4LXeC_Nk_VlT0m7GatVKS_-s1qbN8c7xx2xbJvT4mnUx-Z2sMKbgyJdqj4zp37qCqVzvKZQ3ApZNbRQRj8YRXnV-7u27i9HI-e3pfvDIwtKIovKIqV_dFztQprD8FfWHd4DNdOKMZrlmOzEEJJiBpph-"
                alt="Map Placeholder"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#002349]/10" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
