'use client';

/**
 * Bottom Sheet Component
 * Mobile-optimized modal that slides up from bottom
 * 
 * Design Principles:
 * - Native app feel with gesture support
 * - Swipe down to close (native iOS/Android pattern)
 * - Large touch targets for easy dismissal
 * - Backdrop tap to close
 */

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { X } from 'lucide-react';
import { cn, preventBodyScroll } from '@/lib/utils';
import type { BottomSheetProps } from '@/types';

const heightClasses = {
  small: 'h-[40vh]',
  medium: 'h-[60vh]',
  large: 'h-[85vh]',
  full: 'h-[95vh]',
};

export function BottomSheet({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  height = 'medium' 
}: BottomSheetProps) {
  // Lock body scroll when sheet is open
  useEffect(() => {
    preventBodyScroll(isOpen);
    return () => preventBodyScroll(false);
  }, [isOpen]);

  // Handle escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  // Swipe to close handler
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    // Close if swiped down more than 100px or with velocity > 500
    if (info.offset.y > 100 || info.velocity.y > 500) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - tap to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-espresso-900/60 backdrop-blur-sm z-50"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Sheet Container */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ 
              type: 'spring', 
              damping: 30, 
              stiffness: 300 
            }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className={cn(
              'fixed bottom-0 left-0 right-0 z-50',
              'bg-cream-50 rounded-t-3xl shadow-2xl',
              'flex flex-col',
              heightClasses[height]
            )}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'sheet-title' : undefined}
          >
            {/* Drag Handle - Visual indicator for swipe */}
            <div className="flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing">
              <div className="w-12 h-1.5 bg-espresso-200 rounded-full" />
            </div>

            {/* Header */}
            {title && (
              <div className="flex items-center justify-between px-4 pb-4 border-b border-latte-100">
                <h2 
                  id="sheet-title" 
                  className="text-lg font-bold text-espresso-900"
                >
                  {title}
                </h2>
                {/* Close button - large touch target */}
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 rounded-full hover:bg-espresso-100 transition-colors"
                  aria-label="Sluiten"
                >
                  <X className="w-6 h-6 text-espresso-600" />
                </button>
              </div>
            )}

            {/* Content - scrollable */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
