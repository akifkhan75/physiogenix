"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";
import { clinicData } from "@/data/clinicData";

export const StickyMobileAppointmentBar: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 bg-white/95 backdrop-blur-md border-t border-[#dbece4] shadow-lg">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* Quick Call */}
          <a
            href={`tel:${clinicData.contact.primaryPhone.replace(/\s+/g, "")}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#f5faf8] border border-[#d6e9e1] text-[#20403b] active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 text-[#10a880]" />
            <span className="text-[10px] font-semibold mt-0.5">Call</span>
          </a>

          {/* Quick WhatsApp */}
          <a
            href={clinicData.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#e6f6f1] border border-[#c3e7da] text-[#0c7a5d] active:scale-95 transition-transform"
          >
            <MessageSquare className="w-4 h-4 text-[#10a880]" />
            <span className="text-[10px] font-semibold mt-0.5">WhatsApp</span>
          </a>

          {/* Book Assessment */}
          <button
            onClick={() => setModalOpen(true)}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#10a880] text-white active:scale-95 transition-transform shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span className="text-[10px] font-semibold mt-0.5">Book Visit</span>
          </button>
        </div>
      </div>

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

