"use client";

import React, { useState } from "react";
import { Phone, Clock, MapPin, ArrowRight } from "lucide-react";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { BookingModal } from "@/components/ui/BookingModal";
import { clinicData } from "@/data/clinicData";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const ContactBookingSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#F7F6F1] border-b border-[#E8E7E0] text-left" id="contact">
        {/* Section 4I: Distinctive Final CTA Banner */}
        <div className="py-20 sm:py-28 bg-[#193B2C] text-[#FCFBF8] border-b border-[#122B20]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#AAB7A5] block">
              Begin Your Rehabilitation
            </span>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-[#FCFBF8] leading-tight">
              Ready to Move Better?
            </h2>

            <p className="text-base sm:text-lg text-[#DFE5DC] font-light max-w-2xl mx-auto leading-relaxed">
              Take the first step toward lasting mobility and pain-free living. Schedule your initial 45-minute comprehensive biomechanical evaluation with Dr. Faiza Yousef or connect directly via WhatsApp.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              {/* Action 1: Book Appointment */}
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-[#FCFBF8] hover:bg-[#F7F6F1] text-[#193B2C] text-xs font-semibold uppercase tracking-editorial-widest transition-all duration-200 cursor-pointer shadow-md"
              >
                Book Appointment
              </button>

              {/* Action 2: Chat on WhatsApp */}
              <a
                href={clinicData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded border border-[#DFE5DC]/40 hover:border-[#DFE5DC] text-[#FCFBF8] text-xs font-medium uppercase tracking-editorial-widest transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="pt-6 text-xs text-[#AAB7A5] font-light flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <span>Mon–Thu: 12:00 PM – 8:00 PM</span>
              <span>•</span>
              <span>Fri: 1:00 PM – 8:00 PM</span>
              <span>•</span>
              <span>Sat: 3:00 PM – 6:00 PM</span>
              <span>•</span>
              <span>F-7 Markaz Islamabad</span>
            </div>
          </div>
        </div>

        {/* Appointment Intake Form & Clinic Coordinates */}
        <div className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Intake Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FCFBF8] border border-[#E8E7E0] rounded-xl p-8 sm:p-10 shadow-sm">
              <div className="pb-6 mb-6 border-b border-[#E8E7E0]">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#193B2C] font-semibold block">
                  Intake Consultation
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#252A25] mt-1 font-light">
                  Request an Appointment
                </h3>
                <p className="text-xs text-[#555E55] font-light mt-1">
                  Requests are reviewed directly by Dr. Faiza&apos;s team to schedule 1-on-1 private clinical care in Sector F-7 Markaz.
                </p>
              </div>

              <AppointmentForm />
            </div>

            {/* Right Column: Verified Clinic Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Fast-Track Card */}
              <div className="p-8 bg-[#FCFBF8] rounded-xl border border-[#E8E7E0] space-y-4 shadow-sm">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#193B2C] font-semibold block">
                  Direct Line
                </span>
                <h4 className="font-editorial text-2xl text-[#252A25] font-light">
                  Instant Clinical Coordination
                </h4>
                <p className="text-xs text-[#555E55] font-light leading-relaxed">
                  Prefer discussing your symptoms directly? Message our clinic desk on WhatsApp for immediate schedule assistance.
                </p>
                <a
                  href={clinicData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-5 rounded bg-[#193B2C] hover:bg-[#122B20] text-[#FCFBF8] text-xs font-medium uppercase tracking-editorial-wide transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp: +92 330 5122052</span>
                </a>
              </div>

              {/* Address & Timings Card */}
              <div className="p-8 bg-[#FCFBF8] rounded-xl border border-[#E8E7E0] space-y-6 shadow-sm">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E] font-medium block">
                    Verified Location // Islamabad
                  </span>
                  <p className="text-xs text-[#252A25] leading-relaxed font-light">
                    {clinicData.contact.address.line1} <br />
                    <strong className="font-medium text-[#193B2C]">{clinicData.contact.address.landmark}</strong> <br />
                    {clinicData.contact.address.sector}, {clinicData.contact.address.city}, {clinicData.contact.address.country}
                  </p>
                </div>

                {/* Operating Timings */}
                <div className="pt-4 border-t border-[#E8E7E0] space-y-2">
                  <span className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E] font-medium block">
                    Operating Timings:
                  </span>
                  <div className="space-y-1.5 text-xs text-[#555E55] font-light">
                    {clinicData.contact.timings.map((t, i) => (
                      <div key={i} className="flex items-center justify-between py-0.5">
                        <span>{t.days}</span>
                        <strong className={`font-medium ${t.hours === "Closed" ? "text-amber-700" : "text-[#252A25]"}`}>
                          {t.hours}
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Phone Lines */}
                <div className="pt-4 border-t border-[#E8E7E0] space-y-1 text-xs">
                  <div className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E] font-medium">
                    Phone Lines:
                  </div>
                  <div className="font-mono text-[#252A25] flex flex-col gap-0.5">
                    <a href={`tel:${clinicData.contact.primaryPhone.replace(/\s+/g, "")}`} className="hover:text-[#193B2C] transition-colors">
                      {clinicData.contact.primaryPhone} (Primary)
                    </a>
                    <a href={`tel:${clinicData.contact.secondaryPhone.replace(/\s+/g, "")}`} className="hover:text-[#193B2C] transition-colors">
                      {clinicData.contact.secondaryPhone} (Secondary)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};
