/**
 * TypeScript Type Definitions
 * Hotel De Gouden Leeuw - Complete Type System
 */

// ============================================
// ROOM TYPES
// ============================================

export interface Room {
  id: string;
  slug: string;
  name: string;
  type: RoomType;
  description: string;
  shortDescription: string;
  pricePerNight: number;
  originalPrice?: number;
  size: number; // in square meters
  maxGuests: number;
  bedType: string;
  images: string[];
  amenities: Amenity[];
  features: string[];
  isAvailable: boolean;
  view?: string;
  floor: number;
}

export type RoomType = 
  | 'superior' 
  | 'deluxe' 
  | 'junior-suite' 
  | 'domtoren-suite';

export interface Amenity {
  icon: string;
  label: string;
  description?: string;
}

// ============================================
// BOOKING TYPES
// ============================================

export interface Booking {
  id: string;
  confirmationNumber: string;
  guest: Guest;
  room: Room;
  checkIn: Date;
  checkOut: Date;
  nights: number;
  totalPrice: number;
  status: BookingStatus;
  specialRequests?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type BookingStatus = 
  | 'confirmed' 
  | 'pending' 
  | 'cancelled' 
  | 'checked-in' 
  | 'checked-out';

export interface Guest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferences?: GuestPreferences;
}

export interface GuestPreferences {
  roomType?: RoomType;
  bedConfiguration?: 'twin' | 'double' | 'king';
  dietaryRestrictions?: string[];
  specialRequests?: string;
}

// ============================================
// AVAILABILITY TYPES
// ============================================

export interface AvailabilityDate {
  date: Date;
  isAvailable: boolean;
  price: number;
  availabilityLevel: 'high' | 'medium' | 'low' | 'none';
  roomsLeft?: number;
}

export interface AvailabilityResponse {
  dates: AvailabilityDate[];
  roomTypes: RoomAvailability[];
}

export interface RoomAvailability {
  roomType: RoomType;
  available: boolean;
  price: number;
  roomsLeft: number;
}

// ============================================
// RESTAURANT TYPES
// ============================================

export interface RestaurantReservation {
  id: string;
  guestName: string;
  date: Date;
  time: string;
  partySize: number;
  tableNumber?: string;
  specialRequests?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  isVegetarian?: boolean;
  isVegan?: boolean;
  allergens?: string[];
  image?: string;
}

export type MenuCategory = 
  | 'breakfast' 
  | 'lunch' 
  | 'dinner' 
  | 'dessert' 
  | 'drinks' 
  | 'wine';

// ============================================
// SPA TYPES
// ============================================

export interface SpaTreatment {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
  category: SpaCategory;
  image?: string;
  benefits: string[];
}

export type SpaCategory = 
  | 'massage' 
  | 'facial' 
  | 'body' 
  | 'wellness' 
  | 'package';

export interface SpaBooking {
  id: string;
  guestId: string;
  treatment: SpaTreatment;
  date: Date;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

// ============================================
// ADMIN TYPES
// ============================================

export interface DashboardStats {
  occupancyRate: number;
  occupancyTrend: number; // percentage change
  todayArrivals: number;
  todayDepartures: number;
  totalRevenue: number;
  revenueTrend: number;
  pendingBookings: number;
}

export interface HousekeepingRoom {
  roomNumber: string;
  status: HousekeepingStatus;
  roomType: RoomType;
  lastCleaned?: Date;
  priority?: boolean;
}

export type HousekeepingStatus = 
  | 'clean' 
  | 'dirty' 
  | 'in-progress' 
  | 'inspection' 
  | 'out-of-order';

export interface RevenueData {
  date: string;
  revenue: number;
  bookings: number;
}

// ============================================
// BLOG TYPES
// ============================================

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  author: string;
  publishedAt: Date;
  readingTime: number; // in minutes
  image: string;
  tags: string[];
  relatedRooms?: RoomType[];
}

export type BlogCategory = 
  | 'weekend' 
  | 'business' 
  | 'romantic' 
  | 'culinary' 
  | 'city-guide';

// ============================================
// REVIEW TYPES
// ============================================

export interface Review {
  id: string;
  author: string;
  location?: string;
  rating: number;
  date: Date;
  text: string;
  tripType?: 'business' | 'leisure' | 'family' | 'couple';
  verified: boolean;
}

// ============================================
// UI TYPES
// ============================================

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  kvk: string;
}

// ============================================
// ANIMATION TYPES
// ============================================

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: number[] | string;
}

export interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}
