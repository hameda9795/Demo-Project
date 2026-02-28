'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { Project } from '@/types'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { ProjectImage } from '@/components/atoms/ProjectImage'

type FilterType = 'all' | 'nieuwbouw' | 'renovatie' | 'dakwerk'

const filters: { id: FilterType; label: string }[] = [
  { id: 'all', label: 'Alle' },
  { id: 'nieuwbouw', label: 'Nieuwbouw' },
  { id: 'renovatie', label: 'Renovatie' },
  { id: 'dakwerk', label: 'Dakwerk' },
]

/**
 * Project Gallery Section
 * Masonry grid layout with category filters
 * Cards with diagonal clip-path and hover animations
 */
export function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section className="py-20 lg:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-safety font-semibold text-sm uppercase tracking-wider"
            >
              Onze Realisaties
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-4xl md:text-5xl text-navy mt-2"
            >
              Projecten in Utrecht
            </motion.h2>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-full transition-all duration-300',
                  activeFilter === filter.id
                    ? 'bg-safety text-white'
                    : 'bg-white text-concrete hover:bg-safety/10 hover:text-safety'
                )}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isLarge={index === 0 || index === 3}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projecten/"
            className="inline-flex items-center gap-2 text-navy font-heading font-bold hover:text-safety transition-colors group"
          >
            Bekijk Alle Projecten
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
  isLarge?: boolean
}

function ProjectCard({ project, index, isLarge }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        'group relative overflow-hidden cursor-pointer',
        isLarge ? 'md:row-span-2' : ''
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor
      data-cursor-text="Bekijk"
    >
      {/* Image Container with Diagonal Clip */}
      <div 
        className={cn(
          'relative overflow-hidden',
          isLarge ? 'h-[500px] md:h-full' : 'h-[300px]'
        )}
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)',
        }}
      >
        {/* Project Image */}
        <ProjectImage 
          category={project.category} 
          className="absolute inset-0"
        />

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-navy/80"
        />

        {/* Zoom Effect on Image */}
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Category Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1 bg-safety text-white text-xs font-medium rounded-full mb-3"
        >
          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
        </motion.span>

        {/* Title with Slide Up Animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-2">
            {project.title}
          </h3>
          
          {/* Orange Accent Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? 60 : 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="h-1 bg-safety mb-3"
          />

          <p className="text-white/70 text-sm line-clamp-2">{project.description}</p>

          {/* Bekijk Project Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-4"
          >
            <span className="inline-flex items-center gap-2 text-safety font-semibold text-sm group-hover:gap-3 transition-all">
              Bekijk Project
              <ArrowRight size={16} />
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Year Badge */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-navy font-heading font-bold text-sm">{project.year}</span>
      </div>
    </motion.div>
  )
}
