"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";
import { clinicData } from "@/data/clinicData";

export const ConditionsMatrixSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const activeCategory = clinicData.conditionsTreated[activeCategoryIndex];

  return (
    <>
      <section className="py-20 lg:py-28 bg-white border-b border-[#dbe7e2]" id="conditions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0b8061] text-xs font-semibold uppercase tracking-wider">
              <span>Pathologies &amp; Clinical Indications</span>
            </div>
            <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#081715]">
              Conditions Successfully Treated
            </h2>
            <p className="text-sm text-[#4a635f] font-light leading-relaxed">
              Targeted manual protocols backed by biomechanical analysis. Select a category below to explore specific conditions treated at our F-7 Islamabad clinic.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {clinicData.conditionsTreated.map((cat, idx) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  activeCategoryIndex === idx
                    ? "bg-[#10a880] text-white shadow-sm"
                    : "bg-[#f5faf8] text-[#2c4742] hover:bg-[#e4f2ec] border border-[#dbe7e2]"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Active Category Items Grid */}
          <div className="mt-10 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#fafcfb] border border-[#dce8e3] text-left shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#e2ede8] mb-6">
              <h3 className="editorial-serif text-2xl font-normal text-[#081715]">
                {activeCategory.category}
              </h3>
              <span className="text-xs text-[#10a880] font-semibold">
                {activeCategory.items.length} Target Diagnoses
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {activeCategory.items.map((item, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white border border-[#dce8e3] flex items-start gap-2.5 shadow-xs hover:border-[#10a880]/50 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#10a880] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#1e3834] leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Consultation CTA */}
            <div className="mt-8 pt-6 border-t border-[#e2ede8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#526e68] text-center sm:text-left font-light">
                Experiencing one of these symptoms? Schedule a clinical physical assessment in Sector F-7.
              </span>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#10a880] hover:bg-[#0b8061] text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 cursor-pointer shadow-sm"
              >
                <span>Consult Dr. Faiza</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
