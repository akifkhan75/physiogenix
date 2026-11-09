import React from "react";
import type { Metadata } from "next";
import { MapPin, Phone, Clock, MessageSquare, Building2, Navigation, ShieldCheck } from "lucide-react";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { clinicData } from "@/data/clinicData";

export const metadata: Metadata = {
  title: "Contact & Book Appointment | Physiogenix Islamabad F-7",
  description:
    "Book your assessment with Dr. Faiza Yousef at Physiogenix in F-7 Markaz Islamabad. Call +92 330 5122052 or book online for orthopedic manual physical therapy.",
  alternates: {
    canonical: "https://physiogenix.pk/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-[#fbfdfc]">
      {/* Header */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#f5faf8] to-[#fbfdfc] border-b border-[#e2ede8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0c7a5d] text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>F-7 Markaz Islamabad</span>
          </div>

          <h1 className="editorial-serif text-4xl sm:text-5xl lg:text-6xl text-[#0d211e]">
            Schedule Your Clinical Assessment
          </h1>

          <p className="text-base sm:text-lg text-[#4a635f] font-light leading-relaxed max-w-2xl mx-auto">
            Direct 1-on-1 consultation with Dr. Faiza Yousef (DPT, COMPT, CDNP). Request your slot below or connect directly via WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Contact Info + Map */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Interactive Appointment Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#dbece4] shadow-xl">
                <div className="border-b border-[#eef5f2] pb-5 mb-6 text-left">
                  <span className="text-[10px] font-semibold uppercase text-[#10a880] tracking-wider block">
                    Patient Intake Request
                  </span>
                  <h2 className="editorial-serif text-2xl sm:text-3xl font-medium text-[#102421]">
                    Clinical Appointment Form
                  </h2>
                  <p className="text-xs text-[#536965] mt-1">
                    Fill in your details and Dr. Faiza&apos;s team will confirm your consultation slot.
                  </p>
                </div>

                <AppointmentForm />
              </div>
            </div>

            {/* Right Column: Contact Details, Timings & Map (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              {/* Direct WhatsApp Callout */}
              <div className="p-6 rounded-3xl bg-[#e6f6f1] border border-[#c3e6da] space-y-3">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#10a880]" />
                  <h3 className="text-sm font-semibold text-[#102421]">
                    Instant WhatsApp Scheduling
                  </h3>
                </div>
                <p className="text-xs text-[#3d5c55] leading-relaxed">
                  Prefer discussing your symptoms directly? Send a WhatsApp message to Dr. Faiza&apos;s clinical team for rapid response.
                </p>
                <a
                  href={clinicData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#10a880] hover:bg-[#0c8263] text-white text-xs font-semibold tracking-wide uppercase transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Open WhatsApp (+92 330 5122052)</span>
                </a>
              </div>

              {/* Clinic Address & Landmark */}
              <div className="p-6 rounded-3xl bg-white border border-[#e2ede8] space-y-3">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#10a880]" />
                  <h3 className="text-xs font-semibold uppercase text-[#102421] tracking-wider">
                    Physical Address
                  </h3>
                </div>
                <p className="text-xs text-[#445e59] leading-relaxed">
                  {clinicData.contact.address.line1} <br />
                  <strong className="text-[#102421]">{clinicData.contact.address.landmark}</strong> <br />
                  {clinicData.contact.address.sector}, {clinicData.contact.address.city}, {clinicData.contact.address.country}
                </p>
                <div className="pt-2 border-t border-[#f2f7f4] text-[11px] text-[#6d847f]">
                  <strong>Directions:</strong> {clinicData.contact.directionsNote}
                </div>
              </div>

              {/* Operating Timings */}
              <div className="p-6 rounded-3xl bg-white border border-[#e2ede8] space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#10a880]" />
                  <h3 className="text-xs font-semibold uppercase text-[#102421] tracking-wider">
                    Operating Hours
                  </h3>
                </div>
                <div className="space-y-1.5 text-xs">
                  {clinicData.contact.timings.map((t, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1 border-b border-[#f5faf8] last:border-0">
                      <span className="text-[#556e69]">{t.days}</span>
                      <span className={`font-semibold ${t.hours === "Closed" ? "text-red-500" : "text-[#102421]"}`}>
                        {t.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="p-6 rounded-3xl bg-white border border-[#e2ede8] space-y-2 text-xs">
                <span className="text-[10px] uppercase font-semibold text-[#7a918d] tracking-wider block">
                  Direct Clinical Lines:
                </span>
                <div className="space-y-1 text-[#102421] font-medium">
                  <div>
                    Primary (Call &amp; WA):{" "}
                    <a href={`tel:${clinicData.contact.primaryPhone.replace(/\s+/g, "")}`} className="text-[#10a880] hover:underline">
                      {clinicData.contact.primaryPhone}
                    </a>
                  </div>
                  <div>
                    Secondary Line:{" "}
                    <a href={`tel:${clinicData.contact.secondaryPhone.replace(/\s+/g, "")}`} className="text-[#10a880] hover:underline">
                      {clinicData.contact.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="mt-16 rounded-3xl overflow-hidden border border-[#d6ebe2] shadow-xl aspect-16/9 sm:aspect-21/9 w-full bg-[#eef5f2]">
            <iframe
              title="Physiogenix Location Map F-7 Markaz Islamabad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.826019688329!2d73.0537!3d33.7206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9d8f95c805%3A0x67dbb184281313bf!2sF-7%20Markaz%2C%20Islamabad!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[15%] contrast-[1.05]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
