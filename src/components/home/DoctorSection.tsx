"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, EASINGS, prefersReducedMotion } from "@/lib/gsap";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { clinicData } from "@/data/clinicData";
import { InstagramIcon } from "@/components/ui/Icons";

export const DoctorSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          once: true,
        },
        defaults: { ease: "power2.out", duration: 0.75 },
      });

      tl.from(
        portraitRef.current,
        { scale: 0.98, y: 15, duration: 0.75, clearProps: "all" }
      ).from(
        narrativeRef.current,
        { y: 24, duration: 0.75, clearProps: "all" },
        "-=0.5"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-36 bg-[#F7F6F1] border-b border-[#E8E7E0] text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Photographic Portrait (5 cols) */}
          <div ref={portraitRef} className="lg:col-span-5 w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-lg overflow-hidden border border-[#E8E7E0] bg-[#FCFBF8] shadow-sm">
              <Image
                src="/dr-faiza/physiogenix-photo-dr-faiza.webp"
                alt="Dr. Faiza Yousef, DPT, COMPT - Lead Consultant Physiotherapist & Rehab Specialist"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                className="object-cover object-center filter contrast-[1.02]"
              />

              {/* Natural subtle gradient overlay at base */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#193B2C]/85 via-transparent to-transparent pointer-events-none" />

              {/* Verified Badge & Location */}
              <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#FCFBF8]/90 backdrop-blur-sm rounded border border-[#E8E7E0] text-[9px] uppercase tracking-editorial-widest font-semibold text-[#193B2C]">
                STMU Alumna • Islamabad
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-left text-[#FCFBF8]">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#AAB7A5] block">
                  Lead Musculoskeletal Specialist
                </span>
                <div className="font-editorial text-2xl font-light text-[#FCFBF8] mt-0.5">
                  Dr. Faiza Yousef
                </div>
                <div className="text-xs text-[#E8E7E0] font-light mt-1">
                  DPT • COMPT • CDNP • CDDC
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Credentials (7 cols) */}
          <div ref={narrativeRef} className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
                Meet the Expert
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#252A25] leading-[1.08]">
                Dr. Faiza Yousef
              </h2>
              <p className="text-xs sm:text-sm font-medium uppercase tracking-editorial-wide text-[#7F8B7E]">
                Lead Consultant Physiotherapist &amp; Rehab Specialist • STMU Alumna (8 Years Experience)
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#555E55] font-light leading-relaxed">
              Dr. Faiza Yousef is an assessment-led musculoskeletal physiotherapist and the founder of Physiogenix. With over 8 years of specialized clinical practice in Islamabad, she holds advanced post-graduate certifications in Orthopaedic Manual Physical Therapy (COMPT), Clinical Dry Needling (CDNP), and Cupping Therapy (CDDC).
            </p>

            <p className="text-sm sm:text-base text-[#555E55] font-light leading-relaxed">
              Her guiding philosophy—<strong className="font-medium text-[#252A25]">&ldquo;Hands Before Machines&rdquo;</strong>—stems from a deep commitment to diagnostic precision. Instead of delegating care or relying on passive modalities, Dr. Faiza evaluates and treats every patient directly, focusing on spinal decompression, joint mobilization, and sustainable functional independence.
            </p>

            {/* Minimal Credentials List separated by fine dividers */}
            <div className="pt-4 border-t border-[#E8E7E0] divide-y divide-[#E8E7E0]">
              <div className="py-3 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-editorial-wide text-[#252A25]">
                    01 // Academic Rigor
                  </div>
                  <div className="text-xs text-[#7F8B7E] font-light mt-0.5">
                    Doctor of Physical Therapy (DPT) from Shifa Tameer-e-Millat University (STMU).
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#193B2C] shrink-0 uppercase">Verified</span>
              </div>

              <div className="py-3 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-editorial-wide text-[#252A25]">
                    02 // Manual Specialization
                  </div>
                  <div className="text-xs text-[#7F8B7E] font-light mt-0.5">
                    Certified Orthopaedic Manual Physical Therapist (COMPT) &amp; Certified Dry Needling Practitioner (CDNP).
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#193B2C] shrink-0 uppercase">Certified</span>
              </div>

              <div className="py-3 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-editorial-wide text-[#252A25]">
                    03 // Ethical Care Policy
                  </div>
                  <div className="text-xs text-[#7F8B7E] font-light mt-0.5">
                    Maximum 12-session recovery cap. Average clinical resolution achieved in 6–10 sessions.
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#193B2C] shrink-0 uppercase">12 Cap</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-5">
              <Link
                href="/about-dr-faiza"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#193B2C] hover:bg-[#122B20] text-[#FCFBF8] text-xs font-medium uppercase tracking-editorial-widest transition-all duration-200 shadow-sm"
              >
                <span>Learn More About Dr. Faiza</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={clinicData.leadPractitioner.instagramPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-editorial-wide text-[#555E55] hover:text-[#193B2C] transition-colors py-2"
              >
                <InstagramIcon className="w-4 h-4 text-[#193B2C]" />
                <span>@faiza_fitnessphysio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
