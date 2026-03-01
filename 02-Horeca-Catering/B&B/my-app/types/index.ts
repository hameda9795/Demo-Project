/**
 * Type definitions for Het Kleine Paradijs B&B
 */

export interface Room {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  character: string
  pricePerNight: number
  maxGuests: number
  bedType: string
  amenities: Amenity[]
  personalTouch: string
  images: string[]
  size: string
  view: string
}

export interface Amenity {
  icon: string
  label: string
}

export interface BreakfastItem {
  id: string
  name: string
  description: string
  image: string
  dietary: ('vegetarian' | 'vegan' | 'gluten-free' | 'lactose-free')[]
  category: 'bread' | 'dairy' | 'fruit' | 'beverage' | 'special'
}

export interface GuestbookEntry {
  id: string
  name: string
  date: string
  rating: number
  story: string
  stayType: string
  image?: string
}

export interface LocalExperience {
  id: string
  name: string
  category: 'food' | 'nature' | 'culture' | 'cycling'
  description: string
  distance: string
  distanceType: 'walking' | 'cycling' | 'driving'
  image: string
  isLocalSecret?: boolean
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: 'recipes' | 'trips' | 'bnb-life' | 'seasons'
  author: string
  date: string
  image: string
  tags: string[]
}

export interface Booking {
  id: string
  guestName: string
  roomId: string
  checkIn: string
  checkOut: string
  guests: number
  status: 'confirmed' | 'pending' | 'cancelled'
  specialRequests?: string
  dietaryRequirements?: string[]
  notes?: string
}

export interface Guest {
  id: string
  name: string
  email: string
  phone?: string
  bookings: Booking[]
  preferences?: {
    dietary?: string[]
    roomPreference?: string
    specialRequests?: string
  }
}

export interface AdminUser {
  username: string
  password: string
  role: 'admin' | 'host'
}

export interface WeatherData {
  condition: 'sunny' | 'cloudy' | 'rainy' | 'partly-cloudy'
  temperature: number
  suggestion: string
}

export interface HostTip {
  id: string
  title: string
  description: string
  category: 'walking' | 'food' | 'secret'
}
