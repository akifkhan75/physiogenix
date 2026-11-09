import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { DrFaizaBioSection } from "@/components/home/DrFaizaBioSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { PatientJourneySection } from "@/components/home/PatientJourneySection";
import { ConditionsMatrixSection } from "@/components/home/ConditionsMatrixSection";
import { ClinicEnvironmentSection } from "@/components/home/ClinicEnvironmentSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { LocationSection } from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustIndicators />
      <DrFaizaBioSection />
      <ServicesSection />
      <PhilosophySection />
      <PatientJourneySection />
      <ConditionsMatrixSection />
      <ClinicEnvironmentSection />
      <TestimonialsSection />
      <FaqSection />
      <LocationSection />
    </div>
  );
}
