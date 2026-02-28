'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GripVertical, Home, ArrowUpDown, ArrowLeftRight } from 'lucide-react'

const comparisons = [
  {
    id: 1,
    title: 'Woonkamer Wand',
    beforeImage: '/images/stukadoor/before/brick-wall-rough.jpg',
    afterImage: '/images/stukadoor/after/living-smooth.jpg',
    description: 'Transformatie van ruwe bakstenen muur naar spiegelglad stucwerk',
  },
  {
    id: 2,
    title: 'Plafond Renovatie',
    beforeImage: '/images/stukadoor/before/damaged-ceiling.jpg',
    afterImage: '/images/stukadoor/after/ceiling-finish.jpg',
    description: 'Volledige plafond renovatie met gladde afwerking',
  },
  {
    id: 3,
    title: 'Badkamer Stucwerk',
    beforeImage: '/images/stukadoor/before/uneven-surface.jpg',
    afterImage: '/images/stukadoor/after/bathroom-seamless.jpg',
    description: 'Vochtbestendig stucwerk voor een naadloze badkamer',
  },
]

interface ComparisonSliderProps {
  beforeImage: string
  afterImage: string
  title: string
  orientation?: 'horizontal' | 'vertical'
}

function ComparisonSlider({
  beforeImage,
  afterImage,
  title,
  orientation = 'horizontal',
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      
      if (orientation === 'horizontal') {
        const x = clientX - rect.left
        const percentage = (x / rect.width) * 100
        setSliderPosition(Math.max(0, Math.min(100, percentage)))
      } else {
        const y = clientY - rect.top
        const percentage = (y / rect.height) * 100
        setSliderPosition(Math.max(0, Math.min(100, percentage)))
      }
    },
    [orientation]
  )

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return
      handleMove(e.clientX, e.clientY)
    },
    [isDragging, handleMove]
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0]
      handleMove(touch.clientX, touch.clientY)
    },
    [handleMove]
  )

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <Image
        src={afterImage}
        alt={`${title} - After`}
        fill
        className="object-cover"
        draggable={false}
      />
      
      {/* Label - After */}
      <div className="absolute top-4 right-4 px-3 py-1.5 bg-clay/90 text-white text-sm font-medium rounded-full">
        Gestuct
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath:
            orientation === 'horizontal'
              ? `inset(0 ${100 - sliderPosition}% 0 0)`
              : `inset(0 0 ${100 - sliderPosition}% 0)`,
        }}
      >
        <Image
          src={beforeImage}
          alt={`${title} - Before`}
          fill
          className="object-cover"
          draggable={false}
        />
        
        {/* Label - Before */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-stone-700/90 text-white text-sm font-medium rounded-full">
          Ruw
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute bg-white shadow-xl"
        style={{
          [orientation === 'horizontal' ? 'left' : 'top']: `${sliderPosition}%`,
          [orientation === 'horizontal' ? 'top' : 'left']: 0,
          [orientation === 'horizontal' ? 'width' : 'height']: '4px',
          [orientation === 'horizontal' ? 'height' : 'width']: '100%',
          transform: orientation === 'horizontal' ? 'translateX(-50%)' : 'translateY(-50%)',
        }}
      >
        {/* Handle Circle */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 
                     bg-white rounded-full shadow-xl flex items-center justify-center
                     border-2 border-sand-300"
        >
          {orientation === 'horizontal' ? (
            <ArrowLeftRight className="w-5 h-5 text-stone-600" />
          ) : (
            <ArrowUpDown className="w-5 h-5 text-stone-600" />
          )}
        </div>
      </div>
    </div>
  )
}

export function BeforeAfterSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal')

  const activeComparison = comparisons[activeIndex]

  return (
    <section className="py-24 bg-stone-800 seamless-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-sand-300 bg-sand-300/10 rounded-full">
            Resultaten
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Voor & Na{' '}
            <span className="text-sand-300">Vergelijking</span>
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            Zie het verschil tussen ruwe ondergronden en onze perfect gladde afwerking.
            Sleep over de afbeelding om de transformatie te zien.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Comparison Selector */}
          <div className="lg:col-span-1 space-y-4">
            {comparisons.map((comparison, index) => (
              <motion.button
                key={comparison.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-white/10 border-2 border-sand-300'
                    : 'bg-white/5 border-2 border-transparent hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeIndex === index ? 'bg-sand-300' : 'bg-white/10'
                    }`}
                  >
                    <Home
                      className={`w-6 h-6 ${
                        activeIndex === index ? 'text-stone-800' : 'text-white'
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-lg">
                      {comparison.title}
                    </h3>
                    <p className="text-sm text-stone-400">{comparison.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}

            {/* Orientation Toggle */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <span className="text-sm text-stone-400">Slider richting:</span>
              <div className="inline-flex bg-white/10 rounded-full p-1">
                <button
                  onClick={() => setOrientation('horizontal')}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    orientation === 'horizontal'
                      ? 'bg-sand-300 text-stone-800'
                      : 'text-stone-400'
                  }`}
                >
                  Horizontaal
                </button>
                <button
                  onClick={() => setOrientation('vertical')}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    orientation === 'vertical'
                      ? 'bg-sand-300 text-stone-800'
                      : 'text-stone-400'
                  }`}
                >
                  Verticaal
                </button>
              </div>
            </div>
          </div>

          {/* Slider Display */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeComparison.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <ComparisonSlider
                beforeImage={activeComparison.beforeImage}
                afterImage={activeComparison.afterImage}
                title={activeComparison.title}
                orientation={orientation}
              />
              
              {/* Legend */}
              <div className="flex items-center justify-center gap-8 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-stone-600" />
                  <span className="text-stone-400">Ruw oppervlak</span>
                </div>
                <GripVertical className="w-4 h-4 text-stone-500" />
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-clay" />
                  <span className="text-stone-400">Gestuct oppervlak</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
