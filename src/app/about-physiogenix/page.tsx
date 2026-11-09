import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";
import { clinicData } from "@/data/clinicData";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Physiogenix | Movement Rehabilitation & Clinic Philosophy",
  description:
    "Discover Physiogenix in Sector F-7 Markaz Islamabad. Founded by Dr. Faiza Yousef with an assessment-led, hands-before-machines philosophy and an ethical 12-session cap.",
  alternates: {
    canonical: "https://physiogenix.pk/about-physiogenix",
  },
};

export default function AboutPhysiogenixPage() {
  return (
    <div className="flex flex-col w-full bg-[#FCFBF8] text-left">
      <Breadcrumbs
        items={[{ name: "About Physiogenix", href: "/about-physiogenix", current: true }]}
      />

      {/* Header */}
      <section className="pt-8 pb-16 sm:pb-24 border-b border-[#E8E7E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 space-y-6">
          <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
            Institutional Standards // F-7 Markaz
          </span>
          <h1 className="font-editorial text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] font-light text-[#252A25]">
            About Physiogenix
          </h1>
          <p className="font-editorial text-2xl sm:text-3xl text-[#555E55] leading-relaxed font-light">
            An assessment-led physical therapy practice in Sector F-7 Islamabad designed around clinical precision, human touch, and lasting physical independence.
          </p>
        </div>
      </section>

      {/* Narrative & Pillars */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
          <div className="space-y-4">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#252A25] font-light">
              Our Clinical Genesis
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#555E55] font-light leading-relaxed">
              <p>
                Physiogenix was founded by <strong className="font-medium text-[#252A25]">Dr. Faiza Yousef</strong> to bridge a critical deficit in conventional musculoskeletal rehabilitation. In modern healthcare, physical therapy has frequently devolved into a volume-driven assembly line: patients are positioned under heating pads, connected to TENS machines for half an hour, and given generic exercise photocopies with minimal hands-on diagnosis.
              </p>
              <p>
                Physiogenix operates on the opposite principle: <strong className="font-medium text-[#193B2C]">Hands Before Machines</strong>. We believe that no electrotherapy device can replicate the diagnostic sensitivity of a skilled clinician palpating a restricted lumbar facet, assessing scapulothoracic rhythm, or freeing an entrapped sciatic nerve.
              </p>
            </div>
          </div>

          {/* 4 Pillars */}
          <div className="space-y-6">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#252A25] font-light">
              The Four Institutional Pillars
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {clinicData.corePillars.map((pillar, i) => (
                <div key={i} className="p-8 bg-[#FCFBF8] border border-[#E8E7E0] rounded-xl space-y-4 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-mono text-[#7F8B7E]">
                    <span>0{i + 1} // {pillar.tagline}</span>
                    <span className="text-[#193B2C] font-semibold">{pillar.metric}</span>
                  </div>
                  <h3 className="font-editorial text-2xl text-[#252A25] font-light">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#555E55] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Facility Location */}
          <div className="p-8 sm:p-10 bg-[#F7F6F1] border border-[#E8E7E0] rounded-xl space-y-3">
            <span className="text-[10px] uppercase tracking-editorial-widest text-[#193B2C] font-semibold block">
              F-7 Markaz Facility
            </span>
            <h4 className="font-editorial text-2xl sm:text-3xl text-[#252A25] font-light">
              The Clinical Sanctuary in Islamabad
            </h4>
            <p className="text-xs sm:text-sm text-[#555E55] leading-relaxed font-light">
              Situated on the 2nd Floor of Chaudhary Plaza on Bhittai Road, directly above Medicsi Hospital and adjacent to the PSO petrol pump, our clinic provides a peaceful sanctuary away from traffic noise. The facility features private consultation suites, sterile dry needling stations, and dedicated posture correction zones.
            </p>
            <div className="pt-2 text-xs text-[#7F8B7E]">
              Hours: Monday – Thursday 12:00 PM – 8:00 PM | Friday 1:00 PM – 8:00 PM | Saturday 3:00 PM – 6:00 PM | Sunday Closed.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
