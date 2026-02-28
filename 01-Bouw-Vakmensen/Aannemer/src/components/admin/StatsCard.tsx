'use client'

import { motion, useSpring, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: number
  suffix?: string
  icon: LucideIcon
  trend?: number
  color?: 'orange' | 'blue' | 'green' | 'purple'
}

/**
 * Animated Stats Card
 * Shows animated counter that counts up when in view
 */
export function StatsCard({ title, value, suffix = '', icon: Icon, trend, color = 'orange' }: StatsCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  // Spring animation for smooth counting
  const springValue = useSpring(0, { duration: 2000, bounce: 0 })
  
  useEffect(() => {
    if (isInView) {
      springValue.set(value)
    }
  }, [isInView, value, springValue])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return () => unsubscribe()
  }, [springValue])

  const colors = {
    orange: 'bg-safety/10 text-safety',
    blue: 'bg-blue-500/10 text-blue-500',
    green: 'bg-green-500/10 text-green-500',
    purple: 'bg-purple-500/10 text-purple-500',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-navy-light rounded-xl p-6 border border-white/5"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white/60 text-sm mb-1">{title}</p>
          <h3 className="font-heading font-bold text-3xl text-white">
            {displayValue}{suffix}
          </h3>
          {trend !== undefined && (
            <p className={`text-sm mt-2 ${trend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {trend >= 0 ? '+' : ''}{trend}% <span className="text-white/40">vs vorige maand</span>
            </p>
          )}
        </div>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors[color]}`}>
          <Icon size={24} />
        </div>
      </div>
    </motion.div>
  )
}
