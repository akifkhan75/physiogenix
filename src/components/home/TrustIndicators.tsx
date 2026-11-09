import React from "react";
import { Award, Clock, Star, Users, ShieldCheck, Check } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const TrustIndicators: React.FC = () => {
  const indicators = [
    {
      metric: "8+ Years",
      label: "Clinical Practice",
      detail: "Direct assessment & manual rehabilitation in Islamabad",
      icon: Clock,
    },
    {
      metric: "Max 12",
      label: "Ethical Session Cap",
      detail: "Measurable clinical milestones; zero perpetual dependency",
      icon: ShieldCheck,
    },
    {
      metric: "5.0 ★",
      label: "Google Verified",
      detail: "Consistently top-rated for spine, sciatica & neck recovery",
      icon: Star,
    },
    {
      metric: "DPT • STMU",
      label: "Doctor of Physical Therapy",
      detail: "Shifa Tameer-e-Millat University graduate & COMPT certified",
      icon: Award,
    },
    {
      metric: "1-on-1",
      label: "Dedicated Time",
      detail: "Private clinical room with Dr. Faiza; no group supervision",
      icon: Users,
    },
  ];

  return (
    <section className="py-10 bg-white border-b border-[#dbe7e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {indicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-4 rounded-xl bg-[#fafcfb] border border-[#dce8e3] hover:border-[#10a880]/50 transition-all flex flex-col justify-between text-left group"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className="editorial-serif text-2xl lg:text-3xl font-normal text-[#081715] group-hover:text-[#10a880] transition-colors">
                    {item.metric}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#e6f6f1] text-[#10a880] flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#081715] tracking-tight">
                    {item.label}
                  </h4>
                  <p className="text-[11px] text-[#55716c] mt-0.5 leading-relaxed font-light">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
