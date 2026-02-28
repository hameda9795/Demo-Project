// Service types
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  image: string
  slug: string
}

// Testimonial types
export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  avatar?: string
}

// Gallery image types
export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'alle' | 'badkamers' | 'verwarming' | 'lekkages'
  width: number
  height: number
}

// Blog post types
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: number
  image: string
  slug: string
  featured?: boolean
}

// Appointment types
export interface Appointment {
  id: string
  customerName: string
  service: string
  date: Date
  status: 'aanvraag' | 'in_behandeling' | 'gepland' | 'uitgevoerd'
  type: 'installatie' | 'spoed' | 'onderhoud'
  address?: string
  notes?: string
}

// Customer types
export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  address: string
  appointments: Appointment[]
  documents: Document[]
}

// Document types
export interface Document {
  id: string
  name: string
  type: 'factuur' | 'garantie' | 'offerte'
  date: string
  size: string
  url: string
}

// Price estimate types
export interface PriceEstimate {
  problemType: string
  urgency: 'vandaag' | 'deze_week' | 'niet_spoed'
  priceRange: {
    min: number
    max: number
  }
}

// Form types
export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  privacy: boolean
}

// Admin user types
export interface AdminUser {
  username: string
  role: 'admin' | 'medewerker'
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  icon?: string
}

// Stats types
export interface DashboardStats {
  newLeads: number
  openJobs: number
  monthlyRevenue: number
  satisfiedCustomers: number
}

// Activity types
export interface Activity {
  id: string
  type: 'offerte' | 'afspraak' | 'klant' | 'compleet'
  description: string
  timestamp: Date
}
