import React from "react";
import { Hand, Clock, ShieldCheck, HeartPulse, Sparkles, CheckCircle2 } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#071412] text-white border-y border-[#15342d] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-[#10a880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#365759]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Manifesto & Quote (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#20c997] text-xs font-semibold uppercase tracking-wider">
              <span>The Clinical Manifesto</span>
            </div>

            <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              A clinical standard built on ethics, not perpetual dependency.
            </h2>

            <p className="text-sm sm:text-base text-[#a3c4bd] font-light leading-relaxed">
              We established Physiogenix in Sector F-7, Islamabad, with an uncompromising conviction: authentic physical therapy must restore your physical independence, not keep you hooked on continuous therapy visits.
            </p>

            {/* Dr. Faiza Quote Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative space-y-4">
              <p className="editorial-serif text-lg sm:text-xl italic text-white/95 leading-relaxed font-normal">
                &ldquo;If a clinic connects you to an electronic stimulator for 30 minutes without performing physical joint palpation or neurodynamic testing, you are receiving passive distraction, not clinical rehabilitation.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-[#10a880] text-white flex items-center justify-center font-bold text-xs shadow-md">
                  F
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Dr. Faiza Yousef, DPT</div>
                  <div className="text-[11px] text-[#20c997]">STMU Alumna • Lead Clinical Director</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Architectural Pillar Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {clinicData.corePillars.map((pillar, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#0c2420] border border-[#1a443b] hover:border-[#10a880]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#20c997]">
                      {pillar.tagline}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/10 text-[#d2eae2] border border-white/10">
                      {pillar.metric}
                    </span>
                  </div>

                  <h3 className="editorial-serif text-xl sm:text-2xl font-normal text-white mb-2 group-hover:text-[#20c997] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#a3c4bd] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#7ea39b]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#20c997]" />
                  <span>{pillar.metricLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
