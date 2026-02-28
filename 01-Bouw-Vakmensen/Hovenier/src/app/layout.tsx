import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { DemoWatermark } from "@/components/DemoBadge";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Groen & Tuin Architectuur | Hovenier Amsterdam & Haarlem",
  description: "Professionele tuinontwerp, aanleg en onderhoud in de Amsterdam/Haarlem regio. Creëer uw droomtuin met onze expertise.",
  keywords: "hovenier, tuinarchitectuur, tuinontwerp, tuinaanleg, Amsterdam, Haarlem, tuinonderhoud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={`${inter.variable} ${dmSerif.variable} font-sans antialiased`}>
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <DemoWatermark />
      </body>
    </html>
  );
}
