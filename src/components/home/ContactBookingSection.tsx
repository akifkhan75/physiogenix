"use client";

import React from "react";
import { Phone, Clock, MapPin, Building2, ArrowUpRight } from "lucide-react";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { clinicData } from "@/data/clinicData";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const ContactBookingSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#f9faf8] border-b border-[#e0e6e1] text-left" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-14 border-b border-[#e0e6e1]">
          <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87] block">
            08 // Consultation Intake
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0d1a17] font-light">
            Schedule an Assessment
          </h2>
          <p className="text-sm sm:text-base text-[#475c57] font-light leading-relaxed">
            Direct 1-on-1 physical evaluation with Dr. Faiza Yousef in Sector F-7 Markaz, Islamabad.
          </p>
        </div>

        {/* Asymmetric Form & Clinic Info Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#e0e6e1] p-8 sm:p-10">
            <div className="pb-6 mb-6 border-b border-[#e0e6e1]">
              <span className="text-[10px] uppercase tracking-editorial-widest text-[#0f5948] font-bold block">
                Intake Protocol
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#0d1a17] mt-1">
                Clinical Appointment Request
              </h3>
              <p className="text-xs text-[#5c736e] font-light mt-1">
                Submissions are reviewed directly by Dr. Faiza&apos;s team to schedule 1-on-1 time in Sector F-7 Markaz.
              </p>
            </div>

            <AppointmentForm />
          </div>

          {/* Right Column: Clinic Information & Dispatch (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct WhatsApp Fast-Track */}
            <div className="p-8 bg-[#081411] text-[#f9faf8] space-y-4">
              <span className="text-[10px] uppercase tracking-editorial-widest text-[#20c997] block">
                Instant Scheduling
              </span>
              <h4 className="font-editorial text-2xl text-white">
                Chat Directly on WhatsApp
              </h4>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Prefer describing your symptoms via chat? Connect with our clinical dispatch team on WhatsApp for same-day schedule coordination.
              </p>
              <a
                href={clinicData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-5 bg-[#0f5948] hover:bg-[#10a880] text-white text-xs font-semibold uppercase tracking-editorial-wide transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Open WhatsApp (+92 330 5122052)</span>
              </a>
            </div>

            {/* Address & Timings Card */}
            <div className="p-8 bg-white border border-[#e0e6e1] space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87] block">
                  Location // F-7 Markaz
                </span>
                <p className="text-xs text-[#2d3f3b] leading-relaxed font-light">
                  {clinicData.contact.address.line1} <br />
                  <strong className="font-medium text-[#0d1a17]">{clinicData.contact.address.landmark}</strong> <br />
                  {clinicData.contact.address.sector}, {clinicData.contact.address.city}, {clinicData.contact.address.country}
                </p>
              </div>

              {/* Weekly Timings */}
              <div className="pt-4 border-t border-[#e0e6e1] space-y-2">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87] block">
                  Weekly Operating Timings:
                </span>
                <div className="space-y-1.5 text-xs text-[#475c57] font-light">
                  {clinicData.contact.timings.map((t, i) => (
                    <div key={i} className="flex items-center justify-between py-0.5">
                      <span>{t.days}</span>
                      <strong className={`font-medium ${t.hours === "Closed" ? "text-red-500" : "text-[#0d1a17]"}`}>
                        {t.hours}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Lines */}
              <div className="pt-4 border-t border-[#e0e6e1] space-y-1 text-xs">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87] block">
                  Direct Line:
                </span>
                <a
                  href={`tel:${clinicData.contact.primaryPhone.replace(/\s+/g, "")}`}
                  className="font-medium text-[#0f5948] hover:underline block"
                >
                  {clinicData.contact.primaryPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
