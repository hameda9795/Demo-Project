'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className} ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
