"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, CheckCircle2 } from "lucide-react";
import { clinicData } from "@/data/clinicData";
import { BookingModal } from "@/components/ui/BookingModal";

export const ServicesIndex: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activeSlug, setActiveSlug] = useState<string>("orthopedic-manual-therapy");

  const activeService = clinicData.services.find((s) => s.slug === activeSlug) || clinicData.services[0];

  const handleBook = (title: string) => {
    setSelectedService(title);
    setBookingModalOpen(true);
  };

  return (
    <>
      <section className="py-24 sm:py-32 lg:py-40 bg-[#f9faf8] border-b border-[#e0e6e1] text-left" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#e0e6e1]">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87] block">
                04 // Clinical Departments
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0d1a17] font-light">
                Movement Restoration Protocols
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#475c57] max-w-md font-light leading-relaxed">
              Every protocol is individually evaluated and executed personally by Dr. Faiza Yousef. No generic exercise photocopies or unsupervised machines.
            </p>
          </div>

          {/* Asymmetric Index & Active Inspector Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12">
            {/* Left Column: Index Rows (7 cols) */}
            <div className="lg:col-span-7 divide-y divide-[#e0e6e1]">
              {clinicData.services.map((svc, idx) => {
                const isActive = activeSlug === svc.slug;
                return (
                  <div
                    key={svc.id}
                    onMouseEnter={() => setActiveSlug(svc.slug)}
                    className={`py-5 transition-all duration-300 group cursor-pointer ${
                      isActive ? "pl-3 bg-[#f2f5f1]/60" : "hover:pl-2"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span className="text-xs font-mono text-[#758c87]">
                          0{idx + 1}
                        </span>
                        <div>
                          <h3
                            className={`font-editorial text-2xl sm:text-3xl transition-colors ${
                              isActive ? "text-[#0f5948] font-normal" : "text-[#0d1a17] font-light group-hover:text-[#0f5948]"
                            }`}
                          >
                            {svc.title}
                          </h3>
                          <p className="text-xs text-[#5c736e] font-light mt-1 line-clamp-1 max-w-lg">
                            {svc.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0 pt-1">
                        <span className="hidden sm:inline-block text-[10px] uppercase tracking-editorial-widest text-[#758c87]">
                          {svc.typicalSessionCount.split(" ")[0]} Sessions
                        </span>
                        <Link
                          href={`/services/${svc.slug}`}
                          className="w-7 h-7 rounded-full border border-[#e0e6e1] group-hover:border-[#0f5948] flex items-center justify-center text-[#758c87] group-hover:text-[#0f5948] transition-colors"
                          aria-label={`View ${svc.title}`}
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Architectural Inspector Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 p-8 bg-white border border-[#e0e6e1] space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#e0e6e1] text-[10px] uppercase tracking-editorial-widest text-[#758c87]">
                  <span>Active Department Inspection</span>
                  <span className="text-[#0f5948] font-semibold">12-Session Cap</span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#0f5948]">
                    Protocol // {activeService.slug}
                  </span>
                  <h4 className="font-editorial text-3xl text-[#0d1a17] font-medium leading-tight">
                    {activeService.title}
                  </h4>
                  <p className="text-xs text-[#475c57] leading-relaxed font-light pt-1">
                    {activeService.fullDescription}
                  </p>
                </div>

                {/* Core Indications */}
                <div className="pt-3 border-t border-[#e0e6e1] space-y-2">
                  <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87] block">
                    Target Clinical Indications:
                  </span>
                  <div className="space-y-1.5 text-xs text-[#284440]">
                    {activeService.clinicalIndications.slice(0, 3).map((ind, i) => (
                      <div key={i} className="flex items-start gap-2 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0f5948] shrink-0 mt-0.5" />
                        <span>{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline pill */}
                <div className="p-3 bg-[#f2f5f1] border border-[#e0e6e1] flex items-center justify-between text-xs text-[#475c57]">
                  <span className="font-light">Clinical Recovery Target:</span>
                  <strong className="font-semibold text-[#0d1a17]">{activeService.typicalSessionCount}</strong>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => handleBook(activeService.title)}
                    className="flex-1 py-3 px-4 bg-[#0f5948] hover:bg-[#0b4336] text-[#f9faf8] text-xs font-semibold uppercase tracking-editorial-wide text-center transition-colors cursor-pointer"
                  >
                    Schedule Assessment
                  </button>

                  <Link
                    href={`/services/${activeService.slug}`}
                    className="p-3 border border-[#e0e6e1] hover:border-[#0f5948] text-[#0d1a17] text-xs transition-colors"
                    title="Read clinical details"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
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
