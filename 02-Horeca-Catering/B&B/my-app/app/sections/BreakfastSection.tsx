'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Egg, Clock, ChevronLeft, ChevronRight, Leaf } from 'lucide-react'
import { breakfastItems, dietaryBadges } from '@/lib/data'

export default function BreakfastSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="ontbijt" className="py-20 lg:py-28 bg-creamy-egg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-honey-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-strawberry-jam/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Egg className="w-6 h-6 text-strawberry-jam" />
            <span className="text-sm font-medium text-coffee-brown/60 tracking-wider uppercase">
              Ons Specialiteit
            </span>
          </div>
          <h2 className="font-lora text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-brown mb-4">
            Het beroemde ontbijt
          </h2>
          <p className="text-lg text-coffee-brown/70 max-w-2xl mx-auto">
            Elke ochtend bereiden we met liefde een uitgebreid ontbijt met lokale producten, 
            versgebakken brood en huisgemaakte jam.
          </p>
        </motion.div>

        {/* Breakfast Time Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-cozy">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Clock className="w-5 h-5 text-strawberry-jam" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-strawberry-jam/20"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="font-medium text-coffee-brown">08:00 - 10:30</span>
            </div>
            <div className="w-px h-6 bg-coffee-brown/20" />
            <div className="flex items-center gap-2 text-sm text-coffee-brown/70">
              <Leaf className="w-4 h-4 text-fresh-sage" />
              <span>Dieetwensen mogelijk</span>
            </div>
          </div>
        </motion.div>

        {/* Dietary Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {dietaryBadges.map((badge) => (
            <span
              key={badge.key}
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${badge.color}`}
            >
              {badge.label}
            </span>
          ))}
        </motion.div>

        {/* Horizontal Scroll Gallery */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-coffee-brown hover:text-strawberry-jam transition-colors -translate-x-1/2 hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-coffee-brown hover:text-strawberry-jam transition-colors translate-x-1/2 hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Gallery */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {breakfastItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex-shrink-0 w-72 snap-start"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-cozy hover:shadow-cozy-hover transition-shadow group">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Steam effect for coffee */}
                    {(item.category === 'beverage' || item.name.includes('Koffie')) && (
                      <div className="absolute top-4 left-1/2 -translate-x-1/2">
                        <motion.div
                          className="w-1 h-4 bg-white/40 rounded-full absolute"
                          animate={{ y: [-5, -20], opacity: [0.6, 0], scale: [1, 1.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div
                          className="w-1 h-3 bg-white/30 rounded-full absolute left-2"
                          animate={{ y: [-3, -15], opacity: [0.5, 0], scale: [1, 1.3] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                      </div>
                    )}
                    {/* Category badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-coffee-brown">
                        {item.category === 'bread' && '🥐'}
                        {item.category === 'dairy' && '🥛'}
                        {item.category === 'fruit' && '🍓'}
                        {item.category === 'beverage' && '☕'}
                        {item.category === 'special' && '✨'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-lora text-lg font-semibold text-coffee-brown mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-coffee-brown/60 mb-3">
                      {item.description}
                    </p>
                    {/* Dietary icons */}
                    <div className="flex flex-wrap gap-1">
                      {item.dietary.map((diet) => {
                        const badge = dietaryBadges.find((b) => b.key === diet)
                        return badge ? (
                          <span
                            key={diet}
                            className={`text-[10px] px-2 py-0.5 rounded-full ${badge.color}`}
                          >
                            {badge.label}
                          </span>
                        ) : null
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-coffee-brown/70 mb-4">
            Heb je speciale dieetwensen? Laat het ons weten!
          </p>
          <a
            href="https://techsolutionsutrecht.nl/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-strawberry-jam font-medium hover:underline"
          >
            Neem contact op
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
