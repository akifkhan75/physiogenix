"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { clinicData } from "@/data/clinicData";

export const ServicesIndex: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          once: true,
        },
        defaults: { ease: "power2.out", duration: 0.75 },
      });

      tl.from(
        leftColRef.current,
        { y: 24, duration: 0.7, clearProps: "all" }
      ).from(
        ".service-image-card",
        { y: 24, duration: 0.7, stagger: 0.1, clearProps: "all" },
        "-=0.5"
      );
    },
    { scope: containerRef }
  );

  const featuredHighlights = [
    {
      id: "back-pain-feature",
      number: "01",
      tag: "Spinal Mobilization",
      title: "Back & Neck Pain Care",
      summary:
        "Sore from hip to shoulder blade? We map where it starts through hands-on joint mobilization and decompression.",
      sessionGuide: "6–10 Sessions",
      slug: "back-pain",
      image: "/images/clinic/03-hands-on-manual-care.jpg",
      alt: "Hands-on orthopedic manual therapy session at Physiogenix Islamabad",
    },
    {
      id: "dry-needling-feature",
      number: "02",
      tag: "Myofascial Release",
      title: "Clinical Dry Needling",
      summary:
        "Certified CDNP intervention targeting locked myofascial trigger points, releasing deep tension without machines.",
      sessionGuide: "4–6 Sessions",
      slug: "muscle-stiffness",
      image: "/images/clinic/06-dry-needling-support.jpg",
      alt: "Clinical dry needling myofascial release treatment at Physiogenix",
    },
    {
      id: "joint-rehab-feature",
      number: "03",
      tag: "Orthopaedic Recovery",
      title: "Injury Rehabilitation",
      summary:
        "Knee trouble, frozen shoulder, and life after surgery. Stage-by-stage progressive recovery to restore full movement.",
      sessionGuide: "8–12 Sessions",
      slug: "injury-rehabilitation",
      image: "/images/clinic/05-orthopaedic-therapy.jpg",
      alt: "Orthopaedic therapy and joint mobilization at Physiogenix clinic",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="services"
      className="py-24 sm:py-32 lg:py-36 bg-[#FCFBF8] border-b border-[#E8E7E0] text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, intro, and Full Directory (5 cols) */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
                Find Your Pain, Find Your Therapist
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#252A25] leading-[1.08]">
              Specialized Care, Sorted by Pain
            </h2>

            <p className="text-sm sm:text-base text-[#555E55] font-light leading-relaxed">
              At Physiogenix, we start by understanding how you move and what is causing discomfort before recommending treatment. Each problem has its own category with an ethical 12-session ceiling.
            </p>

            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-editorial-widest text-[#193B2C] hover:text-[#122B20] transition-colors group"
              >
                <span>View Complete 10-Department Directory</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Verified Clinical Departments List (from live site) */}
            <div className="pt-8 border-t border-[#E8E7E0] space-y-2">
              <span className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E] block pb-1">
                Verified Clinical Departments (Sector F-7)
              </span>
              {clinicData.services.slice(0, 7).map((dept) => (
                <Link
                  key={dept.id}
                  href={`/services/${dept.slug}`}
                  className="flex items-center justify-between text-xs text-[#555E55] hover:text-[#193B2C] transition-colors py-1.5 group border-b border-[#E8E7E0]/50"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform font-light">
                    {dept.title}
                  </span>
                  <span className="text-[10px] font-mono text-[#7F8B7E] group-hover:text-[#193B2C]">
                    {dept.typicalSessionCount}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: 3 Authentic Photo Cards (7 cols) */}
          <div
            ref={cardsContainerRef}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredHighlights.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="service-image-card group block bg-[#F7F6F1] rounded-lg border border-[#E8E7E0] overflow-hidden hover:border-[#193B2C]/40 transition-all duration-300 shadow-sm hover:shadow"
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8E7E0]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 320px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252A25]/70 via-transparent to-transparent opacity-85" />

                  {/* Top Tag & Number */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between text-[10px] tracking-editorial-widest uppercase">
                    <span className="px-2 py-0.5 rounded bg-[#FCFBF8]/90 backdrop-blur-sm text-[#193B2C] font-semibold">
                      {service.number}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#252A25]/70 backdrop-blur-sm text-[#FCFBF8] font-medium">
                      {service.sessionGuide}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <div className="text-[10px] font-semibold uppercase tracking-editorial-widest text-[#7F8B7E]">
                    {service.tag}
                  </div>

                  <h3 className="font-editorial text-lg font-normal text-[#252A25] group-hover:text-[#193B2C] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#555E55] font-light leading-relaxed line-clamp-2">
                    {service.summary}
                  </p>

                  <div className="pt-1 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-editorial-wide text-[#193B2C]">
                    <span>View Protocol</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
