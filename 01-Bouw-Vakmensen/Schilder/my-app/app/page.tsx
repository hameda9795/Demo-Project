import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { Kleurenkiezer } from '@/components/kleurenkiezer/Kleurenkiezer'
import { PaintCalculator } from '@/components/sections/PaintCalculator'
import { FinishTypes } from '@/components/sections/FinishTypes'
import { SeasonalAdvisor } from '@/components/sections/SeasonalAdvisor'
import { QualityGuarantee } from '@/components/sections/QualityGuarantee'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <BeforeAfter />
      <Kleurenkiezer />
      <PaintCalculator />
      <FinishTypes />
      <SeasonalAdvisor />
      <QualityGuarantee />
    </>
  )
}
