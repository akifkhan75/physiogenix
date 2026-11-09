"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASINGS, prefersReducedMotion } from "@/lib/gsap";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const ApproachSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 bg-[#f9faf8] border-b border-[#e0e6e1] text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#e0e6e1]">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87] block">
              06 // Clinical Pathway
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0d1a17] font-light">
              The 4-Stage Patient Journey
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#475c57] max-w-md font-light leading-relaxed">
            From acute joint decompression to lasting biomechanical independence. Clear milestones, no ambiguous treatment courses.
          </p>
        </div>

        {/* 4-Stage Editorial Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
          {clinicData.patientJourney.map((step, idx) => (
            <div
              key={step.step}
              className="space-y-6 flex flex-col justify-between border-t border-[#0d1a17] pt-6 text-left"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#758c87]">
                  <span>PHASE 0{idx + 1}</span>
                  <span className="text-[#0f5948] font-semibold">{step.step}</span>
                </div>

                <h3 className="font-editorial text-2xl text-[#0d1a17] font-medium leading-snug">
                  {step.title}
                </h3>
                <h4 className="text-xs font-semibold text-[#0f5948] uppercase tracking-editorial-wide">
                  {step.subtitle}
                </h4>

                <p className="text-xs text-[#475c57] leading-relaxed font-light">
                  {step.details}
                </p>
              </div>

              <div className="pt-4 border-t border-[#e0e6e1] flex items-center justify-between text-[11px] text-[#758c87]">
                <span>Under 12-Session Cap</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0f5948]" />
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Cap Callout */}
        <div className="mt-20 p-8 sm:p-10 bg-[#f2f5f1] border border-[#e0e6e1] flex flex-col md:flex-row md:items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-editorial-widest text-[#0f5948] font-bold block">
              Ethical Standard
            </span>
            <h4 className="font-editorial text-2xl sm:text-3xl text-[#0d1a17]">
              Why We Cap Care at 12 Sessions Maximum
            </h4>
            <p className="text-xs text-[#475c57] font-light max-w-xl leading-relaxed">
              When true biomechanical root causes are diagnosed accurately through orthopedic manual therapy, most discogenic, sciatic, and capsular conditions achieve functional recovery within 6 to 10 sessions. We set a ceiling to guarantee accountability and ensure patients graduate to self-sufficiency.
            </p>
          </div>

          <div className="shrink-0 text-left md:text-right">
            <span className="font-editorial text-4xl sm:text-5xl text-[#0f5948] block">
              12 Sessions
            </span>
            <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87] block">
              Maximum Recovery Standard
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
