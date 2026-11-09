import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const PatientJourneySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#f5faf8] border-t border-[#e2ede8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0c7a5d] text-xs font-semibold uppercase tracking-wider">
            <span>The Clinical Pathway</span>
          </div>
          <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#0d211e]">
            Your 4-Stage Recovery Journey
          </h2>
          <p className="text-sm text-[#4a635f] font-light leading-relaxed">
            From acute pain decompression to lasting biomechanical independence. Clear milestones, no ambiguous treatment courses.
          </p>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {clinicData.patientJourney.map((step, index) => (
            <div
              key={step.step}
              className="relative p-6 rounded-2xl bg-white border border-[#e2ede8] shadow-sm flex flex-col justify-between hover:border-[#10a880]/50 transition-all hover:shadow-lg"
            >
              <div>
                {/* Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="editorial-serif text-3xl font-light text-[#10a880]">
                    {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#10a880]" />
                </div>

                <h3 className="editorial-serif text-xl font-medium text-[#102421] mb-1">
                  {step.title}
                </h3>
                <h4 className="text-xs font-semibold text-[#10a880] mb-3">
                  {step.subtitle}
                </h4>

                <p className="text-xs text-[#536965] leading-relaxed">
                  {step.details}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#f2f7f4] flex items-center justify-between text-[11px] text-[#6d847f]">
                <span>Stage {index + 1} of 4</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10a880]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
