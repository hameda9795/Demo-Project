/**
 * TypeScript Interfaces and Types
 * Van den Berg Timmerwerken Website
 * 
 * This file defines all data structures used throughout the application,
 * ensuring type safety and clear data contracts.
 */

/**
 * Wood Type - Core data structure for wood selection
 * Represents different types of wood available for custom furniture
 */
export interface WoodType {
  id: string;
  name: string;
  nameEn: string; // English name for accessibility
  description: string;
  hardness: number; // Janka hardness scale (lbf)
  hardnessLabel: string; // Visual representation (1-5 scale)
  color: string;
  priceLevel: 1 | 2 | 3 | 4 | 5; // € to €€€€€
  image: string;
  characteristics: string[];
  sustainability: {
    co2Storage: number; // kg per m3
    fscCertified: boolean;
    localSourced: boolean;
  };
}

/**
 * Project - Represents a completed work item
 * Used in the project gallery and portfolio
 */
export interface Project {
  id: string;
  title: string;
  category: 'maatwerk' | 'renovatie' | 'restauratie' | 'tuinhuis';
  description: string;
  location: string;
  year: number;
  images: {
    raw: string; // Unfinished/grayish state for hover effect
    finished: string; // Final polished state
  };
  woodTypes: string[];
  duration: string;
  techniques: string[];
  testimonial?: {
    author: string;
    text: string;
  };
}

/**
 * Furniture Type - For the configurator
 */
export interface FurnitureType {
  id: string;
  name: string;
  icon: string;
  description: string;
  basePrice: number;
  options: {
    drawers?: { max: number; pricePerUnit: number };
    doors?: { max: number; pricePerUnit: number };
    handles?: { types: string[]; prices: number[] };
  };
}

/**
 * Configurator State - Tracks user selections
 */
export interface ConfiguratorState {
  furnitureType: string | null;
  woodType: string | null;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  options: {
    drawers: number;
    doors: number;
    handleType: string;
  };
}

/**
 * Joinery Technique - Educational content
 */
export interface JoineryTechnique {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  benefits: string[];
  vsScrews: string;
  svgAnimation: string;
}

/**
 * Process Step - Workshop timeline
 */
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

/**
 * Blog Post - For the workshop news section
 */
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'onderhoud' | 'houtsoorten' | 'restauratie' | 'duurzaamheid';
  date: string;
  image: string;
  readTime: number;
  download?: {
    name: string;
    url: string;
  };
}

/**
 * Admin Dashboard Stats
 */
export interface DashboardStats {
  activeProjects: number;
  quotesThisMonth: number;
  woodStock: number; // in board meters
  totalCustomers: number;
}

/**
 * Wood Stock Item - For admin inventory
 */
export interface WoodStockItem {
  id: string;
  woodType: string;
  quantity: number; // board meters
  minLevel: number;
  supplier: string;
  lastDelivery: string;
}

/**
 * Project Timeline Item - For customer portal
 */
export interface ProjectTimelineItem {
  id: string;
  phase: 'ontwerp' | 'productie' | 'afwerking' | 'oplevering';
  status: 'completed' | 'current' | 'pending';
  date?: string;
  photos?: string[];
  notes?: string;
}

/**
 * Customer Project - For portal
 */
export interface CustomerProject {
  id: string;
  customerName: string;
  furnitureType: string;
  woodType: string;
  status: ProjectTimelineItem[];
  currentPhase: string;
  estimatedDelivery: string;
  hasCertificate: boolean;
}

/**
 * Navigation Item
 */
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

/**
 * Contact Info - DEMO DATA
 */
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  kvk: string;
  btw: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

/**
 * Service Area
 */
export interface ServiceArea {
  name: string;
  distance: string;
}

/**
 * Quote Calculation - For admin panel
 */
export interface QuoteCalculation {
  basePrice: number;
  woodMultiplier: number;
  sizeFactor: number;
  optionsPrice: number;
  labor: number;
  total: number;
}
