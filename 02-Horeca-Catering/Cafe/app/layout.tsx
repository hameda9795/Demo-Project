/**
 * Root Layout
 * Global layout with fonts, metadata, and PWA configuration
 */

import type { Metadata, Viewport } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'De Gouden Boon | Specialty Coffee Utrecht',
  description: 'Uw dagelijkse ritueel in het hart van Utrecht. Specialty coffee, verse lunch en homemade pastries.',
  keywords: ['koffie', 'cafe', 'utrecht', 'specialty coffee', 'lunch', 'pastry'],
  authors: [{ name: 'Tech Solutions Utrecht' }],
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'De Gouden Boon | Specialty Coffee Utrecht',
    description: 'Uw dagelijkse ritueel in het hart van Utrecht.',
    type: 'website',
    locale: 'nl_NL',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#3e2723',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={nunito.variable}>
      <body className={`${nunito.className} antialiased bg-cream-50 text-espresso-900`}>
        {children}
      </body>
    </html>
  );
}
