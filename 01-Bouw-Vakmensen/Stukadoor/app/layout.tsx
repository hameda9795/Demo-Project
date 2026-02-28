import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { FloatingCTA } from '@/components/FloatingCTA'
import { DemoBanner } from '@/components/DemoBanner'

export const metadata: Metadata = {
  title: 'Perfect Stucwerk | Professionele Stukadoor Amsterdam & Utrecht',
  description: 'Vloeiend perfectionisme in stucwerk. Specialist in gladde wanden, sierpleister en naadloze afwerking. 10 jaar garantie. Vraag nu een gratis offerte aan.',
  keywords: 'stukadoor, stucwerk, sierpleister, spachtelputz, granol, Amsterdam, Utrecht, wandafwerking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col">
        <DemoBanner />
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
