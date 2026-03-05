"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function FloatingActionButton() {
  return (
    <motion.a
      href="https://techsolutionsutrecht.nl/contact"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-warm-terracotta text-white px-5 py-4 font-display font-medium text-sm tracking-wide shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      data-cursor-hover
    >
      {/* Pulsing ring effect */}
      <span className="absolute inset-0 bg-warm-terracotta animate-pulse-ring rounded-sm" />
      
      {/* Content */}
      <span className="relative flex items-center gap-2">
        <span className="hidden sm:inline">Gratis Adviesgesprek</span>
        <span className="sm:hidden">Contact</span>
        <ArrowUpRight className="w-4 h-4" />
      </span>
      
      {/* Blinking dot */}
      <motion.span
        className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.a>
  );
}
