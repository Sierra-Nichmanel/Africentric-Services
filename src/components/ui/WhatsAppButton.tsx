"use client";

import { MessageSquare } from "lucide-react";
import Link from "next/link";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/2340000000000?text=Hello, I’d like to make an enquiry."
      target="_blank"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center w-14 h-14"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={30} fill="currentColor" />
    </Link>
  );
};

export default WhatsAppButton;
