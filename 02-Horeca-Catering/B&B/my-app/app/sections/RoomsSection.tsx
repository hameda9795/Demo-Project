'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Bed, Users, Maximize, Eye, Droplets, Coffee, Flower2, Wifi, Flame, Wine, Heart, TreePine, Armchair, Sun, Sparkles, Check, Calendar } from 'lucide-react'
import { rooms } from '@/lib/data'
import { cn, formatPrice } from '@/lib/utils'

const iconMap: Record<string, React.ReactNode> = {
  Droplets: <Droplets className="w-4 h-4" />,
  Coffee: <Coffee className="w-4 h-4" />,
  Flower2: <Flower2 className="w-4 h-4" />,
  Wifi: <Wifi className="w-4 h-4" />,
  Flame: <Flame className="w-4 h-4" />,
  Wine: <Wine className="w-4 h-4" />,
  Heart: <Heart className="w-4 h-4" />,
  TreePine: <TreePine className="w-4 h-4" />,
  Armchair: <Armchair className="w-4 h-4" />,
  Sun: <Sun className="w-4 h-4" />,
  Maximize: <Maximize className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  Mountain: <Eye className="w-4 h-4" />,
}

export default function RoomsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)
  const [showBooking, setShowBooking] = useState(false)

  const selectedRoomData = rooms.find((r) => r.id === selectedRoom)

  return (
    <section id="kamers" className="py-20 lg:py-28 bg-soft-linen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linen-texture opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bed className="w-6 h-6 text-strawberry-jam" />
            <span className="text-sm font-medium text-coffee-brown/60 tracking-wider uppercase">
              Intiem & Persoonlijk
            </span>
          </div>
          <h2 className="font-lora text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-brown mb-4">
            Onze Kamers
          </h2>
          <p className="text-lg text-coffee-brown/70 max-w-2xl mx-auto">
            Vier unieke kamers, elk met eigen karakter en verhaal. 
            Welke past bij jou?
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div 
                className="bg-white rounded-3xl overflow-hidden shadow-cozy hover:shadow-cozy-hover transition-all cursor-pointer"
                onClick={() => setSelectedRoom(room.id)}
              >
                {/* Image */}
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <Image
                    src={room.images[0]}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Polaroid border effect */}
                  <div className="absolute inset-0 border-[12px] border-white/20 pointer-events-none" />
                  
                  {/* Price tag */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <span className="font-lora text-lg font-bold text-strawberry-jam">
                      {formatPrice(room.pricePerNight)}
                    </span>
                    <span className="text-xs text-coffee-brown/60">/nacht</span>
                  </div>

                  {/* Character badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-coffee-brown/80 backdrop-blur-sm text-white text-xs rounded-full">
                      <Users className="w-3 h-3" />
                      {room.maxGuests} pers.
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-lora text-xl lg:text-2xl font-semibold text-coffee-brown mb-1">
                    {room.name}
                  </h3>
                  <p className="text-strawberry-jam text-sm font-medium mb-3">
                    {room.tagline}
                  </p>
                  <p className="text-coffee-brown/70 text-sm mb-4 line-clamp-2">
                    {room.description}
                  </p>

                  {/* Character note */}
                  <p className="text-xs text-coffee-brown/50 italic mb-4">
                    &ldquo;{room.character}&rdquo;
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.amenities.slice(0, 3).map((amenity) => (
                      <span
                        key={amenity.label}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-soft-linen rounded-full text-xs text-coffee-brown/70"
                      >
                        {iconMap[amenity.icon]}
                        {amenity.label}
                      </span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="inline-flex items-center px-2.5 py-1 bg-soft-linen rounded-full text-xs text-coffee-brown/50">
                        +{room.amenities.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Personal touch */}
                  <div className="flex items-start gap-2 p-3 bg-honey-gold/10 rounded-xl mb-4">
                    <Sparkles className="w-4 h-4 text-honey-gold mt-0.5 shrink-0" />
                    <p className="text-xs text-coffee-brown/70">
                      {room.personalTouch}
                    </p>
                  </div>

                  {/* CTA */}
                  <button 
                    className="w-full py-3 bg-strawberry-jam/10 text-strawberry-jam font-medium rounded-xl hover:bg-strawberry-jam hover:text-white transition-colors flex items-center justify-center gap-2 group/btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedRoom(room.id)
                      setShowBooking(true)
                    }}
                  >
                    Bekijk details
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 lg:mt-16"
        >
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-cozy">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="font-lora text-xl font-semibold text-coffee-brown mb-1">
                  Klaar voor een nachtje weg?
                </h3>
                <p className="text-sm text-coffee-brown/60">
                  Check beschikbaarheid en boek direct
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <div className="flex items-center gap-2 px-4 py-3 bg-soft-linen rounded-xl">
                  <Calendar className="w-5 h-5 text-coffee-brown/40" />
                  <input
                    type="date"
                    className="bg-transparent text-coffee-brown text-sm outline-none"
                    placeholder="Check-in"
                  />
                </div>
                <div className="flex items-center gap-2 px-4 py-3 bg-soft-linen rounded-xl">
                  <Calendar className="w-5 h-5 text-coffee-brown/40" />
                  <input
                    type="date"
                    className="bg-transparent text-coffee-brown text-sm outline-none"
                    placeholder="Check-out"
                  />
                </div>
                <button 
                  className="px-6 py-3 bg-strawberry-jam text-white font-medium rounded-xl hover:bg-strawberry-jam/90 transition-colors whitespace-nowrap flex items-center justify-center gap-2"
                  onClick={() => setShowBooking(true)}
                >
                  <Check className="w-4 h-4" />
                  Check beschikbaarheid
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Room Detail Modal */}
      <AnimatePresence>
        {selectedRoom && selectedRoomData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-coffee-brown/60 backdrop-blur-sm"
            onClick={() => setSelectedRoom(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative h-64">
                <Image
                  src={selectedRoomData.images[0]}
                  alt={selectedRoomData.name}
                  fill
                  className="object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-coffee-brown hover:text-strawberry-jam transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-lora text-2xl font-semibold text-coffee-brown">
                      {selectedRoomData.name}
                    </h3>
                    <p className="text-strawberry-jam">{selectedRoomData.tagline}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-lora text-2xl font-bold text-strawberry-jam">
                      {formatPrice(selectedRoomData.pricePerNight)}
                    </span>
                    <p className="text-xs text-coffee-brown/60">per nacht incl. ontbijt</p>
                  </div>
                </div>

                <p className="text-coffee-brown/70 mb-6">
                  {selectedRoomData.description}
                </p>

                {/* Room details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-soft-linen rounded-xl">
                    <Maximize className="w-5 h-5 text-honey-gold" />
                    <div>
                      <p className="text-xs text-coffee-brown/60">Grootte</p>
                      <p className="text-sm font-medium text-coffee-brown">{selectedRoomData.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-soft-linen rounded-xl">
                    <Eye className="w-5 h-5 text-honey-gold" />
                    <div>
                      <p className="text-xs text-coffee-brown/60">Uitzicht</p>
                      <p className="text-sm font-medium text-coffee-brown">{selectedRoomData.view}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-soft-linen rounded-xl">
                    <Bed className="w-5 h-5 text-honey-gold" />
                    <div>
                      <p className="text-xs text-coffee-brown/60">Bed</p>
                      <p className="text-sm font-medium text-coffee-brown">{selectedRoomData.bedType}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-soft-linen rounded-xl">
                    <Users className="w-5 h-5 text-honey-gold" />
                    <div>
                      <p className="text-xs text-coffee-brown/60">Max. gasten</p>
                      <p className="text-sm font-medium text-coffee-brown">{selectedRoomData.maxGuests}</p>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <h4 className="font-medium text-coffee-brown mb-3">Voorzieningen</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedRoomData.amenities.map((amenity) => (
                    <span
                      key={amenity.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-soft-linen rounded-full text-sm text-coffee-brown"
                    >
                      {iconMap[amenity.icon]}
                      {amenity.label}
                    </span>
                  ))}
                </div>

                {/* Personal touch */}
                <div className="flex items-start gap-3 p-4 bg-honey-gold/10 rounded-xl mb-6">
                  <Sparkles className="w-5 h-5 text-honey-gold mt-0.5 shrink-0" />
                  <p className="text-sm text-coffee-brown">
                    <span className="font-medium">Persoonlijke touch:</span> {selectedRoomData.personalTouch}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="https://techsolutionsutrecht.nl/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-strawberry-jam text-white font-medium rounded-xl hover:bg-strawberry-jam/90 transition-colors flex items-center justify-center gap-2"
                >
                  Reserveer deze kamer
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Coming Soon Modal */}
      <AnimatePresence>
        {showBooking && !selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-coffee-brown/60 backdrop-blur-sm"
            onClick={() => setShowBooking(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-honey-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-honey-gold" />
              </div>
              <h3 className="font-lora text-xl font-semibold text-coffee-brown mb-2">
                Boekingssysteem
              </h3>
              <p className="text-coffee-brown/70 mb-6">
                Dit is een demo website. Voor boekingen kunt u contact met ons opnemen via het contactformulier.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowBooking(false)}
                  className="flex-1 py-3 border border-coffee-brown/20 text-coffee-brown rounded-xl hover:bg-coffee-brown/5 transition-colors"
                >
                  Sluiten
                </button>
                <a
                  href="https://techsolutionsutrecht.nl/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-strawberry-jam text-white rounded-xl hover:bg-strawberry-jam/90 transition-colors"
                  onClick={() => setShowBooking(false)}
                >
                  Contact
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
