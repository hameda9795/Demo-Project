'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

/**
 * Card component with organic border radius and lift effect
 * Used for service cards, blog posts, and other content blocks
 */
interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function Card({ children, className, hover = true, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -10 } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        'bg-white rounded-organic overflow-hidden shadow-lg',
        hover && 'hover:shadow-2xl transition-shadow duration-300',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

/**
 * CardImage component with clip-path for non-rectangular images
 */
interface CardImageProps {
  src: string
  alt: string
  className?: string
  clipPath?: 'diagonal' | 'wave' | 'none'
}

export function CardImage({ src, alt, className, clipPath = 'diagonal' }: CardImageProps) {
  const clipPaths = {
    diagonal: 'clip-diagonal',
    wave: 'clip-wave',
    none: '',
  }

  return (
    <div className={cn('overflow-hidden img-zoom', clipPaths[clipPath], className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )
}

/**
 * CardContent component for consistent padding
 */
interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  )
}
