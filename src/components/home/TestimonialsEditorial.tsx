"use client";

import React, { useState, useRef } from "react";
import { Star, ArrowLeft, ArrowRight, ShieldCheck, Quote } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, EASINGS, prefersReducedMotion } from "@/lib/gsap";
import { clinicData } from "@/data/clinicData";

export const TestimonialsEditorial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const testimonials = clinicData.verifiedTestimonials;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 lg:py-36 bg-[#FCFBF8] border-b border-[#E8E7E0] text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8E7E0]">
          <div className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
              Patient Experiences
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#252A25] font-light leading-[1.08]">
              Documented Transformations
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center text-[#193B2C]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs text-[#555E55] font-medium tracking-editorial-wide">
              5.0 ★ Google Verified • F-7 Markaz
            </span>
          </div>
        </div>

        {/* Featured Editorial Quote & Slider */}
        <div className="pt-12 sm:pt-16 max-w-4xl mx-auto">
          <div
            ref={quoteRef}
            className="p-8 sm:p-12 lg:p-16 bg-[#F7F6F1] rounded-xl border border-[#E8E7E0] space-y-8 relative shadow-sm"
          >
            {/* Condition Tag */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="px-3 py-1 rounded bg-[#FCFBF8] border border-[#E8E7E0] text-[10px] uppercase tracking-editorial-widest font-semibold text-[#193B2C]">
                {current.condition}
              </span>
              <span className="text-xs font-mono text-[#7F8B7E]">
                Case 0{activeIndex + 1} of 0{testimonials.length}
              </span>
            </div>

            {/* Quote Typography */}
            <blockquote className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#252A25] font-light leading-relaxed italic">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Patient & Outcome Meta */}
            <div className="pt-6 border-t border-[#E8E7E0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-[#252A25]">
                  {current.patientName}
                </div>
                <div className="text-xs text-[#193B2C] font-medium mt-0.5">
                  Resolution: {current.outcome}
                </div>
                <div className="text-[10px] text-[#7F8B7E] uppercase tracking-editorial-widest mt-0.5">
                  {current.verifiedSource}
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-full border border-[#E8E7E0] hover:border-[#193B2C] bg-[#FCFBF8] flex items-center justify-center text-[#252A25] hover:text-[#193B2C] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-full border border-[#E8E7E0] hover:border-[#193B2C] bg-[#FCFBF8] flex items-center justify-center text-[#252A25] hover:text-[#193B2C] transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-[11px] text-[#7F8B7E]">
            All testimonials reflect verified outcomes under Dr. Faiza&apos;s direct care in Sector F-7 Markaz, Islamabad.
          </div>
        </div>
      </div>
    </section>
  );
};
