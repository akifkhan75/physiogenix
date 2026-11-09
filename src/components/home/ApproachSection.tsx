"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, EASINGS, prefersReducedMotion } from "@/lib/gsap";

export const ApproachSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

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

      // Animate horizontal connecting line
      tl.from(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center", duration: 0.85, clearProps: "transform" }
      ).from(
        ".journey-step",
        { y: 20, duration: 0.6, stagger: 0.1, clearProps: "all" },
        "-=0.5"
      );
    },
    { scope: sectionRef }
  );

  const steps = [
    {
      number: "01",
      title: "Book a Consultation",
      subtitle: "Convenient & Direct",
      desc: "Fast-track appointment scheduling via online intake or direct WhatsApp communication. Clear symptom pre-screening before you arrive.",
    },
    {
      number: "02",
      title: "Personalized Assessment",
      subtitle: "45-Min Kinetic Diagnostics",
      desc: "Comprehensive hands-on evaluation by Dr. Faiza to isolate spinal misalignments, neural impingements, and muscle imbalances.",
    },
    {
      number: "03",
      title: "Targeted Treatment Plan",
      subtitle: "Hands Before Machines",
      desc: "Customized protocols combining precise manual joint mobilization, clinical dry needling, and progressive motor control restoration.",
    },
    {
      number: "04",
      title: "Recovery and Progress",
      subtitle: "Autonomy Within 12 Sessions",
      desc: "Measurable milestone-driven recovery. Most conditions resolve in 6–10 visits, capped strictly at 12 sessions maximum.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-36 bg-[#FCFBF8] border-b border-[#E8E7E0] text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8E7E0]">
          <div className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
              Patient Journey
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#252A25] font-light leading-[1.08]">
              A Deliberate Four-Stage Pathway
            </h2>
          </div>
          <p className="text-sm text-[#555E55] max-w-md font-light leading-relaxed">
            From acute spinal decompression to lasting biomechanical independence. Clear milestones with no ambiguous or open-ended treatment cycles.
          </p>
        </div>

        {/* Desktop Connecting Line */}
        <div className="relative pt-16">
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-20 inset-x-0 h-px bg-[#E8E7E0]"
          />

          {/* 4-Stage Horizontal Columns (No cards) */}
          <div
            ref={stepsContainerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative z-10"
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="journey-step space-y-4 pt-6 border-t lg:border-t-0 border-[#E8E7E0] text-left"
              >
                {/* Step indicator */}
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full border border-[#193B2C] bg-[#FCFBF8] text-[#193B2C] text-xs font-mono flex items-center justify-center font-medium">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E]">
                    Phase {step.number}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-editorial text-2xl text-[#252A25] font-light leading-snug">
                    {step.title}
                  </h3>
                  <div className="text-[11px] font-medium uppercase tracking-editorial-wide text-[#193B2C]">
                    {step.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#555E55] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Standard Manifesto Banner (Subtle, light, warm) */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 bg-[#F7F6F1] rounded-lg border border-[#E8E7E0] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] uppercase tracking-editorial-widest text-[#193B2C] font-semibold block">
              Ethical Care Standard
            </span>
            <h4 className="font-editorial text-2xl sm:text-3xl text-[#252A25] font-light">
              Why We Cap Rehabilitation at 12 Sessions Maximum
            </h4>
            <p className="text-xs sm:text-sm text-[#555E55] font-light leading-relaxed">
              When true biomechanical root causes are diagnosed accurately through manual physical therapy, most spinal, sciatic, and joint conditions achieve functional resolution within 6 to 10 sessions. We enforce a 12-session cap to ensure diagnostic accountability and empower lasting patient self-reliance.
            </p>
          </div>

          <div className="shrink-0 text-left md:text-right border-t md:border-t-0 md:border-l border-[#E8E7E0] pt-4 md:pt-0 md:pl-8">
            <span className="font-editorial text-4xl sm:text-5xl text-[#193B2C] block font-light">
              12 Sessions
            </span>
            <span className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E] block mt-1">
              Maximum Recovery Standard
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
