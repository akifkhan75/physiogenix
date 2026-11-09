"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, EASINGS, prefersReducedMotion } from "@/lib/gsap";

export const BrandIntroduction: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

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

      tl.from(leftRef.current, {
        y: 24,
        clearProps: "all",
      }).from(
        rightRef.current,
        {
          y: 24,
          clearProps: "all",
        },
        "-=0.4"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="py-20 sm:py-28 lg:py-32 bg-[#F7F6F1] border-b border-[#E8E7E0] text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Horizontal Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Large Headline (6 cols) */}
          <div ref={leftRef} className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
              Philosophy &amp; Clinical Ethos
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[50px] leading-[1.08] font-light text-[#252A25]">
              Movement is freedom. We restore your body&apos;s natural mechanics through{" "}
              <span className="italic font-normal text-[#193B2C]">
                deliberate, hands-on precision.
              </span>
            </h2>
          </div>

          {/* Right Column: Concise Paragraph with Thin Vertical Divider (6 cols) */}
          <div
            ref={rightRef}
            className="lg:col-span-6 lg:border-l lg:border-[#E8E7E0] lg:pl-14 space-y-7"
          >
            <p className="text-base sm:text-lg text-[#555E55] font-light leading-relaxed">
              True rehabilitation goes beyond symptom suppression. When you experience spinal compression, disc injury, or joint restriction, your musculoskeletal system has compensated. Rather than relying on passive heating pads or unsupervised machines, we isolate the biomechanical root cause through comprehensive physical palpation and manual joint glides.
            </p>

            <p className="text-sm sm:text-base text-[#555E55] font-light leading-relaxed">
              Every protocol is evaluated and administered directly by Dr. Faiza Yousef. We believe patient care should be ethical, targeted, and finite: every rehabilitation plan is capped strictly at <strong className="font-medium text-[#252A25]">12 sessions maximum</strong>, empowering you to move better and live with complete physical autonomy.
            </p>

            {/* Minimal Horizontal Pillars (No cards) */}
            <div className="pt-6 border-t border-[#E8E7E0] grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <span className="text-xs font-mono text-[#193B2C] block">01</span>
                <div className="text-xs font-medium uppercase tracking-editorial-wide text-[#252A25] mt-1">
                  Hands Before Machines
                </div>
                <p className="text-[11px] text-[#7F8B7E] mt-1 leading-normal">
                  Manual joint mobilization &amp; clinical dry needling.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-[#193B2C] block">02</span>
                <div className="text-xs font-medium uppercase tracking-editorial-wide text-[#252A25] mt-1">
                  Root Diagnostics
                </div>
                <p className="text-[11px] text-[#7F8B7E] mt-1 leading-normal">
                  45-minute comprehensive kinetic evaluation.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-[#193B2C] block">03</span>
                <div className="text-xs font-medium uppercase tracking-editorial-wide text-[#252A25] mt-1">
                  12-Session Cap
                </div>
                <p className="text-[11px] text-[#7F8B7E] mt-1 leading-normal">
                  Measurable recovery without endless reliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
