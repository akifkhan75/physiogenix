import React from "react";
import { EditorialHero } from "@/components/home/EditorialHero";
import { BrandIntroduction } from "@/components/home/BrandIntroduction";
import { DoctorSection } from "@/components/home/DoctorSection";
import { ServicesIndex } from "@/components/home/ServicesIndex";
import { ClinicExperience } from "@/components/home/ClinicExperience";
import { ApproachSection } from "@/components/home/ApproachSection";
import { TestimonialsEditorial } from "@/components/home/TestimonialsEditorial";
import { ContactBookingSection } from "@/components/home/ContactBookingSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#f9faf8]">
      {/* Section 2: Cinematic Hero */}
      <EditorialHero />

      {/* Section 3: Brand Introduction */}
      <BrandIntroduction />

      {/* Section 4: Dr. Faiza */}
      <DoctorSection />

      {/* Section 5: Services */}
      <ServicesIndex />

      {/* Section 6: Clinic Experience */}
      <ClinicExperience />

      {/* Section 7: Approach */}
      <ApproachSection />

      {/* Section 8: Testimonials */}
      <TestimonialsEditorial />

      {/* Section 9: Contact */}
      <ContactBookingSection />
    </div>
  );
}
