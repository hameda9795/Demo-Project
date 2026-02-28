'use client'

import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

export function DemoBanner() {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 text-sm font-medium">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
        <span className="text-center">
          DEMO WEBSITE - Alle gegevens zijn fictief (Voorbeeld) - Geen echte diensten
        </span>
      </div>
    </motion.div>
  )
}
