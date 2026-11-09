import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { clinicData } from "@/data/clinicData";
import { InstagramIcon } from "@/components/ui/Icons";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Dr. Faiza Yousef, DPT, COMPT | Lead Physiotherapist Islamabad",
  description:
    "Learn about Dr. Faiza Yousef, Doctor of Physical Therapy (STMU) with 8+ years clinical experience in Sector F-7 Islamabad. Certified in Orthopedic Manual Therapy (COMPT) and Dry Needling (CDNP).",
  alternates: {
    canonical: "https://physiogenix.pk/about-dr-faiza",
  },
};

export default function AboutDrFaizaPage() {
  const { leadPractitioner } = clinicData;

  return (
    <div className="flex flex-col w-full bg-[#f9faf8] text-left">
      <Breadcrumbs
        items={[{ name: "Dr. Faiza Yousef", href: "/about-dr-faiza", current: true }]}
      />

      {/* Hero Header */}
      <section className="pt-8 pb-20 sm:pb-28 border-b border-[#e0e6e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87] block">
                  Practitioner Profile // STMU Alumna
                </span>
                <h1 className="font-editorial text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] font-light text-[#0d1a17]">
                  Dr. Faiza Yousef <br />
                  <span className="text-2xl sm:text-3xl font-sans-editorial font-normal text-[#0f5948] block mt-2">
                    DPT • COMPT • CDNP • CDDC
                  </span>
                </h1>
              </div>

              <p className="font-editorial text-2xl sm:text-3xl text-[#475c57] leading-relaxed font-light">
                Founder and Clinical Director of Physiogenix. Championing hands-before-machines assessment, orthopedic joint mobilization, and patient movement autonomy in Islamabad.
              </p>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#e0e6e1] text-xs">
                <div>
                  <span className="font-editorial text-2xl text-[#0d1a17] block">STMU</span>
                  <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87]">
                    Doctor of Physical Therapy
                  </span>
                </div>
                <div>
                  <span className="font-editorial text-2xl text-[#0f5948] block">8+ Years</span>
                  <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87]">
                    Clinical Practice
                  </span>
                </div>
                <div>
                  <span className="font-editorial text-2xl text-[#0d1a17] block">Max 12</span>
                  <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87]">
                    Session Cap Standard
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 bg-[#0f5948] hover:bg-[#0b4336] text-[#f9faf8] text-xs font-semibold uppercase tracking-editorial-wide transition-colors"
                >
                  Schedule Assessment with Dr. Faiza
                </Link>

                <a
                  href={leadPractitioner.instagramPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#e0e6e1] hover:border-[#0f5948] text-[#0d1a17] text-xs font-semibold uppercase tracking-editorial-wide transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>@faiza_fitnessphysio</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right Portrait Plate (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-lg overflow-hidden border border-[#E8E7E0] bg-[#FCFBF8] shadow-sm">
                <Image
                  src="/dr-faiza/dr-faiza-portrait-600.jpg"
                  alt="Dr. Faiza Yousef, DPT, COMPT - Lead Physical Therapist"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                  className="object-cover object-center filter contrast-[1.02]"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#193B2C]/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#FCFBF8]/90 backdrop-blur-sm rounded border border-[#E8E7E0] text-[9px] uppercase tracking-editorial-widest font-semibold text-[#193B2C]">
                  STMU Alumna • Islamabad
                </div>

                <div className="absolute bottom-0 inset-x-0 p-6 text-left text-[#FCFBF8]">
                  <span className="text-[10px] uppercase tracking-editorial-widest text-[#AAB7A5] block">
                    Verified Lead Clinician
                  </span>
                  <div className="font-editorial text-2xl font-light text-[#FCFBF8] mt-0.5">
                    Dr. Faiza Yousef
                  </div>
                  <div className="text-xs text-[#E8E7E0] font-light mt-1">
                    DPT • COMPT • CDNP • CDDC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
          {/* Education & Credentials */}
          <div className="space-y-6">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#0d1a17]">
              Academic Foundation &amp; Post-Graduate Training
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#475c57] font-light leading-relaxed">
              <p>
                Dr. Faiza Yousef completed her <strong className="font-medium text-[#0d1a17]">Doctor of Physical Therapy (DPT)</strong> degree at <strong className="font-medium text-[#0d1a17]">Shifa Tameer-e-Millat University (STMU)</strong> in Islamabad, one of Pakistan&apos;s leading medical faculties.
              </p>
              <p>
                To provide root-cause mechanical care rather than relying on standard passive machines, she pursued advanced post-graduate certifications:
              </p>

              {/* Certifications Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {leadPractitioner.certifications.map((c) => (
                  <div key={c.abbr} className="p-5 bg-white border border-[#e0e6e1] space-y-1">
                    <span className="font-mono text-xs text-[#0f5948] font-semibold block">{c.abbr}</span>
                    <h4 className="font-semibold text-sm text-[#0d1a17]">{c.title}</h4>
                    <p className="text-xs text-[#5c736e] font-light leading-relaxed pt-1">{c.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy Statement */}
          <div className="p-8 sm:p-10 bg-[#f2f5f1] border border-[#e0e6e1] space-y-3">
            <span className="text-[10px] uppercase tracking-editorial-widest text-[#0f5948] font-bold block">
              Core Clinical Doctrine
            </span>
            <p className="font-editorial text-2xl sm:text-3xl text-[#0d1a17] font-light leading-relaxed">
              &ldquo;Machines provide sensory distraction. They do not alter joint arthrokinematics, free entrapped nerve roots, or restore spinal alignment. Real healing requires the clinician&apos;s hands to palpate tissue tension, test end-feel resistance, glide restricted facet joints, and trigger neuromuscular reset.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
