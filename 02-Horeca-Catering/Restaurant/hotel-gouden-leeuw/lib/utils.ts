import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * Handles conditional classes and removes duplicates
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format price to Dutch locale
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Format date to Dutch locale
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/**
 * Format date to short format (DD-MM)
 */
export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat('nl-NL', {
    day: '2-digit',
    month: '2-digit',
  }).format(date);
}

/**
 * Get day name in Dutch
 */
export function getDayName(date: Date): string {
  return new Intl.DateTimeFormat('nl-NL', {
    weekday: 'short',
  }).format(date);
}

/**
 * Generate random price between min and max (for demo purposes)
 */
export function generateDemoPrice(min: number = 120, max: number = 350): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Check if date is in the past
 */
export function isPastDate(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
}

/**
 * Add days to a date
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Get month name in Dutch
 */
export function getMonthName(date: Date): string {
  return new Intl.DateTimeFormat('nl-NL', {
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/**
 * Generate a range of dates
 */
export function generateDateRange(startDate: Date, days: number): Date[] {
  const dates: Date[] = [];
  for (let i = 0; i < days; i++) {
    dates.push(addDays(startDate, i));
  }
  return dates;
}

/**
 * Scroll to element with smooth behavior
 */
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
