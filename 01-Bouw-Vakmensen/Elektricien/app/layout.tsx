import type { Metadata } from "next"
import { Inter, Rajdhani } from "next/font/google"
import "./globals.css"
import DemoWatermark from "@/components/DemoWatermark"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FloatingCTA from "@/components/FloatingCTA"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const rajdhani = Rajdhani({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
})

export const metadata: Metadata = {
  title: "Stroom & Veiligheid Elektro | Professionele Elektricien Eindhoven",
  description: "24/7 spoedhulp elektricien in Eindhoven en Rotterdam. Specialist in laadpalen, smart home, meterkasten en zonnepanelen aansluiten.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={`${inter.variable} ${rajdhani.variable} font-body bg-circuit-dark text-white`}>
        <DemoWatermark />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
