"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, User, Sparkles } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  patientArchetype: string;
  initialPresentation: string;
  clinicalEvaluation: string;
  treatmentIntervention: string[];
  dischargeMilestone: string;
  totalSessions: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "case-sciatica",
    category: "Spinal Care & Radiculopathy",
    title: "Severe Lumbar Disc Extrusion with S1 Sciatic Radiculopathy",
    patientArchetype: "38-Year-Old Corporate Executive (Desk Worker)",
    initialPresentation:
      "6 months of debilitating sharp electric pain radiating down left glute into calf. Inability to sit for >15 minutes. Orthopedic surgical consultation had recommended lumbar discectomy.",
    clinicalEvaluation:
      "Positive Straight Leg Raise (SLR) at 35°, lateral shift posture, loss of lumbar lordosis, deep piriformis protective hypertonicity compressing the sciatic nerve.",
    treatmentIntervention: [
      "Segmental manual spinal decompression & lateral shift correction",
      "Neurodynamic nerve flossing (sliders and tensioners)",
      "Piriformis and deep external rotator myofascial release",
      "Directional preference extension & multifidus core stabilization",
    ],
    dischargeMilestone:
      "Complete centralization and abolition of radiating leg pain by Session 7. Full return to gym lifting and pain-free desk work by Session 9.",
    totalSessions: "9 Sessions (Under 12-Session Cap)",
  },
  {
    id: "case-shoulder",
    category: "Shoulder & Joint Arthrokinematics",
    title: "Stage 2 Adhesive Capsulitis (Frozen Shoulder)",
    patientArchetype: "52-Year-Old Patient with Severe Nocturnal Shoulder Pain",
    initialPresentation:
      "Inability to lift right arm past 45° or reach behind back. Severe sleep disruption for 4 months with chronic dull ache at rest.",
    clinicalEvaluation:
      "Classic capsular restriction pattern (marked loss of external rotation & abduction), severe scapular dyskinesis, active trigger points in subscapularis and infraspinatus.",
    treatmentIntervention: [
      "Maitland Grade III–IV inferior and posterior glenohumeral joint glides",
      "Certified Dry Needling (CDNP) targeting rotator cuff trigger points",
      "Capsular distension stretches & scapulothoracic rhythm re-education",
      "Progressive isometric to eccentric rotator cuff strengthening",
    ],
    dischargeMilestone:
      "Night pain fully abolished by Session 4. Full 180° overhead reach and functional range of motion restored by Session 8.",
    totalSessions: "8 Sessions (Under 12-Session Cap)",
  },
  {
    id: "case-migraine",
    category: "Cervical Spine & Headache",
    title: "Chronic Cervicogenic Tension Cephalea (3+ Years)",
    patientArchetype: "29-Year-Old Software Professional (Screen Fatigue)",
    initialPresentation:
      "3 years of weekly debilitating headaches originating from the base of the skull with retro-orbital ocular pressure. Heavy dependency on analgesics.",
    clinicalEvaluation:
      "C1–C2 upper cervical facet joint hypomobility, severe suboccipital muscle spasm compressing greater occipital nerve, forward head carriage ('Text Neck').",
    treatmentIntervention: [
      "Upper cervical (C0-C1-C2) manual mobilization & gentle traction",
      "Suboccipital myofascial decompression & dynamic cupping (CDDC)",
      "Deep neck flexor (longus colli/capitis) neuromuscular activation",
      "Workplace ergonomic display and seating posture calibration",
    ],
    dischargeMilestone:
      "Zero migraine episodes across 8 consecutive weeks. Complete cessation of daily painkiller intake by Session 6.",
    totalSessions: "6 Sessions (Under 12-Session Cap)",
  },
];

export const CaseStudiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(caseStudies[0].id);
  const [modalOpen, setModalOpen] = useState(false);

  const activeCase = caseStudies.find((c) => c.id === activeTab) || caseStudies[0];

  return (
    <>
      <section className="py-20 lg:py-28 bg-[#fafcfb] border-b border-[#dbe7e2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0b8061] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Evidence of Recovery</span>
            </div>
            <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#081715]">
              Clinical Case Transformations
            </h2>
            <p className="text-sm sm:text-base text-[#4a635f] font-light leading-relaxed">
              Real clinical archetypes treated at Physiogenix Islamabad demonstrating the ethical 12-session cap in action.
            </p>
          </div>

          {/* Case Studies Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {caseStudies.map((cs) => (
              <button
                key={cs.id}
                onClick={() => setActiveTab(cs.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  activeTab === cs.id
                    ? "bg-[#081715] text-white shadow-sm"
                    : "bg-white text-[#4e6863] hover:bg-[#edf5f2] border border-[#dbe7e2]"
                }`}
              >
                {cs.category}
              </button>
            ))}
          </div>

          {/* Active Case Card */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#dbe7e2] shadow-xl overflow-hidden p-6 sm:p-9 space-y-6">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#edf4f1]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#10a880] block">
                  {activeCase.category}
                </span>
                <h3 className="editorial-serif text-2xl sm:text-3xl text-[#081715] mt-0.5">
                  {activeCase.title}
                </h3>
                <div className="text-xs text-[#5c7a74] mt-1 font-light">
                  <strong>Patient Profile:</strong> {activeCase.patientArchetype}
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#e6f6f1] text-[#0b8061] text-xs font-semibold shrink-0">
                <Clock className="w-3.5 h-3.5 text-[#10a880]" />
                <span>{activeCase.totalSessions}</span>
              </div>
            </div>

            {/* Presentation & Findings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-[#445f5a] font-light">
              <div className="p-4 rounded-xl bg-[#fafcfb] border border-[#dce8e3] space-y-1.5">
                <span className="font-semibold text-[#081715] block uppercase text-[10px] tracking-wider">
                  Initial Clinical Presentation:
                </span>
                <p className="leading-relaxed">{activeCase.initialPresentation}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#fafcfb] border border-[#dce8e3] space-y-1.5">
                <span className="font-semibold text-[#081715] block uppercase text-[10px] tracking-wider">
                  Physical Palpation &amp; Findings:
                </span>
                <p className="leading-relaxed">{activeCase.clinicalEvaluation}</p>
              </div>
            </div>

            {/* Interventions */}
            <div className="space-y-2.5">
              <span className="text-[10px] uppercase font-bold text-[#738c87] tracking-wider block">
                Targeted Clinical Interventions Applied:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#284440]">
                {activeCase.treatmentIntervention.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10a880] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Discharge Milestone */}
            <div className="p-4.5 rounded-2xl bg-[#f2f8f5] border border-[#cbe4da] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#0b8061] tracking-wider block">
                  Clinical Milestone &amp; Discharge:
                </span>
                <p className="text-xs text-[#2b4c44] font-medium mt-0.5 leading-relaxed">
                  {activeCase.dischargeMilestone}
                </p>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-[#10a880] hover:bg-[#0b8061] text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-sm cursor-pointer"
              >
                Inquire for Similar Condition
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

