"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, EASINGS, prefersReducedMotion } from "@/lib/gsap";
import { ArrowUpRight } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";

export const EditorialHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".hero-line-inner", {
        y: 24,
        duration: 0.7,
        stagger: 0.08,
        clearProps: "all",
      }).from(
        imageFrameRef.current,
        {
          scale: 0.98,
          duration: 0.75,
          clearProps: "all",
        },
        "-=0.5"
      );
    },
    { scope: containerRef }
  );

  return (
    <>
      <section
        ref={containerRef}
        className="relative pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28 overflow-hidden bg-[#FCFBF8] border-b border-[#E8E7E0]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Subtle Top Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between pb-5 mb-8 md:mb-12 border-b border-[#E8E7E0] text-[10px] sm:text-[11px] font-medium tracking-editorial-widest uppercase text-[#7F8B7E]">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#193B2C]" />
              <span className="text-[#252A25] font-semibold">Specialized Practice</span>
              <span className="text-[#AAB7A5]">—</span>
              <span>Sector F-7 Markaz, Islamabad</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[#7F8B7E]">
              <span>STMU Alumna</span>
              <span className="text-[#AAB7A5]">•</span>
              <span className="text-[#193B2C] font-semibold">5.0 ★ Google (65 Reviews)</span>
              <span className="text-[#AAB7A5]">•</span>
              <span className="text-[#193B2C] font-semibold">Ethical 12-Session Cap</span>
            </div>
          </div>

          {/* Editorial Split Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Side: Typography & CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-7 text-left">
              {/* Uppercase Editorial Label */}
              <div className="inline-flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-semibold tracking-editorial-widest uppercase text-[#193B2C]">
                  Physiotherapy & Rehabilitation
                </span>
              </div>

              {/* Headline with fluid clamp: 56px-76px */}
              <h1
                ref={headlineRef}
                className="font-editorial hero-headline-fluid font-light text-[#252A25] tracking-tight"
              >
                <span className="hero-line-inner block">Move Better,</span>
                <span className="hero-line-inner block italic font-normal text-[#193B2C]">
                  Live Fuller.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#555E55] font-light max-w-xl leading-relaxed">
                Specialized orthopaedic, spinal, and movement rehabilitation in Islamabad led by Dr. Faiza Yousef. Combining advanced manual joint mobilization, clinical dry needling, and neuromuscular restoration to eliminate pain at its anatomical root.
              </p>

              {/* Actions & Micro Trust Strip */}
              <div className="space-y-7 pt-2">
                <div className="flex flex-wrap items-center gap-4">
                  {/* Primary CTA */}
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded bg-[#193B2C] hover:bg-[#122B20] text-[#FCFBF8] text-xs font-medium uppercase tracking-editorial-widest transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
                  >
                    Book Appointment
                  </button>

                  {/* Secondary CTA */}
                  <Link
                    href="#philosophy"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-[#E8E7E0] hover:border-[#193B2C] text-[#252A25] hover:text-[#193B2C] text-xs font-medium uppercase tracking-editorial-widest transition-all duration-200"
                  >
                    <span>Our Approach</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Minimalist Trust Features */}
                <div className="pt-6 border-t border-[#E8E7E0] grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
                  <div>
                    <div className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E]">
                      Clinical Lead
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-[#252A25] mt-1">
                      Dr. Faiza Yousef
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E]">
                      Credentials
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-[#252A25] mt-1">
                      DPT • COMPT • CDNP
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E]">
                      Commitment
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-[#193B2C] mt-1">
                      Max 12 Sessions Cap
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Editorial Portrait of Dr. Faiza (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div
                ref={imageFrameRef}
                className="relative w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden border border-[#E8E7E0] bg-[#F7F6F1] shadow-sm"
              >
                {/* Authentic Portrait Image */}
                <Image
                  src="/dr-faiza/physiogenix-photo-dr-faiza.webp"
                  alt="Dr. Faiza Yousef - Lead Physical Therapist at Physiogenix Islamabad"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                  className="object-cover object-center filter contrast-[1.02] brightness-[0.98]"
                  priority
                />

                {/* Soft natural vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#193B2C]/85 via-transparent to-transparent pointer-events-none" />

                {/* Editorial Caption Tag at base */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-left text-[#FCFBF8]">
                  <span className="text-[10px] uppercase tracking-editorial-widest text-[#AAB7A5] block">
                    Verified Lead Clinician
                  </span>
                  <div className="font-editorial text-2xl font-light text-[#FCFBF8] mt-0.5">
                    Dr. Faiza Yousef
                  </div>
                  <div className="text-xs text-[#E8E7E0] font-light mt-1 flex items-center gap-2">
                    <span>Shifa Tameer-e-Millat University Alumna</span>
                    <span>•</span>
                    <span>8+ Years Practice</span>
                  </div>
                </div>

                {/* Top Corner Discrete Stamp */}
                <div className="absolute top-4 right-4 px-2.5 py-1 bg-[#FCFBF8]/90 backdrop-blur-sm rounded border border-[#E8E7E0] text-[9px] uppercase tracking-editorial-widest font-semibold text-[#193B2C]">
                  F-7 Islamabad
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};
