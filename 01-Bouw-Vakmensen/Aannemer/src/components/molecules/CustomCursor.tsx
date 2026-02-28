'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useCustomCursor } from '@/hooks/useCustomCursor'

/**
 * Custom Cursor Component
 * Replaces default cursor with animated circle
 * Expands on hover with blend-mode difference effect
 */
export function CustomCursor() {
  const { cursor, isTouchDevice } = useCustomCursor()

  // Don't render on touch devices
  if (isTouchDevice) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: cursor.x - (cursor.isHovering ? 30 : 10),
          y: cursor.y - (cursor.isHovering ? 30 : 10),
          width: cursor.isHovering ? 60 : 20,
          height: cursor.isHovering ? 60 : 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
          <AnimatePresence>
            {cursor.isHovering && (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="text-[10px] font-heading font-bold text-black"
              >
                {cursor.hoverText}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Trailing cursor (larger, more subtle) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: cursor.x - 20,
          y: cursor.y - 20,
          opacity: cursor.isHovering ? 0 : 0.3,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 20,
          mass: 0.8,
        }}
      >
        <div className="w-10 h-10 rounded-full border border-white/50" />
      </motion.div>
    </>
  )
}
