"use client";

import React, { useEffect } from "react";
import { X, Calendar } from "lucide-react";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { clinicData } from "@/data/clinicData";
import { WhatsAppIcon } from "@/components/ui/Icons";

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
        className="fixed inset-0 bg-[#252A25]/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-[#FCFBF8] rounded-xl border border-[#E8E7E0] shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Strip */}
        <div className="px-6 py-5 bg-[#F7F6F1] border-b border-[#E8E7E0] flex items-center justify-between">
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-editorial-widest text-[#193B2C] font-semibold block">
              Clinical Intake // F-7 Markaz
            </span>
            <h2 className="font-editorial text-2xl font-light text-[#252A25] mt-0.5">
              Request an Assessment
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded text-[#7F8B7E] hover:text-[#252A25] hover:bg-[#E8E7E0]/50 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
          {/* Quick Direct WhatsApp bar */}
          <div className="mb-6 p-4 rounded-lg bg-[#F0F4EF] border border-[#DFE5DC] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-[#193B2C] font-medium text-center sm:text-left">
              Prefer instant scheduling via WhatsApp?
            </span>
            <a
              href={clinicData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#193B2C] text-[#FCFBF8] text-[11px] font-medium uppercase tracking-editorial-wide shrink-0 transition-colors hover:bg-[#122B20]"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Open WhatsApp</span>
            </a>
          </div>

          <AppointmentForm
            defaultService={defaultService}
            onSuccess={onClose}
          />
        </div>
      </div>
    </div>
  );
};
