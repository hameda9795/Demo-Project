import type { Metadata } from 'next'
import { Lora, Nunito } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Het Kleine Paradijs | Bed & Breakfast in het hart van Nederland',
  description: 'Uw thuis weg van huis. Geniet van huisgemaakt ontbijt en warme gastvrijheid bij Het Kleine Paradijs. Vier unieke kamers, persoonlijke service en ons beroemde ontbijt.',
  keywords: 'bed and breakfast, B&B, overnachting, ontbijt, Utrecht, Nederland, boutique hotel, romantisch verblijf',
  authors: [{ name: 'Tech Solutions Utrecht' }],
  openGraph: {
    title: 'Het Kleine Paradijs | Bed & Breakfast',
    description: 'Uw thuis weg van huis in het hart van Nederland',
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
    <html lang="nl" className={`${lora.variable} ${nunito.variable}`}>
      <body className="font-nunito bg-creamy-egg text-coffee-brown antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
