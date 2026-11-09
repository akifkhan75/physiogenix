import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, ShieldCheck, ArrowUpRight, MessageSquare } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { clinicData } from "@/data/clinicData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1c19] text-white border-t border-[#183933] relative overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#10a880]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#1b3d36]">
          {/* Brand Col (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-xs text-[#a3c4bd] max-w-sm leading-relaxed">
              Physiogenix is an assessment-led physical therapy practice in Islamabad led by Dr. Faiza Yousef (DPT, COMPT, CDNP, CDDC). We champion a hands-before-machines philosophy, delivering root-cause recovery capped at 12 sessions maximum.
            </p>

            {/* Verified Clinical Credentials Badge */}
            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#d1e8e2]">
              <ShieldCheck className="w-4 h-4 text-[#20c997] shrink-0" />
              <span>STMU Alumna • Certified Dry Needling & Manual Therapist</span>
            </div>

            {/* Official Instagram Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={clinicData.leadPractitioner.instagramPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#d1e8e2] hover:text-white text-xs transition-colors border border-white/10"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#20c997]" />
                <span>{clinicData.leadPractitioner.handlePersonal}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={clinicData.leadPractitioner.instagramClinic}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#d1e8e2] hover:text-white text-xs transition-colors border border-white/10"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#20c997]" />
                <span>{clinicData.leadPractitioner.handleClinic}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#20c997]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#a3c4bd]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-dr-faiza" className="hover:text-white transition-colors">
                  About Dr. Faiza Yousef
                </Link>
              </li>
              <li>
                <Link href="/about-physiogenix" className="hover:text-white transition-colors">
                  Clinic Philosophy & Approach
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All Specialized Services
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="hover:text-white transition-colors">
                  Biomechanical Screener Tool
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Directions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Patient Confidentiality & Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialized Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#20c997]">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs text-[#a3c4bd]">
              <li>
                <Link href="/services/orthopedic-manual-therapy" className="hover:text-white transition-colors">
                  Orthopedic Manual Therapy
                </Link>
              </li>
              <li>
                <Link href="/services/spinal-care" className="hover:text-white transition-colors">
                  Spine & Disc Rehabilitation
                </Link>
              </li>
              <li>
                <Link href="/services/sciatica-nerve-rehabilitation" className="hover:text-white transition-colors">
                  Sciatica & Nerve Compression
                </Link>
              </li>
              <li>
                <Link href="/services/frozen-shoulder-rehabilitation" className="hover:text-white transition-colors">
                  Frozen Shoulder Protocol
                </Link>
              </li>
              <li>
                <Link href="/services/dry-needling-cupping" className="hover:text-white transition-colors">
                  Dry Needling & Dynamic Cupping
                </Link>
              </li>
              <li>
                <Link href="/services/posture-scoliosis-correction" className="hover:text-white transition-colors">
                  Posture & Scoliosis Correction
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Operating Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#20c997]">
              Visit Clinic
            </h4>
            <div className="space-y-3 text-xs text-[#a3c4bd]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#20c997] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  2nd Floor, Chaudhary Plaza, Bhittai Road (Above Medicsi Hospital, next to PSO Pump), Sector F-7 Markaz, Islamabad
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#20c997] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div>Mon – Fri: 12:00 PM – 8:00 PM</div>
                  <div>Saturday: 3:00 PM – 8:00 PM</div>
                  <div className="text-[#6d8d87]">Sunday: Closed</div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#20c997] shrink-0" />
                <a href={`tel:${clinicData.contact.primaryPhone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors font-medium">
                  {clinicData.contact.primaryPhone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={clinicData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#10a880] hover:bg-[#0c8263] text-white text-xs font-medium transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Appointment</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#71928b]">
          <div>
            © {new Date().getFullYear()} Physiogenix by Dr. Faiza Yousef. All clinical rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <span>Assessment-Led Care</span>
            <span>•</span>
            <span>F-7 Markaz, Islamabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
