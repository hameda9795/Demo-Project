'use client'

import { cn } from '@/lib/utils'
import { Building2, Home, Hammer, Castle } from 'lucide-react'

interface ProjectImageProps {
  category: 'nieuwbouw' | 'renovatie' | 'dakwerk'
  className?: string
  showOverlay?: boolean
}

/**
 * Project Image Component
 * Displays category-appropriate placeholder with icon and styling
 */
export function ProjectImage({ category, className, showOverlay = true }: ProjectImageProps) {
  const categoryConfig = {
    nieuwbouw: {
      icon: Castle,
      label: 'Nieuwbouw',
      gradient: 'from-orange-500/20 to-orange-600/40',
      iconColor: 'text-orange-500',
      bgPattern: 'radial-gradient(circle at 30% 30%, rgba(249,115,22,0.1) 0%, transparent 50%)',
    },
    renovatie: {
      icon: Hammer,
      label: 'Renovatie',
      gradient: 'from-blue-500/20 to-blue-600/40',
      iconColor: 'text-blue-500',
      bgPattern: 'radial-gradient(circle at 70% 30%, rgba(59,130,246,0.1) 0%, transparent 50%)',
    },
    dakwerk: {
      icon: Home,
      label: 'Dakwerk',
      gradient: 'from-slate-500/20 to-slate-600/40',
      iconColor: 'text-slate-400',
      bgPattern: 'radial-gradient(circle at 50% 70%, rgba(100,116,139,0.1) 0%, transparent 50%)',
    },
  }

  const config = categoryConfig[category]
  const Icon = config.icon

  return (
    <div 
      className={cn(
        'relative w-full h-full overflow-hidden bg-gradient-to-br',
        config.gradient,
        className
      )}
      style={{ backgroundImage: config.bgPattern }}
    >
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Diagonal Lines */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.1) 20px,
            rgba(255,255,255,0.1) 40px
          )`,
        }}
      />

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 blur-3xl opacity-30">
            <Icon className={cn('w-32 h-32', config.iconColor)} />
          </div>
          <Icon className={cn('w-24 h-24 relative z-10', config.iconColor)} strokeWidth={1} />
        </div>
        <span className="mt-4 text-white/40 text-sm font-heading tracking-wider uppercase">
          {config.label}
        </span>
      </div>

      {/* Overlay Gradient */}
      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
      )}

      {/* Corner Accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/10" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/10" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/10" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/10" />
    </div>
  )
}
