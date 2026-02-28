import { EmergencyHeader } from '@/components/sections/EmergencyHeader'
import { Navigation } from '@/components/sections/Navigation'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { CoverageArea } from '@/components/sections/CoverageArea'
import { PriceEstimator } from '@/components/sections/PriceEstimator'
import { Gallery } from '@/components/sections/Gallery'
import { Reviews } from '@/components/sections/Reviews'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { CookieBanner } from '@/components/sections/CookieBanner'
import { MobileEmergencyButton } from '@/components/sections/MobileEmergencyButton'

/**
 * Home Page
 * Main landing page for Van Dijk Loodgieters
 * Combines all sections for a complete user journey
 */
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <EmergencyHeader />
      <Navigation />
      <Hero />
      <Services />
      <BeforeAfter />
      <CoverageArea />
      <PriceEstimator />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <CookieBanner />
      <MobileEmergencyButton />
    </main>
  )
}
