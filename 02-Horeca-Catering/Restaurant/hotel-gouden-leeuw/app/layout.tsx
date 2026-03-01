/**
 * Root Layout - Hotel De Gouden Leeuw
 * The Art of Arrival - Design System Foundation
 * 
 * This layout establishes the visual foundation:
 * - Typography: Cormorant Garamond (elegant serif) + Montserrat (modern sans)
 * - Color palette: Navy, Gold, Cream, Burgundy
 * - Global animations and interactions
 */

import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

// Elegant serif for headings - luxury feel
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

// Modern sans-serif for body text - clean readability
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hotel De Gouden Leeuw | Boutique Hotel in Utrecht Centrum',
  description: 'Boutique 4-sterren hotel met 25 unieke kamers in het hart van Utrecht. Panoramisch uitzicht op de Domtoren, restaurant, spa & wellness.',
  keywords: 'hotel utrecht, boutique hotel, domtoren, 4 sterren hotel, spa utrecht, restaurant utrecht centrum',
  authors: [{ name: 'Tech Solutions Utrecht' }],
  openGraph: {
    title: 'Hotel De Gouden Leeuw | Boutique Hotel Utrecht',
    description: 'Uw thuis in het hart van Utrecht. Boutique hotel met panoramisch uitzicht op de Domtoren.',
    type: 'website',
    locale: 'nl_NL',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-cream text-navy antialiased">
        {/* Subtle noise texture overlay for premium paper feel */}
        <div 
          className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
