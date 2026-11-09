"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASINGS, prefersReducedMotion } from "@/lib/gsap";

export const BrandIntroduction: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: EASINGS.editorial,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 bg-[#f9faf8] border-b border-[#e0e6e1] text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Index Label (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87] block">
              02 // Clinical Manifesto
            </span>
            <div className="text-xs text-[#0f5948] font-semibold uppercase tracking-editorial-wide">
              The Physiogenix Standard
            </div>
          </div>

          {/* Large Statement & Narrative (9 cols) */}
          <div className="lg:col-span-9 space-y-10">
            <p
              ref={textRef}
              className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] text-[#0d1a17] font-light"
            >
              Most physiotherapy centers treat symptoms with passive heating pads and unsupervised electrotherapy machines. <br />
              <span className="italic font-normal text-[#0f5948]">
                We treat the human musculoskeletal system at its anatomical root.
              </span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-[#475c57] font-light leading-relaxed pt-6 border-t border-[#e0e6e1]">
              <p>
                In Islamabad&apos;s healthcare landscape, physical rehabilitation has frequently deteriorated into high-volume assembly lines. Patients are left in crowded halls under generic heat packs with minimal physical palpation. Physiogenix was founded on an opposite standard: <strong className="font-medium text-[#0d1a17]">Hands Before Machines</strong>.
              </p>
              <p>
                Every protocol begins with a 45-minute comprehensive biomechanical assessment. We isolate facet joint contractures, disc herniations, and neural entrapments, delivering targeted manual joint glides, dry needling, and corrective exercise—capped strictly at <strong className="font-medium text-[#0d1a17]">12 sessions maximum</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
