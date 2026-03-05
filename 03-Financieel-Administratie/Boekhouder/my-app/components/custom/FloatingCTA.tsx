"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function FloatingCTA() {
  return (
    <motion.a
      href="https://techsolutionsutrecht.nl/contact"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Direct contact opnemen"
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-[#d4af37] blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
        
        {/* Button */}
        <div className="relative flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-4 rounded-full glass-card bg-gradient-to-r from-[#d4af37]/90 to-[#e5c158]/90 border-[#d4af37] shadow-lg">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#1e3a5f]" />
          </motion.div>
          <span className="font-semibold text-[#1e3a5f] text-sm sm:text-base whitespace-nowrap">
            Direct Contact
          </span>
        </div>

        {/* Pulsing rings */}
        <div className="absolute inset-0 rounded-full border-2 border-[#d4af37] animate-ping opacity-20" />
      </motion.div>
    </motion.a>
  );
}
