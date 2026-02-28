import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import './globals.css'

// Load Google Fonts via next/font for optimal performance
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Van Dijk Loodgieters | 24/7 Spoedhulp Rotterdam',
  description: 'Professionele loodgietersdiensten in Rotterdam en omgeving. 24/7 spoedhulp, lekkages, verwarming, sanitair en riool. VCA gecertificeerd met 15 jaar ervaring.',
  keywords: ['loodgieter', 'rotterdam', 'spoed', 'lekkage', 'verwarming', 'sanitair', 'riool', '24/7'],
  authors: [{ name: 'Van Dijk Loodgieters' }],
  openGraph: {
    title: 'Van Dijk Loodgieters | 24/7 Spoedhulp Rotterdam',
    description: 'Professionele loodgietersdiensten in Rotterdam. 24/7 beschikbaar, VCA gecertificeerd.',
    type: 'website',
    locale: 'nl_NL',
  },
}

/**
 * Root layout component that wraps all pages
 * Provides global font configuration and base structure
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-off-white">
        {children}
      </body>
    </html>
  )
}
