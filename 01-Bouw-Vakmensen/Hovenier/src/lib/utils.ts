import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentSeason(): 'lente' | 'zomer' | 'herfst' | 'winter' {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return 'lente';
  if (month >= 6 && month <= 8) return 'zomer';
  if (month >= 9 && month <= 11) return 'herfst';
  return 'winter';
}

export const demoContact = {
  phone: "020-123 4567 (DEMO - Voorbeeld)",
  phoneRaw: "020-1234567",
  email: "info@demo-tuinbedrijf.nl (DEMO)",
  emailRaw: "info@demo-tuinbedrijf.nl",
  address: "DEMO Straat 45, 5678 AB Amsterdam (Voorbeeldadres)",
  kvk: "12345678 (DEMO nummer)",
  btw: "NL001234567B01 (Voorbeeld)",
};

export const seasons = {
  lente: { name: 'Lente', color: '#4ade80', filter: 'hue-rotate(0deg)' },
  zomer: { name: 'Zomer', color: '#16a34a', filter: 'hue-rotate(-20deg) saturate(1.2)' },
  herfst: { name: 'Herfst', color: '#d97706', filter: 'hue-rotate(30deg) saturate(1.3)' },
  winter: { name: 'Winter', color: '#0ea5e9', filter: 'grayscale(0.3) brightness(0.9)' },
};

export type Season = keyof typeof seasons;
