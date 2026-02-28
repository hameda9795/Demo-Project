import Hero from "@/components/sections/Hero"
import EmergencyBanner from "@/components/sections/EmergencyBanner"
import Services from "@/components/sections/Services"
import EVCharging from "@/components/sections/EVCharging"
import SafetyCheck from "@/components/sections/SafetyCheck"
import Portfolio from "@/components/sections/Portfolio"

export default function Home() {
  return (
    <>
      <EmergencyBanner />
      <Hero />
      <Services />
      <EVCharging />
      <SafetyCheck />
      <Portfolio />
    </>
  )
}
