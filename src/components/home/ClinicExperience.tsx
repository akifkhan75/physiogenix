"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { MapPin, ShieldCheck, Clock } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const ClinicExperience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          once: true,
        },
        defaults: { ease: "power2.out", duration: 0.75 },
      });

      tl.from(
        imageFrameRef.current,
        { scale: 0.98, y: 15, duration: 0.75, clearProps: "all" }
      ).from(
        contentRef.current,
        { y: 20, duration: 0.6, clearProps: "all" },
        "-=0.5"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-36 bg-[#F7F6F1] border-b border-[#E8E7E0] text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Editorial Heading & Description */}
        <div ref={contentRef} className="max-w-3xl space-y-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
              Clinic Environment // Sector F-7 Islamabad
            </span>
            <span className="text-[#AAB7A5]">•</span>
            <span className="text-[10px] font-mono text-[#7F8B7E] uppercase">
              Chaudhary Plaza, Bhittai Road
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#252A25] leading-[1.08]">
            An Unhurried Sanctuary for Deliberate Movement
          </h2>
          <p className="text-base sm:text-lg text-[#555E55] font-light leading-relaxed">
            Located on the 2nd Floor of Chaudhary Plaza on Bhittai Road (next to the PSO Petrol Station, above Medicsi Hospital), Physiogenix is an authentic, private clinical space. With a dedicated rehabilitation gym featuring our signature &ldquo;Movement is Medicine&rdquo; mural, private assessment rooms, and calm natural light, every detail supports your physical restoration.
          </p>
        </div>

        {/* Dual Asymmetric Authentic Photo Feature */}
        <div ref={imageFrameRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Photo: Movement is Medicine Gym (7 cols) */}
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[16/11] rounded-xl overflow-hidden border border-[#E8E7E0] shadow-sm bg-[#FCFBF8]">
            <Image
              src="/images/clinic/12-gym-movement-is-medicine.jpg"
              alt="Physiogenix Rehabilitation Gym with Movement is Medicine wall mural in F-7 Islamabad"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center transition-transform duration-700 ease-out hover:scale-102"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#252A25]/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-[#FCFBF8]">
              <span className="text-[10px] uppercase tracking-editorial-widest text-[#AAB7A5] block">
                Active Rehabilitation Wing
              </span>
              <div className="font-editorial text-2xl sm:text-3xl font-light text-[#FCFBF8] mt-0.5">
                Movement is Medicine Gym
              </div>
              <p className="text-xs text-[#E8E7E0] font-light mt-1 max-w-md">
                Dedicated functional kinetic gym for corrective spinal exercises and progressive resistance loading.
              </p>
            </div>

            <div className="absolute top-4 right-4 px-3 py-1 bg-[#FCFBF8]/90 backdrop-blur-sm rounded border border-[#E8E7E0] text-[9px] uppercase tracking-editorial-widest font-semibold text-[#193B2C]">
              Active Training Area
            </div>
          </div>

          {/* Secondary Photos Stack (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Reception Desk */}
            <div className="relative aspect-[4/3] lg:aspect-[16/9] rounded-xl overflow-hidden border border-[#E8E7E0] shadow-sm bg-[#FCFBF8]">
              <Image
                src="/images/clinic/07-reception-desk.jpg"
                alt="Physiogenix welcoming clinical reception desk and team in F-7 Islamabad"
                fill
                sizes="(max-width: 1024px) 50vw, 40vw"
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252A25]/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-[#FCFBF8]">
                <span className="text-[9px] uppercase tracking-editorial-widest text-[#AAB7A5] block">
                  The Welcome Experience
                </span>
                <div className="font-editorial text-lg sm:text-xl font-light text-[#FCFBF8]">
                  Dedicated F-7 Reception &amp; Patient Lounge
                </div>
              </div>
            </div>

            {/* Entrance Glass Door */}
            <div className="relative aspect-[4/3] lg:aspect-[16/9] rounded-xl overflow-hidden border border-[#E8E7E0] shadow-sm bg-[#FCFBF8]">
              <Image
                src="/images/clinic/01-reception-glass-door.jpg"
                alt="Physiogenix entrance glass door on 2nd Floor Chaudhary Plaza Bhittai Road"
                fill
                sizes="(max-width: 1024px) 50vw, 40vw"
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252A25]/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-[#FCFBF8]">
                <span className="text-[9px] uppercase tracking-editorial-widest text-[#AAB7A5] block">
                  Private Practice Entry
                </span>
                <div className="font-editorial text-lg sm:text-xl font-light text-[#FCFBF8]">
                  2nd Floor, Chaudhary Plaza, Bhittai Road
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Minimal Pillars beneath photos */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#E8E7E0]">
          <div>
            <span className="text-xs font-mono text-[#193B2C] block">01</span>
            <div className="text-xs font-semibold uppercase tracking-editorial-wide text-[#252A25] mt-1">
              Private 1-on-1 Rooms
            </div>
            <p className="text-xs sm:text-sm text-[#555E55] font-light mt-1 leading-relaxed">
              Quiet and unhurried. Every assessment and manual therapy treatment is performed in a private room without open-ward distractions.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono text-[#193B2C] block">02</span>
            <div className="text-xs font-semibold uppercase tracking-editorial-wide text-[#252A25] mt-1">
              Sterile Clinical Standards
            </div>
            <p className="text-xs sm:text-sm text-[#555E55] font-light mt-1 leading-relaxed">
              Medical hygiene, single-use sterile filiform needles for dry needling, and pristine clinical plinths.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono text-[#193B2C] block">03</span>
            <div className="text-xs font-semibold uppercase tracking-editorial-wide text-[#252A25] mt-1">
              Zero Delegation Policy
            </div>
            <p className="text-xs sm:text-sm text-[#555E55] font-light mt-1 leading-relaxed">
              Every recovery plan is led personally by Dr. Faiza Yousef. Hands come before gadgets and treatment is tailored to your kinetic response.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
