import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { MinimalNav } from "@/components/layout/MinimalNav";
import { MinimalFooter } from "@/components/layout/MinimalFooter";
import { StickyMobileAppointmentBar } from "@/components/layout/StickyMobileAppointmentBar";
import { FloatingWhatsAppButton } from "@/components/ui/FloatingWhatsAppButton";
import { clinicData } from "@/data/clinicData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#193B2C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://physiogenix.pk"),
  title: {
    default: "Physiogenix | Movement Rehabilitation & Manual Physiotherapy Islamabad",
    template: "%s | Physiogenix by Dr. Faiza",
  },
  description:
    "Physiogenix is an assessment-led musculoskeletal physiotherapy practice in Sector F-7 Markaz, Islamabad led by Dr. Faiza Yousef (DPT, COMPT, CDNP, CDDC). Specialized in Orthopedic Manual Therapy, Spinal Decompression, Sciatica, and Movement Rehabilitation.",
  keywords: [
    "Physiogenix",
    "Dr Faiza Yousef",
    "Physiotherapy Islamabad",
    "Orthopedic Manual Therapy Islamabad",
    "Back Pain Clinic F-7 Islamabad",
    "Sciatica Rehabilitation Islamabad",
    "Doctor of Physical Therapy STMU",
    "Dry Needling Islamabad",
    "Frozen Shoulder Rehabilitation",
  ],
  authors: [{ name: "Dr. Faiza Yousef, DPT, COMPT", url: "https://www.instagram.com/faiza_fitnessphysio/" }],
  creator: "Physiogenix",
  publisher: "Physiogenix",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://physiogenix.pk",
    siteName: "Physiogenix",
    title: "Physiogenix | Assessment-Led Physiotherapy in Islamabad",
    description:
      "Root-cause musculoskeletal care, orthopedic manual therapy, and movement restoration by Dr. Faiza Yousef.",
    images: [
      {
        url: "/images/physiogenix-logo.png",
        width: 600,
        height: 600,
        alt: "Physiogenix Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiogenix | Assessment-Led Physiotherapy in Islamabad",
    description: "Orthopedic manual therapy and spinal rehabilitation led by Dr. Faiza Yousef.",
    images: ["/images/physiogenix-logo.png"],
  },
  alternates: {
    canonical: "https://physiogenix.pk",
  },
  icons: {
    icon: "/images/physiogenix-logo.png",
    shortcut: "/images/physiogenix-logo.png",
    apple: "/images/physiogenix-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/physiogenix-logo.png" />
      </head>
      <body className="font-sans-editorial min-h-screen flex flex-col bg-[#f9faf8] text-[#0d1a17] selection:bg-[#0f5948] selection:text-[#f9faf8]">
        {/* Schema.org Healthcare Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physiotherapy",
              name: clinicData.name,
              alternateName: "Physiogenix by Dr. Faiza",
              url: "https://physiogenix.pk",
              logo: "https://physiogenix.pk/images/physiogenix-logo.png",
              image: "https://physiogenix.pk/images/physiogenix-logo.png",
              telephone: clinicData.contact.primaryPhone,
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2nd Floor, Chaudhary Plaza, Bhittai Road (Above Medicsi Hospital, beside PSO Petrol Pump)",
                addressLocality: "Islamabad",
                addressRegion: "Islamabad Capital Territory",
                postalCode: "44000",
                addressCountry: "PK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.7206,
                longitude: 73.0559,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "12:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "15:00",
                  closes: "20:00",
                },
              ],
              founder: {
                "@type": "Person",
                name: "Dr. Faiza Yousef",
                jobTitle: "Founder & Lead Physiotherapist",
                alumniOf: "Shifa Tameer-e-Millat University (STMU)",
                sameAs: [
                  "https://www.instagram.com/faiza_fitnessphysio/",
                  "https://www.instagram.com/_physiogenix_/",
                ],
              },
              sameAs: [
                "https://www.instagram.com/_physiogenix_/",
                "https://www.instagram.com/faiza_fitnessphysio/",
              ],
            }),
          }}
        />

        <MinimalNav />
        <main className="flex-1">{children}</main>
        <MinimalFooter />
        <StickyMobileAppointmentBar />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
