'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, Shield, Droplets, Paintbrush, CheckCircle, Home } from 'lucide-react'

const processSteps = [
  {
    id: 1,
    icon: Search,
    title: 'Inspectie',
    description: 'We beoordelen de huidige staat van uw wanden en bespreken uw wensen en mogelijkheden.',
    duration: '30-60 min',
    image: '/images/stukadoor/process/prep-masking.jpg',
  },
  {
    id: 2,
    icon: Shield,
    title: 'Voorbereiding',
    description: 'Vloeren en meubels worden afgeplakt. Oneffenheden worden verwijderd.',
    duration: '2-4 uur',
    image: '/images/stukadoor/process/prep-masking.jpg',
  },
  {
    id: 3,
    icon: Droplets,
    title: 'Gronden',
    description: 'Aanbrengen van primer voor optimale hechting van het stucwerk.',
    duration: '2-3 uur',
    image: '/images/stukadoor/process/applying-primer.jpg',
  },
  {
    id: 4,
    icon: Paintbrush,
    title: 'Stucen',
    description: 'Het aanbrengen van de stuclagen met professionele technieken.',
    duration: '1-3 dagen',
    image: '/images/stukadoor/process/trowel-work.jpg',
  },
  {
    id: 5,
    icon: CheckCircle,
    title: 'Afwerking',
    description: 'Nadrogen en lichtschuren voor het perfecte resultaat.',
    duration: '1-2 dagen',
    image: '/images/stukadoor/process/finishing.jpg',
  },
  {
    id: 6,
    icon: Home,
    title: 'Oplevering',
    description: 'Samen controleren we het resultaat en ontvangt u onderhoudstips.',
    duration: '30 min',
    image: '/images/stukadoor/after/living-smooth.jpg',
  },
]

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%'])

  return (
    <section id="werkwijze" ref={containerRef} className="py-24 bg-sand-50 seamless-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-clay bg-clay/10 rounded-full">
            Onze werkwijze
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-stone-800 mb-4">
            Van inspectie tot{' '}
            <span className="relative">
              oplevering
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-clay/30 rounded-full" />
            </span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Een gestroomlijnd proces voor een perfect resultaat. 
            Transparant en professioneel van begin tot eind.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-sand-300 md:-translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-clay origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0
              const Icon = step.icon

              return (
                <motion.div
                  key={step.id}
                  className={`relative flex items-center gap-8 md:gap-16 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sand-300 to-sand-400 
                                 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-7 h-7 text-stone-700" />
                    </motion.div>
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-clay text-white rounded-full 
                                    flex items-center justify-center text-xs font-bold">
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ml-24 md:ml-0 ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20'}`}>
                    <div className={`glass-card p-6 md:p-8 inline-block ${isEven ? 'md:ml-auto' : ''}`}>
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : ''}`}>
                        <span className="px-3 py-1 bg-sand-200 text-stone-600 text-xs font-medium rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-stone-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-stone-600 max-w-md">{step.description}</p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`hidden md:block flex-1 ${isEven ? 'md:pl-20' : 'md:pr-20'}`}>
                    <motion.div
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
