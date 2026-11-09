import React from "react";
import { Hand, Clock, ShieldCheck, HeartPulse, Sparkles, CheckCircle2 } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#fbfdfc] border-t border-[#e2ede8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Ethos (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0c7a5d] text-xs font-semibold uppercase tracking-wider">
              <span>The Physiogenix Philosophy</span>
            </div>

            <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#0d211e] leading-tight">
              A clinical standard built on ethics, not endless appointments.
            </h2>

            <p className="text-sm sm:text-base text-[#4a635f] font-light leading-relaxed">
              We founded Physiogenix in Sector F-7, Islamabad, with a singular counter-cultural conviction: physiotherapy should empower you to live without us, not keep you hooked on continuous therapy visits.
            </p>

            {/* Quote Card */}
            <div className="p-6 rounded-2xl bg-[#f2f8f5] border border-[#d6ebe2] relative">
              <p className="editorial-serif text-lg italic text-[#102421]">
                &ldquo;If a therapist hooks you up to an electrical stimulator for 30 minutes without performing a hands-on joint or neurological examination, you are receiving passive maintenance, not clinical rehabilitation.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#10a880] text-white flex items-center justify-center font-bold text-xs">
                  F
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#102421]">Dr. Faiza Yousef, DPT</div>
                  <div className="text-[11px] text-[#556e69]">Founder &amp; Clinical Director</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars Matrix (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {clinicData.corePillars.map((pillar, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-[#e2ede8] shadow-sm hover:border-[#10a880]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase text-[#10a880] tracking-wider">
                      {pillar.tagline}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#e6f6f1] text-[#0c7a5d]">
                      {pillar.metric}
                    </span>
                  </div>

                  <h3 className="editorial-serif text-xl font-medium text-[#102421] mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#536965] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#f2f7f4] flex items-center gap-1.5 text-[11px] text-[#6d847f]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10a880]" />
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
