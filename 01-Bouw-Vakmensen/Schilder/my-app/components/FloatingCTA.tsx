'use client'

import { PaintBucket } from 'lucide-react'
import { motion } from 'framer-motion'

export function FloatingCTA() {
  const handleClick = () => {
    window.open('https://techsolutionsutrecht.nl/contact', '_blank')
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2 
                 px-5 py-4 rounded-full
                 bg-gradient-to-r from-teal-500 via-blue-600 to-purple-600
                 backdrop-blur-md bg-white/10
                 border-2 border-white/20
                 shadow-xl shadow-teal-500/30
                 group cursor-pointer
                 overflow-hidden"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 25px 50px -12px rgba(13, 148, 136, 0.5)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"
        initial={{ x: '-100%' }}
        whileHover={{ x: '0%' }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full animate-pulse bg-white/20" />
      
      {/* Icon */}
      <span className="relative z-10">
        <PaintBucket 
          className="w-6 h-6 text-white" 
          fill="currentColor"
        />
      </span>
      
      {/* Text */}
      <span className="relative z-10 text-white font-semibold whitespace-nowrap">
        Offerte Aanvragen
      </span>
    </motion.button>
  )
}

// Mobile version - bottom center, icon only
export function FloatingCTAMobile() {
  const handleClick = () => {
    window.open('https://techsolutionsutrecht.nl/contact', '_blank')
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden
                 w-14 h-14 rounded-full
                 bg-gradient-to-r from-teal-500 via-blue-600 to-purple-600
                 backdrop-blur-md
                 border-2 border-white/30
                 shadow-xl shadow-teal-500/40
                 flex items-center justify-center
                 group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: 0,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping bg-teal-400 opacity-30" />
      
      <PaintBucket 
        className="w-6 h-6 text-white relative z-10" 
        fill="currentColor"
      />
    </motion.button>
  )
}
