import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ShieldCheck, Clock, MapPin } from "lucide-react";
import { ClinicalScreener } from "@/components/screener/ClinicalScreener";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

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
    <div className="flex flex-col w-full bg-[#FCFBF8] text-left">
      <Breadcrumbs
        items={[{ name: "Conditions & Screener", href: "/assessment", current: true }]}
      />

      {/* Header */}
      <section className="pt-8 pb-16 sm:pb-24 border-b border-[#E8E7E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 space-y-6">
          <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
            Clinical Triage // Self-Check Tool
          </span>
          <h1 className="font-editorial text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] font-light text-[#252A25]">
            Conditions &amp; Symptom Screener
          </h1>
          <p className="font-editorial text-2xl sm:text-3xl text-[#555E55] leading-relaxed font-light">
            Answer 3 targeted questions about your symptoms to identify the relevant clinical rehabilitation department and typical session milestone under our 12-session cap.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-[#7F8B7E]">
            <span>2-MINUTE SELF-CHECK</span>
            <span>•</span>
            <span>EVIDENCE-BASED TRIAGE</span>
            <span>•</span>
            <span>12-SESSION CEILING</span>
          </div>
        </div>
      </section>

      {/* Screener Component */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <ClinicalScreener />

          {/* Educational Disclaimer */}
          <div className="mt-12 max-w-3xl mx-auto p-6 bg-white border border-[#e0e6e1] text-xs text-[#5c736e] leading-relaxed text-center font-light">
            <strong>Clinical Disclaimer:</strong> This digital screener provides preliminary educational triage and does not replace a hands-on physical, orthopedic, and neurological examination conducted in-person by Dr. Faiza Yousef at 2nd Floor, Chaudhary Plaza, Sector F-7 Markaz, Islamabad.
          </div>
        </div>
      </section>
    </div>
  );
}
