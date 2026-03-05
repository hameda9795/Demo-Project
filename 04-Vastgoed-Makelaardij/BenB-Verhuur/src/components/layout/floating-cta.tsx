"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <motion.a
      href="https://techsolutionsutrecht.nl/contact"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      className="fixed bottom-24 lg:bottom-8 right-4 lg:right-8 z-50 group"
      aria-label="Direct contact opnemen"
    >
      {/* Pulse Ring Effect */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-terracotta to-coral animate-ping opacity-20" />
      
      {/* Main Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-terracotta to-coral text-white rounded-full shadow-2xl shadow-terracotta/40 hover:shadow-terracotta/60 transition-shadow"
      >
        {/* Heartbeat Animation */}
        <motion.div
          animate={{ scale: [1, 1.2, 1, 1.2, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="relative"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
        </motion.div>

        {/* Text - Hidden on mobile, shown on larger screens */}
        <div className="hidden sm:block">
          <p className="text-xs font-medium opacity-90">Direct hulp nodig?</p>
          <p className="text-sm font-bold">Contact opnemen</p>
        </div>

        {/* Mobile-only text */}
        <span className="sm:hidden font-bold text-sm">Contact</span>
      </motion.div>

      {/* Hover Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-charcoal text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
          Klik om direct contact op te nemen
          <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-charcoal" />
        </div>
      </div>
    </motion.a>
  );
}
