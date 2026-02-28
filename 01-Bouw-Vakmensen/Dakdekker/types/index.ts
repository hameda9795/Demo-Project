/**
 * TypeScript Type Definitions
 * Dakwerken Van der Berg - Roofing Company Website
 * 
 * @description Central type definitions for the application
 */

// ============================================================================
// Core Types
// ============================================================================

/**
 * Service offered by the roofing company
 */
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  icon: string;
  features: string[];
  priceIndication?: string;
  duration?: string;
  warranty: string;
}

/**
 * Project/Realization showcase
 */
export interface Project {
  id: string;
  title: string;
  location: string;
  category: ProjectCategory;
  description: string;
  beforeImage: string;
  afterImage: string;
  images: string[];
  materials: string[];
  completionDate: string;
  testimonial?: Testimonial;
}

/**
 * Project categories for filtering
 */
export type ProjectCategory = 
  | "alle" 
  | "dakpannen" 
  | "leien" 
  | "zink" 
  | "hout" 
  | "solar";

/**
 * Customer testimonial
 */
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  projectType: string;
  avatar?: string;
}

/**
 * Team member
 */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  certifications: string[];
  experience: number;
}

/**
 * Blog post
 */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: BlogCategory;
  tags: string[];
  publishedAt: string;
  author: string;
  readingTime: number;
}

/**
 * Blog categories
 */
export type BlogCategory =
  | "onderhoudstips"
  | "stormschade"
  | "materialen"
  | "energiebesparing"
  | "nieuws";

// ============================================================================
// Form Types
// ============================================================================

/**
 * Contact form data
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  serviceType: ServiceType;
  message: string;
  preferredContact: "phone" | "email";
  privacyAccepted: boolean;
}

/**
 * Service types for forms
 */
export type ServiceType =
  | "dakreparatie"
  | "dakrenovatie"
  | "dakisolatie"
  | "zonnepanelen"
  | "schoorsteen"
  | "dakgoot"
  | "overig"
  | "nood"
  | "inspectie";

/**
 * Quote request form
 */
export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  houseType: HouseType;
  roofMaterial: RoofMaterial;
  roofSize?: string;
  urgency: "direct" | "binnen-week" | "binnen-maand" | "planning";
  additionalInfo?: string;
}

/**
 * House types for material configurator
 */
export type HouseType = "bungalow" | "hoekhuis" | "tussenwoning" | "vrijstaand" | "appartement";

/**
 * Roof materials
 */
export type RoofMaterial = 
  | "dakpannen-rood"
  | "dakpannen-bruin"
  | "dakpannen-zwart"
  | "leien-grijs"
  | "leien-zwart"
  | "zink"
  | "bitumen"
  | "riet";

// ============================================================================
// Admin Types
// ============================================================================

/**
 * Admin user
 */
export interface AdminUser {
  id: string;
  username: string;
  name: string;
  role: "admin" | "manager" | "employee";
  avatar?: string;
}

/**
 * Appointment/Inspection
 */
export interface Appointment {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  address: string;
  date: string;
  time: string;
  type: "inspectie" | "offerte" | "werk" | "nood";
  status: "gepland" | "bezig" | "afgerond" | "geannuleerd";
  priority: "laag" | "normaal" | "hoog" | "spoed";
  notes?: string;
  assignedTo?: string;
}

/**
 * Dashboard statistics
 */
export interface DashboardStats {
  openInspections: number;
  scheduledThisWeek: number;
  totalRevenue: number;
  newLeads: number;
  stormDamageCases: number;
}

/**
 * Job location for map
 */
export interface JobLocation {
  id: string;
  lat: number;
  lng: number;
  address: string;
  type: "inspectie" | "werk" | "nood";
  status: "pending" | "in-progress" | "completed";
}

// ============================================================================
// Customer Portal Types
// ============================================================================

/**
 * Customer roof information
 */
export interface CustomerRoof {
  id: string;
  address: string;
  installationDate: string;
  warrantyEndDate: string;
  materials: string[];
  lastInspection: string;
  nextInspection?: string;
  status: "actief" | "onderhoud-nodig" | "garantie";
  sections: RoofSection[];
}

/**
 * Roof section for visual diagram
 */
export interface RoofSection {
  id: string;
  name: string;
  status: "origineel" | "vervangen" | "gerepareerd";
  workDate?: string;
  color: string;
}

/**
 * Customer document
 */
export interface CustomerDocument {
  id: string;
  name: string;
  type: "garantie" | "factuur" | "inspectie" | "foto" | "overig";
  date: string;
  url: string;
  size: string;
}

/**
 * Damage report from customer
 */
export interface DamageReport {
  id: string;
  type: "lekkage" | "stormschade" | "onderhoud" | "overig";
  description: string;
  photos: string[];
  reportedAt: string;
  status: "ontvangen" | "in-behandeling" | "gepland" | "opgelost";
  priority: "laag" | "normaal" | "hoog";
}

// ============================================================================
// Component Props Types
// ============================================================================

/**
 * Navigation item
 */
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

/**
 * Seasonal tip
 */
export interface SeasonalTip {
  season: "spring" | "summer" | "autumn" | "winter";
  title: string;
  description: string;
  icon: string;
  action: string;
}

/**
 * Certification/Badge
 */
export interface Certification {
  name: string;
  logo: string;
  description: string;
}

/**
 * FAQ item
 */
export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

// ============================================================================
// Design System Types
// ============================================================================

/**
 * Color theme configuration
 */
export interface ThemeColors {
  roofSlate: string;
  safetyOrange: string;
  skyBlue: string;
  cloudWhite: string;
  stormGray: string;
}

/**
 * Animation configuration
 */
export interface AnimationConfig {
  duration: number;
  ease: number[];
  delay?: number;
}

/**
 * Clip path variants (Roof Angle Design System)
 */
export type ClipPathVariant = "hero" | "card" | "button" | "image" | "divider";
