'use client';

/**
 * Digital Loyalty Card Component
 * Visual coffee card with 10 stamps
 * 
 * Features:
 * - Animated stamp on add to cart
 * - Confetti effect on 10th stamp
 * - Progress bar showing "10e koffie gratis!"
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoyaltyCardProps {
  stamps: number;
  freeDrinksAvailable?: number;
  className?: string;
  showAnimation?: boolean;
  onAnimationComplete?: () => void;
}

export function LoyaltyCard({ 
  stamps, 
  freeDrinksAvailable = 0,
  className,
  showAnimation = false,
  onAnimationComplete
}: LoyaltyCardProps) {
  const [animatingStamp, setAnimatingStamp] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  // Trigger stamp animation
  const triggerStamp = (stampIndex: number) => {
    setAnimatingStamp(stampIndex);
    setTimeout(() => setAnimatingStamp(null), 500);
    
    // Confetti on 10th stamp
    if (stampIndex === 9) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        onAnimationComplete?.();
      }, 2000);
    }
  };

  return (
    <div className={cn('relative', className)}>
      {/* Main Card */}
      <div className="bg-gradient-to-br from-espresso-800 to-espresso-900 rounded-2xl p-5 text-white shadow-elevated">
        {/* Card Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Coffee className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-lg">De Gouden Boon</span>
          </div>
          <div className="text-right">
            <p className="text-xs text-espresso-200">Stempelkaart</p>
          </div>
        </div>

        {/* Stamps Grid */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          {Array.from({ length: 10 }).map((_, index) => {
            const isStamped = index < stamps;
            const isAnimating = animatingStamp === index;

            return (
              <motion.div
                key={index}
                initial={false}
                animate={isAnimating ? { scale: [2, 0.8, 1], rotate: [0, -10, 0] } : {}}
                className={cn(
                  'aspect-square rounded-full flex items-center justify-center',
                  'border-2 border-dashed border-espresso-400',
                  isStamped 
                    ? 'bg-amber-500 border-amber-500' 
                    : 'bg-espresso-700/50'
                )}
              >
                {isStamped && (
                  <Coffee className="w-4 h-4 text-white" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Progress Info */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-amber-400">
              {stamps === 10 
                ? 'Gratis koffie beschikbaar!' 
                : `${10 - stamps} stempels tot gratis koffie`
              }
            </p>
            <p className="text-xs text-espresso-300">
              {stamps}/10 gespaard
            </p>
          </div>
          
          {freeDrinksAvailable > 0 && (
            <div className="flex items-center gap-1 text-amber-400">
              <Gift className="w-5 h-5" />
              <span className="font-bold">{freeDrinksAvailable}</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mt-3 h-2 bg-espresso-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(stamps / 10) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
          />
        </div>
      </div>

      {/* Confetti Animation */}
      <AnimatePresence>
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  y: -20, 
                  x: Math.random() * 200 - 100,
                  opacity: 1,
                  rotate: 0
                }}
                animate={{ 
                  y: 200, 
                  opacity: 0,
                  rotate: 360 + Math.random() * 360
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 1 + Math.random(),
                  ease: 'easeOut'
                }}
                className={cn(
                  'absolute top-1/2 left-1/2 w-3 h-3 rounded-sm',
                  ['bg-amber-400', 'bg-mint-400', 'bg-red-400', 'bg-blue-400'][i % 4]
                )}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
