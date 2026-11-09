import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, CheckCircle2, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { clinicData } from "@/data/clinicData";

export const DrFaizaBioSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#fbfdfc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Visual Asset & Credentials Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#f2f8f5] via-white to-[#eaf4ef] border border-[#d2eae0] shadow-xl">
              {/* Profile Image Frame */}
              <div className="flex flex-col sm:flex-row items-center gap-5 pb-6 border-b border-[#e2ede8]">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden p-1 bg-white shadow-md border border-[#10a880]/30 shrink-0">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#e0f0ea]">
                    <Image
                      src="/dr-faiza/dr-faiza-avatar.jpg"
                      alt="Dr. Faiza Yousef, DPT - Lead Physiotherapist"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#e6f6f1] text-[#0c7a5d] text-[10px] font-semibold uppercase tracking-wider">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Founder & Clinical Director</span>
                  </div>
                  <h3 className="editorial-serif text-2xl font-medium text-[#102421] mt-1">
                    Dr. Faiza Yousef
                  </h3>
                  <p className="text-xs font-semibold text-[#10a880]">
                    DPT, COMPT, CDNP, CDDC
                  </p>
                  <p className="text-[11px] text-[#6d847f] mt-0.5">
                    Shifa Tameer-e-Millat University (STMU)
                  </p>
                </div>
              </div>

              {/* Verified Credentials Matrix */}
              <div className="py-5 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#536965]">
                  Clinical Certifications
                </h4>
                <div className="space-y-2 text-xs">
                  {clinicData.leadPractitioner.certifications.map((cert) => (
                    <div key={cert.abbr} className="p-2.5 rounded-xl bg-white border border-[#e2ede8]">
                      <div className="font-semibold text-[#102421]">
                        {cert.abbr} — {cert.title}
                      </div>
                      <div className="text-[11px] text-[#6d847f] mt-0.5">{cert.focus}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Instagram Connection */}
              <div className="pt-2 flex items-center justify-between text-xs border-t border-[#e2ede8]">
                <span className="text-[#6d847f]">Official Professional Account:</span>
                <a
                  href={clinicData.leadPractitioner.instagramPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#10a880] hover:text-[#0c8263]"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>@faiza_fitnessphysio</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2f8f5] border border-[#d6ebe2] text-[#0c7a5d] text-xs font-semibold uppercase tracking-wider">
              <span>Meet Your Clinician</span>
            </div>

            <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#0d211e] leading-tight">
              &ldquo;Pain is a mechanical signal. We treat what actually causes it, not where it screams.&rdquo;
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#4a635f] leading-relaxed font-light">
              <p>
                As the clinical founder of <strong className="font-semibold text-[#102421]">Physiogenix</strong>, Dr. Faiza Yousef brings over 8 years of intensive hands-on clinical experience to Sector F-7, Islamabad. Trained at Shifa Tameer-e-Millat University (STMU) with advanced international post-graduate certifications in Orthopedic Manual Therapy (COMPT) and Dry Needling (CDNP), she advocates for rigorous differential diagnosis over passive machine reliance.
              </p>
              <p>
                Too many patients in Pakistan endure weeks of ultrasound and generic heat packs without anyone touching their spine, testing joint play, or identifying why their nerve is compressed. At Physiogenix, every patient receives personalized physical palpation, Maitland/Mulligan joint mobilizations, and customized biomechanical posture retraining.
              </p>
              <p>
                Her clinical model is purposefully ethical: treatment plans are structured and capped at a maximum of 12 sessions. The objective is not perpetual therapy—it is lasting physical empowerment and personal movement autonomy.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#284440]">
              <div className="p-3 rounded-xl bg-white border border-[#e2ede8] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10a880] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold text-[#102421]">Doctor of Physical Therapy</strong>
                  <span>Qualified primary contact physical therapist (STMU).</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#e2ede8] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10a880] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold text-[#102421]">Hands-On Palpation</strong>
                  <span>Direct physical examination before any equipment.</span>
                </div>
              </div>
            </div>

            {/* Link to full bio page */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about-dr-faiza"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#102421] hover:bg-[#10a880] text-white font-medium text-xs tracking-wider uppercase transition-colors"
              >
                <span>Read Dr. Faiza&apos;s Full Background</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
