'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

/**
 * Service areas data for Rotterdam region
 */
const serviceAreas = [
  { id: 'rotterdam', name: 'Rotterdam', x: 50, y: 50 },
  { id: 'schiedam', name: 'Schiedam', x: 25, y: 40 },
  { id: 'vlaardingen', name: 'Vlaardingen', x: 20, y: 55 },
  { id: 'capelle', name: 'Capelle a/d IJssel', x: 70, y: 45 },
  { id: 'kralingen', name: 'Kralingen', x: 60, y: 40 },
  { id: 'noord', name: 'Rotterdam Noord', x: 45, y: 35 },
  { id: 'centrum', name: 'Centrum', x: 50, y: 45 },
  { id: 'zuid', name: 'Rotterdam Zuid', x: 52, y: 60 },
]

/**
 * Coverage Area Section
 * Interactive map with hover hotspots showing service areas
 * Animated ripples indicating coverage radius
 */
export function CoverageArea() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null)

  return (
    <section id="werkgebied" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-water-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-emergency-orange/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-water-blue font-semibold text-sm uppercase tracking-wider">
              Werkgebied
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-deep-navy mt-3 mb-4">
              Wij zijn actief in heel Rotterdam
            </h2>
            <p className="text-steel-gray mb-6 leading-relaxed">
              Van het centrum tot de buitenwijken, wij komen naar u toe. 
              Onze loodgieters zijn dagelijks in heel Rotterdam en omgeving 
              te vinden voor spoedreparaties en gepland onderhoud.
            </p>

            {/* Service area list */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {serviceAreas.map((area) => (
                <motion.div
                  key={area.id}
                  className="flex items-center gap-2 text-gray-700"
                  whileHover={{ x: 5 }}
                  onMouseEnter={() => setHoveredArea(area.id)}
                  onMouseLeave={() => setHoveredArea(null)}
                >
                  <MapPin className="w-4 h-4 text-water-blue" />
                  <span className={hoveredArea === area.id ? 'text-water-blue font-semibold' : ''}>
                    {area.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Response time badge */}
            <div className="inline-flex items-center gap-3 bg-emergency-orange/10 text-emergency-orange px-6 py-3 rounded-2xl">
              <div className="w-10 h-10 bg-emergency-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">30</span>
              </div>
              <div>
                <p className="font-bold">minuten</p>
                <p className="text-sm">Gemiddelde responstijd</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Interactive map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Map base image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://placehold.co/600x600/1e3a8a/ffffff?text=Rotterdam+Regio+Kaart"
                  alt="Kaart van Rotterdam en omgeving"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/50 to-transparent" />
              </div>

              {/* Animated ripple circles (coverage area) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 border-2 border-water-blue/30 rounded-full area-ripple" />
                <div className="absolute inset-0 w-32 h-32 border-2 border-water-blue/30 rounded-full area-ripple" />
                <div className="absolute inset-0 w-32 h-32 border-2 border-water-blue/30 rounded-full area-ripple" />
              </div>

              {/* Service area hotspots */}
              {serviceAreas.map((area) => (
                <motion.div
                  key={area.id}
                  className="absolute"
                  style={{ left: `${area.x}%`, top: `${area.y}%` }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.random() * 0.5 }}
                  onMouseEnter={() => setHoveredArea(area.id)}
                  onMouseLeave={() => setHoveredArea(null)}
                >
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    {/* Hotspot dot */}
                    <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      hoveredArea === area.id ? 'bg-emergency-orange scale-150' : 'bg-water-blue'
                    }`}>
                      <div className="absolute inset-0 bg-current rounded-full animate-ping opacity-50" />
                    </div>
                    
                    {/* Tooltip */}
                    {hoveredArea === area.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap"
                      >
                        <div className="bg-white px-3 py-1.5 rounded-lg shadow-lg text-sm font-semibold text-deep-navy">
                          {area.name}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Central location marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-emergency-orange rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
