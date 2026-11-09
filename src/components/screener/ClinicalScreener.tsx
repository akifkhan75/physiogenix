"use client";

import React, { useState } from "react";
import {
  Activity,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { clinicData } from "@/data/clinicData";
import { BookingModal } from "@/components/ui/BookingModal";

interface QuestionOption {
  label: string;
  sublabel: string;
  pathologyHint: string;
  recommendedServiceId: string;
}

export const ClinicalScreener: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [step, setStep] = useState(1);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedQuality, setSelectedQuality] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>("");

  const regionOptions = [
    {
      id: "spine",
      label: "Lower Back & Sciatic Nerve",
      sublabel: "Lumbago, disc bulge, shooting leg pain, glute spasm",
      service: "Spine Rehabilitation (Cervical, Thoracic & Lumbar)",
    },
    {
      id: "neck",
      label: "Neck, Base of Skull & Headaches",
      sublabel: "Cervicogenic tension, text neck, migraines, facet stiffness",
      service: "Headache & Cervicogenic Migraine Management",
    },
    {
      id: "shoulder",
      label: "Shoulder & Overhead Reach",
      sublabel: "Frozen shoulder, rotator cuff tendonitis, impingement",
      service: "Frozen Shoulder & Rotator Cuff Care",
    },
    {
      id: "posture",
      label: "Postural Fatigue & Spine Misalignment",
      sublabel: "Rounded shoulders, desk kyphosis, scoliosis curvature",
      service: "Posture Restoration & Scoliosis Management",
    },
    {
      id: "sports",
      label: "Sports Injuries & Peripheral Joints",
      sublabel: "Knee ligament, ankle sprains, tennis elbow, plantar fasciitis",
      service: "Sports Injury Rehabilitation & Return-to-Play",
    },
    {
      id: "knots",
      label: "Deep Stubborn Muscle Knots",
      sublabel: "Hyperirritable muscular trigger points, chronic tightness",
      service: "Certified Dry Needling & Dynamic Cupping (CDNP / CDDC)",
    },
  ];

  const qualityOptions = [
    {
      id: "sharp_nerve",
      label: "Sharp, Electric or Radiating Down Limb",
      sublabel: "Numbness, tingling, or pain shooting below knee/elbow",
    },
    {
      id: "dull_stiff",
      label: "Deep Dull Ache with Joint Movement Block",
      sublabel: "Feels locked, restricted end-range, mechanical catching",
    },
    {
      id: "tight_knots",
      label: "Persistent Muscular Spasm & Trigger Points",
      sublabel: "Hard tender bands in muscle that don't release with rest",
    },
    {
      id: "postural_strain",
      label: "Progressive Burning Aching with Prolonged Sitting",
      sublabel: "Worsens after 2+ hours at laptop or during driving",
    },
  ];

  const durationOptions = [
    { id: "acute", label: "Acute (< 3 Weeks)", sublabel: "Recent sudden onset or injury" },
    { id: "subacute", label: "Subacute (3 to 12 Weeks)", sublabel: "Persistent, not resolving with rest" },
    { id: "chronic", label: "Chronic (3+ Months to Years)", sublabel: "Long-standing recurring mechanical issue" },
  ];

  const handleReset = () => {
    setStep(1);
    setSelectedRegion(null);
    setSelectedQuality(null);
    setSelectedDuration(null);
  };

  const getMatchedService = () => {
    const regionObj = regionOptions.find((r) => r.id === selectedRegion);
    return regionObj ? regionObj.service : "Differential Clinical Assessment (Initial 45-Min)";
  };

  const handleOpenBooking = () => {
    setPrefilledService(getMatchedService());
    setBookingModalOpen(true);
  };

  const handleFastTrackWhatsApp = () => {
    const service = getMatchedService();
    const regionText = regionOptions.find((r) => r.id === selectedRegion)?.label || "Musculoskeletal pain";
    const qualityText = qualityOptions.find((q) => q.id === selectedQuality)?.label || "Unspecified";
    const durationText = durationOptions.find((d) => d.id === selectedDuration)?.label || "Unspecified";

    const text =
      `*Clinical Triage Self-Assessment - Physiogenix*\n` +
      `*Area:* ${regionText}\n` +
      `*Pain Quality:* ${qualityText}\n` +
      `*Duration:* ${durationText}\n` +
      `*Recommended Service:* ${service}\n\n` +
      `_Hello Dr. Faiza, I completed the biomechanical screener on your website and would like to schedule an assessment at F-7 Markaz._`;

    window.open(`https://wa.me/923305122052?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-white border border-[#dbe7e2] shadow-xl overflow-hidden text-left">
      {/* Top Header Bar */}
      <div className="px-6 sm:px-8 py-5 bg-[#f6faf8] border-b border-[#e2ede8] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#e6f6f1] text-[#10a880] flex items-center justify-center">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-[#10a880]">
              Biomechanical Self-Assessment Tool
            </div>
            <h3 className="editorial-serif text-lg sm:text-xl font-medium text-[#0e211e]">
              Find Your Clinical Recovery Pathway
            </h3>
          </div>
        </div>

        {step > 1 && (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs text-[#526e68] hover:text-[#0e211e] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Progress Steps */}
      <div className="grid grid-cols-4 border-b border-[#edf3f0] text-center text-[11px] font-semibold">
        <div className={`py-2 border-b-2 transition-colors ${step >= 1 ? "border-[#10a880] text-[#0e211e]" : "border-transparent text-[#97aba6]"}`}>
          1. Location
        </div>
        <div className={`py-2 border-b-2 transition-colors ${step >= 2 ? "border-[#10a880] text-[#0e211e]" : "border-transparent text-[#97aba6]"}`}>
          2. Sensation
        </div>
        <div className={`py-2 border-b-2 transition-colors ${step >= 3 ? "border-[#10a880] text-[#0e211e]" : "border-transparent text-[#97aba6]"}`}>
          3. Chronicity
        </div>
        <div className={`py-2 border-b-2 transition-colors ${step >= 4 ? "border-[#10a880] text-[#0e211e]" : "border-transparent text-[#97aba6]"}`}>
          4. Triage
        </div>
      </div>

      {/* Interactive Body */}
      <div className="p-6 sm:p-8">
        {/* Step 1: Area */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <span className="text-xs font-semibold text-[#10a880] uppercase tracking-wider block">
                Step 1 of 3
              </span>
              <h4 className="editorial-serif text-2xl text-[#0e211e] mt-1">
                Where is your primary pain or mobility restriction located?
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {regionOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setSelectedRegion(opt.id);
                    setStep(2);
                  }}
                  className="p-4 rounded-2xl border border-[#dce8e3] bg-[#fafcfb] hover:border-[#10a880] hover:bg-white text-left transition-all group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="text-sm font-semibold text-[#0e211e] group-hover:text-[#10a880] transition-colors">
                      {opt.label}
                    </div>
                    <div className="text-xs text-[#5a7570] mt-1 leading-relaxed font-light">
                      {opt.sublabel}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-end text-[11px] font-semibold text-[#10a880] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Select →</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Quality */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <span className="text-xs font-semibold text-[#10a880] uppercase tracking-wider block">
                Step 2 of 3
              </span>
              <h4 className="editorial-serif text-2xl text-[#0e211e] mt-1">
                How does the discomfort primarily feel?
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {qualityOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setSelectedQuality(opt.id);
                    setStep(3);
                  }}
                  className="p-4 rounded-2xl border border-[#dce8e3] bg-[#fafcfb] hover:border-[#10a880] hover:bg-white text-left transition-all group cursor-pointer"
                >
                  <div className="text-sm font-semibold text-[#0e211e] group-hover:text-[#10a880] transition-colors">
                    {opt.label}
                  </div>
                  <div className="text-xs text-[#5a7570] mt-1 leading-relaxed font-light">
                    {opt.sublabel}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(1)}
              className="text-xs text-[#6a8782] hover:text-[#0e211e] underline mt-3 inline-block"
            >
              ← Back to previous question
            </button>
          </div>
        )}

        {/* Step 3: Chronicity */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <span className="text-xs font-semibold text-[#10a880] uppercase tracking-wider block">
                Step 3 of 3
              </span>
              <h4 className="editorial-serif text-2xl text-[#0e211e] mt-1">
                How long have you been managing these symptoms?
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {durationOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setSelectedDuration(opt.id);
                    setStep(4);
                  }}
                  className="p-4 rounded-2xl border border-[#dce8e3] bg-[#fafcfb] hover:border-[#10a880] hover:bg-white text-left transition-all group cursor-pointer"
                >
                  <div className="text-sm font-semibold text-[#0e211e] group-hover:text-[#10a880] transition-colors">
                    {opt.label}
                  </div>
                  <div className="text-xs text-[#5a7570] mt-1 leading-relaxed font-light">
                    {opt.sublabel}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="text-xs text-[#6a8782] hover:text-[#0e211e] underline mt-3 inline-block"
            >
              ← Back to previous question
            </button>
          </div>
        )}

        {/* Step 4: Triage & Recommendation */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in zoom-in-98 duration-300">
            <div className="p-6 rounded-2xl bg-[#e6f6f1] border border-[#bce2d4] space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#0b8061] text-[11px] font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Preliminary Clinical Triage Match</span>
              </div>

              <h4 className="editorial-serif text-2xl sm:text-3xl text-[#0e211e]">
                Recommended Department: <br />
                <span className="text-[#10a880] font-sans-body font-semibold text-xl sm:text-2xl">
                  {getMatchedService()}
                </span>
              </h4>

              <p className="text-xs sm:text-sm text-[#3b5952] leading-relaxed">
                Based on your symptom inputs ({regionOptions.find((r) => r.id === selectedRegion)?.label}, {durationOptions.find((d) => d.id === selectedDuration)?.label}), Dr. Faiza&apos;s assessment will evaluate articular joint play, segmental neural tension, and soft-tissue mobility to isolate the mechanical trigger.
              </p>

              <div className="pt-2 border-t border-[#c6e6db] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#2b4c44]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10a880]" />
                  <span>Capped at 12 sessions max</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10a880]" />
                  <span>1-on-1 supervision in F-7 Markaz</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleOpenBooking}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#10a880] hover:bg-[#0b8061] text-white font-medium text-sm transition-all shadow-md shadow-[#10a880]/20 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Assessment for this Condition</span>
              </button>

              <button
                onClick={handleFastTrackWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#f2f8f5] hover:bg-[#e4f2ec] text-[#0b8061] border border-[#cbe4da] font-medium text-sm transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#10a880]" />
                <span>Fast-Track on WhatsApp</span>
              </button>

              <button
                onClick={handleReset}
                className="text-xs text-[#6a8782] hover:text-[#0e211e] underline py-2"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={prefilledService}
      />
    </div>
  );
};
