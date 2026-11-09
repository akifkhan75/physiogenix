"use client";

import React, { useEffect } from "react";
import { X, Calendar, Phone, MessageSquare } from "lucide-react";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { clinicData } from "@/data/clinicData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0d211e]/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl border border-[#e2ede8] shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Strip */}
        <div className="px-6 py-5 bg-[#f6faf8] border-b border-[#e2ede8] flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e6f6f1] text-[#0c7a5d] text-[11px] font-semibold uppercase tracking-wider">
              <Calendar className="w-3 h-3" />
              <span>Assessment Booking</span>
            </div>
            <h2 className="editorial-serif text-xl sm:text-2xl font-medium text-[#102421] mt-1">
              Request Clinical Appointment
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#536965] hover:text-[#102421] hover:bg-[#eaf3ef] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 max-h-[80vh] overflow-y-auto">
          {/* Quick Direct WhatsApp bar */}
          <div className="mb-6 p-3.5 rounded-2xl bg-[#e6f6f1]/60 border border-[#bfe2d4] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-[#0c7a5d] font-medium text-center sm:text-left">
              Prefer instant booking via chat?
            </span>
            <a
              href={clinicData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#10a880] text-white font-medium hover:bg-[#0c8263] transition-colors shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>

          <AppointmentForm defaultService={defaultService} onSuccess={() => {}} />
        </div>
      </div>
    </div>
  );
};
