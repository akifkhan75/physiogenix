"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASINGS, prefersReducedMotion } from "@/lib/gsap";
import { MapPin, ShieldCheck, Building, HeartHandshake } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const ClinicExperience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        y: 35,
        opacity: 0,
        duration: 1.1,
        ease: EASINGS.editorial,
      });
    },
    { scope: sectionRef }
  );

  const spaces = [
    {
      num: "01",
      title: "1-on-1 Private Clinical Suites",
      desc: "Eliminating the crowded, noisy atmosphere typical of high-volume physical therapy halls. Consultations occur in private treatment rooms with Dr. Faiza.",
      tag: "Discreet Sanctuary",
    },
    {
      num: "02",
      title: "Hospital-Grade Clinical Hygiene",
      desc: "Sterile examination plinths, single-use medical filiform needles for dry needling, and strict hospital sanitization standards.",
      tag: "Sterile Protocol",
    },
    {
      num: "03",
      title: "Sector F-7 Markaz Centrality",
      desc: "Situated on Bhittai Road directly above Medicsi Hospital, adjacent to the PSO petrol pump with dedicated plaza parking and full elevator access.",
      tag: "Bhittai Road",
    },
    {
      num: "04",
      title: "Direct Doctor Continuity",
      desc: "Every appointment—from the initial 45-minute assessment to discharge at session 8 or 10—is personally conducted by Dr. Faiza Yousef.",
      tag: "Zero Delegation",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 bg-[#081411] text-[#f9faf8] border-b border-white/10 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div ref={titleRef} className="max-w-3xl space-y-4 pb-16 border-b border-white/10">
          <span className="text-[10px] uppercase tracking-editorial-widest text-[#20c997] block">
            05 // Clinic Environment
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
            An environment engineered for restorative calm &amp; precision.
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
            At Physiogenix, your appointment is an uninterrupted clinical sanctuary focused purely on biomechanical restoration.
          </p>
        </div>

        {/* 4 Architectural Space Plates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border-b border-white/10 my-16">
          {spaces.map((s) => (
            <div
              key={s.num}
              className="p-8 sm:p-12 bg-[#081411] hover:bg-[#0c1f1b] transition-colors duration-300 space-y-6 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-xs text-white/50">
                <span className="font-mono text-white/40">{s.num}</span>
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#20c997]">
                  {s.tag}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-[10px] text-white/40 uppercase tracking-editorial-wide">
                F-7 Markaz • 2nd Floor Chaudhary Plaza
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Coordinate Footer Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/60 font-light pt-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#20c997]" />
            <span>2nd Floor, Chaudhary Plaza (Above Medicsi Hospital, beside PSO), Sector F-7 Markaz, Islamabad</span>
          </div>
          <div>Hours: Mon – Fri 12:00 PM – 8:00 PM | Sat 3:00 PM – 8:00 PM</div>
        </div>
      </div>
    </section>
  );
};
