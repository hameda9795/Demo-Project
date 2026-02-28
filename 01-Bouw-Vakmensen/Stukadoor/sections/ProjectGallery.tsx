'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Eye, Grid3X3 } from 'lucide-react'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'all', label: 'Alle projecten' },
  { id: 'woonkamer', label: 'Woonkamers' },
  { id: 'badkamer', label: 'Badkamers' },
  { id: 'keuken', label: 'Keukens' },
  { id: 'plafond', label: 'Plafonds' },
  { id: 'exterieur', label: 'Exterieur' },
]

const projects = [
  {
    id: 1,
    title: 'Moderne Woonkamer',
    category: 'woonkamer',
    image: '/images/stukadoor/projects/room-1.jpg',
    description: 'Spiegelglad stucwerk in een minimalistische woonkamer',
    beforeImage: '/images/stukadoor/before/brick-wall-rough.jpg',
  },
  {
    id: 2,
    title: 'Luxe Slaapkamer',
    category: 'woonkamer',
    image: '/images/stukadoor/projects/room-2.jpg',
    description: 'Zachte crème tint met zijdeglad afwerking',
    beforeImage: '/images/stukadoor/before/uneven-surface.jpg',
  },
  {
    id: 3,
    title: 'Moderne Keuken',
    category: 'keuken',
    image: '/images/stukadoor/projects/room-3.jpg',
    description: 'Spachtelputz achterwand met uitstekende reinigbaarheid',
    beforeImage: '/images/stukadoor/before/old-plaster.jpg',
  },
  {
    id: 4,
    title: 'Wellness Badkamer',
    category: 'badkamer',
    image: '/images/stukadoor/projects/room-4.jpg',
    description: 'Vochtbestendig stucwerk met naadloze afwerking',
    beforeImage: '/images/stukadoor/before/damaged-ceiling.jpg',
  },
  {
    id: 5,
    title: 'Licht Plafond',
    category: 'plafond',
    image: '/images/stukadoor/after/ceiling-finish.jpg',
    description: 'Volledig glad plafond met indirecte verlichting',
    beforeImage: '/images/stukadoor/before/damaged-ceiling.jpg',
  },
  {
    id: 6,
    title: 'Gevel Renovatie',
    category: 'exterieur',
    image: '/images/stukadoor/projects/exterior-facade.jpg',
    description: 'Granol afwerking voor een robuuste buitengevel',
    beforeImage: '/images/stukadoor/before/brick-wall-rough.jpg',
  },
]

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [showBefore, setShowBefore] = useState(false)

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projecten" className="py-24 bg-stone-800 seamless-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-sand-300 bg-sand-300/10 rounded-full">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Onze{' '}
            <span className="text-sand-300">projecten</span>
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            Een selectie van onze recent afgeronde stucwerk projecten.
            Elk project uniek, elk resultaat perfect.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                activeCategory === cat.id
                  ? 'bg-sand-300 text-stone-800'
                  : 'bg-white/10 text-stone-400 hover:bg-white/20'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sand-300 text-sm font-medium mb-1">
                    {categories.find((c) => c.id === project.category)?.label}
                  </span>
                  <h3 className="text-white text-xl font-heading font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm">{project.description}</p>
                  <div className="flex items-center gap-2 mt-4 text-white">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">Bekijk project</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white z-10"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Main Image */}
            <motion.div
              className="relative w-full max-w-6xl mx-4 aspect-[16/9]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={showBefore ? selectedProject.beforeImage : selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain"
              />

              {/* Before/After Toggle */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
                <button
                  onClick={() => setShowBefore(false)}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    !showBefore ? 'text-white' : 'text-white/50'
                  )}
                >
                  Resultaat
                </button>
                <div
                  className="w-12 h-6 bg-white/20 rounded-full relative cursor-pointer"
                  onClick={() => setShowBefore(!showBefore)}
                >
                  <div
                    className={cn(
                      'absolute top-1 w-4 h-4 bg-white rounded-full transition-all',
                      showBefore ? 'left-1' : 'left-7'
                    )}
                  />
                </div>
                <button
                  onClick={() => setShowBefore(true)}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    showBefore ? 'text-white' : 'text-white/50'
                  )}
                >
                  Voor
                </button>
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              className="absolute bottom-20 left-0 right-0 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
            >
              <h3 className="text-white text-2xl font-heading font-semibold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-white/70">{selectedProject.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
