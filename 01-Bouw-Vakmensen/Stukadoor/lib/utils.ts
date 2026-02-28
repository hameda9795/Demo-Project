import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('nl-NL').format(num)
}

export function calculatePlasterPrice(
  area: number,
  textureType: string,
  colorType: string,
  includeCeiling: boolean
): { min: number; max: number; primerLiters: number; workDays: number } {
  const basePricePerM2: Record<string, number> = {
    glad: 35,
    spachtelputz: 45,
    granol: 50,
    sierpleister: 75,
  }
  
  const colorMultiplier: Record<string, number> = {
    wit: 1,
    creme: 1.1,
    gekleurd: 1.25,
  }
  
  const basePrice = basePricePerM2[textureType] || 35
  const colorMult = colorMultiplier[colorType] || 1
  const ceilingMultiplier = includeCeiling ? 1.4 : 1
  
  const totalArea = includeCeiling ? area * 1.3 : area
  
  const pricePerM2 = basePrice * colorMult
  const minPrice = totalArea * pricePerM2 * 0.9 * ceilingMultiplier
  const maxPrice = totalArea * pricePerM2 * 1.1 * ceilingMultiplier
  
  const primerLiters = Math.ceil(totalArea * 0.15)
  const workDays = Math.max(1, Math.ceil(totalArea / 25))
  
  return {
    min: Math.round(minPrice),
    max: Math.round(maxPrice),
    primerLiters,
    workDays,
  }
}
