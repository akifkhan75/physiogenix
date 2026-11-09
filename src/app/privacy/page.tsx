import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Lock } from "lucide-react";
import { clinicData } from "@/data/clinicData";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy & Healthcare Data Confidentiality | Physiogenix",
  description:
    "Review Physiogenix's patient data confidentiality policies, appointment privacy safeguards, and clinical ethical standards.",
  alternates: {
    canonical: "https://physiogenix.pk/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full bg-[#f9faf8] text-left">
      <Breadcrumbs
        items={[{ name: "Privacy Policy", href: "/privacy", current: true }]}
      />

      {/* Header */}
      <section className="pt-8 pb-20 sm:pb-28 border-b border-[#e0e6e1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 space-y-6">
          <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87] block">
            Legal &amp; Clinical Confidentiality
          </span>
          <h1 className="font-editorial text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] font-light text-[#0d1a17]">
            Patient Privacy Policy
          </h1>
          <p className="font-editorial text-2xl sm:text-3xl text-[#475c57] leading-relaxed font-light">
            Our commitment to medical confidentiality, patient data protection, and ethical healthcare communication at Physiogenix Islamabad.
          </p>
        </div>
      </section>

      {/* Policy Clauses */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 space-y-12 text-sm sm:text-base text-[#475c57] leading-relaxed font-light">
          <div className="space-y-3">
            <h2 className="font-editorial text-3xl text-[#0d1a17]">
              1. Patient Clinical Confidentiality
            </h2>
            <p>
              At Physiogenix, medical and physical therapy evaluations are confidential. Any information shared during consultation—including diagnostic imaging, medical history, physical symptoms, and treatment progress—is strictly protected under medical professional secrecy and clinical ethics.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-editorial text-3xl text-[#0d1a17]">
              2. Appointment &amp; Intake Details
            </h2>
            <p>
              When you submit an appointment request through our website or connect via WhatsApp, we collect only necessary scheduling data: your full name, phone number, requested service, and a brief description of your symptoms. This data is exclusively utilized by Dr. Faiza Yousef and her clinical coordination staff to manage clinical calendars.
            </p>
            <p>
              We never sell, rent, or distribute patient contact details or medical information to third parties or marketing advertisers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-editorial text-3xl text-[#0d1a17]">
              3. WhatsApp Communication Notice
            </h2>
            <p>
              For convenience, patients may initiate communication via WhatsApp. While WhatsApp utilizes end-to-end encryption between sender and recipient, we advise patients not to transmit sensitive identity identification documents (such as CNIC copies or financial details) over unverified channels.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-editorial text-3xl text-[#0d1a17]">
              4. Contact Regarding Your Data
            </h2>
            <div className="p-6 bg-white border border-[#e0e6e1] text-xs space-y-1 font-mono text-[#0d1a17]">
              <div>CLINIC: PHYSIOGENIX BY DR. FAIZA YOUSEF</div>
              <div>ADDRESS: 2ND FLOOR, CHAUDHARY PLAZA, BHITTAI ROAD, F-7 MARKAZ, ISLAMABAD</div>
              <div>PRIMARY DISPATCH: {clinicData.contact.primaryPhone}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
