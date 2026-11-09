import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, CheckCircle2, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";
import { clinicData } from "@/data/clinicData";
import { InstagramIcon } from "@/components/ui/Icons";

export const DrFaizaBioSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#fafcfb] border-b border-[#dbe7e2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Visual Plate & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-white border border-[#dbe7e2] shadow-xl text-left">
              {/* Doctor Avatar Header */}
              <div className="flex flex-col sm:flex-row items-center gap-5 pb-6 border-b border-[#e8f1ed]">
                <div className="relative w-24 h-24 sm:w-26 sm:h-26 rounded-2xl overflow-hidden p-1 bg-white shadow-md border-2 border-[#10a880]/40 shrink-0">
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
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e6f6f1] text-[#0b8061] text-[10px] font-semibold uppercase tracking-wider">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Lead Clinical Director</span>
                  </div>
                  <h3 className="editorial-serif text-2xl font-normal text-[#081715] mt-1">
                    Dr. Faiza Yousef
                  </h3>
                  <p className="text-xs font-semibold text-[#10a880] tracking-wide">
                    DPT • COMPT • CDNP • CDDC
                  </p>
                  <p className="text-[11px] text-[#55716c] mt-0.5 font-light">
                    Shifa Tameer-e-Millat University (STMU)
                  </p>
                </div>
              </div>

              {/* Verified Credentials Matrix */}
              <div className="py-5 space-y-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#738c87] block">
                  Post-Graduate Certifications:
                </span>
                <div className="space-y-2 text-xs">
                  {clinicData.leadPractitioner.certifications.map((cert) => (
                    <div key={cert.abbr} className="p-2.5 rounded-xl bg-[#fafcfb] border border-[#dce8e3]">
                      <div className="font-semibold text-[#081715]">
                        {cert.abbr} — {cert.title}
                      </div>
                      <div className="text-[11px] text-[#55716c] mt-0.5 font-light">{cert.focus}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instagram Verification Strip */}
              <div className="pt-3 flex items-center justify-between text-xs border-t border-[#e8f1ed]">
                <span className="text-[#647f7a] text-[11px]">Official Professional Account:</span>
                <a
                  href={clinicData.leadPractitioner.instagramPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#10a880] hover:text-[#0b8061]"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>@faiza_fitnessphysio</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0b8061] text-xs font-semibold uppercase tracking-wider">
              <span>Clinical Leadership &amp; Direction</span>
            </div>

            <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#081715] leading-tight">
              &ldquo;Pain is a mechanical signal. We treat what actually causes it, not where it screams.&rdquo;
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#4a635f] leading-relaxed font-light">
              <p>
                As founder and clinical director of <strong className="font-semibold text-[#081715]">Physiogenix</strong>, Dr. Faiza Yousef brings over 8 years of intensive hands-on clinical experience to Sector F-7, Islamabad. Trained at Shifa Tameer-e-Millat University (STMU) with post-graduate certifications in Orthopedic Manual Physical Therapy (COMPT) and Dry Needling (CDNP), she advocates for rigorous differential diagnosis over passive machine reliance.
              </p>
              <p>
                Too many patients in Islamabad endure weeks of generalized heating pads and passive electrotherapy without anyone performing detailed joint mobilization or neurodynamic testing. At Physiogenix, every patient receives personalized physical palpation, Maitland/Mulligan joint glides, and customized biomechanical posture retraining.
              </p>
              <p>
                Her clinical model is purposefully ethical: treatment plans are structured and capped at a maximum of 12 sessions. The objective is not perpetual therapy—it is lasting physical empowerment and personal movement autonomy.
              </p>
            </div>

            {/* Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#284440]">
              <div className="p-3.5 rounded-xl bg-white border border-[#dbe7e2] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10a880] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold text-[#081715]">Doctor of Physical Therapy</strong>
                  <span className="font-light text-[#55716c]">Primary care musculoskeletal practitioner (STMU).</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#dbe7e2] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10a880] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold text-[#081715]">Hands-On Palpation</strong>
                  <span className="font-light text-[#55716c]">Direct physical joint evaluation before any modalities.</span>
                </div>
              </div>
            </div>

            {/* Link to full bio page */}
            <div className="pt-3">
              <Link
                href="/about-dr-faiza"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#081715] hover:bg-[#10a880] text-white font-medium text-xs tracking-wider uppercase transition-colors"
              >
                <span>Read Dr. Faiza&apos;s Full Background &amp; Philosophy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
