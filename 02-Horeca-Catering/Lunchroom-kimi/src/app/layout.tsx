import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'De Lunchkamer | Horeca & Catering Utrecht',
  description: 'Dagverse broodjes, huisgemaakte soepen en verrassende salades. Wij verzorgen jouw lunch met passie en lokale ingrediënten.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body text-base text-primary bg-warm-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
