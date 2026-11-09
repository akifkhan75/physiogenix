"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, EASINGS, prefersReducedMotion } from "@/lib/gsap";

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

  const featuredServices = [
    {
      id: "ortho-manual",
      number: "01",
      tag: "Manual Medicine",
      title: "Orthopaedic & Spinal Manual Therapy",
      summary:
        "High-precision joint mobilization, lumbar decompression, and manual soft-tissue release for persistent spine and joint disorders.",
      sessionGuide: "6–10 Sessions",
      slug: "orthopedic-manual-therapy",
      image: "/images/service-manual-therapy.jpg",
      alt: "Close-up of precise manual spinal therapy hands-on technique",
    },
    {
      id: "biomechanics",
      number: "02",
      tag: "Biomechanical Analysis",
      title: "Spinal Alignment & Postural Restoration",
      summary:
        "Anatomical assessment to correct scoliosis, forward-head posture, and compensatory movement patterns from desk work and injury.",
      sessionGuide: "4–8 Sessions",
      slug: "postural-ergonomic-rehabilitation",
      image: "/images/service-spine-biomarkers.jpg",
      alt: "Anatomical human spinal column model in bright minimalist clinic",
    },
    {
      id: "sports-rehab",
      number: "03",
      tag: "Movement Optimization",
      title: "Sports Injury & Functional Movement Recovery",
      summary:
        "Kinetic chain conditioning and neuromuscular re-education for athletes, runners, and active individuals recovering from ligament or muscle strain.",
      sessionGuide: "8–12 Sessions",
      slug: "sports-injury-rehabilitation",
      image: "/images/clinic-sanctuary-editorial.jpg",
      alt: "Boutique clinic sanctuary interior with natural light and treatment table",
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
          {/* Left Column: Heading, intro, and Explore All link (4 cols) */}
          <div ref={leftColRef} className="lg:col-span-4 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
              Specialized Care
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#252A25] leading-[1.08]">
              Restorative Clinical Services
            </h2>

            <p className="text-sm sm:text-base text-[#555E55] font-light leading-relaxed">
              Every protocol is evaluated and personally administered by Dr. Faiza Yousef. Combining advanced manual joint mobilization, clinical dry needling, and neuromuscular retraining to restore fluid, pain-free movement.
            </p>

            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-editorial-widest text-[#193B2C] hover:text-[#122B20] transition-colors group"
              >
                <span>Explore All 8 Departments</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Quick Department Directory */}
            <div className="pt-8 border-t border-[#E8E7E0] space-y-2.5">
              <span className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E] block pb-1">
                Clinical Departments Directory
              </span>
              {[
                { name: "Dry Needling & Myofascial Release", href: "/services/dry-needling-myofascial" },
                { name: "Sciatica & Nerve Entrapment", href: "/services/sciatica-nerve-radiculopathy" },
                { name: "Frozen Shoulder Protocol", href: "/services/frozen-shoulder-capsulitis" },
                { name: "Knee & Joint Preservation", href: "/services/knee-osteoarthritis-joint" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between text-xs text-[#555E55] hover:text-[#193B2C] transition-colors py-1 group border-b border-[#E8E7E0]/40"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#AAB7A5] group-hover:text-[#193B2C] transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Carefully arranged image-led service collection (8 cols) */}
          <div
            ref={cardsContainerRef}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredServices.map((service) => (
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 360px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252A25]/60 via-transparent to-transparent opacity-80" />
                  
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
                <div className="p-5 space-y-3">
                  <div className="text-[10px] font-semibold uppercase tracking-editorial-widest text-[#7F8B7E]">
                    {service.tag}
                  </div>

                  <h3 className="font-editorial text-xl font-normal text-[#252A25] group-hover:text-[#193B2C] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#555E55] font-light leading-relaxed line-clamp-2">
                    {service.summary}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-editorial-wide text-[#193B2C]">
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
