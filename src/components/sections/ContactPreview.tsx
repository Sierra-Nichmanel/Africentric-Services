"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";

const ContactPreview = () => {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto bg-[#002349] rounded-2xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Elevate Your <br />
            Financial Integrity?
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with Africentric Professional Services today. Our consultants are ready to discuss your organizational goals.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="bg-[#775a19] text-white px-10 py-5 rounded font-bold hover:shadow-xl transition-all w-full md:w-auto"
            >
              Schedule a Briefing
            </Link>
            <Link
              href="https://wa.me/2340000000000?text=Hello, I’d like to make an enquiry."
              className="flex items-center gap-3 bg-white/10 text-white border border-white/20 px-10 py-5 rounded font-bold hover:bg-white/20 transition-all w-full md:w-auto justify-center"
            >
              <MessageSquare size={20} className="text-[#e9c176]" />
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
