'use client'

import { cn } from '@/lib/utils'
import { Lightbulb, BookOpen, Leaf } from 'lucide-react'

interface BlogImageProps {
  category: 'bouwtips' | 'inspiratie' | 'duurzaamheid'
  className?: string
}

/**
 * Blog Image Component
 * Displays category-appropriate blog image placeholder
 */
export function BlogImage({ category, className }: BlogImageProps) {
  const categoryConfig = {
    bouwtips: {
      icon: BookOpen,
      label: 'Bouwtips',
      gradient: 'from-blue-600/30 via-blue-800/50 to-slate-900',
      accentColor: 'bg-blue-500',
      pattern: 'radial-gradient(circle at 20% 80%, rgba(59,130,246,0.3) 0%, transparent 50%)',
    },
    inspiratie: {
      icon: Lightbulb,
      label: 'Inspiratie',
      gradient: 'from-purple-600/30 via-purple-800/50 to-slate-900',
      accentColor: 'bg-purple-500',
      pattern: 'radial-gradient(circle at 80% 20%, rgba(168,85,247,0.3) 0%, transparent 50%)',
    },
    duurzaamheid: {
      icon: Leaf,
      label: 'Duurzaamheid',
      gradient: 'from-green-600/30 via-green-800/50 to-slate-900',
      accentColor: 'bg-green-500',
      pattern: 'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.3) 0%, transparent 50%)',
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
      style={{ backgroundImage: config.pattern }}
    >
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Center Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Glow */}
          <div className={cn('absolute inset-0 blur-3xl opacity-30 w-32 h-32 -m-4', config.accentColor)} />
          <Icon className="w-20 h-20 text-white/40 relative z-10" strokeWidth={1} />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className={cn('absolute top-6 left-6 w-3 h-3 rounded-full opacity-60', config.accentColor)} />
      <div className={cn('absolute top-6 left-12 w-2 h-2 rounded-full opacity-40', config.accentColor)} />
      <div className={cn('absolute bottom-6 right-6 w-4 h-4 rounded-full opacity-50', config.accentColor)} />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

      {/* Category Label */}
      <div className="absolute bottom-4 left-4">
        <span className={cn('px-3 py-1 rounded-full text-xs font-medium text-white', config.accentColor)}>
          {config.label}
        </span>
      </div>
    </div>
  )
}
