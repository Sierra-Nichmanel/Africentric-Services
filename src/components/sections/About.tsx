"use client";

import { motion } from "framer-motion";
import { ExploreIcon, VisibilityIcon, BalanceIcon } from "@/components/ui/icons";

const About = () => {
  return (
    <section id="about" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block w-12 h-1 bg-[#775a19] mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#002349]">Our Guiding Principles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-[#fbf9f8] p-10 border border-gray-100 rounded hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-[#002349]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#002349]/10 transition-colors">
              <ExploreIcon className="text-[#775a19]" />
            </div>
            <h3 className="text-xl font-bold text-[#002349] mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To empower organizations with precise, actionable insights and robust frameworks that drive sustainable growth and operational excellence in dynamic markets.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#002349] p-10 rounded shadow-sm group">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <VisibilityIcon className="text-[#e9c176]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/90 leading-relaxed">
              To be the preeminent professional services firm in Africa, recognized globally for uncompromising quality, intellectual rigor, and transformative leadership.
            </p>
          </div>

          {/* Values */}
          <div className="bg-[#fbf9f8] p-10 border border-gray-100 rounded hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#002349]/5 rounded-full flex items-center justify-center mb-6">
              <BalanceIcon className="text-[#775a19]" />
            </div>
            <h3 className="text-xl font-bold text-[#002349] mb-4">Core Values</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#775a19]" />
                Integrity & Ethics
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#775a19]" />
                Intellectual Rigor
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#775a19]" />
                Client Centricity
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
