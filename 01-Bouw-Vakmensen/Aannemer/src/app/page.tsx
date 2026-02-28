import { MainLayout } from '@/components/layouts/MainLayout'
import { HeroSection } from '@/components/organisms/HeroSection'
import { ProjectGallery } from '@/components/organisms/ProjectGallery'
import { ServicesSection } from '@/components/organisms/ServicesSection'
import { BeforeAfterSlider } from '@/components/organisms/BeforeAfterSlider'
import { QuoteCalculator } from '@/components/organisms/QuoteCalculator'
import { TeamSection } from '@/components/organisms/TeamSection'
import { BlogSection } from '@/components/organisms/BlogSection'
import { Footer } from '@/components/layouts/Footer'

/**
 * Home Page
 * Complete landing page with all sections
 */
export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <ProjectGallery />
      <ServicesSection />
      <BeforeAfterSlider />
      <QuoteCalculator />
      <TeamSection />
      <BlogSection />
      <Footer />
    </MainLayout>
  )
}
