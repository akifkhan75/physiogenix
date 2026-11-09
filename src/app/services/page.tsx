import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, CheckCircle2 } from "lucide-react";
import { clinicData } from "@/data/clinicData";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Clinical Services & Physical Therapy Treatments | Physiogenix Islamabad",
  description:
    "Explore specialized physical therapy services in Sector F-7 Islamabad: Orthopedic Manual Therapy, Spine Care, Sciatica, Frozen Shoulder, Dry Needling, and Posture Restoration by Dr. Faiza Yousef.",
  alternates: {
    canonical: "https://physiogenix.pk/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-[#FCFBF8] text-left">
      <Breadcrumbs
        items={[{ name: "Clinical Departments", href: "/services", current: true }]}
      />

      {/* Header */}
      <section className="pt-8 pb-16 sm:pb-24 border-b border-[#E8E7E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 space-y-6">
          <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
            Movement Restoration // 8 Specialized Departments
          </span>
          <h1 className="font-editorial text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] font-light text-[#252A25]">
            Clinical Services
          </h1>
          <p className="font-editorial text-2xl sm:text-3xl text-[#555E55] leading-relaxed font-light">
            All protocols are evaluated and executed personally by Dr. Faiza Yousef. Root-cause biomechanics capped strictly at 12 sessions maximum.
          </p>
        </div>
      </section>

      {/* Departments Directory */}
      <section className="py-20 sm:py-28 bg-[#FCFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8E7E0] border border-[#E8E7E0]">
            {clinicData.services.map((svc, idx) => (
              <div
                key={svc.id}
                className="p-8 sm:p-12 bg-[#FCFBF8] hover:bg-[#F7F6F1] transition-colors duration-300 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#7F8B7E]">
                    <span>DEPT // 0{idx + 1}</span>
                    <span className="text-[#193B2C] font-semibold">{svc.typicalSessionCount}</span>
                  </div>

                  <h2 className="font-editorial text-3xl sm:text-4xl text-[#252A25] font-light leading-snug">
                    {svc.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#555E55] font-light leading-relaxed">
                    {svc.shortDescription}
                  </p>

                  <div className="pt-3 border-t border-[#E8E7E0] space-y-1.5 text-xs text-[#252A25]">
                    <span className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E] block font-semibold">
                      Primary Indications:
                    </span>
                    {svc.clinicalIndications.slice(0, 3).map((ind, i) => (
                      <div key={i} className="flex items-start gap-2 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#193B2C] shrink-0 mt-0.5" />
                        <span>{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E7E0] flex items-center justify-between">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-editorial-wide text-[#193B2C] hover:text-[#122B20]"
                  >
                    <span>Read Full Protocol Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-[#193B2C] hover:bg-[#122B20] text-[#FCFBF8] text-xs font-medium uppercase tracking-editorial-wide transition-colors rounded"
                  >
                    Schedule
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
