"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#fbf9f8] border-t border-gray-100 py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-6">
          <Link 
            href="/" 
            className="text-2xl font-black text-[#002349] tracking-widest uppercase"
          >
            Africentric
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed">
            No. 40 Aswan Street, Wuse Zone 3, <br />
            Abuja, Nigeria <br />
            +234 800 AFRI PRO
          </p>
          <p className="text-slate-500 text-sm leading-relaxed pt-4">
            © 2024 Africentric Professional Services. <br />
            All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[#002349] uppercase tracking-widest text-xs mb-2">Legal</h4>
          <Link href="#" className="text-slate-500 hover:text-[#775a19] transition-all text-sm underline underline-offset-4">Privacy Policy</Link>
          <Link href="#" className="text-slate-500 hover:text-[#775a19] transition-all text-sm underline underline-offset-4">Terms of Service</Link>
          <Link href="#" className="text-slate-500 hover:text-[#775a19] transition-all text-sm underline underline-offset-4">Cookie Policy</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[#002349] uppercase tracking-widest text-xs mb-2">Company</h4>
          <Link href="/about" className="text-slate-500 hover:text-[#775a19] transition-all text-sm underline underline-offset-4">About Us</Link>
          <Link href="/contact" className="text-slate-500 hover:text-[#775a19] transition-all text-sm underline underline-offset-4">Global Offices</Link>
          <Link href="#" className="text-slate-500 hover:text-[#775a19] transition-all text-sm underline underline-offset-4">Sitemap</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[#002349] uppercase tracking-widest text-xs mb-2">Services</h4>
          <Link href="/services" className="text-slate-500 hover:text-[#775a19] transition-all text-sm underline underline-offset-4">Accounting</Link>
          <Link href="/services" className="text-slate-500 hover:text-[#775a19] transition-all text-sm underline underline-offset-4">Tax Advisory</Link>
          <Link href="/services" className="text-slate-500 hover:text-[#775a19] transition-all text-sm underline underline-offset-4">Audit & Assurance</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
