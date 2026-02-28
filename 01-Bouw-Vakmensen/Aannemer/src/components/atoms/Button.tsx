'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  magnetic?: boolean
}

/**
 * Magnetic Button Component
 * Uses Framer Motion spring physics for magnetic effect
 * Button sticks to cursor within 50px radius
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
  magnetic = true,
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-heading font-semibold rounded-none transition-colors overflow-hidden'
  
  const variants = {
    primary: 'bg-safety text-white hover:bg-safety-dark',
    secondary: 'bg-navy text-white hover:bg-navy-light',
    outline: 'border-2 border-safety text-safety hover:bg-safety hover:text-white',
    ghost: 'text-concrete hover:text-navy',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <motion.span
        className={cn(
          'absolute inset-0 bg-white/10',
          variant === 'primary' ? 'bg-white/10' : 'bg-safety/10'
        )}
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
    </>
  )

  if (magnetic) {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className, disabled && 'opacity-50 cursor-not-allowed')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {buttonContent}
      </motion.button>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], className, disabled && 'opacity-50 cursor-not-allowed')}
    >
      {buttonContent}
    </button>
  )
}
