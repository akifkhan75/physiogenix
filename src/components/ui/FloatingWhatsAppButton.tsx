"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { clinicData } from "@/data/clinicData";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const FloatingWhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip on Desktop */}
      <div className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#dbe7e2] shadow-xl text-left pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10a880] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10a880]" />
        </span>
        <div className="text-[11px] leading-tight">
          <div className="font-semibold text-[#0e211e]">Dr. Faiza&apos;s Clinic</div>
          <div className="text-[#647f7a]">F-7 Markaz • Rapid WhatsApp Booking</div>
        </div>
      </div>

      {/* Button */}
      <a
        href={clinicData.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with Physiogenix on WhatsApp"
        className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#10a880] hover:bg-[#0b8061] text-white shadow-lg shadow-[#10a880]/30 hover:shadow-xl hover:shadow-[#10a880]/40 transition-all duration-300 active:scale-95"
      >
        <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#20c997] border-2 border-[#10a880]" />
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    </div>
  );
};

