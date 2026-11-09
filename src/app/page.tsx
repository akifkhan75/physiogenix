import React from "react";
import { EditorialHero } from "@/components/home/EditorialHero";
import { BrandIntroduction } from "@/components/home/BrandIntroduction";
import { ServicesIndex } from "@/components/home/ServicesIndex";
import { SymptomNavigator } from "@/components/home/SymptomNavigator";
import { DoctorSection } from "@/components/home/DoctorSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { ClinicExperience } from "@/components/home/ClinicExperience";
import { TestimonialsEditorial } from "@/components/home/TestimonialsEditorial";
import { ClinicalFaqSection } from "@/components/home/ClinicalFaqSection";
import { ContactBookingSection } from "@/components/home/ContactBookingSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#FCFBF8]">
      {/* Hero Section with Dr. Faiza authentic portrait */}
      <EditorialHero />

      {/* Philosophy & Hands Before Machines */}
      <BrandIntroduction />

      {/* Services Index with verified clinic photography */}
      <ServicesIndex />

      {/* Interactive Symptom Navigator ("Feel This? Start Here") */}
      <SymptomNavigator />

      {/* Dr. Faiza Yousef Section */}
      <DoctorSection />

      {/* Patient Pathway & Ethical 12-Session Cap */}
      <ApproachSection />

      {/* Authentic Clinic Environment & Movement is Medicine Gym */}
      <ClinicExperience />

      {/* Google Verified 5.0 Patient Reviews */}
      <TestimonialsEditorial />

      {/* Official Verified Clinical FAQs */}
      <ClinicalFaqSection />

      {/* Final Appointment Intake & Verified F-7 Contact Details */}
      <ContactBookingSection />
    </div>
  );
}
