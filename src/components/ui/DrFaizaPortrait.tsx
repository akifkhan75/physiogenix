import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface DrFaizaPortraitProps {
  className?: string;
  size?: "compact" | "full" | "editorial";
  showCredentialsBadge?: boolean;
}

export const DrFaizaPortrait: React.FC<DrFaizaPortraitProps> = ({
  className,
  size = "editorial",
  showCredentialsBadge = true,
}) => {
  return (
    <div className={cn("relative group select-none", className)}>
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#10a880]/15 via-[#365759]/10 to-transparent rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Main Portrait Card */}
      <div className="relative rounded-2xl md:rounded-3xl border border-[#e2ede8] bg-white p-5 md:p-7 shadow-xl shadow-[#0d211e]/5 overflow-hidden">
        {/* Subtle architectural background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#10a880_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

        {/* Top Clinical Badge */}
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[#eef5f2]">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#e6f6f1] text-[#0c7a5d] text-xs font-semibold tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Lead Clinician</span>
          </div>
          <span className="text-[11px] font-medium text-[#7a918d] tracking-wider uppercase">
            STMU • 8+ Yrs Exp
          </span>
        </div>

        {/* Portrait Presentation */}
        <div className="relative mt-5 aspect-4/5 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#f2f8f5] to-[#e5f1ec] border border-[#d6e7df] flex flex-col items-center justify-center p-6 text-center">
          {/* Authentic Profile Picture */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1.5 bg-white shadow-lg shadow-[#10a880]/15 border-2 border-[#10a880]/40 transition-transform duration-500 group-hover:scale-105">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#e0f0ea]">
              <Image
                src="/dr-faiza/dr-faiza-avatar.jpg"
                alt="Dr. Faiza Yousef, DPT - Lead Physiotherapist at Physiogenix Islamabad"
                fill
                sizes="(max-width: 768px) 160px, 180px"
                className="object-cover"
                priority
              />
            </div>
            {/* Active Clinical Status Indicator */}
            <div
              className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-[#10a880] border-2 border-white shadow-sm"
              title="Verified Clinical Director"
            />
          </div>

          {/* Practitioner Titles */}
          <div className="mt-5 space-y-1">
            <h3 className="editorial-serif text-2xl md:text-3xl font-medium text-[#102421]">
              Dr. Faiza Yousef
            </h3>
            <p className="text-xs font-semibold text-[#10a880] uppercase tracking-wider">
              DPT • COMPT • CDNP • CDDC
            </p>
            <p className="text-xs text-[#536965] max-w-[240px] mx-auto pt-1">
              Doctor of Physical Therapy (STMU) • Posture & Orthopedic Manual Specialist
            </p>
          </div>

          {/* Honest Asset Notice */}
          <div className="mt-4 px-3 py-1.5 rounded-lg bg-white/80 border border-[#d0e4dc] text-[10px] text-[#556e69] leading-tight max-w-[280px]">
            <span className="font-semibold text-[#0c7a5d]">Notice:</span> Authentic Instagram verified profile photo. High-resolution studio clinical portraits pending client delivery.
          </div>
        </div>

        {/* Credentials Pill Strip */}
        {showCredentialsBadge && (
          <div className="relative z-10 mt-5 pt-4 border-t border-[#eef5f2] grid grid-cols-2 gap-2 text-left">
            <div className="p-2.5 rounded-xl bg-[#f8fbfa] border border-[#e8f1ed]">
              <span className="block text-[10px] font-semibold uppercase text-[#7a918d] tracking-wider">
                Degree
              </span>
              <span className="text-xs font-medium text-[#102421]">
                Doctor of Physical Therapy (STMU)
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#f8fbfa] border border-[#e8f1ed]">
              <span className="block text-[10px] font-semibold uppercase text-[#7a918d] tracking-wider">
                Specialty
              </span>
              <span className="text-xs font-medium text-[#102421]">
                Orthopedic Manual & Dry Needling
              </span>
            </div>
          </div>
        )}

        {/* Instagram Verification Link */}
        <div className="mt-4 text-center">
          <a
            href="https://www.instagram.com/faiza_fitnessphysio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#10a880] hover:text-[#0c8263] transition-colors"
          >
            <span>View Verified Profile @faiza_fitnessphysio</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

