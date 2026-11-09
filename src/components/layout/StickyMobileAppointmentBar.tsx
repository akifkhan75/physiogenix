"use client";

import React, { useState } from "react";
import { Phone, Calendar } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";
import { clinicData } from "@/data/clinicData";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const StickyMobileAppointmentBar: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 bg-[#FCFBF8]/95 backdrop-blur-md border-t border-[#E8E7E0] shadow-md">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* Quick Call */}
          <a
            href={`tel:${clinicData.contact.primaryPhone.replace(/\s+/g, "")}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#F7F6F1] border border-[#E8E7E0] text-[#252A25] active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 text-[#193B2C]" />
            <span className="text-[10px] font-medium uppercase tracking-editorial-wide mt-0.5">Call</span>
          </a>

          {/* Quick WhatsApp */}
          <a
            href={clinicData.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#F7F6F1] border border-[#E8E7E0] text-[#193B2C] active:scale-95 transition-transform"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#193B2C]" />
            <span className="text-[10px] font-medium uppercase tracking-editorial-wide mt-0.5">WhatsApp</span>
          </a>

          {/* Book Assessment */}
          <button
            onClick={() => setModalOpen(true)}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#193B2C] text-[#FCFBF8] active:scale-95 transition-transform shadow-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span className="text-[10px] font-medium uppercase tracking-editorial-wide mt-0.5">Book</span>
          </button>
        </div>
      </div>

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
