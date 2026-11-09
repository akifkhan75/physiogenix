"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, EASINGS, prefersReducedMotion } from "@/lib/gsap";
import { MapPin, ShieldCheck, Clock } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const ClinicExperience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
        imageFrameRef.current,
        { scale: 0.98, y: 15, duration: 0.75, clearProps: "all" }
      ).from(
        contentRef.current,
        { y: 20, duration: 0.6, clearProps: "all" },
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
        {/* Editorial Heading & Description alongside the architectural photography */}
        <div ref={contentRef} className="max-w-3xl space-y-4 mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
            Clinic Environment // F-7 Markaz Islamabad
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#252A25] leading-[1.08]">
            A Quiet Sanctuary for Deliberate Healing
          </h2>
          <p className="text-base sm:text-lg text-[#555E55] font-light leading-relaxed">
            Located on the 2nd Floor of Chaudhary Plaza on Bhittai Road (above Medicsi Hospital), our Islamabad clinic is designed as an unhurried, private clinical sanctuary. Clean architectural lines, private treatment suites, and a calm, dignified environment focused entirely on your musculoskeletal restoration.
          </p>
        </div>

        {/* Large Architectural Photographic Feature (Occupies most of the section) */}
        <div
          ref={imageFrameRef}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden border border-[#E8E7E0] shadow-sm bg-[#FCFBF8]"
        >
          <Image
            src="/images/clinic-sanctuary-editorial.jpg"
            alt="Physiogenix minimalist clinic sanctuary interior in Sector F-7 Markaz, Islamabad"
            fill
            sizes="(max-width: 1200px) 100vw, 1280px"
            className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-102"
            priority
          />

          {/* Subtle bottom gradient tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#252A25]/75 via-transparent to-transparent pointer-events-none" />

          {/* Embedded Architectural Metadata Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-[#FCFBF8]">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-editorial-widest text-[#AAB7A5] block">
                The F-7 Markaz Setting
              </span>
              <div className="font-editorial text-2xl sm:text-3xl font-light text-[#FCFBF8]">
                2nd Floor, Chaudhary Plaza, Bhittai Road
              </div>
              <p className="text-xs text-[#E8E7E0] font-light max-w-lg">
                Directly above Medicsi Hospital • Dedicated plaza parking • Unhurried 1-on-1 private appointments
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="px-3.5 py-1.5 rounded bg-[#FCFBF8]/90 backdrop-blur-sm border border-[#E8E7E0] text-[10px] uppercase tracking-editorial-widest font-semibold text-[#193B2C]">
                Mon–Sat By Appointment
              </div>
            </div>
          </div>
        </div>

        {/* 3 Minimal Pillars beneath the photo */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#E8E7E0]">
          <div>
            <span className="text-xs font-mono text-[#193B2C] block">01</span>
            <div className="text-xs font-semibold uppercase tracking-editorial-wide text-[#252A25] mt-1">
              1-on-1 Private Suites
            </div>
            <p className="text-xs sm:text-sm text-[#555E55] font-light mt-1 leading-relaxed">
              Eliminating the crowded, noisy atmosphere of generic halls. Every session takes place in an uninterrupted private room with Dr. Faiza.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono text-[#193B2C] block">02</span>
            <div className="text-xs font-semibold uppercase tracking-editorial-wide text-[#252A25] mt-1">
              Clinical Hygiene Standards
            </div>
            <p className="text-xs sm:text-sm text-[#555E55] font-light mt-1 leading-relaxed">
              Sterile treatment plinths, single-use medical filiform needles for dry needling, and strict clinical protocols.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono text-[#193B2C] block">03</span>
            <div className="text-xs font-semibold uppercase tracking-editorial-wide text-[#252A25] mt-1">
              Zero Clinical Delegation
            </div>
            <p className="text-xs sm:text-sm text-[#555E55] font-light mt-1 leading-relaxed">
              Your recovery is guided from first assessment to discharge by Dr. Faiza herself. No interns, no unsupervised machines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
