import type { Metadata } from "next";
import "./globals.css";
import { FloatingNav } from "@/components/layout/floating-nav";
import { FloatingCTA } from "@/components/layout/floating-cta";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "VakantieHuizen Pro - Uw woning, onze zorg, tevreden gasten",
  description: "Professioneel beheer van uw vakantiewoning of B&B in Nederland. Verdien meer met minder zorgen.",
  keywords: "vakantiewoning, verhuur, Airbnb beheer, B&B, Amsterdam, Utrecht, vakantiehuis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="antialiased">
        <FloatingNav />
        {children}
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
