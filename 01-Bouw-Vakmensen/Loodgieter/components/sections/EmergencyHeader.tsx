'use client'

import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

/**
 * Emergency Header Bar
 * Fixed top banner with 24/7 emergency contact info
 * Features pulsing phone icon animation
 */
export function EmergencyHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-emergency-orange text-white h-9 flex items-center justify-center">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2 text-sm font-medium">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Phone className="w-4 h-4" />
        </motion.div>
        <span>24/7 Spoedhulp beschikbaar - Bel direct</span>
        <a 
          href="tel:010-1234567" 
          className="font-bold underline hover:no-underline ml-1"
        >
          010-1234567
        </a>
      </div>
    </div>
  )
}
