'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Gallery images data with mixed aspect ratios for masonry layout
 */
const galleryImages = [
  { id: '1', src: '/images/gallery-badkamer.jpg', alt: 'Badkamer renovatie project', category: 'badkamers', width: 600, height: 400 },
  { id: '2', src: '/images/gallery-lekreparatie.jpg', alt: 'Lekreparatie uitgevoerd', category: 'lekkages', width: 400, height: 600 },
  { id: '3', src: '/images/gallery-cv.jpg', alt: 'CV ketel installatie', category: 'verwarming', width: 800, height: 600 },
  { id: '4', src: '/images/gallery-keuken.jpg', alt: 'Keuken sanitair installatie', category: 'badkamers', width: 600, height: 400 },
  { id: '5', src: '/images/gallery-riool.jpg', alt: 'Riool inspectie', category: 'lekkages', width: 400, height: 600 },
  { id: '6', src: '/images/gallery-vloerverwarming.jpg', alt: 'Vloerverwarming installatie', category: 'verwarming', width: 800, height: 600 },
]

const filters = [
  { id: 'alle', label: 'Alle' },
  { id: 'badkamers', label: 'Badkamers' },
  { id: 'verwarming', label: 'Verwarming' },
  { id: 'lekkages', label: 'Lekkages' },
]

/**
 * Gallery Section
 * Masonry layout with filter buttons and lightbox functionality
 */
export function Gallery() {
  const [activeFilter, setActiveFilter] = useState('alle')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const filteredImages = activeFilter === 'alle' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter)

  const currentIndex = lightboxImage ? filteredImages.findIndex(img => img.id === lightboxImage) : -1

  const handlePrev = () => {
    if (currentIndex > 0) {
      setLightboxImage(filteredImages[currentIndex - 1].id)
    }
  }

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setLightboxImage(filteredImages[currentIndex + 1].id)
    }
  }

  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-water-blue font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-deep-navy mt-3 mb-4">
            Recent werk
          </h2>
          <p className="text-steel-gray">
            Bekijk een selectie van onze recent uitgevoerde projecten 
            in Rotterdam en omgeving.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                'px-6 py-2 rounded-full font-medium transition-all',
                activeFilter === filter.id
                  ? 'bg-water-blue text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              )}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry gallery */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="break-inside-avoid"
              >
                <div
                  onClick={() => setLightboxImage(image.id)}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-deep-navy/0 group-hover:bg-deep-navy/50 transition-colors duration-300 flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-semibold">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            {currentIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            {currentIndex < filteredImages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={lightboxImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filteredImages[currentIndex]?.src}
              alt={filteredImages[currentIndex]?.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full text-white text-sm">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
