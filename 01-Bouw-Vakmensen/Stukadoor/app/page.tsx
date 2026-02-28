import { Hero } from '@/sections/Hero'
import { StructuurVisualizer } from '@/sections/StructuurVisualizer'
import { BeforeAfterSlider } from '@/sections/BeforeAfterSlider'
import { PlasterCalculator } from '@/sections/PlasterCalculator'
import { FinishLevels } from '@/sections/FinishLevels'
import { ProjectGallery } from '@/sections/ProjectGallery'
import { ProcessTimeline } from '@/sections/ProcessTimeline'
import { RenovliesComparison } from '@/sections/RenovliesComparison'
import { TrustBadges } from '@/sections/TrustBadges'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <StructuurVisualizer />
      <BeforeAfterSlider />
      <PlasterCalculator />
      <FinishLevels />
      <ProjectGallery />
      <ProcessTimeline />
      <RenovliesComparison />
    </>
  )
}
