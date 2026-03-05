"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function FloatingActionButton() {
  return (
    <motion.a
      href="https://techsolutionsutrecht.nl/contact"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#C17A5C] animate-ping opacity-20" />
      <span className="absolute -inset-2 rounded-full bg-[#C17A5C]/20 animate-pulse-gentle" />
      
      {/* Button */}
      <div className="relative bg-[#C17A5C] brutal-border px-5 py-3 flex items-center gap-2 shadow-lg hover:bg-[#6D5B4F] transition-colors">
        <span className="font-mono text-sm uppercase tracking-wider text-white font-medium">
          Offerte aanvragen
        </span>
        <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.a>
  );
}
