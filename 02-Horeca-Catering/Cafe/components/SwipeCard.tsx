'use client';

/**
 * Swipe Card Component
 * Instagram-story style card with swipe gestures
 * 
 * Mobile Gestures:
 * - Tap: Quick add / Open details
 * - Swipe Left: Add to favorites
 * - Swipe Right: View details
 * - Long press: Quick preview
 * 
 * Visual Design:
 * - Edge-to-edge on mobile
 * - Large touch targets
 * - Clear visual feedback
 */

import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { Heart, Info, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SwipeCardProps } from '@/types';

// Swipe thresholds
const SWIPE_THRESHOLD = 80;
const LONG_PRESS_DURATION = 500;

export function SwipeCard({ 
  children, 
  onSwipeLeft, 
  onSwipeRight, 
  onTap,
  className 
}: SwipeCardProps) {
  const [isLongPress, setIsLongPress] = useState(false);
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);
  
  // Motion values for drag animation
  const x = useMotionValue(0);
  
  // Transform x position to opacity for background actions
  const leftActionOpacity = useTransform(x, [0, SWIPE_THRESHOLD], [0, 1]);
  const rightActionOpacity = useTransform(x, [-SWIPE_THRESHOLD, 0], [1, 0]);
  const leftActionScale = useTransform(x, [0, SWIPE_THRESHOLD], [0.5, 1]);
  const rightActionScale = useTransform(x, [-SWIPE_THRESHOLD, 0], [1, 0.5]);

  // Handle drag end
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x > SWIPE_THRESHOLD) {
      // Swiped right - add to favorites
      onSwipeRight?.();
    } else if (info.offset.x < -SWIPE_THRESHOLD) {
      // Swiped left - view details
      onSwipeLeft?.();
    }
  };

  // Long press handlers
  const handleTouchStart = () => {
    longPressTimer.current = setTimeout(() => {
      setIsLongPress(true);
      // Haptic feedback if available
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(50);
      }
    }, LONG_PRESS_DURATION);
  };

  const handleTouchEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
    if (isLongPress) {
      setIsLongPress(false);
    }
  };

  const handleClick = () => {
    if (!isLongPress) {
      onTap?.();
    }
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Background Actions - Revealed on swipe */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        {/* Right action (shown on swipe left) */}
        <motion.div
          style={{ opacity: rightActionOpacity, scale: rightActionScale }}
          className="flex items-center gap-2 text-mint-400"
        >
          <div className="w-12 h-12 rounded-full bg-mint-400/20 flex items-center justify-center">
            <Info className="w-6 h-6" />
          </div>
          <span className="font-semibold">Details</span>
        </motion.div>

        {/* Left action (shown on swipe right) */}
        <motion.div
          style={{ opacity: leftActionOpacity, scale: leftActionScale }}
          className="flex items-center gap-2 text-red-500"
        >
          <span className="font-semibold">Favoriet</span>
          <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
            <Heart className="w-6 h-6" />
          </div>
        </motion.div>
      </div>

      {/* Main Card Content */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.3}
        onDragEnd={handleDragEnd}
        style={{ x }}
        whileTap={{ scale: 0.98 }}
        onTap={handleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
        className={cn(
          'relative bg-cream-50 rounded-2xl shadow-soft',
          'touch-pan-y', // Allow vertical scroll
          isLongPress && 'scale-[0.98]'
        )}
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Quick Add Button
 * Circular button for adding items, positioned bottom-right of card
 */
interface QuickAddButtonProps {
  onClick: () => void;
  isAdded?: boolean;
}

export function QuickAddButton({ onClick, isAdded }: QuickAddButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={cn(
        'w-12 h-12 rounded-full flex items-center justify-center shadow-elevated',
        'transition-colors duration-200',
        isAdded 
          ? 'bg-mint-400 text-white' 
          : 'bg-amber-500 text-white'
      )}
      aria-label={isAdded ? 'Toegevoegd' : 'Toevoegen'}
    >
      <Plus className={cn('w-6 h-6', isAdded && 'rotate-45')} />
    </motion.button>
  );
}
