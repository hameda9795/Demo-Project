import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format price in euros
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  }).format(price)
}

/**
 * Format date in Dutch format
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('nl-NL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

/**
 * Get current season based on month
 */
export function getCurrentSeason(): 'spring' | 'summer' | 'autumn' | 'winter' {
  const month = new Date().getMonth()
  if (month >= 2 && month <= 4) return 'spring'
  if (month >= 5 && month <= 7) return 'summer'
  if (month >= 8 && month <= 10) return 'autumn'
  return 'winter'
}

/**
 * Get season name in Dutch
 */
export function getSeasonName(season: string): string {
  const names: Record<string, string> = {
    spring: 'Lente',
    summer: 'Zomer',
    autumn: 'Herfst',
    winter: 'Winter',
  }
  return names[season] || season
}

/**
 * Get seasonal color theme
 */
export function getSeasonalTheme(season: string): {
  primary: string
  secondary: string
  accent: string
} {
  const themes: Record<string, { primary: string; secondary: string; accent: string }> = {
    spring: { primary: 'text-fresh-sage', secondary: 'bg-fresh-sage/10', accent: 'border-fresh-sage' },
    summer: { primary: 'text-honey-gold', secondary: 'bg-honey-gold/10', accent: 'border-honey-gold' },
    autumn: { primary: 'text-strawberry-jam', secondary: 'bg-strawberry-jam/10', accent: 'border-strawberry-jam' },
    winter: { primary: 'text-coffee-brown', secondary: 'bg-coffee-brown/10', accent: 'border-coffee-brown' },
  }
  return themes[season] || themes.spring
}
