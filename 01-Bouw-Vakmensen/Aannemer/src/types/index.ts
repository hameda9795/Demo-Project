/**
 * TypeScript interfaces for the Bouwbedrijf Van den Berg application
 * Following strict typing for all domain entities
 */

// Project types
export interface Project {
  id: string
  title: string
  category: 'nieuwbouw' | 'renovatie' | 'dakwerk'
  location: string
  description: string
  image: string
  gallery?: string[]
  year: number
  featured?: boolean
  status: 'afgerond' | 'in-uitvoering'
}

// Service types
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  image: string
}

// Team member types
export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

// Blog post types
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: 'bouwtips' | 'inspiratie' | 'duurzaamheid'
  image: string
  date: string
  readTime: number
  featured?: boolean
}

// Quote form types
export interface QuoteFormData {
  houseType: 'appartement' | 'rijtjeshuis' | 'villa' | ''
  workType: 'renovatie' | 'aanbouw' | 'nieuwbouw' | ''
  squareMeters: number
  details: string
  name: string
  email: string
  phone: string
  address: string
}

// Admin types
export interface DashboardStats {
  openQuotes: number
  activeProjects: number
  completedProjects: number
  reviews: number
}

export interface MonthlyRevenue {
  month: string
  revenue: number
}

export interface AdminProject extends Project {
  visibility: boolean
  clientName?: string
}

// Portal types
export interface ClientProject {
  id: string
  title: string
  status: 'planning' | 'in-voorbereiding' | 'in-uitvoering' | 'oplevering' | 'afgerond'
  progress: number
  startDate: string
  endDate?: string
  documents: Document[]
}

export interface Document {
  id: string
  name: string
  type: string
  size: string
  uploadedAt: string
}

export interface ChatMessage {
  id: string
  sender: 'client' | 'contractor'
  message: string
  timestamp: string
  read: boolean
}

// Device types
export type DeviceType = 'mobile' | 'tablet' | 'desktop'

// Navigation types
export interface NavItem {
  label: string
  href: string
  icon: string
}
