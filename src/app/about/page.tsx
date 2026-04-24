"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/About";
import AboutStats from "@/components/sections/AboutStats";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      
      {/* About Hero */}
      <section className="py-24 px-8 bg-[#fbf9f8] border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="block w-12 h-1 bg-[#775a19] mb-6"></span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#002349] leading-tight mb-8">
                Institutional Integrity. <br />
                Modern Expertise.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                Africentric Professional Services delivers rigorous, world-class advisory, tax, and assurance services. We anchor our practice in global standards while possessing a profound understanding of the nuanced landscapes across the African continent.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-lg overflow-hidden border border-gray-200 shadow-2xl"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVF0tG10_weasx4kuxQjqZzB6mBgQiZZqFItjYw219qreC_q1yig8LXzN-i3LDSCPEgvzLmcrjSXmaSchbmw1B9OraIGTmv3HKVqPlzf2K0vgkvAWTAjV_VCqOJJzPdWM7mI48vlZ319zco82LJfA4onsymNfDcgb1qDZgdoqRgk0RhIAjmNCHVkQSpJZpTiPecBThlPSnuX35ZixhWgCzN7jJv19Lj78EJl9tahnTjC6BNRY9AEqgsGczJBkVRQTmhgqT4XeoGbe8"
              alt="Corporate Strategy"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      <AboutStats />
      <AboutSection />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
