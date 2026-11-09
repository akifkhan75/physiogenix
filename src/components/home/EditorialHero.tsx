"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, EASINGS, prefersReducedMotion } from "@/lib/gsap";
import { ArrowUpRight, Calendar, ShieldCheck, MapPin } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";
import { clinicData } from "@/data/clinicData";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const EditorialHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: EASINGS.editorial } });

      // Staggered reveal for headline lines
      tl.from(".hero-line-inner", {
        yPercent: 110,
        duration: 1.1,
        stagger: 0.12,
      })
        // Image reveal via clip-path
        .from(
          imageFrameRef.current,
          {
            clipPath: "inset(100% 0% 0% 0%)",
            scale: 1.05,
            duration: 1.2,
            ease: EASINGS.dramatic,
          },
          "-=0.8"
        )
        // Metadata & buttons fade in
        .from(
          metaRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6"
        );
    },
    { scope: containerRef }
  );

  return (
    <>
      <section
        ref={containerRef}
        className="relative pt-8 pb-20 md:pt-14 md:pb-32 lg:pt-20 lg:pb-36 overflow-hidden border-b border-[#e0e6e1]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Top Micro Eyebrow */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#e0e6e1] text-[10px] sm:text-[11px] font-medium tracking-editorial-widest uppercase text-[#758c87]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f5948]" />
              <span className="text-[#0d1a17] font-semibold">Clinical Practice</span>
              <span>—</span>
              <span>Sector F-7 Markaz, Islamabad</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[#758c87]">
              <span>STMU Alumna</span>
              <span>•</span>
              <span className="text-[#0f5948] font-semibold">Max 12 Sessions Cap</span>
            </div>
          </div>

          {/* Asymmetric Hero Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Oversized Typography (7 cols) */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Headline with overflow-hidden lines for GSAP reveals */}
              <h1
                ref={headlineRef}
                className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.98] font-light text-[#0d1a17] tracking-tight"
              >
                <span className="block overflow-hidden">
                  <span className="hero-line-inner block">Movement</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="hero-line-inner block italic font-normal text-[#0f5948]">
                    Restored.
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="hero-line-inner block">Root Cause</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="hero-line-inner block text-[#365759]">
                    Resolved.
                  </span>
                </span>
              </h1>

              {/* Editorial Brand Statement */}
              <div ref={metaRef} className="space-y-6 max-w-xl">
                <p className="font-editorial text-xl sm:text-2xl text-[#475c57] leading-relaxed font-light">
                  An assessment-led physical therapy practice under the direct clinical leadership of{" "}
                  <strong className="font-medium text-[#0d1a17]">Dr. Faiza Yousef</strong>. We prioritize hands-on orthopedic manual therapy over passive machines, governed by a transparent{" "}
                  <strong className="font-medium text-[#0d1a17]">12-session recovery cap</strong>.
                </p>

                {/* Minimal CTA Cluster */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-none bg-[#0f5948] hover:bg-[#0b4336] text-[#f9faf8] text-xs font-semibold uppercase tracking-editorial-wide transition-colors cursor-pointer"
                  >
                    <span>Request Initial Assessment</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={clinicData.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-none border border-[#e0e6e1] hover:border-[#0f5948] bg-transparent text-[#0d1a17] hover:text-[#0f5948] text-xs font-semibold uppercase tracking-editorial-wide transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp Consultation</span>
                  </a>
                </div>

                {/* Quick Clinical Metrics */}
                <div className="pt-6 border-t border-[#e0e6e1] grid grid-cols-3 gap-4 text-left">
                  <div>
                    <span className="font-editorial text-2xl text-[#0d1a17] block">8+ Yrs</span>
                    <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87]">
                      Clinical Practice
                    </span>
                  </div>
                  <div>
                    <span className="font-editorial text-2xl text-[#0f5948] block">Max 12</span>
                    <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87]">
                      Session Cap
                    </span>
                  </div>
                  <div>
                    <span className="font-editorial text-2xl text-[#0d1a17] block">1-on-1</span>
                    <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87]">
                      Private Room
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Image & Doctor Plate (5 cols) */}
            <div className="lg:col-span-5 w-full">
              <div
                ref={imageFrameRef}
                className="relative aspect-4/5 w-full bg-[#f2f5f1] border border-[#e0e6e1] overflow-hidden"
              >
                {/* Background Architectural Canvas */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#edf2ed] to-[#e4eae3]" />

                {/* Doctor Portrait Composition */}
                <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 z-10 text-left">
                  {/* Top Stamp */}
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-editorial-widest text-[#758c87]">
                    <span>Director // Lead Physio</span>
                    <span>STMU Graduate</span>
                  </div>

                  {/* Centered Authentic Avatar Crop */}
                  <div className="my-auto mx-auto text-center space-y-4">
                    <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full p-1 bg-white border border-[#0f5948]/30 shadow-md">
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/dr-faiza/dr-faiza-avatar.jpg"
                          alt="Dr. Faiza Yousef, DPT"
                          fill
                          sizes="(max-width: 768px) 180px, 200px"
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-editorial text-2xl sm:text-3xl text-[#0d1a17] font-medium">
                        Dr. Faiza Yousef
                      </h3>
                      <p className="text-[11px] font-semibold text-[#0f5948] uppercase tracking-editorial-wide">
                        DPT • COMPT • CDNP • CDDC
                      </p>
                      <p className="text-xs text-[#475c57] max-w-[240px] mx-auto font-light">
                        Doctor of Physical Therapy • Shifa Tameer-e-Millat University
                      </p>
                    </div>
                  </div>

                  {/* Bottom Verification Note */}
                  <div className="pt-3 border-t border-[#dce3dd] flex items-center justify-between text-[10px] text-[#758c87]">
                    <span>F-7 Markaz, Islamabad</span>
                    <a
                      href={clinicData.leadPractitioner.instagramPersonal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0f5948] hover:underline uppercase tracking-editorial-wide font-medium"
                    >
                      @faiza_fitnessphysio ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Booking Modal */}
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
