/**
 * Floating CTA Button
 * Van den Berg Timmerwerken
 * 
 * A global floating call-to-action button that appears on all pages.
 * Positioned at bottom-right on desktop, bottom-center on mobile.
 * 
 * Design Features:
 * - Circular button with wood grain texture background
 * - Warm amber glow (#D4AF37)
 * - Hammer icon from Lucide
 * - Gentle breathing pulse animation
 * - Opens external contact page in new tab
 */

"use client";

import { motion } from "framer-motion";
import { Hammer } from "lucide-react";

/**
 * FloatingCTA Component
 * Global floating action button for direct contact
 */
export function FloatingCTA() {
  const handleClick = () => {
    window.open("https://techsolutionsutrecht.nl/contact", "_blank", "noopener,noreferrer");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay: 2, // Appear after page load
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)"
      }}
      whileTap={{ scale: 0.95 }}
      className="fixed z-50 flex flex-col items-center gap-2 group cursor-pointer"
      style={{
        // Desktop: bottom-right, Mobile: bottom-center
        right: "clamp(1rem, 5vw, 1.5rem)",
        bottom: "clamp(1rem, 5vh, 1.5rem)",
      }}
      aria-label="Direct contact opnemen"
    >
      {/* Mobile positioning wrapper */}
      <style jsx>{`
        @media (max-width: 640px) {
          button {
            right: 50% !important;
            transform: translateX(50%);
          }
        }
      `}</style>

      {/* Circular Button */}
      <div
        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center breathing-pulse backdrop-blur-md border-2 border-[#D4AF37]/50 shadow-amber-500/30"
        style={{
          // Wood grain texture background - CSS gradient mimicking oak grain
          background: `
            radial-gradient(
              ellipse at 30% 20%,
              rgba(166, 123, 91, 0.8) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse at 70% 80%,
              rgba(107, 68, 35, 0.6) 0%,
              transparent 50%
            ),
            repeating-linear-gradient(
              45deg,
              #8B5A2B 0px,
              #A67B5B 2px,
              #6B4423 4px,
              #8B5A2B 6px
            ),
            linear-gradient(135deg, #8B5A2B 0%, #3E2723 100%)
          `,
          // Amber glow effect
          boxShadow: `
            0 4px 20px rgba(212, 175, 55, 0.3),
            0 0 0 4px rgba(212, 175, 55, 0.1),
            inset 0 2px 4px rgba(255, 255, 255, 0.2)
          `,
        }}
      >
        {/* Inner shine effect */}
        <div 
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%)",
          }}
        />

        {/* Hammer Icon */}
        <Hammer className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37] drop-shadow-lg" />

        {/* Rotating accent ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4AF37]/30"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>

      {/* Label Text */}
      <motion.span
        className="px-3 py-1.5 bg-[#3E2723]/90 backdrop-blur-sm text-[#F5F5DC] text-xs font-medium rounded-full whitespace-nowrap border border-[#D4AF37]/30 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      >
        Direct Contact
      </motion.span>
    </motion.button>
  );
}
