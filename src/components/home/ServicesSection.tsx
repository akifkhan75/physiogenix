"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ShieldAlert,
  BrainCircuit,
  Zap,
  Compass,
  Layers,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";
import { clinicData, ServiceItem } from "@/data/clinicData";

const iconMap: Record<string, React.ElementType> = {
  Activity,
  ShieldAlert,
  BrainCircuit,
  Zap,
  Compass,
  Layers,
  TrendingUp,
  Sparkles,
};

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activeTabSlug, setActiveTabSlug] = useState<string>("orthopedic-manual-therapy");

  const activeService = clinicData.services.find((s) => s.slug === activeTabSlug) || clinicData.services[0];
  const ActiveIcon = iconMap[activeService.iconName] || Activity;

  const handleBookService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setBookingModalOpen(true);
  };

  return (
    <>
      <section className="py-20 lg:py-28 bg-[#f5faf8] border-b border-[#dbe7e2] relative" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0b8061] text-xs font-semibold uppercase tracking-wider">
              <span>8 Specialized Clinical Departments</span>
            </div>
            <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#081715]">
              Targeted Physical Therapy &amp; Rehabilitation
            </h2>
            <p className="text-sm sm:text-base text-[#4a635f] font-light leading-relaxed">
              Every protocol is individually art-directed and executed personally by Dr. Faiza Yousef. No generic exercise printouts or unattended machine sessions.
            </p>
          </div>

          {/* Interactive Department Inspector / Showcase */}
          <div className="mt-14 rounded-3xl bg-white border border-[#dbe7e2] shadow-xl overflow-hidden text-left">
            {/* Department Tab Bar */}
            <div className="px-6 py-4 bg-[#f8fbf9] border-b border-[#e2ede8] flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#738c87] shrink-0 mr-2">
                Departments:
              </span>
              {clinicData.services.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => setActiveTabSlug(svc.slug)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    activeTabSlug === svc.slug
                      ? "bg-[#10a880] text-white shadow-sm"
                      : "bg-white text-[#3e5954] hover:bg-[#edf5f2] border border-[#e2ede8]"
                  }`}
                >
                  {svc.title.split("&")[0].trim()}
                </button>
              ))}
            </div>

            {/* Showcase Active Panel */}
            <div className="p-6 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#e6f6f1] text-[#10a880] flex items-center justify-center shrink-0">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded-full bg-[#f2f8f5] border border-[#d6ebe2] text-[10px] font-semibold text-[#0b8061] uppercase tracking-wider">
                      {activeService.featuredBadge || "Specialized Treatment"}
                    </span>
                    <h3 className="editorial-serif text-2xl sm:text-3xl text-[#081715] mt-1">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[#4a635f] leading-relaxed font-light">
                  {activeService.fullDescription}
                </p>

                {/* Clinical Indications */}
                <div className="pt-2 border-t border-[#edf4f1] space-y-2">
                  <span className="text-[10px] uppercase font-semibold text-[#738c87] tracking-wider block">
                    Core Clinical Indications:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#284440]">
                    {activeService.clinicalIndications.slice(0, 4).map((ind, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10a880] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleBookService(activeService.title)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#10a880] hover:bg-[#0b8061] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book for this Protocol</span>
                  </button>

                  <Link
                    href={`/services/${activeService.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#f2f8f5] hover:bg-[#e4f2ec] text-[#0b8061] border border-[#d0eae0] text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>Full Protocol Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Outcomes & Timeline Card (5 cols) */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#fafcfb] border border-[#dce8e3] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#e8f1ed]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#10a880]">
                    Clinical Recovery Target
                  </span>
                  <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#52706a]">
                    <Clock className="w-3.5 h-3.5 text-[#10a880]" />
                    <span>{activeService.typicalSessionCount}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-semibold text-[#738c87] tracking-wider block">
                    Expected Therapeutic Outcomes:
                  </span>
                  {activeService.expectedOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#2c4742]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10a880] shrink-0 mt-1.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#e8f1ed] text-[11px] text-[#5e7c76] leading-relaxed">
                  <strong>Ethical Standard:</strong> Care is directed personally by Dr. Faiza Yousef in Sector F-7 Markaz. Sessions are capped at 12 maximum to promote long-term movement autonomy.
                </div>
              </div>
            </div>
          </div>

          {/* Directory Grid (All 8 Services) */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {clinicData.services.map((service, idx) => {
              const IconComp = iconMap[service.iconName] || Activity;
              return (
                <div
                  key={service.id}
                  className="p-5 rounded-2xl bg-white border border-[#dbe7e2] hover:border-[#10a880]/50 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md text-left"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-[#e6f6f1] text-[#10a880] flex items-center justify-center transition-transform group-hover:scale-105">
                        <IconComp className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[10px] font-bold text-[#738c87] tracking-wider uppercase">
                        0{idx + 1}
                      </span>
                    </div>

                    <h4 className="editorial-serif text-lg font-medium text-[#081715] group-hover:text-[#10a880] transition-colors leading-snug">
                      {service.title}
                    </h4>

                    <p className="text-xs text-[#526e68] leading-relaxed font-light line-clamp-2">
                      {service.shortDescription}
                    </p>

                    <div className="inline-flex items-center gap-1 text-[11px] text-[#6d8b85]">
                      <Clock className="w-3 h-3 text-[#10a880]" />
                      <span>{service.typicalSessionCount}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#edf4f1] flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-semibold text-[#10a880] hover:underline"
                    >
                      Details →
                    </Link>

                    <button
                      onClick={() => handleBookService(service.title)}
                      className="px-2.5 py-1 rounded-lg bg-[#e6f6f1] hover:bg-[#10a880] hover:text-white text-[10px] font-semibold text-[#0b8061] transition-colors cursor-pointer"
                    >
                      Book
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Screener Banner */}
          <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-[#081715] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-left">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#20c997]">
                Unsure Where to Begin?
              </span>
              <h4 className="editorial-serif text-xl sm:text-2xl font-normal">
                Take our 2-Minute Biomechanical Symptom Screener
              </h4>
              <p className="text-xs text-[#9fc2ba]">
                Identify whether your condition suggests cervical radiculopathy, facet lock, or sciatica before your physical evaluation.
              </p>
            </div>
            <Link
              href="/assessment"
              className="px-5 py-3 rounded-xl bg-[#10a880] hover:bg-[#0b8061] text-white text-xs font-semibold tracking-wider uppercase transition-colors shrink-0 shadow-md"
            >
              Start Self-Assessment Tool
            </Link>
          </div>
        </div>
      </section>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedService}
      />
    </>
  );
};
