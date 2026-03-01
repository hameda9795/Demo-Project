'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

/**
 * Button component with multiple variants and liquid hover effect
 * 
 * Variants:
 * - primary: Blue background, white text (main CTAs)
 * - secondary: Orange background, white text (emergency CTAs)
 * - outline: Transparent with border (secondary actions)
 * - ghost: No background, just text
 */
interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 relative overflow-hidden group'
  
  const variants = {
    primary: 'bg-water-blue text-white hover:shadow-lg hover:shadow-water-blue/30',
    secondary: 'bg-emergency-orange text-white hover:shadow-lg hover:shadow-emergency-orange/30',
    outline: 'border-2 border-water-blue text-water-blue hover:bg-water-blue hover:text-white',
    ghost: 'text-water-blue hover:bg-water-blue/10',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        (disabled || isLoading) && 'opacity-60 cursor-not-allowed',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Liquid fill effect overlay */}
      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          <span className="relative z-10">Laden...</span>
        </>
      ) : (
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      )}
    </motion.button>
  )
}
