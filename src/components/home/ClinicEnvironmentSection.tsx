import React from "react";
import { Sparkles, ShieldCheck, MapPin, CheckCircle2, Building, HeartHandshake } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const ClinicEnvironmentSection: React.FC = () => {
  const highlights = [
    {
      title: "1-on-1 Private Clinical Suites",
      desc: "No loud crowded halls or overlapping patients. All manual consultations occur in quiet, dedicated treatment rooms.",
      icon: Building,
    },
    {
      title: "Rigorous Hospital Sanitization",
      desc: "All clinical plinths, needles, and manual tools are sterilized under clinical hospital-grade hygiene standards.",
      icon: ShieldCheck,
    },
    {
      title: "F-7 Markaz Central Accessibility",
      desc: "Located on Bhittai Road, 2nd Floor Chaudhary Plaza (above Medicsi Hospital) with convenient plaza parking.",
      icon: MapPin,
    },
    {
      title: "Direct Doctor Continuity",
      desc: "Every assessment and follow-up session is personally conducted by Dr. Faiza Yousef, ensuring clinical continuity.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f5faf8] border-t border-[#e2ede8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0c7a5d] text-xs font-semibold uppercase tracking-wider">
              <span>Clinical Sanctuary</span>
            </div>

            <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#0d211e] leading-tight">
              An environment designed for restorative calm &amp; precision.
            </h2>

            <p className="text-sm text-[#4a635f] font-light leading-relaxed">
              We have eliminated the cold, rushed atmosphere typical of busy physiotherapy centers. At Physiogenix, your appointment is an uninterrupted clinical sanctuary focused purely on biomechanical restoration.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-[#d6ebe2] text-xs text-[#395650] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#102421]">
                <MapPin className="w-4 h-4 text-[#10a880]" />
                <span>Islamabad F-7 Markaz Location</span>
              </div>
              <p className="leading-relaxed">
                2nd Floor, Chaudhary Plaza, Bhittai Road (above Medicsi Hospital, next to PSO Petrol Station, near Jinnah Super Market).
              </p>
            </div>
          </div>

          {/* Right Column: 4 Highlight Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#e2ede8] shadow-sm hover:border-[#10a880]/50 transition-all hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#e6f6f1] text-[#10a880] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="editorial-serif text-lg font-medium text-[#102421] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#536965] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

