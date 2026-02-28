import {
  Hammer,
  Building,
  Home,
  Ruler,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ChevronLeft,
  X,
  Menu,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight,
  ArrowLeft,
  Check,
  Loader2,
  Upload,
  FileText,
  Download,
  Trash2,
  Eye,
  EyeOff,
  Settings,
  LogOut,
  Search,
  Filter,
  Calendar,
  User,
  MessageSquare,
  Image as ImageIcon,
  type LucideIcon,
} from 'lucide-react'

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  hammer: Hammer,
  building: Building,
  home: Home,
  ruler: Ruler,
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  x: X,
  menu: Menu,
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  check: Check,
  loader: Loader2,
  upload: Upload,
  fileText: FileText,
  download: Download,
  trash: Trash2,
  eye: Eye,
  eyeOff: EyeOff,
  settings: Settings,
  logOut: LogOut,
  search: Search,
  filter: Filter,
  calendar: Calendar,
  user: User,
  messageSquare: MessageSquare,
  documentText: FileText,
  image: ImageIcon,
}

interface IconProps {
  name: string
  size?: number
  className?: string
  strokeWidth?: number
}

/**
 * Icon wrapper component
 * Maps string icon names to Lucide React icons
 */
export function Icon({ name, size = 24, className, strokeWidth = 2 }: IconProps) {
  const IconComponent = iconMap[name]
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <IconComponent size={size} className={className} strokeWidth={strokeWidth} />
}

export { iconMap }
