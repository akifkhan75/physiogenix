import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ShieldCheck, Clock, MapPin } from "lucide-react";
import { ClinicalScreener } from "@/components/screener/ClinicalScreener";

export const metadata: Metadata = {
  title: "Biomechanical Symptom Screener & Clinical Triage | Physiogenix Islamabad",
  description:
    "Self-assess your pain symptoms and discover your recommended physical therapy department with Dr. Faiza Yousef at Physiogenix F-7 Markaz Islamabad.",
  alternates: {
    canonical: "https://physiogenix.pk/assessment",
  },
};

export default function AssessmentPage() {
  return (
    <div className="flex flex-col w-full bg-[#fbfdfc]">
      {/* Header */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#f5faf8] to-[#fbfdfc] border-b border-[#e2ede8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0b8061] text-xs font-semibold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Clinical Tool</span>
          </div>

          <h1 className="editorial-serif text-4xl sm:text-5xl lg:text-6xl text-[#0d211e]">
            Biomechanical Symptom Screener
          </h1>

          <p className="text-base sm:text-lg text-[#4a635f] font-light leading-relaxed max-w-2xl mx-auto">
            Answer 3 targeted questions about your symptoms to identify the relevant clinical rehabilitation department and typical session milestone under our 12-session cap.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#284440]">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#e2ede8]">
              <Clock className="w-3.5 h-3.5 text-[#10a880]" />
              <span>2-Minute Interactive Self-Check</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#e2ede8]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10a880]" />
              <span>Evidence-Based Triage Matrix</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClinicalScreener />

          {/* Educational Note */}
          <div className="mt-12 max-w-3xl mx-auto p-6 rounded-2xl bg-[#fafcfb] border border-[#dce8e3] text-xs text-[#526e68] leading-relaxed text-center">
            <strong>Clinical Disclaimer:</strong> This digital screener provides preliminary educational triage and does not replace a hands-on physical, orthopedic, and neurological examination conducted in-person by Dr. Faiza Yousef at 2nd Floor, Chaudhary Plaza, Sector F-7 Markaz, Islamabad.
          </div>
        </div>
      </section>
    </div>
  );
}
