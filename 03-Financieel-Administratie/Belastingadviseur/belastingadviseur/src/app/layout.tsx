import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "De Brug Adviseurs | Belastingadviseur & Financieel Advies",
  description: "Uw partner in belastingadvies, financiële administratie en bedrijfsadvies. Persoonlijk, professioneel en betrouwbaar sinds 1987.",
  keywords: "belastingadviseur, financieel advies, administratie, boekhouding, Nederland, Utrecht",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-cream-100">
        {children}
      </body>
    </html>
  );
}
