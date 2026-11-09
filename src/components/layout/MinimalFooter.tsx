import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, MapPin, Clock } from "lucide-react";
import { clinicData } from "@/data/clinicData";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";

export const MinimalFooter: React.FC = () => {
  return (
    <footer className="bg-[#081411] text-[#f9faf8] border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10 text-left">
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-3">
              <div className="w-10 h-10 relative overflow-hidden rounded-md border border-white/20 bg-white/5 p-1">
                <Image
                  src="/images/physiogenix-logo.png"
                  alt="Physiogenix"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-sans-editorial text-base font-semibold tracking-editorial-widest uppercase text-white block">
                  PHYSIOGENIX
                </span>
                <span className="text-[10px] tracking-editorial-widest uppercase text-white/50 block">
                  Movement Rehabilitation &amp; Manual Therapy
                </span>
              </div>
            </div>

            <p className="font-editorial text-2xl sm:text-3xl text-white/90 leading-tight font-light max-w-sm pt-2">
              Assessment-led clinical rehabilitation. Replacing passive machines with anatomical precision.
            </p>

            <div className="text-xs text-white/60 space-y-1 font-light pt-2">
              <div>Dr. Faiza Yousef, DPT (STMU), COMPT, CDNP, CDDC</div>
              <div className="text-white/40">Ethical clinical standard: treatment capped at 12 sessions maximum.</div>
            </div>
          </div>

          {/* Quick Index (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-[10px] uppercase tracking-editorial-widest text-[#20c997] block">
              Index
            </span>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Departments (8)
                </Link>
              </li>
              <li>
                <Link href="/about-dr-faiza" className="hover:text-white transition-colors">
                  Dr. Faiza Yousef
                </Link>
              </li>
              <li>
                <Link href="/about-physiogenix" className="hover:text-white transition-colors">
                  Clinic Philosophy
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="hover:text-white transition-colors">
                  Symptom Screener
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Schedule Intake
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Confidentiality
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinic Location & Hours (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-editorial-widest text-[#20c997] block">
              Location &amp; Timings
            </span>
            <div className="space-y-2.5 text-xs text-white/70 font-light">
              <div className="leading-relaxed">
                2nd Floor, Chaudhary Plaza, Bhittai Road <br />
                <span className="text-white/90">Above Medicsi Hospital (Next to PSO)</span> <br />
                Sector F-7 Markaz, Islamabad, 44000
              </div>

              <div className="pt-2 border-t border-white/10 space-y-1 text-white/60">
                <div>Mon – Fri: 12:00 PM – 8:00 PM</div>
                <div>Saturday: 3:00 PM – 8:00 PM</div>
                <div className="text-white/40">Sunday: Closed</div>
              </div>
            </div>
          </div>

          {/* Connect & Social (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-[10px] uppercase tracking-editorial-widest text-[#20c997] block">
              Connect
            </span>
            <div className="space-y-2 text-xs text-white/70 font-light">
              <a
                href={`tel:${clinicData.contact.primaryPhone.replace(/\s+/g, "")}`}
                className="block hover:text-white transition-colors"
              >
                {clinicData.contact.primaryPhone}
              </a>

              <a
                href={clinicData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#20c997] hover:underline pt-1"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp Direct</span>
              </a>

              <div className="pt-3 border-t border-white/10 space-y-1.5">
                <a
                  href={clinicData.leadPractitioner.instagramPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>@faiza_fitnessphysio</span>
                  <ArrowUpRight className="w-2.5 h-2.5 opacity-50" />
                </a>

                <a
                  href={clinicData.leadPractitioner.instagramClinic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors block"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>@_physiogenix_</span>
                  <ArrowUpRight className="w-2.5 h-2.5 opacity-50" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40 font-light">
          <div>
            © {new Date().getFullYear()} Physiogenix by Dr. Faiza Yousef. Sector F-7 Markaz, Islamabad.
          </div>
          <div className="flex items-center gap-4">
            <span>Coordinates: 33.7206° N, 73.0559° E</span>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy &amp; Medical Secrecy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
