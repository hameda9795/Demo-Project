'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { services } from '@/data/services'
import { ServiceImage } from '@/components/atoms/ServiceImage'
import { Hammer, Building, Home, Ruler, LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  hammer: Hammer,
  building: Building,
  home: Home,
  ruler: Ruler,
}

/**
 * Services Section
 * Horizontal scroll section with pinned scroll behavior
 * Each service takes full viewport width
 * Parallax background images and icon animations
 */
export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Transform scroll progress to horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(services.length - 1) * 100}%`])

  return (
    <section ref={containerRef} className="relative bg-charcoal">
      {/* Section Header - Sticky */}
      <div className="sticky top-0 z-10 py-8 bg-charcoal/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-safety font-semibold text-sm uppercase tracking-wider"
          >
            Wat We Doen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-5xl text-white mt-2"
          >
            Onze Diensten
          </motion.h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="h-[300vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div 
            style={{ x }}
            className="flex h-full"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </motion.div>

          {/* Progress Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {services.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-white/30"
                style={{
                  backgroundColor: useTransform(
                    scrollYProgress,
                    [index / services.length, (index + 1) / services.length],
                    ['rgba(249, 115, 22, 1)', 'rgba(255, 255, 255, 0.3)']
                  ),
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  service: typeof services[0]
  index: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}

function ServiceCard({ service, index, progress }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon]
  
  // Calculate individual card's progress
  const cardStart = index / services.length
  const cardEnd = (index + 1) / services.length
  
  const y = useTransform(progress, [cardStart, cardEnd], [100, -100])
  const opacity = useTransform(progress, [cardStart, cardStart + 0.1, cardEnd - 0.1, cardEnd], [0, 1, 1, 0])
  const scale = useTransform(progress, [cardStart, cardStart + 0.1, cardEnd - 0.1, cardEnd], [0.9, 1, 1, 0.9])

  return (
    <motion.div
      style={{ opacity, scale }}
      className="flex-shrink-0 w-screen h-full flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            {/* Number */}
            <span className="font-heading font-bold text-8xl text-white/5">
              0{index + 1}
            </span>

            {/* Icon with Hammer Animation */}
            <motion.div
              className="relative w-20 h-20 bg-safety/10 rounded-2xl flex items-center justify-center mb-6"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {IconComponent && (
                <motion.div
                  animate={{
                    rotate: [0, -15, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'easeInOut',
                  }}
                >
                  <IconComponent className="text-safety" size={40} />
                </motion.div>
              )}
              {/* Hammer hitting effect rings */}
              <motion.div
                className="absolute inset-0 border-2 border-safety/30 rounded-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            </motion.div>

            <h3 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
              {service.title}
            </h3>
            
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              {service.description}
            </p>

            {/* Features List */}
            <ul className="grid grid-cols-2 gap-3">
              {service.features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 text-white/70"
                >
                  <span className="w-1.5 h-1.5 bg-safety rounded-full flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-safety text-white font-semibold hover:bg-safety-dark transition-colors"
            >
              Meer Informatie
              <span>→</span>
            </motion.button>
          </div>

          {/* Right: Image with Parallax */}
          <motion.div
            style={{ y }}
            className="order-1 lg:order-2 relative"
          >
            <div 
              className="relative aspect-[4/3] overflow-hidden"
              style={{
                clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 0 100%, 0 15%)',
              }}
            >
              {/* Service Image */}
              <ServiceImage serviceId={service.id} className="absolute inset-0" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-safety/30 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-safety/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
