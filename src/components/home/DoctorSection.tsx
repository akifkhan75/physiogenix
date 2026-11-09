"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASINGS, prefersReducedMotion } from "@/lib/gsap";
import { ArrowUpRight, ShieldCheck, Award } from "lucide-react";
import { clinicData } from "@/data/clinicData";
import { InstagramIcon } from "@/components/ui/Icons";

export const DoctorSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(portraitRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
        scale: 0.96,
        opacity: 0,
        duration: 1.2,
        ease: EASINGS.editorial,
      });

      gsap.from(narrativeRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: EASINGS.editorial,
        delay: 0.15,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 bg-[#f4f6f3] border-b border-[#e0e6e1] text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Credentials Stamp (5 cols) */}
          <div ref={portraitRef} className="lg:col-span-5 w-full">
            <div className="relative aspect-4/5 w-full bg-white border border-[#e0e6e1] overflow-hidden p-8 flex flex-col justify-between">
              {/* Corner Watermark */}
              <div className="flex items-center justify-between text-[10px] uppercase tracking-editorial-widest text-[#758c87]">
                <span>03 // Clinical Director</span>
                <span>Islamabad Practice</span>
              </div>

              {/* Portrait Composition */}
              <div className="my-auto text-center space-y-4">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full p-1 bg-white border-2 border-[#0f5948]/30 shadow-md">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/dr-faiza/dr-faiza-avatar.jpg"
                      alt="Dr. Faiza Yousef, DPT - Lead Physiotherapist"
                      fill
                      sizes="(max-width: 768px) 190px, 220px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-editorial text-3xl text-[#0d1a17] font-medium">
                    Dr. Faiza Yousef
                  </h3>
                  <p className="text-xs font-semibold text-[#0f5948] uppercase tracking-editorial-wide">
                    DPT • COMPT • CDNP • CDDC
                  </p>
                  <p className="text-xs text-[#475c57] font-light max-w-xs mx-auto">
                    Doctor of Physical Therapy • Shifa Tameer-e-Millat University (STMU)
                  </p>
                </div>
              </div>

              {/* Verified Post-Graduate Pill */}
              <div className="pt-3 border-t border-[#e0e6e1] flex items-center justify-between text-[10px] text-[#758c87]">
                <span>Certified Manual &amp; Dry Needling Physio</span>
                <a
                  href={clinicData.leadPractitioner.instagramPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0f5948] hover:underline uppercase tracking-editorial-wide font-medium inline-flex items-center gap-1"
                >
                  <InstagramIcon className="w-3 h-3" />
                  <span>@faiza_fitnessphysio</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Biography & Philosophy (7 cols) */}
          <div ref={narrativeRef} className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87] block">
                Practitioner Profile
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0d1a17] leading-[1.05] font-light">
                &ldquo;Pain is a mechanical signal. We treat what actually causes it, not where it screams.&rdquo;
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#475c57] font-light leading-relaxed">
              <p>
                Dr. Faiza Yousef is the founder and clinical director of <strong className="font-medium text-[#0d1a17]">Physiogenix</strong>. An alumna of Shifa Tameer-e-Millat University (STMU) in Islamabad, she holds advanced post-graduate certifications in Orthopedic Manual Physical Therapy (COMPT), Dry Needling (CDNP), and Dynamic Cupping (CDDC).
              </p>
              <p>
                With over 8 years of intensive hands-on clinical practice in Sector F-7, she specializes in isolating complex spinal dysfunctions, cervicogenic headaches, disc protrusions, and athletic joint injuries. Her practice rejects continuous dependency loops: treatment pathways are targeted, measurable, and strictly capped at 12 sessions.
              </p>
            </div>

            {/* Credential Attributes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#e0e6e1] text-xs">
              <div className="space-y-1">
                <span className="font-semibold text-[#0d1a17] block">STMU Degree Qualification</span>
                <p className="text-[#475c57] font-light">Doctor of Physical Therapy (DPT) from Shifa Tameer-e-Millat University, Islamabad.</p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-[#0d1a17] block">COMPT &amp; CDNP Standards</span>
                <p className="text-[#475c57] font-light">Certified in Maitland/Mulligan orthopedic joint mobilization and intramuscular dry needling.</p>
              </div>
            </div>

            {/* Profile CTA */}
            <div className="pt-2">
              <Link
                href="/about-dr-faiza"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-editorial-wide text-[#0f5948] hover:text-[#0b4336] transition-colors"
              >
                <span>Read Full Clinical Biography &amp; Certifications</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
