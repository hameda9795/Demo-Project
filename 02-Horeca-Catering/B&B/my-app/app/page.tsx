import HeroSection from './sections/HeroSection'
import BreakfastSection from './sections/BreakfastSection'
import RoomsSection from './sections/RoomsSection'
import HostsSection from './sections/HostsSection'
import GuestbookSection from './sections/GuestbookSection'
import ExperiencesSection from './sections/ExperiencesSection'
import WaveDivider from './components/WaveDivider'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Wave Divider */}
      <div className="relative bg-creamy-egg">
        <WaveDivider position="top" color="#fefae0" className="-top-px" />
      </div>

      {/* Breakfast Section */}
      <BreakfastSection />

      {/* Rooms Section */}
      <RoomsSection />

      {/* Meet Your Hosts */}
      <HostsSection />

      {/* Guestbook */}
      <GuestbookSection />

      {/* Local Experiences */}
      <ExperiencesSection />
    </>
  )
}
