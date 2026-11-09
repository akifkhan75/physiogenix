import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileAppointmentBar } from "@/components/layout/StickyMobileAppointmentBar";
import { clinicData } from "@/data/clinicData";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#10a880",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://physiogenix.pk"),
  title: {
    default: "Physiogenix | Premium Assessment-Led Physiotherapy in Islamabad",
    template: "%s | Physiogenix by Dr. Faiza",
  },
  description:
    "Physiogenix is Islamabad's leading assessment-led physiotherapy clinic led by Dr. Faiza Yousef (DPT, COMPT, CDNP, CDDC). Specialized in Orthopedic Manual Therapy, Spinal Care, Sciatica, Frozen Shoulder, and Dry Needling.",
  keywords: [
    "Physiotherapy Islamabad",
    "Dr Faiza Yousef",
    "Physiogenix",
    "Best Physiotherapist in Islamabad F-7",
    "Orthopedic Manual Therapy",
    "Back Pain Islamabad",
    "Neck Pain Relief",
    "Sciatica Rehabilitation",
    "Dry Needling Islamabad",
    "Frozen Shoulder Treatment",
    "Posture Correction Islamabad",
  ],
  authors: [{ name: "Dr. Faiza Yousef, DPT, COMPT", url: "https://www.instagram.com/faiza_fitnessphysio/" }],
  creator: "Physiogenix",
  publisher: "Physiogenix Clinic",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://physiogenix.pk",
    siteName: "Physiogenix",
    title: "Physiogenix | Assessment-Led Physiotherapy by Dr. Faiza Yousef",
    description:
      "Root-cause recovery, orthopedic manual therapy, and posture restoration. Based in F-7 Markaz, Islamabad.",
    images: [
      {
        url: "/images/physiogenix-logo.png",
        width: 600,
        height: 600,
        alt: "Physiogenix Logo & Identity Mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiogenix | Assessment-Led Physiotherapy in Islamabad",
    description:
      "Orthopedic manual therapy, spinal rehabilitation, and posture restoration led by Dr. Faiza Yousef.",
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
    <html lang="en" className={`${sans.variable} ${serif.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/physiogenix-logo.png" />
      </head>
      <body className="font-sans-body min-h-screen flex flex-col bg-[#fbfdfc] text-[#102421] selection:bg-[#10a880] selection:text-white">
        {/* Healthcare Structured Data */}
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
                streetAddress: "2nd Floor, Chaudhary Plaza, Bhittai Road (Next to PSO Pump, above Medicsi Hospital)",
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
                jobTitle: "Doctor of Physical Therapy & Lead Clinical Director",
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

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileAppointmentBar />
      </body>
    </html>
  );
}
