/**
 * Home Page - Hotel De Gouden Leeuw
 * 
 * The Art of Arrival - Complete Landing Experience
 * All sections combined for the full hotel presentation
 */

import Hero from '@/components/sections/Hero';
import RoomGrid from '@/components/sections/RoomGrid';
import Concierge from '@/components/sections/Concierge';
import RestaurantSpa from '@/components/sections/RestaurantSpa';
import BookingCalendar from '@/components/sections/BookingCalendar';
import GuestJourney from '@/components/sections/GuestJourney';
import Reviews from '@/components/sections/Reviews';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - The Grand Entrance */}
      <Hero />
      
      {/* Room Showcase - Archway Gallery */}
      <RoomGrid />
      
      {/* Virtual Concierge - Interactive Service */}
      <Concierge />
      
      {/* Spa & Dining Preview - Split Screen */}
      <RestaurantSpa />
      
      {/* Availability Calendar - Booking Tool */}
      <BookingCalendar />
      
      {/* Guest Journey Timeline */}
      <GuestJourney />
      
      {/* Reviews Marquee - Social Proof */}
      <Reviews />
    </>
  );
}
