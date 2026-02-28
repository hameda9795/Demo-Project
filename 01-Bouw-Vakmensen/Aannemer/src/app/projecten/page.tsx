'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Footer } from '@/components/layouts/Footer'
import { projects } from '@/data/projects'
import { ProjectImage } from '@/components/atoms/ProjectImage'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

type FilterType = 'all' | 'nieuwbouw' | 'renovatie' | 'dakwerk'

const filters: { id: FilterType; label: string }[] = [
  { id: 'all', label: 'Alle Projecten' },
  { id: 'nieuwbouw', label: 'Nieuwbouw' },
  { id: 'renovatie', label: 'Renovatie' },
  { id: 'dakwerk', label: 'Dakwerk' },
]

export default function ProjectenPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-safety font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mt-2 mb-4">
              Onze Realisaties
            </h1>
            <p className="text-white/60">
              Bekijk onze afgeronde projecten in Utrecht en omgeving. Van renovatie tot nieuwbouw.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b sticky top-16 lg:top-0 bg-white/95 backdrop-blur-sm z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  'px-6 py-2 rounded-full text-sm font-medium transition-colors',
                  activeFilter === filter.id
                    ? 'bg-safety text-white'
                    : 'bg-gray-100 text-concrete hover:bg-gray-200'
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div 
                  className="relative h-64 overflow-hidden"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)' }}
                >
                  <ProjectImage category={project.category} className="absolute inset-0" />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors" />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-safety text-white text-xs font-bold rounded-full uppercase">
                      {project.category}
                    </span>
                  </div>
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-white/90 text-navy text-xs font-bold rounded-full">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="font-heading font-bold text-xl text-navy mb-2 group-hover:text-safety transition-colors">
                    {project.title}
                  </h2>
                  
                  <div className="flex items-center gap-4 text-sm text-concrete mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {project.year}
                    </span>
                  </div>

                  <p className="text-concrete text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-safety font-semibold text-sm group-hover:gap-3 transition-all">
                    Bekijk Project
                    <ArrowRight size={16} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </MainLayout>
  )
}
