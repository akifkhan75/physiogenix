import React from "react";
import { EditorialHero } from "@/components/home/EditorialHero";
import { BrandIntroduction } from "@/components/home/BrandIntroduction";
import { ServicesIndex } from "@/components/home/ServicesIndex";
import { DoctorSection } from "@/components/home/DoctorSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { ClinicExperience } from "@/components/home/ClinicExperience";
import { TestimonialsEditorial } from "@/components/home/TestimonialsEditorial";
import { ContactBookingSection } from "@/components/home/ContactBookingSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#FCFBF8]">
      {/* Section B: Hero Section */}
      <EditorialHero />

      {/* Section C: Philosophy Section */}
      <BrandIntroduction />

      {/* Section D: Services Section */}
      <ServicesIndex />

      {/* Section E: Dr. Faiza Section */}
      <DoctorSection />

      {/* Section F: Patient Journey */}
      <ApproachSection />

      {/* Section G: Clinic Environment */}
      <ClinicExperience />

      {/* Section H: Patient Experiences (Testimonials) */}
      <TestimonialsEditorial />

      {/* Section I: Final CTA & Consultation Intake */}
      <ContactBookingSection />
    </div>
  );
}
