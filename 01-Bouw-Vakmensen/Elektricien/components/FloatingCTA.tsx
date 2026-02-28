"use client"

import { Zap } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function FloatingCTA() {
  const pathname = usePathname()
  
  // Hide on admin pages
  if (pathname?.startsWith("/admin")) {
    return null
  }

  return (
    <motion.button
      onClick={() => window.open("https://techsolutionsutrecht.nl/contact", "_blank")}
      className="fixed z-50 flex flex-col items-center justify-center rounded-full 
                 w-14 h-14 md:w-16 md:h-16
                 backdrop-blur-sm bg-blue-600/90 
                 shadow-lg shadow-blue-500/50
                 cursor-pointer group
                 md:bottom-6 md:right-6
                 bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      aria-label="Direct Contact"
    >
      {/* Pulsing glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-600"
        animate={{
          boxShadow: [
            "0 0 20px rgba(37,99,235,0.5)",
            "0 0 40px rgba(37,99,235,0.8)",
            "0 0 20px rgba(37,99,235,0.5)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Icon */}
      <Zap 
        className="relative z-10 w-6 h-6 md:w-8 md:h-8 text-white" 
        fill="currentColor" 
      />
      
      {/* Desktop text label */}
      <span className="hidden md:block relative z-10 text-[10px] text-white font-medium mt-0.5">
        Direct Contact
      </span>
    </motion.button>
  )
}
