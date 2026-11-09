"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, MessageSquare, ArrowRight, Loader2 } from "lucide-react";
import { clinicData } from "@/data/clinicData";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your full name" }),
  phone: z.string().min(10, { message: "Please provide a valid contact number (e.g. 0330 1234567)" }),
  email: z.string().email({ message: "Please provide a valid email" }).optional().or(z.literal("")),
  service: z.string().min(1, { message: "Please select a consultation service" }),
  preferredDate: z.string().min(1, { message: "Please select your preferred date" }),
  preferredTime: z.string().min(1, { message: "Please select your preferred time slot" }),
  message: z.string().min(5, { message: "Please briefly describe your symptom or condition" }),
});

type FormValues = z.infer<typeof formSchema>;

interface AppointmentFormProps {
  defaultService?: string;
  onSuccess?: () => void;
  className?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  defaultService,
  onSuccess,
  className,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionData, setSubmissionData] = useState<FormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: defaultService || "Differential Clinical Assessment (Initial 45-Min)",
      preferredDate: "",
      preferredTime: "12:00 PM – 3:00 PM",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate server submission or prepare WhatsApp payload
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmissionData(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const handleLaunchWhatsApp = () => {
    if (!submissionData) return;
    const text = `*New Appointment Request - Physiogenix*\n` +
      `*Patient:* ${submissionData.fullName}\n` +
      `*Phone:* ${submissionData.phone}\n` +
      `*Service:* ${submissionData.service}\n` +
      `*Preferred Date:* ${submissionData.preferredDate}\n` +
      `*Time Window:* ${submissionData.preferredTime}\n` +
      `*Symptoms:* ${submissionData.message}\n\n` +
      `_Sent via Physiogenix Official Website_`;

    window.open(`https://wa.me/923305122052?text=${encodeURIComponent(text)}`, "_blank");
  };

  if (isSubmitted && submissionData) {
    return (
      <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#cbe4d9] text-center shadow-lg animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 rounded-full bg-[#e6f6f1] text-[#10a880] mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="editorial-serif text-2xl md:text-3xl font-medium text-[#102421]">
          Request Received
        </h3>
        <p className="mt-2 text-sm text-[#536965] max-w-md mx-auto">
          Thank you, <span className="font-semibold text-[#102421]">{submissionData.fullName}</span>. Dr. Faiza&apos;s clinical coordinator will review your request and confirm your appointment slot at our F-7 Islamabad clinic.
        </p>

        {/* Request summary box */}
        <div className="mt-6 p-4 rounded-xl bg-[#f5faf8] border border-[#dbece4] text-left text-xs space-y-1.5 text-[#3a524e]">
          <div><span className="font-semibold text-[#102421]">Service:</span> {submissionData.service}</div>
          <div><span className="font-semibold text-[#102421]">Target Date:</span> {submissionData.preferredDate} ({submissionData.preferredTime})</div>
          <div><span className="font-semibold text-[#102421]">Contact Number:</span> {submissionData.phone}</div>
        </div>

        {/* WhatsApp Fast-Track Button */}
        <div className="mt-6 space-y-3">
          <button
            onClick={handleLaunchWhatsApp}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#10a880] hover:bg-[#0c8263] text-white font-medium text-sm transition-all shadow-md shadow-[#10a880]/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Fast-Track on WhatsApp (+92 330 5122052)</span>
          </button>

          <button
            onClick={() => {
              setIsSubmitted(false);
              reset();
            }}
            className="text-xs text-[#536965] hover:text-[#102421] underline"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-4 text-left ${className}`}>
      {/* Patient Name */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#536965] mb-1.5">
          Patient Full Name *
        </label>
        <div className="relative">
          <User className="absolute left-3.5 top-3 w-4 h-4 text-[#7a918d]" />
          <input
            type="text"
            placeholder="e.g. Sarah Ahmed"
            {...register("fullName")}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#dbe7e2] bg-white text-sm text-[#102421] placeholder-[#9cb0ac] focus:outline-none focus:border-[#10a880] focus:ring-2 focus:ring-[#10a880]/15 transition-all"
          />
        </div>
        {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>}
      </div>

      {/* Phone Number */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#536965] mb-1.5">
            Phone / WhatsApp Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-3 w-4 h-4 text-[#7a918d]" />
            <input
              type="tel"
              placeholder="+92 330 5122052"
              {...register("phone")}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#dbe7e2] bg-white text-sm text-[#102421] placeholder-[#9cb0ac] focus:outline-none focus:border-[#10a880] focus:ring-2 focus:ring-[#10a880]/15 transition-all"
            />
          </div>
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#536965] mb-1.5">
            Email Address (Optional)
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-3 w-4 h-4 text-[#7a918d]" />
            <input
              type="email"
              placeholder="patient@example.com"
              {...register("email")}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#dbe7e2] bg-white text-sm text-[#102421] placeholder-[#9cb0ac] focus:outline-none focus:border-[#10a880] focus:ring-2 focus:ring-[#10a880]/15 transition-all"
            />
          </div>
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      {/* Requested Service */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#536965] mb-1.5">
          Select Clinical Service *
        </label>
        <select
          {...register("service")}
          className="w-full px-3.5 py-2.5 rounded-xl border border-[#dbe7e2] bg-white text-sm text-[#102421] focus:outline-none focus:border-[#10a880] focus:ring-2 focus:ring-[#10a880]/15 transition-all"
        >
          <option value="Differential Clinical Assessment (Initial 45-Min)">
            Initial 45-Min Biomechanical Assessment (Recommended for New Patients)
          </option>
          {clinicData.services.map((svc) => (
            <option key={svc.id} value={svc.title}>
              {svc.title}
            </option>
          ))}
          <option value="General Pain Consultation / Other">Other / Unsure of exact condition</option>
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>}
      </div>

      {/* Date & Time Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#536965] mb-1.5">
            Preferred Date *
          </label>
          <div className="relative">
            <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-[#7a918d]" />
            <input
              type="date"
              {...register("preferredDate")}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#dbe7e2] bg-white text-sm text-[#102421] focus:outline-none focus:border-[#10a880] focus:ring-2 focus:ring-[#10a880]/15 transition-all"
            />
          </div>
          {errors.preferredDate && (
            <p className="mt-1 text-xs text-red-600">{errors.preferredDate.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#536965] mb-1.5">
            Preferred Time Window *
          </label>
          <div className="relative">
            <Clock className="absolute left-3.5 top-3 w-4 h-4 text-[#7a918d]" />
            <select
              {...register("preferredTime")}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#dbe7e2] bg-white text-sm text-[#102421] focus:outline-none focus:border-[#10a880] focus:ring-2 focus:ring-[#10a880]/15 transition-all"
            >
              <option value="12:00 PM – 3:00 PM">Midday (12:00 PM – 3:00 PM)</option>
              <option value="3:00 PM – 6:00 PM">Afternoon (3:00 PM – 6:00 PM)</option>
              <option value="6:00 PM – 8:00 PM">Evening (6:00 PM – 8:00 PM)</option>
              <option value="Saturday 3:00 PM – 8:00 PM">Saturday Slot (3:00 PM – 8:00 PM)</option>
            </select>
          </div>
          {errors.preferredTime && (
            <p className="mt-1 text-xs text-red-600">{errors.preferredTime.message}</p>
          )}
        </div>
      </div>

      {/* Clinical Notes / Symptoms */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#536965] mb-1.5">
          Describe Your Pain / Symptoms *
        </label>
        <div className="relative">
          <FileText className="absolute left-3.5 top-3 w-4 h-4 text-[#7a918d]" />
          <textarea
            rows={3}
            placeholder="e.g. Lower back stiffness for 4 months radiating into left glute when sitting at office desk..."
            {...register("message")}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#dbe7e2] bg-white text-sm text-[#102421] placeholder-[#9cb0ac] focus:outline-none focus:border-[#10a880] focus:ring-2 focus:ring-[#10a880]/15 transition-all resize-none"
          />
        </div>
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      {/* Ethical note */}
      <p className="text-[11px] text-[#6d847f] leading-relaxed">
        <strong>Notice:</strong> Your privacy is respected. Submissions are reviewed directly by Dr. Faiza&apos;s team to schedule 1-on-1 time at 2nd Floor, Chaudhary Plaza, F-7 Markaz, Islamabad.
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#10a880] hover:bg-[#0c8263] text-white font-medium text-sm tracking-wide transition-all shadow-md shadow-[#10a880]/20 disabled:opacity-70 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Processing Consultation Request...</span>
          </>
        ) : (
          <>
            <span>Submit Appointment Request</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};
