'use client';

/**
 * Floating CTA Button (Global)
 * 
 * Design Requirements:
 * - Position: bottom-right (desktop), bottom-center (mobile)
 * - Circular button with rich navy background
 * - Gold/champagne glow with pulse animation
 * - Icon: Key from Lucide
 * - Text: "Direct Boeken"
 * - On click: opens techsolutionsutrecht.nl/contact in new tab
 * - z-50, backdrop-blur, shadow-gold/30
 */

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Key } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.open('https://techsolutionsutrecht.nl/contact', '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.8,
        y: isVisible ? 0 : 20 
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={handleClick}
      className={cn(
        // Positioning
        'fixed z-50',
        // Desktop: bottom-right, Mobile: bottom-center
        'bottom-6 right-6',
        'md:bottom-6 md:right-6',
        'max-md:left-1/2 max-md:-translate-x-1/2 max-md:right-auto',
        
        // Visual styling
        'flex items-center gap-2',
        'px-5 py-3 md:px-6 md:py-4',
        'rounded-full',
        
        // Colors - rich navy background with gold glow
        'bg-navy',
        'backdrop-blur-md',
        
        // Shadow and glow effects
        'shadow-lg shadow-gold/30',
        'border border-gold/30',
        
        // Pulse animation for gold glow
        'animate-pulse-gold',
        
        // Hover effects
        'hover:scale-105 hover:shadow-gold-lg',
        'transition-all duration-300',
        
        // Cursor
        'cursor-pointer',
        
        // Focus styles
        'focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy'
      )}
      aria-label="Direct boeken"
    >
      {/* Icon */}
      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
        <Key className="w-4 h-4 text-gold" />
      </div>
      
      {/* Text */}
      <span className="text-white font-medium text-sm md:text-base whitespace-nowrap">
        Direct Boeken
      </span>
      
      {/* Gold shimmer effect overlay */}
      <div 
        className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s linear infinite',
        }}
      />
    </motion.button>
  );
}
