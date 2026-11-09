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
    <div className="flex flex-col w-full bg-[#f9faf8] text-left">
      <Breadcrumbs
        items={[{ name: "Symptom Screener", href: "/assessment", current: true }]}
      />

      {/* Header */}
      <section className="pt-8 pb-20 sm:pb-28 border-b border-[#e0e6e1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 space-y-6">
          <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87] block">
            Clinical Triage // Self-Check Tool
          </span>
          <h1 className="font-editorial text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] font-light text-[#0d1a17]">
            Biomechanical Screener
          </h1>
          <p className="font-editorial text-2xl sm:text-3xl text-[#475c57] leading-relaxed font-light">
            Answer 3 targeted questions about your symptoms to identify the relevant clinical rehabilitation department and typical session milestone under our 12-session cap.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-[#758c87]">
            <span>2-MINUTE SELF-CHECK</span>
            <span>•</span>
            <span>EVIDENCE-BASED TRIAGE</span>
            <span>•</span>
            <span>12-SESSION CEILING</span>
          </div>
        </div>
      </section>

      {/* Screener Component */}
      <section className="py-24 sm:py-32">
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
