import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
    title: `${service.title} | Physiogenix Islamabad`,
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
    <div className="flex flex-col w-full bg-[#f9faf8] text-left">
      <Breadcrumbs
        items={[
          { name: "Departments", href: "/services" },
          { name: service.title, href: `/services/${service.slug}`, current: true },
        ]}
      />

      {/* Header */}
      <section className="pt-8 pb-20 sm:pb-28 border-b border-[#e0e6e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl space-y-6">
            <span className="text-[10px] uppercase tracking-editorial-widest text-[#0f5948] font-bold block">
              Department Protocol // {service.slug}
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-[72px] leading-[0.98] font-light text-[#0d1a17]">
              {service.title}
            </h1>
            <p className="font-editorial text-2xl sm:text-3xl text-[#475c57] leading-relaxed font-light">
              {service.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-[#758c87]">
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
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87] block">
                  Clinical Methodology
                </span>
                <p className="text-sm sm:text-base text-[#475c57] font-light leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Indications */}
              <div className="p-8 bg-white border border-[#e0e6e1] space-y-4">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#0f5948] font-bold block">
                  Target Diagnoses &amp; Indications
                </span>
                <div className="space-y-2 text-xs text-[#284440]">
                  {service.clinicalIndications.map((ind, i) => (
                    <div key={i} className="flex items-start gap-2.5 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0f5948] shrink-0 mt-0.5" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatment Modalities */}
              <div className="p-8 bg-white border border-[#e0e6e1] space-y-4">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#0f5948] font-bold block">
                  Manual Interventions &amp; Modalities Applied
                </span>
                <div className="space-y-2 text-xs text-[#284440]">
                  {service.treatmentModalities.map((mod, i) => (
                    <div key={i} className="flex items-start gap-2.5 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0f5948] shrink-0 mt-1.5" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Outcomes */}
              <div className="p-8 bg-[#f2f5f1] border border-[#e0e6e1] space-y-4">
                <span className="text-[10px] uppercase tracking-editorial-widest text-[#0f5948] font-bold block">
                  Discharge &amp; Expected Outcomes
                </span>
                <div className="space-y-2 text-xs text-[#284440]">
                  {service.expectedOutcomes.map((out, i) => (
                    <div key={i} className="flex items-start gap-2.5 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0f5948] shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Booking Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 p-8 bg-white border border-[#e0e6e1] space-y-6">
                <div className="pb-4 border-b border-[#e0e6e1]">
                  <span className="text-[10px] uppercase tracking-editorial-widest text-[#0f5948] font-bold block">
                    Direct Consultation
                  </span>
                  <h3 className="font-editorial text-2xl text-[#0d1a17] mt-1">
                    Book for {service.title}
                  </h3>
                  <p className="text-xs text-[#5c736e] font-light mt-0.5">
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
