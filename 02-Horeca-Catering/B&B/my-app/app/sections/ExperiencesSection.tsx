'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, UtensilsCrossed, TreePine, Landmark, Bike, Footprints, Clock } from 'lucide-react'
import { localExperiences } from '@/lib/data'

const categoryConfig = {
  food: { icon: UtensilsCrossed, color: 'bg-strawberry-jam', label: 'Eten & Drinken' },
  nature: { icon: TreePine, color: 'bg-fresh-sage', label: 'Natuur' },
  culture: { icon: Landmark, color: 'bg-honey-gold', label: 'Cultuur' },
  cycling: { icon: Bike, color: 'bg-coffee-brown', label: 'Fietstochten' },
}

const distanceIcons = {
  walking: Footprints,
  cycling: Bike,
  driving: Clock,
}

export default function ExperiencesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="omgeving" className="py-20 lg:py-28 bg-creamy-egg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-strawberry-jam" />
            <span className="text-sm font-medium text-coffee-brown/60 tracking-wider uppercase">
              Door Locals Aanbevolen
            </span>
          </div>
          <h2 className="font-lora text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-brown mb-4">
            Ontdek de Omgeving
          </h2>
          <p className="text-lg text-coffee-brown/70 max-w-2xl mx-auto">
            Geen toeristenvalkuilen, maar onze persoonlijke favorieten. 
            Van geheime plekken tot de beste bakker van het dorp.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {Object.entries(categoryConfig).map(([key, config]) => (
            <button
              key={key}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-coffee-brown hover:shadow-md transition-shadow"
            >
              <span className={`w-2 h-2 rounded-full ${config.color}`} />
              {config.label}
            </button>
          ))}
        </motion.div>

        {/* Map-style Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localExperiences.map((experience, index) => {
            const config = categoryConfig[experience.category]
            const Icon = config.icon
            const DistanceIcon = distanceIcons[experience.distanceType]

            return (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-6 shadow-cozy hover:shadow-cozy-hover transition-all h-full relative overflow-hidden">
                  {/* Secret badge */}
                  {experience.isLocalSecret && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-strawberry-jam text-white text-xs rounded-full">
                        <span>🔒</span> Locals Only
                      </span>
                    </div>
                  )}

                  {/* Category icon */}
                  <div className={`w-12 h-12 ${config.color} rounded-2xl flex items-center justify-center text-white mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="font-lora text-lg font-semibold text-coffee-brown mb-2">
                    {experience.name}
                  </h3>
                  <p className="text-sm text-coffee-brown/70 mb-4">
                    {experience.description}
                  </p>

                  {/* Distance */}
                  <div className="flex items-center gap-2 text-xs text-coffee-brown/50">
                    <DistanceIcon className="w-4 h-4" />
                    <span>
                      {experience.distance} 
                      {experience.distanceType === 'walking' && ' lopen'}
                      {experience.distanceType === 'cycling' && ' fietsen'}
                      {experience.distanceType === 'driving' && ' rijden'}
                    </span>
                  </div>

                  {/* Decorative pin */}
                  <div className="absolute -bottom-2 -right-2 opacity-10">
                    <MapPin className="w-20 h-20" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <div className="bg-white rounded-3xl p-6 shadow-cozy">
            <div className="relative h-64 lg:h-80 bg-soft-linen rounded-2xl overflow-hidden flex items-center justify-center">
              {/* Stylized map background */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 800 400">
                  <path
                    d="M50,200 Q200,100 400,200 T750,200"
                    fill="none"
                    stroke="#f4a261"
                    strokeWidth="3"
                    strokeDasharray="10,5"
                  />
                  <path
                    d="M100,300 Q300,200 500,300 T700,250"
                    fill="none"
                    stroke="#2a9d8f"
                    strokeWidth="2"
                  />
                  <circle cx="400" cy="200" r="8" fill="#e76f51" />
                  <text x="415" y="205" fontSize="14" fill="#6f4e37">Het Kleine Paradijs</text>
                </svg>
              </div>
              
              <div className="text-center">
                <MapPin className="w-12 h-12 text-strawberry-jam mx-auto mb-3" />
                <h4 className="font-lora text-lg font-semibold text-coffee-brown mb-1">
                  Interactive Map
                </h4>
                <p className="text-sm text-coffee-brown/60 max-w-sm">
                  In de productieversie wordt hier een interactieve kaart getoond met alle locaties.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
