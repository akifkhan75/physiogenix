import React from "react";
import { Award, Clock, Star, Users, ShieldCheck } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const TrustIndicators: React.FC = () => {
  const indicators = [
    {
      metric: "8+ Years",
      label: "Clinical Practice",
      detail: "Hands-on assessment and rehabilitation experience in Islamabad",
      icon: Clock,
    },
    {
      metric: "Max 12",
      label: "Session Cap Standard",
      detail: "Ethical clinical pathways aimed at root-cause resolution",
      icon: ShieldCheck,
    },
    {
      metric: "5.0 ★",
      label: "Patient Rating",
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
      detail: "Exclusive clinical attention without crowded supervision",
      icon: Users,
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-[#e2ede8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {indicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-4 rounded-2xl bg-[#fafdfc] border border-[#e8f1ed] flex flex-col justify-between hover:border-[#10a880]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="editorial-serif text-2xl lg:text-3xl font-medium text-[#102421]">
                    {item.metric}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#e6f6f1] text-[#10a880] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#102421] tracking-tight">
                    {item.label}
                  </h4>
                  <p className="text-[11px] text-[#6d847f] mt-1 leading-relaxed">
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
