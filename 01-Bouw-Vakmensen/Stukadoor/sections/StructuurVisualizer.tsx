'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Info } from 'lucide-react'
import { cn, formatPrice } from '@/lib/utils'

const plasterTypes = [
  {
    id: 'glad',
    name: 'Glad Stucwerk',
    subtitle: 'Spiegelglad - Q4 Afwerking',
    description: 'Perfect glad oppervlak zonder structuur. De meest luxe afwerking met een spiegelglad resultaat.',
    image: '/images/stukadoor/textures/glad-close.jpg',
    roomImage: '/images/stukadoor/projects/room-1.jpg',
    pricePerM2: 35,
    suitableRooms: ['Woonkamer', 'Slaapkamer', 'Kantoor', 'Hal'],
    features: ['Spiegelglad resultaat', 'Lichtreflectie optimaal', 'Modern uitstraling', 'Gemakkelijk schoon te maken'],
    dryingTime: '5-7 dagen',
  },
  {
    id: 'spachtelputz',
    name: 'Spachtelputz',
    subtitle: 'Fijne structuur - Q3 Afwerking',
    description: 'Fijne korrelstructuur die oneffenheden camoufleert. De meest gekozen afwerking voor een warme uitstraling.',
    image: '/images/stukadoor/textures/spachtelputz-close.jpg',
    roomImage: '/images/stukadoor/projects/room-2.jpg',
    pricePerM2: 45,
    suitableRooms: ['Woonkamer', 'Slaapkamer', 'Gang', 'Zolder'],
    features: ['Oneffenheden verbergt', 'Warme uitstraling', 'Slijtvast', 'Tijdloos design'],
    dryingTime: '4-6 dagen',
  },
  {
    id: 'granol',
    name: 'Granol',
    subtitle: 'Grovere structuur - Q2/Q3 Afwerking',
    description: 'Grovere korrelstructuur voor een robuuste, natuurlijke uitstraling. Uitstekend voor buitengevels en sokkels.',
    image: '/images/stukadoor/textures/granol-texture.jpg',
    roomImage: '/images/stukadoor/projects/exterior-facade.jpg',
    pricePerM2: 50,
    suitableRooms: ['Buitengevel', 'Sokkel', 'Garage', 'Tuinmuur'],
    features: ['Robuuste uitstraling', 'Weerbestendig', 'Natuurlijke look', 'Onderhoudsarm'],
    dryingTime: '7-10 dagen',
  },
  {
    id: 'sierpleister',
    name: 'Sierpleister',
    subtitle: 'Decoratief - Venetian',
    description: 'Artistieke afwerking met diepte en karakter. Handgeschilderd effect met een unieke uitstraling per wand.',
    image: '/images/stukadoor/textures/decorative-pattern.jpg',
    roomImage: '/images/stukadoor/after/decorative-venetian.jpg',
    pricePerM2: 75,
    suitableRooms: ['Woonkamer', 'Feature wall', 'Entree', 'Restaurant'],
    features: ['Uniek per wand', 'Diepte en glans', 'Luxueuze uitstraling', 'Artistiek karakter'],
    dryingTime: '10-14 dagen',
  },
]

export function StructuurVisualizer() {
  const [selectedType, setSelectedType] = useState(plasterTypes[0])
  const [showInRoom, setShowInRoom] = useState(false)

  return (
    <section id="structuur" className="py-24 bg-sand-50 seamless-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-clay bg-clay/10 rounded-full">
            Structuur Opties
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-stone-800 mb-4">
            Kies uw perfecte{' '}
            <span className="relative">
              afwerking
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-clay/30 rounded-full" />
            </span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Van spiegelglad tot decoratief sierpleister. Elk type structuur biedt een unieke uitstraling en eigenschappen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Selection & Info */}
          <div className="space-y-6">
            {/* Type Selector */}
            <div className="grid grid-cols-2 gap-3">
              {plasterTypes.map((type) => (
                <motion.button
                  key={type.id}
                  onClick={() => setSelectedType(type)}
                  className={cn(
                    'relative p-4 rounded-2xl text-left transition-all duration-300',
                    selectedType.id === type.id
                      ? 'bg-white shadow-lg border-2 border-sand-300'
                      : 'bg-white/50 border-2 border-transparent hover:bg-white hover:shadow-md'
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {selectedType.id === type.id && (
                    <motion.div
                      className="absolute top-3 right-3 w-6 h-6 rounded-full bg-clay flex items-center justify-center"
                      layoutId="selected-indicator"
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                  <h3 className="font-heading font-semibold text-stone-800">
                    {type.name}
                  </h3>
                  <p className="text-sm text-stone-500">{type.subtitle}</p>
                </motion.button>
              ))}
            </div>

            {/* Selected Type Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedType.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 md:p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-stone-800 mb-1">
                      {selectedType.name}
                    </h3>
                    <p className="text-clay font-medium">{selectedType.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-stone-800">
                      {formatPrice(selectedType.pricePerM2)}
                    </p>
                    <p className="text-sm text-stone-500">per m² (DEMO)</p>
                  </div>
                </div>

                <p className="text-stone-600 mb-6">{selectedType.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {selectedType.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-clay flex-shrink-0" />
                      <span className="text-sm text-stone-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Suitable Rooms */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-stone-700 mb-2">Geschikt voor:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedType.suitableRooms.map((room) => (
                      <span
                        key={room}
                        className="px-3 py-1 text-sm bg-sand-100 text-stone-600 rounded-full"
                      >
                        {room}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Drying Time */}
                <div className="flex items-center gap-2 p-4 bg-sand-100 rounded-xl">
                  <Info className="w-5 h-5 text-clay" />
                  <div>
                    <p className="text-sm font-medium text-stone-700">Droogtijd</p>
                    <p className="text-sm text-stone-600">{selectedType.dryingTime} voordat geschilderd kan worden</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Image Preview */}
          <div className="relative">
            {/* Toggle */}
            <div className="absolute top-4 left-4 right-4 z-10 flex justify-center">
              <div className="inline-flex bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg">
                <button
                  onClick={() => setShowInRoom(false)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all',
                    !showInRoom
                      ? 'bg-sand-300 text-stone-800'
                      : 'text-stone-600 hover:text-stone-800'
                  )}
                >
                  Structuur detail
                </button>
                <button
                  onClick={() => setShowInRoom(true)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all',
                    showInRoom
                      ? 'bg-sand-300 text-stone-800'
                      : 'text-stone-600 hover:text-stone-800'
                  )}
                >
                  In uw huis
                </button>
              </div>
            </div>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedType.id}-${showInRoom}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={showInRoom ? selectedType.roomImage : selectedType.image}
                  alt={selectedType.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                
                {/* Label */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-stone-800">
                    {showInRoom ? 'Toepassing in interieur' : `${selectedType.name} - Close-up`}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
