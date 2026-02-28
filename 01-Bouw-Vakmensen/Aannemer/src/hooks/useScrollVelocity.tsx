'use client'

import { useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * Hook for scroll velocity-based animations
 * Returns transformed values based on scroll speed
 */
export function useScrollVelocity() {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Smooth the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Transform values for parallax effects
  const y = useTransform(smoothProgress, [0, 1], [100, -100])
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return { ref, y, opacity, scale, scrollYProgress: smoothProgress }
}
