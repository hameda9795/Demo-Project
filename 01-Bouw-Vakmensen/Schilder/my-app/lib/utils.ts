import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount)
}

export function formatPhone(phone: string): string {
  // Dutch phone number formatting
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2 $3')
}

export const demoContact = {
  phone: '070-123 4567 (DEMO - Voorbeeld)',
  phoneRaw: '070-1234567',
  email: 'info@demo-schilder.nl (DEMO)',
  address: 'DEMO Straat 12, 2585 AB Den Haag (Voorbeeldadres)',
  kvk: '12345678 (DEMO nummer)',
  btw: 'NL001234567B01 (Voorbeeld)',
  hours: 'Ma-Vr: 08:00 - 17:00',
}

export const paintColors = [
  { name: 'Zuiver Wit', hex: '#FFFFFF', ral: 'RAL 9010' },
  { name: 'Krijtwit', hex: '#F5F5DC', ral: 'RAL 1013' },
  { name: 'Zacht Grijs', hex: '#D3D3D3', ral: 'RAL 7047' },
  { name: 'Steen Grijs', hex: '#8B8680', ral: 'RAL 7030' },
  { name: 'Donker Grijs', hex: '#4A4A4A', ral: 'RAL 7016' },
  { name: 'Diep Blauw', hex: '#1e3a5f', ral: 'RAL 5007' },
  { name: 'Bos Groen', hex: '#2d5016', ral: 'RAL 6005' },
  { name: 'Sage Groen', hex: '#9CAF88', ral: 'RAL 6021' },
  { name: 'Terracotta', hex: '#E2725B', ral: 'RAL 3012' },
  { name: 'Zacht Roze', hex: '#F4C2C2', ral: 'RAL 3015' },
  { name: 'Warm Zand', hex: '#C2B280', ral: 'RAL 1001' },
  { name: 'Koraal', hex: '#FF7F50', ral: 'RAL 3016' },
]

export const services = [
  {
    id: 'binnen',
    title: 'Binnenschilderwerk',
    description: 'Professioneel schilderwerk voor uw interieur met streeploze afwerking.',
    price: 'Vanaf €24,50 per m² (Indicatie prijzen - DEMO)',
    color: 'bg-teal-500',
    icon: 'Home',
    features: ['Muren en plafonds', 'Deuren en kozijnen', 'Latex spuiten', 'Streeploze afwerking'],
  },
  {
    id: 'buiten',
    title: 'Buitenschilderwerk',
    description: 'Duurzame bescherming tegen weersinvloeden met 5 jaar garantie.',
    price: 'Vanaf €32,00 per m² (Indicatie prijzen - DEMO)',
    color: 'bg-coral-500',
    icon: 'Building',
    features: ['Gevels', 'Kozijnen en deuren', 'Garages', '5 jaar garantie'],
  },
  {
    id: 'behang',
    title: 'Behang verwijderen/aanbrengen',
    description: 'Vakkundig behangen inclusief wandvoorbereiding.',
    price: 'Vanaf €18,00 per m² (Indicatie prijzen - DEMO)',
    color: 'bg-softyellow-400',
    icon: 'Layers',
    features: ['Oud behang verwijderen', 'Glad strijken', 'Vliesbehang', 'Fotobehang'],
  },
  {
    id: 'houtrot',
    title: 'Houtrot saneren',
    description: 'Professionele houtrot reparatie voor duurzaam behoud.',
    price: 'Vanaf €45,00 per uur (Indicatie prijzen - DEMO)',
    color: 'bg-amber-700',
    icon: 'Hammer',
    features: ['Houtrot diagnose', 'Gedeeltelijke vervanging', 'Epoxy reparatie', 'Preventieve behandeling'],
  },
  {
    id: 'latex',
    title: 'Latex spuiten',
    description: 'Machinaal spuiten voor een perfect egale finish.',
    price: 'Vanaf €16,50 per m² (Indicatie prijzen - DEMO)',
    color: 'bg-purple-600',
    icon: 'SprayCan',
    features: ['Grote oppervlaktes', 'Snelle uitvoering', 'Egale dekking', 'Laag stofgehalte'],
  },
]
