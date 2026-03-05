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
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="relative"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(251, 191, 36, 0.4)",
            "0 0 0 15px rgba(251, 191, 36, 0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="shimmer-gold text-accent-foreground px-4 md:px-6 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base flex items-center gap-2 shadow-xl">
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Direct Contact</span>
          <span className="sm:hidden">Contact</span>
        </div>
      </motion.div>
    </motion.a>
  );
}
