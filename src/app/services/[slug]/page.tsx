import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { clinicData } from "@/data/clinicData";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return clinicData.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = clinicData.services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Protocol Not Found | Physiogenix",
    };
  }

  return {
    title: `${service.title} | Physiogenix Islamabad F-7`,
    description: `${service.shortDescription} Directed by Dr. Faiza Yousef in Sector F-7 Markaz, Islamabad.`,
    alternates: {
      canonical: `https://physiogenix.pk/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Physiogenix`,
      description: service.shortDescription,
      url: `https://physiogenix.pk/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = clinicData.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-[#FCFBF8] text-left">
      <Breadcrumbs
        items={[
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${service.slug}`, current: true },
        ]}
      />

      {/* Header */}
      <section className="pt-8 pb-16 sm:pb-24 border-b border-[#E8E7E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
                Department Protocol // {service.slug}
              </span>
              <span className="text-[#AAB7A5]">•</span>
              <span className="text-[10px] font-mono text-[#7F8B7E] uppercase">
                {service.featuredBadge || "Verified Care"}
              </span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-[72px] leading-[0.98] font-light text-[#252A25]">
              {service.title}
            </h1>
            <p className="font-editorial text-2xl sm:text-3xl text-[#555E55] leading-relaxed font-light">
              {service.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-[#7F8B7E]">
              <span>TIMELINE: {service.typicalSessionCount}</span>
              <span>•</span>
              <span>DIRECTOR: DR. FAIZA YOUSEF (DPT, COMPT)</span>
              <span>•</span>
              <span>SECTOR F-7 MARKAZ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Split */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              {/* Authentic Photo if present */}
              {service.heroImage && (
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#E8E7E0] bg-[#F7F6F1]">
                  <Image
                    src={service.heroImage}
                    alt={`${service.title} clinical care at Physiogenix Islamabad`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252A25]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 text-xs font-mono text-[#FCFBF8] bg-[#252A25]/80 px-3 py-1 rounded backdrop-blur-sm">
                    Authentic Clinical Care // Sector F-7 Islamabad
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E] font-semibold block">
                  Clinical Methodology &amp; Biomechanical Approach
                </span>
                <p className="text-sm sm:text-base text-[#555E55] font-light leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Indications */}
              <div className="p-8 bg-[#F7F6F1] rounded-lg border border-[#E8E7E0] space-y-4">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#193B2C] font-semibold block">
                  Target Diagnoses &amp; Indications
                </span>
                <div className="space-y-2.5 text-xs sm:text-sm text-[#252A25]">
                  {service.clinicalIndications.map((ind, i) => (
                    <div key={i} className="flex items-start gap-2.5 font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#193B2C] shrink-0 mt-0.5" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatment Modalities */}
              <div className="p-8 bg-[#FCFBF8] rounded-lg border border-[#E8E7E0] space-y-4">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#193B2C] font-semibold block">
                  Manual Interventions &amp; Modalities Applied
                </span>
                <div className="space-y-2.5 text-xs sm:text-sm text-[#252A25]">
                  {service.treatmentModalities.map((mod, i) => (
                    <div key={i} className="flex items-start gap-2.5 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#193B2C] shrink-0 mt-2" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Outcomes */}
              <div className="p-8 bg-[#F7F6F1] rounded-lg border border-[#E8E7E0] space-y-4">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#193B2C] font-semibold block">
                  Discharge &amp; Expected Outcomes (Max 12 Sessions)
                </span>
                <div className="space-y-2.5 text-xs sm:text-sm text-[#252A25]">
                  {service.expectedOutcomes.map((out, i) => (
                    <div key={i} className="flex items-start gap-2.5 font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#193B2C] shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Booking Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 p-8 bg-[#FCFBF8] rounded-xl border border-[#E8E7E0] space-y-6 shadow-sm">
                <div className="pb-4 border-b border-[#E8E7E0]">
                  <span className="text-[10px] uppercase tracking-editorial-widest text-[#193B2C] font-semibold block">
                    Direct Consultation
                  </span>
                  <h3 className="font-editorial text-2xl text-[#252A25] mt-1 font-light">
                    Schedule for {service.title}
                  </h3>
                  <p className="text-xs text-[#555E55] font-light mt-0.5">
                    Sector F-7 Markaz, Islamabad
                  </p>
                </div>

                <AppointmentForm defaultService={service.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
