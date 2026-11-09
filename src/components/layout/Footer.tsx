import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { clinicData } from "@/data/clinicData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#193B2C] text-[#FCFBF8] border-t border-[#122B20] relative overflow-hidden">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#254A39]">
          {/* Brand Col (5 cols wide on desktop) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-xs text-[#DFE5DC] max-w-sm leading-relaxed font-light">
              Physiogenix by Dr. Faiza is an assessment-led physical therapy practice in Sector F-7, Islamabad. Hands-on care led by Dr. Faiza Yousef (DPT, COMPT, CDNP, CDDC) with 8 years of clinical experience.
            </p>

            {/* Google Reviews Badge */}
            <div className="inline-flex items-center gap-2 p-2.5 rounded bg-white/5 border border-white/10 text-xs text-[#DFE5DC]">
              <span className="text-[#AAB7A5] font-semibold">★ 5.0 on Google</span>
              <span>•</span>
              <span>65 Patient Reviews</span>
              <span>•</span>
              <span className="text-[#AAB7A5]">F-7 Islamabad</span>
            </div>

            {/* Verified Clinical Credentials */}
            <div className="flex items-center gap-2 text-xs text-[#AAB7A5]">
              <ShieldCheck className="w-4 h-4 text-[#AAB7A5] shrink-0" />
              <span>STMU Alumna • COMPT • CDNP • CDDC • 12-Session Cap</span>
            </div>

            {/* Official Instagram Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={clinicData.leadPractitioner.instagramPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-[#DFE5DC] hover:text-white text-xs transition-colors border border-white/10"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#AAB7A5]" />
                <span>{clinicData.leadPractitioner.handlePersonal}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={clinicData.leadPractitioner.instagramClinic}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-[#DFE5DC] hover:text-white text-xs transition-colors border border-white/10"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#AAB7A5]" />
                <span>{clinicData.leadPractitioner.handleClinic}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-editorial-widest text-[#AAB7A5]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#DFE5DC] font-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-dr-faiza" className="hover:text-white transition-colors">
                  Dr. Faiza Yousef
                </Link>
              </li>
              <li>
                <Link href="/about-physiogenix" className="hover:text-white transition-colors">
                  About Physiogenix
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All 10 Services
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="hover:text-white transition-colors">
                  Pain Screener
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Map
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Patient Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Clinical Departments (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-editorial-widest text-[#AAB7A5]">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-[#DFE5DC] font-light">
              <li>
                <Link href="/services/back-pain" className="hover:text-white transition-colors">
                  Back Pain
                </Link>
              </li>
              <li>
                <Link href="/services/neck-pain" className="hover:text-white transition-colors">
                  Neck Pain
                </Link>
              </li>
              <li>
                <Link href="/services/headache-migraine" className="hover:text-white transition-colors">
                  Headache &amp; Migraine
                </Link>
              </li>
              <li>
                <Link href="/services/frozen-shoulder" className="hover:text-white transition-colors">
                  Frozen Shoulder
                </Link>
              </li>
              <li>
                <Link href="/services/scoliosis" className="hover:text-white transition-colors">
                  Scoliosis
                </Link>
              </li>
              <li>
                <Link href="/services/nerve-compression-sciatica" className="hover:text-white transition-colors">
                  Sciatica &amp; Nerves
                </Link>
              </li>
              <li>
                <Link href="/services/postural-restoration" className="hover:text-white transition-colors">
                  Posture Correction
                </Link>
              </li>
              <li>
                <Link href="/services/sports-injuries" className="hover:text-white transition-colors">
                  Sports Injuries
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Operating Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-editorial-widest text-[#AAB7A5]">
              Sector F-7 Clinic
            </h4>
            <div className="space-y-3 text-xs text-[#DFE5DC] font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#AAB7A5] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  2nd Floor, Chaudhary Plaza, Bhittai Road, Next to PSO Pump, Sector F-7, Islamabad
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#AAB7A5] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div>Mon – Thu: 12:00 PM – 8:00 PM</div>
                  <div>Friday: 1:00 PM – 8:00 PM</div>
                  <div>Saturday: 3:00 PM – 6:00 PM</div>
                  <div className="text-[#AAB7A5]">Sunday: Closed</div>
                </div>
              </div>

              <div className="space-y-1 pt-1 font-mono">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#AAB7A5] shrink-0" />
                  <a href={`tel:${clinicData.contact.primaryPhone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                    {clinicData.contact.primaryPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2 pl-5.5">
                  <a href={`tel:${clinicData.contact.secondaryPhone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                    {clinicData.contact.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={clinicData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#FCFBF8] hover:bg-[#F7F6F1] text-[#193B2C] text-xs font-medium uppercase tracking-editorial-wide transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp Slot Booking</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#AAB7A5] font-light">
          <div>
            © {new Date().getFullYear()} Physiogenix by Dr. Faiza. All clinical rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Medical Disclaimer &amp; Privacy
            </Link>
            <span>•</span>
            <span>Assessment-Led Physiotherapy</span>
            <span>•</span>
            <span>F-7 Markaz, Islamabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
