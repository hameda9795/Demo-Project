'use client';

/**
 * Floating CTA Button
 * Appears on ALL pages
 * 
 * Mobile Position: Bottom-right, above bottom nav (bottom-20 right-4)
 * Desktop Position: Bottom-right (bottom-8 right-8)
 * 
 * Design:
 * - Circular amber button with coffee bean icon
 * - Pulsing glow animation to attract attention
 * - Opens external contact link in new tab
 */

import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FloatingCTA() {
  const handleClick = () => {
    window.open(
      'https://techsolutionsutrecht.nl/contact',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.9 }}
      className={cn(
        // Position: above bottom nav on mobile, bottom-right desktop
        'fixed bottom-20 right-4 md:bottom-8 md:right-8 z-50',
        // Circular button design
        'w-14 h-14 rounded-full',
        'bg-amber-500 text-white shadow-elevated',
        // Pulsing glow animation
        'animate-pulse-glow',
        // Hover effects
        'hover:bg-amber-600 transition-colors duration-200',
        // Focus styles
        'focus:outline-none focus:ring-4 focus:ring-amber-300'
      )}
      aria-label="Neem contact op met Tech Solutions Utrecht"
      title="Neem contact op"
    >
      <Coffee className="w-6 h-6 mx-auto" strokeWidth={2.5} />
      
      {/* Notification dot (optional - for demo purposes) */}
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-cream-50" />
    </motion.button>
  );
}
