'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Upload, Camera, Home, Bed, ChefHat, Bath, Check } from 'lucide-react'
import { paintColors } from '@/lib/utils'
import { cn } from '@/lib/utils'

const roomTypes = [
  { id: 'woonkamer', label: 'Woonkamer', icon: Home, image: '/images/schilder/rooms/empty-living.jpg' },
  { id: 'slaapkamer', label: 'Slaapkamer', icon: Bed, image: '/images/schilder/rooms/empty-bedroom.jpg' },
  { id: 'keuken', label: 'Keuken', icon: ChefHat, image: '/images/schilder/rooms/empty-kitchen.jpg' },
  { id: 'badkamer', label: 'Badkamer', icon: Bath, image: '/images/schilder/rooms/detail-brush.jpg' },
]

// Room size options for price calculation
const roomSizes = [
  { id: 'small', label: 'Klein', m2: 15, price: 375 },
  { id: 'medium', label: 'Gemiddeld', m2: 25, price: 625 },
  { id: 'large', label: 'Groot', m2: 40, price: 1000 },
]

export function Kleurenkiezer() {
  const [selectedRoom, setSelectedRoom] = useState(roomTypes[0])
  const [selectedColor, setSelectedColor] = useState(paintColors[0])
  const [roomSize, setRoomSize] = useState(roomSizes[1])
  const [isSimulating, setIsSimulating] = useState(false)

  const handleColorSelect = (color: typeof paintColors[0]) => {
    setSelectedColor(color)
    setIsSimulating(true)
    setTimeout(() => setIsSimulating(false), 500)
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4"
          >
            Interactief Tool
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Kleur<span className="text-purple-600">kiezer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Probeer verschillende kleuren uit in onze virtuele kamers
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Visualizer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            {/* Room selector tabs */}
            <div className="flex border-b border-gray-100">
              {roomTypes.map((room) => (
                <button
                  key={room.id}
                  onClick={() => setSelectedRoom(room)}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-colors",
                    selectedRoom.id === room.id
                      ? "bg-purple-50 text-purple-700 border-b-2 border-purple-500"
                      : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  <room.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{room.label}</span>
                </button>
              ))}
            </div>

            {/* Room preview */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={selectedRoom.image}
                alt={selectedRoom.label}
                fill
                className="object-cover"
              />
              
              {/* Color overlay simulation */}
              <AnimatePresence>
                {isSimulating && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                )}
              </AnimatePresence>

              {/* Color tint overlay */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-multiply transition-colors duration-500"
                style={{ 
                  backgroundColor: selectedColor.hex,
                  opacity: 0.15,
                }}
              />

              {/* Wall labels */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                <p className="text-xs text-gray-500">Geselecteerde kleur</p>
                <p className="font-bold text-gray-900">{selectedColor.name}</p>
                <p className="text-xs text-gray-500">{selectedColor.ral}</p>
              </div>

              {/* Upload hint */}
              <div className="absolute bottom-4 left-4 right-4">
                <button className="w-full py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:bg-white transition-colors">
                  <Camera className="w-4 h-4" />
                  Bekijk in uw eigen huis (simulatie)
                </button>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Color palette */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Kies een kleur</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                {paintColors.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => handleColorSelect(color)}
                    className={cn(
                      "group relative aspect-square rounded-xl border-2 transition-all",
                      selectedColor.hex === color.hex
                        ? "border-purple-500 scale-110 shadow-lg"
                        : "border-gray-200 hover:border-gray-300 hover:scale-105"
                    )}
                    style={{ backgroundColor: color.hex }}
                    title={`${color.name} (${color.ral})`}
                  >
                    {selectedColor.hex === color.hex && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Check className={cn(
                          "w-5 h-5 drop-shadow-md",
                          ['#FFFFFF', '#F5F5DC', '#D3D3D3'].includes(color.hex) ? 'text-gray-800' : 'text-white'
                        )} />
                      </span>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Selected color info */}
              <div className="mt-4 p-4 bg-gray-50 rounded-xl flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-xl shadow-inner"
                  style={{ backgroundColor: selectedColor.hex }}
                />
                <div>
                  <p className="font-semibold text-gray-900">{selectedColor.name}</p>
                  <p className="text-sm text-gray-500">{selectedColor.ral}</p>
                  <p className="text-xs text-gray-400 font-mono mt-1">{selectedColor.hex}</p>
                </div>
              </div>
            </div>

            {/* Room size selector */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Kamergrootte</h3>
              <div className="grid grid-cols-3 gap-3">
                {roomSizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setRoomSize(size)}
                    className={cn(
                      "p-4 rounded-xl border-2 text-center transition-all",
                      roomSize.id === size.id
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300"
                    )}
                  >
                    <p className="font-semibold text-gray-900">{size.label}</p>
                    <p className="text-sm text-gray-500">~{size.m2} m²</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Price estimate */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-purple-100 text-sm">Geschatte prijs</p>
                  <p className="text-3xl font-bold">
                    €{roomSize.price.toLocaleString('nl-NL')}
                  </p>
                  <p className="text-purple-200 text-xs">(Indicatie prijzen - DEMO)</p>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">
                    {Math.ceil(roomSize.m2 * 0.3)}L
                  </span>
                </div>
              </div>
              <p className="text-sm text-purple-100 mb-4">
                Inclusief verf en arbeidskosten voor {roomSize.m2}m²
              </p>
              <a
                href="https://techsolutionsutrecht.nl/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-white text-purple-600 font-semibold rounded-xl text-center hover:bg-purple-50 transition-colors"
              >
                Vraag offerte aan
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
