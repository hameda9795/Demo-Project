'use client'

import { cn } from '@/lib/utils'
import { Hammer, Building2, Home, Ruler, LucideIcon } from 'lucide-react'

interface ServiceImageProps {
  serviceId: string
  className?: string
}

/**
 * Service Image Component
 * Displays service-appropriate visual with icon and styling
 */
export function ServiceImage({ serviceId, className }: ServiceImageProps) {
  const serviceConfig: Record<string, {
    icon: LucideIcon
    label: string
    gradient: string
    iconColor: string
  }> = {
    verbouwing: {
      icon: Hammer,
      label: 'Verbouwing',
      gradient: 'from-orange-500/10 via-slate-800/50 to-slate-900',
      iconColor: 'text-orange-500/40',
    },
    nieuwbouw: {
      icon: Building2,
      label: 'Nieuwbouw',
      gradient: 'from-blue-500/10 via-slate-800/50 to-slate-900',
      iconColor: 'text-blue-500/40',
    },
    dakdekken: {
      icon: Home,
      label: 'Dakwerk',
      gradient: 'from-slate-500/20 via-slate-800/50 to-slate-900',
      iconColor: 'text-slate-400/40',
    },
    timmerwerk: {
      icon: Ruler,
      label: 'Timmerwerk',
      gradient: 'from-amber-500/10 via-slate-800/50 to-slate-900',
      iconColor: 'text-amber-500/40',
    },
  }

  const config = serviceConfig[serviceId] || serviceConfig.verbouwing
  const Icon = config.icon

  return (
    <div 
      className={cn(
        'relative w-full h-full overflow-hidden bg-gradient-to-br',
        config.gradient,
        className
      )}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Large Background Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon 
          className={cn('w-48 h-48', config.iconColor)} 
          strokeWidth={0.5}
        />
      </div>

      {/* Diagonal Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(15,23,42,0.4) 100%)',
        }}
      />

      {/* Blueprint Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="0" y1="80%" x2="100%" y2="80%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="80%" y1="0" x2="80%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
      </svg>
    </div>
  )
}
