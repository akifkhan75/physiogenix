# Physiogenix — Assessment-Led Physiotherapy & Rehabilitation
**Clinical Website for Dr. Faiza Yousef, DPT, COMPT, CDNP, CDDC**  
*Sector F-7 Markaz, Islamabad, Pakistan*

---

## Overview

Physiogenix is a premier assessment-led physical therapy practice located in Sector F-7 Markaz, Islamabad, founded and led by **Dr. Faiza Yousef** (Doctor of Physical Therapy, STMU). The website is engineered to international luxury healthcare and editorial standards (Apple, Aesop, Kinfolk aesthetic) with an emphasis on clinical transparency, root-cause recovery, and an ethical **maximum 12-session cap** standard.

---

## Brand & Clinical Identity

* **Practice Name:** Physiogenix (Physiogenix by Dr. Faiza)
* **Lead Practitioner:** Dr. Faiza Yousef, DPT, COMPT, CDNP, CDDC
* **Academic Alma Mater:** Shifa Tameer-e-Millat University (STMU), Islamabad
* **Certifications:**
  * COMPT (Certified Orthopedic Manual Physical Therapist)
  * CDNP (Certified Dry Needling Practitioner)
  * CDDC (Certified Dry & Dynamic Cupping Practitioner)
* **Clinical Focus:** Posture restoration, spinal disc decompression, cervicogenic headache relief, sciatica, and sports injury recovery.
* **Core Clinical Philosophy:** *"Hands Before Machines"* — skilled clinical palpation, joint mobilization, and differential diagnosis rather than passive machine dependency.
* **Location:** 2nd Floor, Chaudhary Plaza, Bhittai Road (Above Medicsi Hospital, beside PSO Petrol Station, near Jinnah Super Market), Sector F-7 Markaz, Islamabad, 44000, Pakistan.
* **Operating Hours:**
  * Monday – Friday: 12:00 PM – 8:00 PM
  * Saturday: 3:00 PM – 8:00 PM
  * Sunday: Closed
* **Contact Lines:**
  * Primary (Call & WhatsApp): `+92 330 5122052`
  * Secondary Line: `+92 332 1965829`
* **Social Accounts:**
  * Doctor: [@faiza_fitnessphysio](https://www.instagram.com/faiza_fitnessphysio/)
  * Clinic: [@_physiogenix_](https://www.instagram.com/_physiogenix_/)

---

## Architecture & Technology Stack

* **Framework:** Next.js (App Router, Turbopack, Server & Client Components)
* **Language:** TypeScript 5 (Strict Mode)
* **Styling:** Tailwind CSS v4 with custom design tokens derived from the Physiogenix logo mark (`#10a880` Emerald Teal, `#365759` Deep Clinical Slate, `#0d211e` Charcoal Forest)
* **Typography:** `Plus Jakarta Sans` (pristine clinical body & UI sans) paired with `Newsreader` (editorial serif)
* **Motion:** `framer-motion` for staggered typography reveals and smooth layout interactions
* **Forms & Validation:** `react-hook-form` with `zod` schema validation
* **Icons:** `lucide-react` + custom SVG social icons
* **SEO & Metadata:** Open Graph, Twitter Cards, Canonical links, `sitemap.xml`, `robots.txt`, and Schema.org JSON-LD structured data (`Physiotherapy`, `Physician`, `MedicalProcedure`)

---

## Website Structure & Pages

1. **Homepage (`/`)**
   * Responsive editorial navigation with clinic logo, quick phone link, and appointment CTA
   * High-impact hero section with verified credentials and Dr. Faiza portrait presentation
   * Trust indicators (8+ Years experience, 5.0 Google rating, STMU DPT, 12-session cap standard)
   * Dr. Faiza Yousef biographical profile & verified credentials
   * Comprehensive clinical services grid (8 departments)
   * Clinical philosophy & differentiators ("Hands Before Machines", 1-on-1 private rooms)
   * 4-stage patient recovery journey
   * Interactive conditions matrix & indications filter
   * Clinic environment & hospital-grade hygiene standards
   * Verified patient testimonials (Islamabad cases)
   * Clinical FAQs with accordion interactions
   * F-7 Markaz Islamabad location guide & Google Maps embed
2. **About Dr. Faiza (`/about-dr-faiza`)**
   * Detailed clinician biography, academic background at STMU, post-graduate certifications, interview quotes, and Instagram verification links.
3. **About Physiogenix (`/about-physiogenix`)**
   * Clinic origins, ethical standard against perpetual therapy packages, private room protocols, and infection control standards.
4. **Clinical Services Overview (`/services`)**
   * Directory of all 8 specialized departments with timelines and clinical indications.
5. **Individual Service Detail Pages (`/services/[slug]`)**
   * Statically generated for all 8 clinical departments:
     * `/services/orthopedic-manual-therapy`
     * `/services/spinal-care`
     * `/services/headache-migraine`
     * `/services/sciatica-nerve-rehabilitation`
     * `/services/frozen-shoulder-rehabilitation`
     * `/services/posture-scoliosis-correction`
     * `/services/sports-injury-rehabilitation`
     * `/services/dry-needling-cupping`
6. **Contact & Appointment Booking (`/contact`)**
   * Zod-validated patient booking form, WhatsApp fast-track integration, operating hours, telephone numbers, and directions.
7. **Privacy Policy (`/privacy`)**
   * Medical confidentiality and patient data security standards.

---

## Getting Started

### 1. Prerequisites
* Node.js 18+ (tested on Node v24)
* npm 9+

### 2. Installation
```bash
# Clone or navigate to the repository
cd physiogenix

# Install dependencies
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Static Generation
```bash
npm run build
npm run start
```
All routes, static metadata, and sitemaps will be compiled and verified.

---

## Asset & Content Inventory Notice

* **Logo:** The vector-scaled authentic logo supplied by the client is integrated at `/images/physiogenix-logo.png` and rendered across navigation, footers, favicons, and metadata.
* **Doctor Profile Photo:** Verified authentic profile picture extracted from `@faiza_fitnessphysio` is housed at `/dr-faiza/dr-faiza-avatar.jpg`.
* **Editorial Portraits:** Clearly marked client-facing placeholders are documented for high-resolution studio photography sessions. No generic stock photography is passed off as Dr. Faiza or the clinic.
