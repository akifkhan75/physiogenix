"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { clinicData } from "@/data/clinicData";

export const SymptomNavigator: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          once: true,
        },
        defaults: { ease: "power2.out", duration: 0.75 },
      });

      tl.from(headerRef.current, {
        y: 20,
        clearProps: "all",
      }).from(
        ".symptom-card",
        {
          y: 20,
          stagger: 0.08,
          clearProps: "all",
        },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 lg:py-36 bg-[#FCFBF8] border-b border-[#E8E7E0] text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#E8E7E0]"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
                Feel This? Start Here
              </span>
              <span className="text-[#AAB7A5]">•</span>
              <span className="text-[10px] font-mono text-[#7F8B7E] uppercase">
                Interactive Pain Guide
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#252A25] font-light leading-[1.08]">
              Not Sure What to Call Your Pain?
            </h2>
            <p className="text-sm sm:text-base text-[#555E55] font-light leading-relaxed">
              No label on your discomfort? Use this quick diagnostic guide by our physiotherapy clinic team in F-7 Islamabad. Your in-person check-up settles the rest.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-[#193B2C] text-[#193B2C] hover:bg-[#193B2C] hover:text-[#FCFBF8] text-xs font-medium uppercase tracking-editorial-widest transition-all duration-200"
            >
              <span>Take Full Movement Screener</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 6-Symptom Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12"
        >
          {clinicData.symptomGuide.map((item, idx) => (
            <Link
              key={item.targetSlug}
              href={`/services/${item.targetSlug}`}
              className="symptom-card group block p-7 rounded-lg bg-[#F7F6F1] border border-[#E8E7E0] hover:border-[#193B2C]/40 hover:bg-[#F2EFE8] transition-all duration-300 relative space-y-4"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#7F8B7E]">
                <span>SYMPTOM // 0{idx + 1}</span>
                <span className="text-[10px] uppercase tracking-editorial-widest px-2 py-0.5 rounded bg-[#FCFBF8] text-[#193B2C] font-semibold">
                  {item.targetDepartment}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-editorial-wide text-[#7F8B7E] block mb-1">
                  If you feel this:
                </span>
                <h3 className="font-editorial text-2xl text-[#252A25] group-hover:text-[#193B2C] transition-colors font-light leading-snug">
                  &ldquo;{item.symptom}&rdquo;
                </h3>
              </div>

              <p className="text-xs text-[#555E55] font-light leading-relaxed pt-2 border-t border-[#E8E7E0]/60">
                {item.guidance}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs font-semibold uppercase tracking-editorial-wide text-[#193B2C]">
                <span>Explore Protocol</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Training Programs Micro-banner */}
        <div className="mt-12 sm:mt-16 p-8 bg-[#F7F6F1] rounded-lg border border-[#E8E7E0] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-[10px] uppercase tracking-editorial-widest text-[#193B2C] font-semibold block">
              Pain Settled? Keep It That Way
            </span>
            <div className="font-editorial text-xl sm:text-2xl text-[#252A25] font-light">
              Corrective &amp; Strengthening Exercise Programs
            </div>
            <p className="text-xs text-[#555E55] font-light leading-relaxed">
              Relief is only half the job. Our active training programs in Sector F-7 build progressive muscular strength and better movement habits, so pain has far less reason to return.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <span className="px-3.5 py-1.5 rounded bg-[#FCFBF8] border border-[#E8E7E0] text-[10px] uppercase tracking-editorial-widest font-semibold text-[#193B2C]">
              Corrective Exercises
            </span>
            <span className="px-3.5 py-1.5 rounded bg-[#FCFBF8] border border-[#E8E7E0] text-[10px] uppercase tracking-editorial-widest font-semibold text-[#193B2C]">
              Strengthening Exercises
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

