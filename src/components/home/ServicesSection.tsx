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

  const handleBookService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setBookingModalOpen(true);
  };

  return (
    <>
      <section className="py-20 lg:py-28 bg-[#f5faf8] relative" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0c7a5d] text-xs font-semibold uppercase tracking-wider">
              <span>Comprehensive Clinical Care</span>
            </div>
            <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#0d211e]">
              Specialized Physical Therapy &amp; Rehabilitation
            </h2>
            <p className="text-sm sm:text-base text-[#4a635f] font-light leading-relaxed">
              Every protocol is individually art-directed and executed personally by Dr. Faiza Yousef. No generic exercise sheets or unattended machine sessions.
            </p>
          </div>

          {/* Services Grid (8 cards) */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicData.services.map((service) => {
              const IconComponent = iconMap[service.iconName] || Activity;

              return (
                <div
                  key={service.id}
                  className="group relative rounded-2xl bg-white border border-[#e0ece6] hover:border-[#10a880]/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#10a880]/5"
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#e6f6f1] text-[#10a880] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {service.featuredBadge && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#f2f8f5] border border-[#d6ebe2] text-[10px] font-semibold text-[#0c7a5d] uppercase tracking-wider">
                          {service.featuredBadge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="editorial-serif text-xl font-medium text-[#102421] group-hover:text-[#10a880] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-[#536965] leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Typical Sessions Pill */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#f8fbfa] border border-[#e8f1ed] text-[11px] text-[#6d847f]">
                      <Clock className="w-3 h-3 text-[#10a880]" />
                      <span>{service.typicalSessionCount}</span>
                    </div>

                    {/* Key Indications list preview */}
                    <div className="pt-2 border-t border-[#f0f5f3] space-y-1.5">
                      <span className="block text-[10px] font-semibold uppercase text-[#7a918d] tracking-wider">
                        Common Indications:
                      </span>
                      {service.clinicalIndications.slice(0, 2).map((ind, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#3d5752]">
                          <CheckCircle2 className="w-3 h-3 text-[#10a880] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{ind}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="mt-6 pt-4 border-t border-[#f0f5f3] flex items-center justify-between gap-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-semibold text-[#10a880] hover:text-[#0c8263] inline-flex items-center gap-1 group/link"
                    >
                      <span>Clinical Details</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>

                    <button
                      onClick={() => handleBookService(service.title)}
                      className="px-2.5 py-1 rounded-lg bg-[#e6f6f1] hover:bg-[#10a880] hover:text-white text-[11px] font-semibold text-[#0c7a5d] transition-colors cursor-pointer"
                    >
                      Book
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Banner */}
          <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#102421] to-[#1d3d37] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="editorial-serif text-xl sm:text-2xl font-normal">
                Unsure which clinical protocol fits your condition?
              </h4>
              <p className="text-xs text-[#a4c9c1]">
                Schedule an initial 45-minute comprehensive biomechanical assessment in Sector F-7, Islamabad.
              </p>
            </div>
            <button
              onClick={() => handleBookService("Differential Clinical Assessment (Initial 45-Min)")}
              className="px-6 py-3 rounded-xl bg-[#10a880] hover:bg-[#0c8263] text-white text-xs font-semibold tracking-wide uppercase transition-colors shrink-0 cursor-pointer shadow-md"
            >
              Book Initial Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedService}
      />
    </>
  );
};
