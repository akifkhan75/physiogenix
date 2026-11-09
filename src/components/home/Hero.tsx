"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Sparkles,
  CheckCircle2,
  Activity,
  Clock,
} from "lucide-react";
import { DrFaizaPortrait } from "@/components/ui/DrFaizaPortrait";
import { BookingModal } from "@/components/ui/BookingModal";
import { clinicData } from "@/data/clinicData";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const Hero: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-24 lg:pt-14 lg:pb-28 bg-[#fafcfb] border-b border-[#dbe7e2]">
        {/* Subtle architectural background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#10a880_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#10a880]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#365759]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Architectural Metadata Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-[#e5eeea] text-[11px] text-[#55716c] font-medium tracking-wider uppercase">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10a880] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10a880]" />
              </span>
              <span className="text-[#0e211e] font-semibold">Clinic Open</span>
              <span className="text-[#98aba6]">•</span>
              <span>Sector F-7 Markaz, Islamabad (Bhittai Rd)</span>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <span>Dr. Faiza Yousef, DPT (STMU)</span>
              <span className="text-[#98aba6]">•</span>
              <span className="text-[#0b8061] font-semibold">Ethical 12-Session Cap</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6f6f1] border border-[#c2e5d9] text-[#0b8061] text-xs font-semibold tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10a880]" />
                <span>Assessment-Led Musculoskeletal Care</span>
              </div>

              {/* Main Headline */}
              <h1 className="editorial-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.06] tracking-tight text-[#081715]">
                The Art of Anatomical Precision. <br />
                <span className="italic font-normal text-[#10a880]">Assessment-Led</span> Physical Rehabilitation.
              </h1>

              {/* Verified Editorial Narrative */}
              <p className="text-base sm:text-lg text-[#4a635f] leading-relaxed max-w-2xl font-light">
                Under the clinical leadership of <strong className="font-semibold text-[#0e211e]">Dr. Faiza Yousef</strong> (DPT, COMPT, CDNP, CDDC), Physiogenix replaces passive machines with hands-on manual therapy, joint mobilizations, spinal decompression, and an ethical <strong className="font-semibold text-[#0e211e]">maximum 12-session recovery standard</strong>.
              </p>

              {/* Key Verified Clinical Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-[#284440]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10a880] shrink-0" />
                  <span>Hands Before Machines (Clinical Palpation)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10a880] shrink-0" />
                  <span>Capped at 12 Sessions Max (No Endless Care)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10a880] shrink-0" />
                  <span>Doctor of Physical Therapy (STMU Alumna)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10a880] shrink-0" />
                  <span>1-on-1 Dedicated Suite in F-7 Markaz</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-3.5">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#10a880] hover:bg-[#0b8061] text-white font-medium text-sm transition-all shadow-md shadow-[#10a880]/20 hover:shadow-lg hover:shadow-[#10a880]/30 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Initial 45-Min Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={clinicData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4.5 py-3.5 rounded-xl bg-[#e6f6f1] hover:bg-[#d6f0e6] text-[#0b8061] border border-[#c1e5d7] font-medium text-sm transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#10a880]" />
                  <span>WhatsApp Fast-Track</span>
                </a>

                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-white hover:bg-[#f2f7f4] text-[#2f4944] border border-[#dce8e3] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Activity className="w-3.5 h-3.5 text-[#10a880]" />
                  <span>Self-Check Tool</span>
                </Link>
              </div>

              {/* Physical Address Footnote */}
              <div className="pt-4 border-t border-[#e8f1ed] flex items-center gap-2 text-xs text-[#5e7a75]">
                <MapPin className="w-3.5 h-3.5 text-[#10a880] shrink-0" />
                <span>2nd Floor, Chaudhary Plaza (Above Medicsi Hospital, next to PSO), Sector F-7 Markaz, Islamabad</span>
              </div>
            </motion.div>

            {/* Right Doctor Presentation Card (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <DrFaizaPortrait />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Booking Modal */}
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
