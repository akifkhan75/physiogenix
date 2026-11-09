import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock } from "lucide-react";
import { clinicData } from "@/data/clinicData";

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
    <div className="flex flex-col w-full bg-[#fbfdfc]">
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#f5faf8] to-[#fbfdfc] border-b border-[#e2ede8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0c7a5d] text-xs font-semibold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Healthcare Privacy</span>
          </div>

          <h1 className="editorial-serif text-4xl sm:text-5xl lg:text-6xl text-[#0d211e]">
            Patient Privacy &amp; Data Policy
          </h1>

          <p className="text-base text-[#4a635f] font-light leading-relaxed max-w-2xl mx-auto">
            Our commitment to strict clinical confidentiality, data protection, and ethical healthcare communication at Physiogenix Islamabad.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left text-sm sm:text-base text-[#445e59] leading-relaxed font-light">
          <div className="space-y-3">
            <h2 className="editorial-serif text-2xl text-[#102421]">
              1. Patient Clinical Confidentiality
            </h2>
            <p>
              At Physiogenix, medical and physical therapy evaluations are confidential. Any information shared during consultation—including diagnostic imaging, medical history, physical symptoms, and treatment progress—is strictly protected under medical professional secrecy and clinical ethics.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="editorial-serif text-2xl text-[#102421]">
              2. Appointment &amp; Contact Details
            </h2>
            <p>
              When you submit an appointment request through our website or connect via WhatsApp, we collect only necessary scheduling data: your full name, phone number, requested service, and a brief description of your symptoms. This data is exclusively utilized by Dr. Faiza Yousef and her clinical coordination staff to manage clinical calendars.
            </p>
            <p>
              We never sell, rent, or distribute patient contact details or medical information to third parties or marketing advertisers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="editorial-serif text-2xl text-[#102421]">
              3. WhatsApp Communication Notice
            </h2>
            <p>
              For convenience, patients may initiate communication via WhatsApp. While WhatsApp utilizes end-to-end encryption between sender and recipient, we advise patients not to transmit sensitive identity identification documents (such as CNIC copies or financial details) over unverified channels.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="editorial-serif text-2xl text-[#102421]">
              4. Photography &amp; Case Documentation
            </h2>
            <p>
              On social platforms such as Instagram (@faiza_fitnessphysio and @_physiogenix_), educational movement clips or clinical outcomes are shared only with explicit written informed consent from the patient, ensuring complete anonymity where requested.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="editorial-serif text-2xl text-[#102421]">
              5. Contact Us Regarding Your Data
            </h2>
            <p>
              If you have inquiries regarding your clinical records or wish to update your scheduling information, please reach out to our clinic:
            </p>
            <div className="p-5 rounded-2xl bg-[#fafdfc] border border-[#e2ede8] text-xs text-[#2e4743] space-y-1">
              <div><strong>Clinic:</strong> Physiogenix by Dr. Faiza Yousef</div>
              <div><strong>Address:</strong> 2nd Floor, Chaudhary Plaza, Bhittai Road, Sector F-7 Markaz, Islamabad</div>
              <div><strong>Phone:</strong> {clinicData.contact.primaryPhone}</div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#e2ede8]">
            <Link
              href="/"
              className="text-xs font-semibold text-[#10a880] hover:underline"
            >
              ← Back to Physiogenix Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

