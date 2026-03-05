import CustomCursor from '@/components/CustomCursor'
import FloatingButton from '@/components/FloatingButton'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import MenuSection from '@/components/sections/MenuSection'
import CateringSection from '@/components/sections/CateringSection'
import GallerySection from '@/components/sections/GallerySection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <FloatingButton />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <CateringSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
