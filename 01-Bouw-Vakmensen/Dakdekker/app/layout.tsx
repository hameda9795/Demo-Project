/**
 * Root Layout Component
 * Dakwerken Van der Berg - Premium Roofing Website
 * 
 * @description Root layout with fonts, metadata, and global providers
 * Uses "Space Grotesk" for headings (construction feel) and "Inter" for body text
 * Implements the Roof Angle Design System (30-degree theme)
 */

import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Font configuration for construction/professional aesthetic
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// SEO and metadata configuration
export const metadata: Metadata = {
  title: {
    default: "Dakwerken Van der Berg | Uw Dak, Ons Vak sinds 1998",
    template: "%s | Dakwerken Van der Berg",
  },
  description:
    "Professionele dakdekker in Utrecht en omgeving. Dakreparatie, renovatie, isolatie en noodhulp. 10 jaar garantie. Gratis dakinspectie. Bel direct: 030-1234567",
  keywords: [
    "dakdekker",
    "dakreparatie",
    "dakrenovatie",
    "dakisolatie",
    "Utrecht",
    "Amsterdam",
    "dakgoot",
    "zonnepanelen",
    "daklekkage",
    "stormschade",
  ],
  authors: [{ name: "Dakwerken Van der Berg" }],
  creator: "Dakwerken Van der Berg",
  publisher: "Dakwerken Van der Berg",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://dakwerkenvanderberg.nl",
    siteName: "Dakwerken Van der Berg",
    title: "Dakwerken Van der Berg | Uw Dak, Ons Vak sinds 1998",
    description:
      "Professionele dakdekker in Utrecht en omgeving. Dakreparatie, renovatie, isolatie en noodhulp. 10 jaar garantie.",
    images: [
      {
        url: "/images/dakdekker/hero/sunset-roof.jpg",
        width: 1200,
        height: 630,
        alt: "Dakwerken Van der Berg - Professionele dakdekkers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dakwerken Van der Berg | Uw Dak, Ons Vak",
    description: "Professionele dakdekker in Utrecht en omgeving. 10 jaar garantie.",
    images: ["/images/dakdekker/hero/sunset-roof.jpg"],
  },
  alternates: {
    canonical: "https://dakwerkenvanderberg.nl",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "construction",
};

// Viewport configuration (separated from metadata as per Next.js 14 best practices)
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#1e293b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Dakwerken Van der Berg",
  image: "https://dakwerkenvanderberg.nl/images/dakdekker/hero/sunset-roof.jpg",
  "@id": "https://dakwerkenvanderberg.nl",
  url: "https://dakwerkenvanderberg.nl",
  telephone: "+31301234567",
  email: "info@dakwerkenvanderberg.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dakwerkersstraat 42",
    addressLocality: "Utrecht",
    postalCode: "3511 AA",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.0907,
    longitude: 5.1214,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "€€",
  foundingDate: "1998",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 52.0907,
      longitude: 5.1214,
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dakdiensten",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dakreparatie" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dakrenovatie" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dakisolatie" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dakgoot reiniging" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased bg-cloud-white text-storm-gray">
        {children}
      </body>
    </html>
  );
}
