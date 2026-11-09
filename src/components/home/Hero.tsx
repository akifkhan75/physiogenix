"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MessageSquare, ArrowRight, ShieldCheck, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { DrFaizaPortrait } from "@/components/ui/DrFaizaPortrait";
import { BookingModal } from "@/components/ui/BookingModal";
import { clinicData } from "@/data/clinicData";

export const Hero: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-[#f8fbf9] via-[#fbfdfc] to-white">
        {/* Subtle architectural background accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#10a880]/5 rounded-full blur-3xl" />
          <div className="absolute top-40 right-10 w-80 h-80 bg-[#365759]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              {/* Location & Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e6f6f1] border border-[#c6e7dc] text-[#0c7a5d] text-xs font-semibold tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10a880] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10a880]"></span>
                </span>
                <span>Sector F-7 Markaz, Islamabad</span>
                <span className="text-[#99cac0]">•</span>
                <span className="font-medium text-[#2d524b]">Assessment-Led Practice</span>
              </div>

              {/* Editorial Headline */}
              <h1 className="editorial-serif text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.08] tracking-tight text-[#0d211e]">
                From Pain to Power: <br />
                <span className="italic text-[#10a880]">Assessment-Led</span> Physical Therapy.
              </h1>

              {/* Verified Editorial Narrative */}
              <p className="text-base sm:text-lg text-[#4a635f] leading-relaxed max-w-2xl font-light">
                Under the clinical direction of <strong className="font-semibold text-[#102421]">Dr. Faiza Yousef</strong> (DPT, COMPT, CDNP, CDDC), Physiogenix resolves root biomechanical causes with hands-on manual therapy, spinal decompression, and an ethical <strong className="font-semibold text-[#102421]">maximum 12-session</strong> recovery standard.
              </p>

              {/* Core Verified Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-[#284440]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10a880] shrink-0" />
                  <span>Hands Before Machines (Manual Therapy)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10a880] shrink-0" />
                  <span>Capped 12-Session Recovery Standard</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10a880] shrink-0" />
                  <span>Doctor of Physical Therapy (STMU)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10a880] shrink-0" />
                  <span>1-on-1 Dedicated Clinical Room</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#10a880] hover:bg-[#0c8263] text-white font-medium text-sm transition-all shadow-lg shadow-[#10a880]/20 hover:shadow-xl hover:shadow-[#10a880]/30 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Initial Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={clinicData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#f2f8f5] hover:bg-[#e6f4ef] text-[#0c7a5d] border border-[#d2eae0] font-medium text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#10a880]" />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl text-[#4a635f] hover:text-[#102421] text-xs font-semibold tracking-wide transition-colors"
                >
                  <span>Explore Treatments</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Verified Clinical Practice Address Strip */}
              <div className="pt-4 border-t border-[#e2ede8] flex items-center gap-2 text-xs text-[#627d78]">
                <MapPin className="w-3.5 h-3.5 text-[#10a880] shrink-0" />
                <span>2nd Floor, Chaudhary Plaza (Above Medicsi, Next to PSO), F-7 Markaz, Islamabad</span>
              </div>
            </motion.div>

            {/* Right Visual / Doctor Presentation (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
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

