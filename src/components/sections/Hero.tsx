"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-[#fbf9f8] pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-1 bg-[#e9c176] mb-8" />
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#002349] mb-6">
              Strategic Accounting & <br />
              Advisory for Growth-Focused <br />
              Organizations
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
              Expert accounting, audit, and advisory solutions designed to elevate your financial integrity and operational efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="bg-[#002349] text-white px-8 py-4 rounded font-bold hover:shadow-lg transition-all"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-[#002349] text-[#002349] px-8 py-4 rounded font-bold hover:bg-slate-100 transition-all"
            >
              Speak to an Expert
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl border border-gray-200"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuARQ3DJLcovttmSZc-L9PBqKFaSkVAppAa4guB-Ki1WMctcBqPp2u0izvUwjbAh_SBSoc2NacrIBw6TasYmFSmmWWGl8Am1QvCRc2t9lDff3TGiZysn7rOlPoGp9IRBtbpQ3GUSwPBruE8iiS0Pu6Y60Zm3pqHqqK_YiwZZjrO5rMtaN2VCrL8cUGDPP619jIaYvN6GmLnCOn-WokyMZb26cyvT_Dgve0ltsqFPleXh5T6aNckejJl8Dc5m8jSBU63MeQjmOmtoRgNx"
            alt="Corporate Excellence"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
