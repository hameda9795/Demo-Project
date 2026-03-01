'use client'

import { motion } from 'framer-motion'
import { Coffee } from 'lucide-react'

export default function FloatingCTA() {
  return (
    <motion.a
      href="https://techsolutionsutrecht.nl/contact"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50 flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-4 bg-strawberry-jam text-white rounded-full shadow-lg cursor-pointer group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
      }}
      transition={{ 
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 1 
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 40px rgba(231, 111, 81, 0.5)'
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        animation: 'breathing 3s ease-in-out infinite',
        boxShadow: '0 0 20px rgba(231, 111, 81, 0.4)',
      }}
    >
      {/* Icon with steam effect */}
      <div className="relative">
        <Coffee className="w-5 h-5 sm:w-6 sm:h-6" />
        {/* Steam animation */}
        <motion.div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-white/40 rounded-full"
          animate={{
            y: [-2, -8, -12],
            opacity: [0.6, 0.3, 0],
            scale: [1, 1.2, 1.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
        <motion.div
          className="absolute -top-2 left-1/2 translate-x-0 w-1 h-2 bg-white/30 rounded-full"
          animate={{
            y: [-2, -6, -10],
            opacity: [0.4, 0.2, 0],
            scale: [1, 1.3, 1.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 0.5,
          }}
        />
      </div>

      {/* Text - hidden on small mobile, visible on larger screens */}
      <span className="hidden sm:inline text-sm font-medium whitespace-nowrap">
        Direct Contact
      </span>
      
      {/* Mobile-only shorter text */}
      <span className="sm:hidden text-sm font-medium whitespace-nowrap">
        Contact
      </span>
    </motion.a>
  )
}
