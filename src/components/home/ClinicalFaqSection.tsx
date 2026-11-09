"use client";

import React, { useState, useRef } from "react";
import { Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { clinicData } from "@/data/clinicData";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const ClinicalFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          once: true,
        },
        defaults: { ease: "power2.out", duration: 0.75 },
      });

      tl.from(headerRef.current, {
        y: 20,
        clearProps: "all",
      }).from(
        ".faq-row-item",
        {
          y: 20,
          stagger: 0.06,
          clearProps: "all",
        },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      ref={containerRef}
      id="faqs"
      className="py-24 sm:py-32 lg:py-36 bg-[#F7F6F1] border-b border-[#E8E7E0] text-left"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8E7E0]"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-editorial-widest text-[#193B2C] block">
              Answers Before You Choose
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#252A25] font-light leading-[1.08]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#555E55] font-light leading-relaxed">
              Clear, honest clinical answers regarding treatment expectations, session caps, referrals, and our clinic in Sector F-7 Islamabad.
            </p>
          </div>

          <a
            href={clinicData.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#FCFBF8] border border-[#E8E7E0] hover:border-[#193B2C] text-xs font-semibold uppercase tracking-editorial-wide text-[#193B2C] transition-colors shrink-0"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Ask Dr. Faiza</span>
          </a>
        </div>

        {/* FAQs Accordion List */}
        <div className="divide-y divide-[#E8E7E0] pt-6">
          {clinicData.officialFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="faq-row-item py-6 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono text-[#7F8B7E] mt-1 shrink-0">
                      0{idx + 1}
                    </span>
                    <h3 className="font-editorial text-xl sm:text-2xl text-[#252A25] group-hover:text-[#193B2C] transition-colors font-light leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <span className="w-8 h-8 rounded-full border border-[#E8E7E0] group-hover:border-[#193B2C] bg-[#FCFBF8] flex items-center justify-center shrink-0 text-[#252A25] group-hover:text-[#193B2C] transition-colors">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 pl-8 sm:pl-10 pr-6 text-sm sm:text-base text-[#555E55] font-light leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reassurance note */}
        <div className="mt-12 p-6 bg-[#FCFBF8] rounded-lg border border-[#E8E7E0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#555E55]">
          <div className="space-y-0.5">
            <span className="font-semibold text-[#252A25] block">
              Still have questions about your specific condition?
            </span>
            <span>
              Write to Physiogenix on WhatsApp and we will tell you straight whether physiotherapy is the right fit.
            </span>
          </div>
          <a
            href={clinicData.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#193B2C] font-semibold hover:underline shrink-0"
          >
            Start Treatment Chat →
          </a>
        </div>
      </div>
    </section>
  );
};

