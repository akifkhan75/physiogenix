import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { clinicData } from "@/data/clinicData";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Physiotherapy Services in Islamabad F-7, Sorted by Pain | Physiogenix",
  description:
    "Explore 10 specialized physical therapy departments in Sector F-7 Islamabad: Back Pain, Neck Pain, Sciatica, Frozen Shoulder, Scoliosis, Posture Correction, and Sports Injuries by Dr. Faiza Yousef.",
  alternates: {
    canonical: "https://physiogenix.pk/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-[#FCFBF8] text-left">
      <Breadcrumbs
        items={[{ name: "Physiotherapy Services", href: "/services", current: true }]}
      />

      {/* Header */}
      <section className="pt-8 pb-16 sm:pb-24 border-b border-[#E8E7E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
              Movement Restoration // 10 Specialized Departments
            </span>
            <span className="text-[#AAB7A5]">•</span>
            <span className="text-[10px] font-mono text-[#7F8B7E] uppercase">
              5.0 ★ Google (65 Reviews)
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-[72px] leading-[0.98] font-light text-[#252A25]">
            Physiotherapy Services, Sorted by Pain
          </h1>
          <p className="font-editorial text-2xl sm:text-3xl text-[#555E55] leading-relaxed font-light">
            Not sure what to call your pain? At Physiogenix, we start by understanding how you move and what is causing your discomfort before recommending treatment.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-[#7F8B7E]">
            <span>CHECK-UP FIRST, TREATMENT SECOND</span>
            <span>•</span>
            <span>PLAIN ADVICE ON WHAT TO EXPECT</span>
            <span>•</span>
            <span className="text-[#193B2C] font-semibold">STRICT 12-SESSION CAP</span>
          </div>
        </div>
      </section>

      {/* Quick Interactive Symptom Filter Guide */}
      <section className="py-12 bg-[#F7F6F1] border-b border-[#E8E7E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="space-y-4 mb-6">
            <span className="text-[10px] uppercase tracking-editorial-widest text-[#193B2C] font-semibold block">
              Feel This? Start Here
            </span>
            <p className="text-xs text-[#555E55] font-light max-w-xl">
              Tap the symptom closest to what you are experiencing to jump directly into the corresponding clinical protocol:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {clinicData.symptomGuide.map((sg) => (
              <Link
                key={sg.targetSlug}
                href={`/services/${sg.targetSlug}`}
                className="p-3.5 bg-[#FCFBF8] rounded border border-[#E8E7E0] hover:border-[#193B2C] hover:bg-[#F2EFE8] transition-all text-left space-y-1 group"
              >
                <div className="text-[9px] font-mono text-[#7F8B7E] uppercase">
                  {sg.targetDepartment}
                </div>
                <div className="text-xs font-medium text-[#252A25] group-hover:text-[#193B2C] leading-snug line-clamp-2">
                  {sg.symptom}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Directory Grid */}
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
                    <span>DEPT // {idx < 9 ? `0${idx + 1}` : idx + 1}</span>
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

      {/* Active Training Programs Section */}
      <section className="py-20 bg-[#F7F6F1] border-t border-[#E8E7E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="space-y-3 mb-12 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
              Pain Settled? Keep It That Way
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#252A25] font-light leading-snug">
              Active Rehabilitation &amp; Training Programs
            </h2>
            <p className="text-sm text-[#555E55] font-light leading-relaxed">
              Relief is only half the job. Our structured training programs build long-term strength and better movement patterns, ensuring pain has less reason to return.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clinicData.trainingPrograms.map((prog) => (
              <div
                key={prog.title}
                className="p-8 rounded-lg bg-[#FCFBF8] border border-[#E8E7E0] space-y-4"
              >
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#193B2C] font-semibold block">
                  {prog.tagline}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#252A25] font-light">
                  {prog.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555E55] font-light leading-relaxed">
                  {prog.description}
                </p>

                <div className="pt-4 border-t border-[#E8E7E0] space-y-2">
                  <span className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E] font-semibold block">
                    Core Focus:
                  </span>
                  {prog.focusAreas.map((area, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#252A25] font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#193B2C]" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
