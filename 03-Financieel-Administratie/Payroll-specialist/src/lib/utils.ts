import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("nl-NL").format(num);
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("nl-NL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function formatDateShort(date: Date | string): string {
  return new Intl.DateTimeFormat("nl-NL", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}
