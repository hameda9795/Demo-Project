/**
 * Utility functions for Dakdekker Website
 * 
 * @author Dakwerken Van der Berg
 * @description Common utility functions used throughout the application
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with proper precedence
 * Combines clsx for conditional classes and tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format phone number to Dutch format
 * Converts 0612345678 to 06 1234 5678
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3");
  }
  return phone;
}

/**
 * Create tel: link from phone number
 */
export function telLink(phone: string): string {
  return `tel:${phone.replace(/\D/g, "")}`;
}

/**
 * Format price to EUR currency
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Get current season for seasonal tips
 */
export function getCurrentSeason(): "spring" | "summer" | "autumn" | "winter" {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month >= 8 && month <= 10) return "autumn";
  return "winter";
}

/**
 * Generate clip-path CSS for roof tile shape
 * Creates the distinctive parallelogram/tile appearance
 */
export function getTileClipPath(variant: "card" | "hero" | "button" = "card"): string {
  const paths = {
    card: "polygon(0 0, 100% 5%, 100% 100%, 0 95%)",
    hero: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
    button: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
  };
  return paths[variant];
}

/**
 * Get rotation angle for design elements (Roof Angle Design System)
 * Uses 30-degree angles to match roof pitch theme
 */
export function getRoofAngle(variant: "subtle" | "medium" | "strong" = "medium"): number {
  const angles = {
    subtle: 2,
    medium: 15,
    strong: 30,
  };
  return angles[variant];
}

/**
 * Animation variants for Framer Motion
 * Pre-configured animations matching the roof angle design system
 */
export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 40, rotate: 2 },
    animate: { opacity: 1, y: 0, rotate: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -40, rotate: -5 },
    animate: { opacity: 1, x: 0, rotate: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 40, rotate: 5 },
    animate: { opacity: 1, x: 0, rotate: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

/**
 * Service areas for the company
 */
export const serviceAreas = [
  "Utrecht",
  "Hilversum", 
  "Amersfoort",
  "Breukelen",
  "Baarn",
  "Bilthoven",
  "Zeist",
  "De Bilt",
];

/**
 * Company information
 */
export const companyInfo = {
  name: "Dakwerken Van der Berg",
  founded: 1998,
  phone: "030-1234567",
  mobile: "06-12345678",
  email: "info@dakwerkenvanderberg.nl",
  address: {
    street: "Dakwerkersstraat 42",
    city: "Utrecht",
    postcode: "3511 AA",
  },
  hours: {
    weekday: "08:00 - 17:00",
    saturday: "09:00 - 14:00",
    sunday: "Gesloten",
  },
  social: {
    facebook: "https://facebook.com/dakwerkenvanderberg",
    instagram: "https://instagram.com/dakwerkenvanderberg",
    linkedin: "https://linkedin.com/company/dakwerkenvanderberg",
  },
};

/**
 * Weather conditions for decorative widget
 */
export const weatherConditions = {
  sunny: { icon: "Sun", temp: 18, condition: "Zonnig" },
  cloudy: { icon: "Cloud", temp: 15, condition: "Bewolkt" },
  rainy: { icon: "CloudRain", temp: 12, condition: "Regen" },
  stormy: { icon: "CloudLightning", temp: 10, condition: "Onweer" },
};

/**
 * Scroll to element with offset for fixed header
 */
export function scrollToElement(elementId: string, offset: number = 80) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: HTMLElement, threshold: number = 0.1): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * (1 - threshold) &&
    rect.bottom >= 0
  );
}
