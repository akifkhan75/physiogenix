import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const PatientJourneySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#fafcfb] border-b border-[#dbe7e2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0b8061] text-xs font-semibold uppercase tracking-wider">
            <span>The Clinical Pathway</span>
          </div>
          <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#081715]">
            Your 4-Stage Recovery Journey
          </h2>
          <p className="text-sm text-[#4a635f] font-light leading-relaxed">
            From acute pain decompression to lasting biomechanical independence. Clear milestones, no ambiguous treatment courses.
          </p>
        </div>

        {/* 4-Step Process Timeline Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {clinicData.patientJourney.map((step, index) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-white border border-[#dbe7e2] hover:border-[#10a880]/50 shadow-sm flex flex-col justify-between transition-all hover:shadow-md group"
            >
              <div>
                {/* Step Number Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#edf4f1]">
                  <span className="editorial-serif text-3xl font-light text-[#10a880] group-hover:text-[#0b8061] transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#738c87]">
                    Stage 0{index + 1}
                  </span>
                </div>

                <h3 className="editorial-serif text-xl font-medium text-[#081715] mb-1">
                  {step.title}
                </h3>
                <h4 className="text-xs font-semibold text-[#10a880] mb-3">
                  {step.subtitle}
                </h4>

                <p className="text-xs text-[#526e68] leading-relaxed font-light">
                  {step.details}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#edf4f1] flex items-center justify-between text-[11px] text-[#647f7a]">
                <span>Phase {index + 1} of 4</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10a880]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
