'use client'

import { motion } from 'framer-motion'
import { BrickWall } from 'lucide-react'

export function FloatingCTA() {
  const handleClick = () => {
    window.open('https://techsolutionsutrecht.nl/contact', '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed z-50 flex items-center justify-center
                 px-5 py-3 md:px-6 md:py-4
                 bg-gradient-to-br from-stone-300 to-stone-400
                 backdrop-blur-sm bg-stone-200/80
                 rounded-full
                 border border-stone-300
                 shadow-xl shadow-stone-500/20
                 cursor-pointer
                 group
                 /* Mobile: bottom-center */
                 bottom-4 left-1/2 -translate-x-1/2 max-w-xs
                 /* Desktop: bottom-right */
                 md:bottom-6 md:right-6 md:left-auto md:translate-x-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-stone-300 animate-ping opacity-20" />
      
      {/* Icon */}
      <BrickWall className="w-5 h-5 md:w-6 md:h-6 text-stone-800 flex-shrink-0" />
      
      {/* Text - hidden on smallest screens */}
      <span className="ml-2 text-stone-800 font-semibold text-sm md:text-base whitespace-nowrap">
        Offerte Aanvragen
      </span>
    </motion.button>
  )
}
