/**
 * Van den Berg Timmerwerken - Root Layout
 * 
 * "The Living Grain" Design System
 * ================================
 * This website embodies the organic nature of wood craftsmanship through:
 * - Flowing wood grain lines that connect sections (SVG animations)
 * - Chisel-cut angles and dovetail joint shapes
 * - Warm color palette inspired by natural wood tones
 * - Smooth, sanding-like animations via Framer Motion
 * 
 * Typography:
 * - Playfair Display: Elegant serif for headings (craftsmanship feel)
 * - Inter: Clean sans-serif for body text (modern readability)
 */

import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CookieBanner } from "@/components/CookieBanner";

/**
 * Playfair Display - Elegant serif font for headings
 * evokes traditional craftsmanship and quality
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/**
 * Inter - Clean, modern sans-serif for body text
 * ensures excellent readability across all devices
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Metadata configuration for SEO
 * DEMO WEBSITE - All information is fictional
 */
export const metadata: Metadata = {
  title: "Van den Berg Timmerwerken | Maatwerk in Hout | Utrecht & Amersfoort",
  description: "DEMO WEBSITE - Vakmanschap in maatwerk meubels, renovaties en restauratie. 20 jaar ervaring in Utrecht, Amersfoort en omgeving. FSC gecertificeerd hout.",
  keywords: ["timmerman", "maatwerk", "meubels", "renovatie", "restauratie", "hout", "Utrecht", "Amersfoort", "DEMO"],
  authors: [{ name: "Tech Solutions Utrecht" }],
  metadataBase: new URL("https://techsolutionsutrecht.nl"),
  openGraph: {
    title: "Van den Berg Timmerwerken | Vakmanschap dat blijft",
    description: "DEMO WEBSITE - Maatwerk in hout voor uw huis. Handgemaakt in Nederland.",
    type: "website",
    locale: "nl_NL",
  },
  robots: {
    index: false, // DEMO website - prevent indexing
    follow: false,
  },
};

/**
 * Root Layout Component
 * Wraps all pages with global UI elements
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable}`}>
      {/* 
        HTML Comment for copyright
        © Tech Solutions Utrecht - Unauthorized copying prohibited 
      */}
      <body className="font-sans antialiased bg-[#F5F5DC] text-[#3E2723] overflow-x-hidden">
        {/* 
          Wood Grain Background Pattern
          Subtle CSS gradient creating organic wood texture
        */}
        <div 
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
          style={{
            background: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                #8B5A2B 2px,
                #8B5A2B 3px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 50px,
                rgba(139, 90, 43, 0.1) 50px,
                rgba(139, 90, 43, 0.1) 51px
              )
            `,
          }}
        />
        
        {/* Global Header with Navigation */}
        <Header />
        
        {/* Main Content Area */}
        <main className="relative z-10">
          {children}
        </main>
        
        {/* Global Footer */}
        <Footer />
        
        {/* Floating CTA Button - Appears on all pages */}
        <FloatingCTA />
        
        {/* GDPR Cookie Banner */}
        <CookieBanner />
      </body>
    </html>
  );
}
