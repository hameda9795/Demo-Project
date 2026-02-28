'use client'

import { cn } from '@/lib/utils'
import { HardHat } from 'lucide-react'

interface TeamAvatarProps {
  name: string
  role: string
  className?: string
}

/**
 * Team Avatar Component
 * Displays team member avatar with initials and construction styling
 */
export function TeamAvatar({ name, role, className }: TeamAvatarProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase()
  
  return (
    <div 
      className={cn(
        'relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-600 to-slate-800',
        className
      )}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Avatar Circle */}
        <div className="relative">
          {/* Outer Ring */}
          <div className="absolute -inset-4 border-2 border-orange-500/20 rounded-full" />
          
          {/* Inner Circle */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center shadow-xl">
            <span className="text-3xl font-heading font-bold text-white">
              {initials}
            </span>
          </div>
          
          {/* Hard Hat Icon */}
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <HardHat className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20" />

      {/* Corner Accents */}
      <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-orange-500/30" />
      <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-orange-500/30" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-orange-500/30" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-orange-500/30" />
    </div>
  )
}
