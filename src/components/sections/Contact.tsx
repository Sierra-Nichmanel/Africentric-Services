"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "Consulting",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSuccess(true);
        setFormState({ name: "", email: "", service: "Consulting", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappNumber = "+234800AFRIPRO"; // Placeholder
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in Africentric Professional Services.");

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-secondary dark:text-white">
              Let&apos;s Start a <br />
              <span className="text-primary italic">Conversation</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-md leading-relaxed text-lg">
              Ready to take your business to the next level? Our experts are standing by to help you navigate your unique challenges.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-slate-500">solutions@africentric.pro</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-slate-500">+234 800 AFRI PRO</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Office</h4>
                  <p className="text-slate-500">No. 40 Aswan Street, Wuse Zone 3, Abuja, Nigeria</p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] text-white font-bold hover:shadow-lg hover:shadow-green-500/20 transition-all active:scale-95"
            >
              <MessageSquare className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-[2rem] bg-white dark:bg-slate-900 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary transition-all outline-none"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary transition-all outline-none"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Service Required</label>
                <select
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary transition-all outline-none appearance-none"
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                >
                  <option>Strategic Consulting</option>
                  <option>Financial Advisory</option>
                  <option>Market Entry</option>
                  <option>Tax & Regulatory</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary transition-all outline-none resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-5 rounded-xl text-white font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl ${
                  success ? "bg-emerald-500 shadow-emerald-500/20" : "bg-primary shadow-primary/20 hover:bg-primary-light"
                } ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {loading ? "Sending..." : success ? "Message Sent!" : "Send Message"}
                {!loading && !success && <Send className="w-5 h-5" />}
                {success && <CheckCircle2 className="w-5 h-5" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
