'use client'

import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

/**
 * Mobile Emergency Button
 * Sticky circular button with pulsing ring animation
 * Only visible on mobile devices
 */
export function MobileEmergencyButton() {
  return (
    <div className="lg:hidden">
      {/* Pulsing ring effect */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.div
          className="absolute inset-0 bg-emergency-orange rounded-full"
          animate={{
            scale: [1, 1.5, 1.5],
            opacity: [0.5, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
        <motion.div
          className="absolute inset-0 bg-emergency-orange rounded-full"
          animate={{
            scale: [1, 1.5, 1.5],
            opacity: [0.5, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 0.5,
          }}
        />
        
        {/* Main button */}
        <a
          href="tel:010-1234567"
          className="relative w-16 h-16 bg-emergency-orange rounded-full flex items-center justify-center shadow-xl"
        >
          <Phone className="w-7 h-7 text-white" />
        </a>
      </div>
    </div>
  )
}
