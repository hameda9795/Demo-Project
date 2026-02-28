import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { DeviceProvider } from '@/hooks/useDeviceToggle'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bouwbedrijf Van den Berg | Uw Aannemer in Utrecht',
  description: 'Al meer dan 25 jaar uw vertrouwde aannemer in Utrecht. Specialist in renovatie, nieuwbouw, dakwerk en timmerwerk. Vraag nu een offerte aan!',
  keywords: ['aannemer', 'bouwbedrijf', 'Utrecht', 'renovatie', 'nieuwbouw', 'dakwerk', 'timmerwerk'],
  authors: [{ name: 'Bouwbedrijf Van den Berg' }],
  openGraph: {
    title: 'Bouwbedrijf Van den Berg',
    description: 'Uw vertrouwde aannemer in Utrecht en omgeving',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased bg-offwhite">
        <DeviceProvider>
          {children}
        </DeviceProvider>
      </body>
    </html>
  )
}
