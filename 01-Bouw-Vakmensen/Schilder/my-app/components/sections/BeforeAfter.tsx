'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Brush } from 'lucide-react'

const comparisons = [
  {
    id: 1,
    title: 'Woonkamer metamorfose',
    description: 'Binnenschilderwerk - Den Haag',
    beforeImage: '/images/schilder/before/living-beige.jpg',
    afterImage: '/images/schilder/after/living-gray.jpg',
    beforeLabel: 'Beige & gedateerd',
    afterLabel: 'Modern grijs',
  },
  {
    id: 2,
    title: 'Keukenkastjes vernieuwd',
    description: 'Kastjes schilderen - Rotterdam',
    beforeImage: '/images/schilder/before/kitchen-wood.jpg',
    afterImage: '/images/schilder/after/kitchen-white.jpg',
    beforeLabel: 'Oud hout',
    afterLabel: 'Fris wit',
  },
  {
    id: 3,
    title: 'Buitengevel renovatie',
    description: 'Buitenschilderwerk - Zoetermeer',
    beforeImage: '/images/schilder/before/exterior-faded.jpg',
    afterImage: '/images/schilder/after/exterior-fresh.jpg',
    beforeLabel: 'Verweerd',
    afterLabel: 'Nieuw geverfd',
  },
  {
    id: 4,
    title: 'Slaapkamer transformatie',
    description: 'Binnenschilderwerk - Delft',
    beforeImage: '/images/schilder/before/bedroom-dark.jpg',
    afterImage: '/images/schilder/after/bedroom-pastel.jpg',
    beforeLabel: 'Donker & klein',
    afterLabel: 'Licht & luchtig',
  },
]

function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel,
  afterLabel,
}: { 
  beforeImage: string
  afterImage: string
  beforeLabel: string
  afterLabel: string
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    window.addEventListener('mouseup', handleGlobalMouseUp)
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-xl"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* After image (full) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt="After"
          fill
          className="object-cover"
        />
        <span className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
          <Brush className="w-3 h-3" />
          Na
        </span>
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Before"
          fill
          className="object-cover"
        />
        <span className="absolute top-4 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
          <Brush className="w-3 h-3" />
          Voor
        </span>
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
            <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-sm">
        <span className="bg-black/50 text-white px-3 py-1 rounded-full backdrop-blur-sm">
          {beforeLabel}
        </span>
        <span className="bg-teal-500/80 text-white px-3 py-1 rounded-full backdrop-blur-sm">
          {afterLabel}
        </span>
      </div>
    </div>
  )
}

export function BeforeAfter() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-coral-100 text-coral-700 rounded-full text-sm font-semibold mb-4"
          >
            Transformaties
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Voor & <span className="text-coral-500">Na</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Sleep over de afbeeldingen om de transformatie te zien
          </motion.p>
        </div>

        {/* Comparisons grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                beforeLabel={item.beforeLabel}
                afterLabel={item.afterLabel}
              />
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            Alle foto's zijn van daadwerkelijke projecten uitgevoerd door ons team.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
