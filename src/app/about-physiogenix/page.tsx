import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, CheckCircle2, Clock, MapPin, Building, Sparkles } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const metadata: Metadata = {
  title: "About Physiogenix | Assessment-Led Physiotherapy Clinic Islamabad",
  description:
    "Discover Physiogenix, Islamabad's leading assessment-led physical therapy clinic located in Sector F-7. Founded by Dr. Faiza Yousef with a hands-before-machines philosophy and ethical 12-session cap.",
  alternates: {
    canonical: "https://physiogenix.pk/about-physiogenix",
  },
};

export default function AboutPhysiogenixPage() {
  return (
    <div className="flex flex-col w-full bg-[#fbfdfc]">
      {/* Header */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#f5faf8] to-[#fbfdfc] border-b border-[#e2ede8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0c7a5d] text-xs font-semibold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>Clinic Identity &amp; Standards</span>
          </div>

          <h1 className="editorial-serif text-4xl sm:text-5xl lg:text-6xl text-[#0d211e]">
            About Physiogenix
          </h1>

          <p className="text-base sm:text-lg text-[#4a635f] font-light leading-relaxed max-w-2xl mx-auto">
            An assessment-led physical therapy practice in Sector F-7 Islamabad designed around clinical precision, human touch, and lasting physical independence.
          </p>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Mission */}
          <div className="space-y-4 text-left">
            <h2 className="editorial-serif text-3xl sm:text-4xl text-[#0d211e]">
              Our Clinical Genesis
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#4a635f] leading-relaxed font-light">
              <p>
                Physiogenix was founded by <strong className="font-semibold text-[#102421]">Dr. Faiza Yousef</strong> to bridge a critical deficit in conventional musculoskeletal rehabilitation. In modern healthcare, physical therapy has frequently devolved into a volume-driven assembly line: patients are positioned under heating pads, connected to TENS machines for half an hour, and given generic exercise photocopies with minimal hands-on diagnosis.
              </p>
              <p>
                Physiogenix operates on the opposite principle: <strong className="font-semibold text-[#102421]">Hands Before Machines</strong>. We believe that no electrotherapy device can replicate the diagnostic sensitivity of a skilled clinician palpating a restricted lumbar facet, assessing scapulothoracic rhythm, or freeing an entrapped sciatic nerve.
              </p>
            </div>
          </div>

          {/* 4 Pillars Breakdown */}
          <div className="space-y-6 text-left">
            <h2 className="editorial-serif text-3xl sm:text-4xl text-[#0d211e]">
              The Four Institutional Pillars
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {clinicData.corePillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#fafdfc] border border-[#e2ede8] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase text-[#10a880] tracking-wider">
                      {pillar.tagline}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#e6f6f1] text-[#0c7a5d]">
                      {pillar.metric}
                    </span>
                  </div>
                  <h3 className="editorial-serif text-xl font-medium text-[#102421]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#536965] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Facility & Location Details */}
          <div className="p-8 rounded-3xl bg-[#f2f8f5] border border-[#d6ebe2] space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#0c7a5d] text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>F-7 Markaz Facility</span>
            </div>
            <h3 className="editorial-serif text-2xl sm:text-3xl text-[#102421]">
              The Clinical Space in Islamabad
            </h3>
            <p className="text-sm text-[#445e59] leading-relaxed font-light">
              Situated on the 2nd Floor of Chaudhary Plaza on Bhittai Road, directly above Medicsi Hospital and adjacent to the PSO petrol pump, our clinic provides a peaceful sanctuary away from traffic noise. The facility features private consultation suites, sterile dry needling stations, and dedicated posture correction zones.
            </p>
            <div className="pt-2 text-xs text-[#556e69]">
              <strong>Hours:</strong> Monday – Friday 12:00 PM – 8:00 PM | Saturday 3:00 PM – 8:00 PM | Sunday Closed.
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-8 rounded-3xl bg-[#102421] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="editorial-serif text-2xl font-normal">
                Ready to Experience Assessment-Led Care?
              </h4>
              <p className="text-xs text-[#a4c9c1]">
                Book your initial physical evaluation with Dr. Faiza Yousef.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#10a880] hover:bg-[#0c8263] text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
            >
              Book Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

