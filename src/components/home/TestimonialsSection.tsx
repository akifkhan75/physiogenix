import React from "react";
import { Star, Quote, CheckCircle2, ShieldCheck } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-[#e2ede8]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0c7a5d] text-xs font-semibold uppercase tracking-wider">
            <span>Verified Patient Outcomes</span>
          </div>
          <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#0d211e]">
            Transformations &amp; Clinical Results
          </h2>
          <p className="text-sm text-[#4a635f] font-light leading-relaxed">
            Real feedback from verified patients treated at Physiogenix Islamabad. We pride ourselves on measurable biomechanical recovery.
          </p>
        </div>

        {/* Testimonials Grid (4 cards) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {clinicData.verifiedTestimonials.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-3xl bg-[#fafdfc] border border-[#e2ede8] flex flex-col justify-between hover:border-[#10a880]/50 transition-all hover:shadow-lg hover:shadow-[#10a880]/5"
            >
              <div className="space-y-4">
                {/* Top Rating & Condition */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#e5a024]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#f2f8f5] border border-[#d6ebe2] text-[10px] font-semibold text-[#0c7a5d] uppercase tracking-wider">
                    {t.verifiedSource}
                  </span>
                </div>

                {/* Patient Diagnosis */}
                <div>
                  <span className="text-[10px] uppercase font-semibold text-[#7a918d] tracking-wider block">
                    Treated Condition:
                  </span>
                  <h4 className="text-sm font-semibold text-[#102421]">
                    {t.condition}
                  </h4>
                </div>

                {/* Patient Quote */}
                <p className="text-xs sm:text-sm text-[#445e59] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Outcome & Patient Name */}
              <div className="mt-6 pt-4 border-t border-[#ebf3f0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                <div>
                  <span className="font-semibold text-[#102421]">{t.patientName}</span>
                  <span className="text-[#7a918d] text-[11px] block">Verified Islamabad Patient</span>
                </div>

                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#e6f6f1] text-[#0c7a5d] text-[11px] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10a880]" />
                  <span>{t.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
