import React from "react";
import type { Metadata } from "next";
import { Phone, Clock, MapPin, Building2, MessageSquare } from "lucide-react";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { clinicData } from "@/data/clinicData";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact & Book Appointment | Physiogenix Islamabad F-7",
  description:
    "Schedule your clinical assessment with Dr. Faiza Yousef at Physiogenix in Sector F-7 Markaz Islamabad. Call +92 330 5122052 or book online.",
  alternates: {
    canonical: "https://physiogenix.pk/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-[#FCFBF8] text-left">
      <Breadcrumbs
        items={[{ name: "Schedule Intake", href: "/contact", current: true }]}
      />

      {/* Header */}
      <section className="pt-8 pb-16 sm:pb-24 border-b border-[#E8E7E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 space-y-6">
          <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
            Consultation Intake // Sector F-7 Markaz
          </span>
          <h1 className="font-editorial text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] font-light text-[#252A25]">
            Schedule an Assessment
          </h1>
          <p className="font-editorial text-2xl sm:text-3xl text-[#555E55] leading-relaxed font-light">
            Direct 1-on-1 consultation with Dr. Faiza Yousef (DPT, COMPT, CDNP). Request your slot below or connect directly via WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FCFBF8] border border-[#E8E7E0] rounded-xl p-8 sm:p-10 shadow-sm">
              <div className="pb-6 mb-6 border-b border-[#E8E7E0]">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#193B2C] font-semibold block">
                  Intake Protocol
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#252A25] mt-1 font-light">
                  Clinical Appointment Request
                </h2>
                <p className="text-xs text-[#555E55] font-light mt-1">
                  Submissions are reviewed directly by Dr. Faiza&apos;s team to schedule 1-on-1 time in Sector F-7 Markaz.
                </p>
              </div>

              <AppointmentForm />
            </div>

            {/* Right Column: Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Fast-Track */}
              <div className="p-8 bg-[#F0F4EF] rounded-xl border border-[#DFE5DC] text-[#252A25] space-y-4">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#193B2C] font-semibold block">
                  Instant Scheduling
                </span>
                <h3 className="font-editorial text-2xl text-[#252A25] font-light">
                  Chat Directly on WhatsApp
                </h3>
                <p className="text-xs text-[#555E55] font-light leading-relaxed">
                  Prefer describing your symptoms via chat? Connect with our clinical dispatch team on WhatsApp for same-day schedule coordination.
                </p>
                <a
                  href={clinicData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-5 rounded bg-[#193B2C] hover:bg-[#122B20] text-[#FCFBF8] text-xs font-medium uppercase tracking-editorial-wide transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Open WhatsApp (+92 330 5122052)</span>
                </a>
              </div>

              {/* Physical Location */}
              <div className="p-8 bg-[#FCFBF8] rounded-xl border border-[#E8E7E0] space-y-6 shadow-sm">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E] font-medium block">
                    Location // F-7 Markaz
                  </span>
                  <p className="text-xs text-[#252A25] leading-relaxed font-light">
                    {clinicData.contact.address.line1} <br />
                    <strong className="font-medium text-[#193B2C]">{clinicData.contact.address.landmark}</strong> <br />
                    {clinicData.contact.address.sector}, {clinicData.contact.address.city}, {clinicData.contact.address.country}
                  </p>
                </div>

                {/* Timings */}
                <div className="pt-4 border-t border-[#E8E7E0] space-y-2">
                  <span className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E] font-medium block">
                    Weekly Operating Timings:
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

                {/* Phone */}
                <div className="pt-4 border-t border-[#E8E7E0] space-y-1 text-xs">
                  <span className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E] font-medium block">
                    Direct Clinical Lines:
                  </span>
                  <div className="font-mono flex flex-col gap-1">
                    <a
                      href={`tel:${clinicData.contact.primaryPhone.replace(/\s+/g, "")}`}
                      className="font-medium text-[#193B2C] hover:underline"
                    >
                      {clinicData.contact.primaryPhone} (Primary)
                    </a>
                    <a
                      href={`tel:${clinicData.contact.secondaryPhone.replace(/\s+/g, "")}`}
                      className="font-medium text-[#193B2C] hover:underline"
                    >
                      {clinicData.contact.secondaryPhone} (Secondary)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="mt-16 border border-[#e0e6e1] aspect-21/9 w-full bg-[#f2f5f1] overflow-hidden">
            <iframe
              title="Physiogenix Location Map F-7 Markaz Islamabad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.826019688329!2d73.0537!3d33.7206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9d8f95c805%3A0x67dbb184281313bf!2sF-7%20Markaz%2C%20Islamabad!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[25%] contrast-[1.05]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
