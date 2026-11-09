import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Award, ShieldCheck, CheckCircle2, ArrowRight, BookOpen, HeartPulse, GraduationCap, Clock } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { DrFaizaPortrait } from "@/components/ui/DrFaizaPortrait";
import { clinicData } from "@/data/clinicData";

export const metadata: Metadata = {
  title: "About Dr. Faiza Yousef, DPT, COMPT | Lead Physiotherapist Islamabad",
  description:
    "Learn about Dr. Faiza Yousef, Doctor of Physical Therapy (STMU) with 8+ years experience. Certified in Orthopedic Manual Therapy (COMPT) and Dry Needling (CDNP). Founder of Physiogenix in F-7 Islamabad.",
  alternates: {
    canonical: "https://physiogenix.pk/about-dr-faiza",
  },
};

export default function AboutDrFaizaPage() {
  const { leadPractitioner } = clinicData;

  return (
    <div className="flex flex-col w-full bg-[#fbfdfc]">
      {/* Schema.org Person / Physician */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: "Dr. Faiza Yousef",
            honorificPrefix: "Dr.",
            jobTitle: "Founder & Lead Physical Therapist",
            worksFor: {
              "@type": "Physiotherapy",
              name: "Physiogenix",
              url: "https://physiogenix.pk",
            },
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "Shifa Tameer-e-Millat University (STMU)",
            },
            knowsAbout: [
              "Orthopedic Manual Therapy",
              "Dry Needling",
              "Dynamic Cupping",
              "Spinal Disc Rehabilitation",
              "Sciatica",
              "Posture Restoration",
            ],
            sameAs: [
              "https://www.instagram.com/faiza_fitnessphysio/",
              "https://www.instagram.com/_physiogenix_/",
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#f5faf8] to-[#fbfdfc] border-b border-[#e2ede8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0c7a5d] text-xs font-semibold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Clinical Leadership</span>
              </div>

              <h1 className="editorial-serif text-4xl sm:text-5xl lg:text-6xl text-[#0d211e] leading-[1.1]">
                Dr. Faiza Yousef <br />
                <span className="text-xl sm:text-2xl font-sans-body font-normal text-[#10a880] block mt-2">
                  DPT • COMPT • CDNP • CDDC
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#4a635f] font-light leading-relaxed">
                Doctor of Physical Therapy (STMU) with over 8 years of hands-on clinical experience in Islamabad. Pioneer of assessment-led, manual physical rehabilitation and founder of Physiogenix.
              </p>

              {/* Quick credential facts */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-white border border-[#e2ede8]">
                  <span className="text-[10px] uppercase text-[#7a918d] font-semibold block">Alma Mater</span>
                  <span className="font-semibold text-[#102421]">STMU Islamabad</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#e2ede8]">
                  <span className="text-[10px] uppercase text-[#7a918d] font-semibold block">Experience</span>
                  <span className="font-semibold text-[#102421]">8+ Years Clinical</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#e2ede8]">
                  <span className="text-[10px] uppercase text-[#7a918d] font-semibold block">Session Model</span>
                  <span className="font-semibold text-[#10a880]">Max 12 Sessions</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-[#10a880] hover:bg-[#0c8263] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Book Assessment with Dr. Faiza
                </Link>
                <a
                  href={leadPractitioner.instagramPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-[#f2f8f5] hover:bg-[#e3f2ec] text-[#0c7a5d] text-xs font-semibold transition-colors border border-[#d2eae0]"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Follow @faiza_fitnessphysio</span>
                </a>
              </div>
            </div>

            {/* Right Doctor Portrait Card (5 cols) */}
            <div className="lg:col-span-5">
              <DrFaizaPortrait />
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Biographical & Clinical Philosophy Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section 1: Clinical Origin & Training */}
          <div className="space-y-4 text-left">
            <h2 className="editorial-serif text-3xl sm:text-4xl text-[#0d211e]">
              Education &amp; Clinical Formative Years
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#4a635f] leading-relaxed font-light">
              <p>
                Dr. Faiza Yousef earned her <strong className="font-semibold text-[#102421]">Doctor of Physical Therapy (DPT)</strong> from <strong className="font-semibold text-[#102421]">Shifa Tameer-e-Millat University (STMU)</strong> in Islamabad, one of Pakistan&apos;s premier healthcare academic institutions.
              </p>
              <p>
                Recognizing that conventional physical therapy often defaults to passive machine modalities—such as generalized heating pads and ultrasound therapy—Dr. Faiza pursued rigorous post-graduate certifications in orthopedic manual therapy and advanced dry needling. Her certifications include:
              </p>

              {/* Certifications List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                {leadPractitioner.certifications.map((c) => (
                  <div key={c.abbr} className="p-4 rounded-2xl bg-[#f8fbf9] border border-[#e2ede8]">
                    <div className="inline-flex items-center gap-1 text-[#10a880] font-semibold text-xs mb-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{c.abbr}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#102421]">{c.title}</h4>
                    <p className="text-xs text-[#6d847f] mt-1.5 leading-relaxed">{c.focus}</p>
                  </div>
                ))}
              </div>

              <p>
                This training equips her to perform differential arthrokinematic evaluations: distinguishing whether a patient&apos;s sciatica is caused by a lumbar disc herniation, facet joint subluxation, or piriformis muscle spasm.
              </p>
            </div>
          </div>

          {/* Section 2: Clinical Philosophy — "Hands Before Machines" */}
          <div className="p-8 rounded-3xl bg-[#f2f8f5] border border-[#d6ebe2] space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#0c7a5d] text-xs font-semibold uppercase tracking-wider">
              <span>Core Clinical Doctrine</span>
            </div>
            <h3 className="editorial-serif text-2xl sm:text-3xl text-[#102421]">
              Why &ldquo;Hands Before Machines&rdquo; Matters
            </h3>
            <p className="text-sm sm:text-base text-[#445e59] leading-relaxed font-light">
              &ldquo;Machines provide sensory distraction. They do not alter joint mechanics, free entrapped nerve roots, or restore cervical lordosis. Real healing requires the clinician&apos;s hands to palpate soft tissue tension, test end-feel resistance, glide restricted facet joints, and trigger neuromuscular reset.&rdquo;
            </p>
            <p className="text-xs text-[#556e69]">
              — Dr. Faiza Yousef, Founder &amp; Clinical Director
            </p>
          </div>

          {/* Section 3: The 12-Session Cap */}
          <div className="space-y-4 text-left">
            <h2 className="editorial-serif text-3xl sm:text-4xl text-[#0d211e]">
              The Ethical 12-Session Cap Standard
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#4a635f] leading-relaxed font-light">
              <p>
                In an industry where clinics often encourage patients to purchase indefinite packages spanning months, Dr. Faiza introduced a transparent cap: <strong className="font-semibold text-[#102421]">no treatment plan exceeds 12 sessions</strong>.
              </p>
              <p>
                Most conditions—including disc bulges, frozen shoulder stages, and cervicogenic migraines—demonstrate marked improvement within 6 to 10 sessions. By setting a ceiling, patients are motivated, clinical accountability is guaranteed, and the focus remains firmly on restoring personal physical autonomy and home maintenance.
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="p-8 rounded-3xl bg-[#102421] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="editorial-serif text-2xl font-normal">
                Consult with Dr. Faiza in Sector F-7 Islamabad
              </h4>
              <p className="text-xs text-[#a4c9c1]">
                Book your 45-minute comprehensive biomechanical assessment.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#10a880] hover:bg-[#0c8263] text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
