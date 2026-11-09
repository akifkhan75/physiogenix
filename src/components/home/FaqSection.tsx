"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#f5faf8] border-t border-[#e2ede8]" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0c7a5d] text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clinical Clarity</span>
          </div>
          <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#0d211e]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#4a635f] font-light leading-relaxed">
            Transparent answers regarding our assessment methodology, 12-session ethical standard, and clinic logistics in Islamabad.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {clinicData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-[#e2ede8] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="editorial-serif text-lg sm:text-xl font-normal text-[#102421]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#f2f8f5] text-[#10a880] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#10a880] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#445e59] leading-relaxed border-t border-[#f5faf8] animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#e6f6f1]/60 border border-[#c5e6da] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-semibold text-[#102421]">
              Have a specific clinical question about your condition?
            </h4>
            <p className="text-xs text-[#52726b] mt-0.5">
              Speak directly with Dr. Faiza&apos;s clinical team via WhatsApp.
            </p>
          </div>
          <a
            href={clinicData.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#10a880] hover:bg-[#0c8263] text-white text-xs font-semibold transition-colors shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp (+92 330 5122052)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
