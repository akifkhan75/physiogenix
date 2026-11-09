import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Activity,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Layers,
  Sparkles,
  Phone,
  MessageSquare,
} from "lucide-react";
import { clinicData, ServiceItem } from "@/data/clinicData";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

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
      title: "Service Not Found | Physiogenix",
    };
  }

  return {
    title: `${service.title} | Physiogenix Islamabad`,
    description: `${service.shortDescription} Led by Dr. Faiza Yousef in Sector F-7 Markaz, Islamabad.`,
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
    <div className="flex flex-col w-full bg-[#fbfdfc]">
      {/* Schema.org MedicalProcedure / Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: service.title,
            description: service.fullDescription,
            procedureType: "NoninvasiveProcedure",
            bodyLocation: "Musculoskeletal System",
            howPerformed: service.treatmentModalities.join(", "),
            provider: {
              "@type": "Physiotherapy",
              name: "Physiogenix",
              url: "https://physiogenix.pk",
            },
          }),
        }}
      />

      {/* Hero Header */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#f5faf8] to-[#fbfdfc] border-b border-[#e2ede8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/services"
              className="text-xs font-semibold text-[#10a880] hover:underline"
            >
              ← All Services
            </Link>
            <span className="text-[#a4c9c1]">•</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#e6f6f1] text-[#0c7a5d] text-[10px] font-semibold uppercase tracking-wider">
              {service.featuredBadge || "Specialized Treatment"}
            </span>
          </div>

          <h1 className="editorial-serif text-3xl sm:text-5xl lg:text-6xl text-[#0d211e] leading-[1.1]">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-[#4a635f] font-light leading-relaxed max-w-3xl">
            {service.shortDescription}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#284440]">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#e2ede8]">
              <Clock className="w-3.5 h-3.5 text-[#10a880]" />
              <span>Session Model: <strong>{service.typicalSessionCount}</strong></span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#e2ede8]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10a880]" />
              <span>Dr. Faiza Yousef (DPT, COMPT)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Booking Split */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-10 text-left">
              {/* Detailed Narrative */}
              <div className="space-y-4">
                <h2 className="editorial-serif text-2xl sm:text-3xl text-[#102421]">
                  Clinical Methodology &amp; Indications
                </h2>
                <div className="text-sm sm:text-base text-[#4a635f] leading-relaxed font-light space-y-3">
                  <p>{service.fullDescription}</p>
                </div>
              </div>

              {/* Indications */}
              <div className="p-6 rounded-2xl bg-[#fafdfc] border border-[#e2ede8] space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#10a880]">
                  Target Clinical Indications
                </h3>
                <div className="space-y-2">
                  {service.clinicalIndications.map((ind, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#29423e]">
                      <CheckCircle2 className="w-4 h-4 text-[#10a880] shrink-0 mt-0.5" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modalities & Procedures */}
              <div className="p-6 rounded-2xl bg-white border border-[#e2ede8] space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#10a880]">
                  Specific Treatment Modalities Applied
                </h3>
                <div className="space-y-2">
                  {service.treatmentModalities.map((mod, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#29423e]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10a880] shrink-0 mt-1.5" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Clinical Outcomes */}
              <div className="p-6 rounded-2xl bg-[#f2f8f5] border border-[#d6ebe2] space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0c7a5d]">
                  Expected Patient Outcomes
                </h3>
                <div className="space-y-2">
                  {service.expectedOutcomes.map((out, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#29423e]">
                      <CheckCircle2 className="w-4 h-4 text-[#0c7a5d] shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Back to all services */}
              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10a880] hover:text-[#0c8263]"
                >
                  <span>Explore Other 7 Clinical Departments</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Booking Form Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 p-6 sm:p-7 rounded-3xl bg-white border border-[#dbece4] shadow-xl space-y-5">
                <div className="border-b border-[#eef5f2] pb-4">
                  <span className="text-[10px] font-semibold uppercase text-[#10a880] tracking-wider block">
                    Direct Scheduling
                  </span>
                  <h3 className="editorial-serif text-2xl font-medium text-[#102421]">
                    Book for {service.title}
                  </h3>
                  <p className="text-xs text-[#6d847f] mt-1">
                    Sector F-7 Markaz, Islamabad
                  </p>
                </div>

                <AppointmentForm defaultService={service.title} />

                <div className="pt-3 border-t border-[#eef5f2] text-center">
                  <a
                    href={clinicData.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#0c7a5d] hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#10a880]" />
                    <span>Or chat instantly on WhatsApp (+92 330 5122052)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

