'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { GripVertical, Droplets } from 'lucide-react'

/**
 * Before/After Comparison Slider
 * Interactive comparison showing broken vs fixed pipe
 * Draggable handle with ripple effects
 */
export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    },
    []
  )

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-water-blue font-semibold text-sm uppercase tracking-wider">
            Resultaten
          </span>
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-deep-navy mt-3 mb-4">
            Voor en Na
          </h2>
          <p className="text-steel-gray">
            Zie het verschil dat professioneel loodgieterswerk maakt. 
            Sleep de slider om het resultaat te bekijken.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* After image (full width, background) */}
            <div className="absolute inset-0">
              <img
                src="/images/after-reparatie.jpg"
                alt="Na reparatie - perfect gerepareerde leiding"
                className="w-full h-full object-cover"
                draggable={false}
              />
              {/* After label */}
              <div className="absolute top-4 right-4 bg-emergency-orange text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Droplets className="w-4 h-4" />
                Na
              </div>
            </div>

            {/* Before image (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/images/before-lek.jpg"
                alt="Voor reparatie - lekkende leiding"
                className="w-full h-full object-cover"
                draggable={false}
              />
              {/* Before label */}
              <div className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Droplets className="w-4 h-4" />
                Voor
              </div>
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              {/* Handle button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <GripVertical className="w-6 h-6 text-deep-navy" />
              </div>

              {/* Ripple effects */}
              {isDragging && (
                <>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 rounded-full animate-ping" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-water-blue/20 rounded-full animate-pulse" />
                </>
              )}
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-sm text-steel-gray mt-4">
            Sleep de slider om het verschil te zien
          </p>
        </motion.div>
      </div>
    </section>
  )
}
