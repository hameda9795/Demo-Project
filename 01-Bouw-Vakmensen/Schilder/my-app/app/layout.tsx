import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { DemoBanner } from '@/components/DemoBanner'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingCTA, FloatingCTAMobile } from '@/components/FloatingCTA'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Kleur & Verf Meesters | Professioneel Schilderwerk Den Haag & Rotterdam',
  description: 'Professioneel schilderwerk in Den Haag, Rotterdam en omgeving. Binnen- en buitenschilderwerk, streeploze kwaliteit met 5 jaar garantie. Gratis offerte!',
  keywords: 'schilder, schilderwerk, den haag, rotterdam, binnenschilderwerk, buitenschilderwerk, verf',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter antialiased bg-white">
        <DemoBanner />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <FloatingCTAMobile />
      </body>
    </html>
  )
}
