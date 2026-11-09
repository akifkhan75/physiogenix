"use client";

import React from "react";
import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const TestimonialsEditorial: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#f4f6f3] border-b border-[#e0e6e1] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#e0e6e1]">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87] block">
              07 // Verified Outcomes
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0d1a17] font-light">
              Clinical Transformations
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center text-[#0f5948]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs text-[#475c57] font-medium tracking-editorial-wide">
              5.0 ★ Google Verified • Islamabad
            </span>
          </div>
        </div>

        {/* Minimal Editorial Quote Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pt-16">
          {clinicData.verifiedTestimonials.slice(0, 3).map((t, idx) => (
            <div
              key={t.id}
              className="space-y-6 flex flex-col justify-between border-t border-[#0d1a17] pt-6"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-[#758c87] block">
                  CASE ARCHETYPE // 0{idx + 1}
                </span>

                <h3 className="font-editorial text-xl font-medium text-[#0d1a17]">
                  {t.condition}
                </h3>

                <p className="font-editorial text-xl sm:text-2xl text-[#2d3f3b] leading-relaxed font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#e0e6e1] space-y-1">
                <div className="text-xs font-semibold text-[#0d1a17]">{t.patientName}</div>
                <div className="text-[11px] text-[#0f5948] font-medium">Outcome: {t.outcome}</div>
                <div className="text-[10px] text-[#758c87] uppercase tracking-editorial-widest">
                  {t.verifiedSource}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
