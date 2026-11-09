import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ArrowRight, Clock, CheckCircle2, ShieldCheck } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const metadata: Metadata = {
  title: "Clinical Services & Physical Therapy Treatments | Physiogenix Islamabad",
  description:
    "Explore specialized physical therapy services in Sector F-7 Islamabad: Orthopedic Manual Therapy, Spine Care, Sciatica, Frozen Shoulder, Dry Needling, and Posture Restoration by Dr. Faiza Yousef.",
  alternates: {
    canonical: "https://physiogenix.pk/services",
  },
};

export default function ServicesOverviewPage() {
  return (
    <div className="flex flex-col w-full bg-[#fbfdfc]">
      {/* Header */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#f5faf8] to-[#fbfdfc] border-b border-[#e2ede8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0c7a5d] text-xs font-semibold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5" />
            <span>Clinical Departments</span>
          </div>

          <h1 className="editorial-serif text-4xl sm:text-5xl lg:text-6xl text-[#0d211e]">
            Specialized Physical Rehabilitation
          </h1>

          <p className="text-base sm:text-lg text-[#4a635f] font-light leading-relaxed max-w-2xl mx-auto">
            All treatments are art-directed and executed personally by Dr. Faiza Yousef. Root-cause biomechanics capped at 12 sessions max.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clinicData.services.map((service, idx) => (
              <div
                key={service.id}
                className="p-8 rounded-3xl bg-white border border-[#e2ede8] shadow-sm hover:border-[#10a880]/50 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#10a880] uppercase tracking-wider">
                      Department 0{idx + 1}
                    </span>
                    {service.featuredBadge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#f2f8f5] border border-[#d6ebe2] text-[10px] font-semibold text-[#0c7a5d] uppercase tracking-wider">
                        {service.featuredBadge}
                      </span>
                    )}
                  </div>

                  <h2 className="editorial-serif text-2xl sm:text-3xl text-[#102421]">
                    {service.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#4a635f] leading-relaxed font-light">
                    {service.shortDescription}
                  </p>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f8fbfa] border border-[#e8f1ed] text-xs text-[#536965]">
                    <Clock className="w-3.5 h-3.5 text-[#10a880]" />
                    <span>Typical Timeline: <strong>{service.typicalSessionCount}</strong></span>
                  </div>

                  {/* Indications preview */}
                  <div className="pt-2 border-t border-[#f2f7f4] space-y-1.5">
                    <span className="block text-[10px] font-semibold uppercase text-[#7a918d] tracking-wider">
                      Primary Clinical Indications:
                    </span>
                    {service.clinicalIndications.slice(0, 3).map((ind, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#3d5752]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10a880] shrink-0 mt-0.5" />
                        <span>{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#f2f7f4] flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10a880] hover:text-[#0c8263]"
                  >
                    <span>Read Full Clinical Protocol</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="px-4 py-2 rounded-xl bg-[#e6f6f1] hover:bg-[#10a880] hover:text-white text-xs font-semibold text-[#0c7a5d] transition-colors"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
