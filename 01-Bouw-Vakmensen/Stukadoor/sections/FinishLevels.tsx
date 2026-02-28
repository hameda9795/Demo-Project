'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, Info } from 'lucide-react'
import { cn } from '@/lib/utils'

const finishLevels = [
  {
    id: 'q1',
    name: 'Q1 - Spackspuitwerk',
    subtitle: 'Basis afwerking',
    description: 'Een basis spuitwerk afwerking voor ruimtes waar kwaliteit minder kritisch is.',
    priceRange: '€25-35 / m²',
    characteristics: [
      { label: 'Oneffenheden', value: 'Zichtbaar aanwezig', acceptable: false },
      { label: 'Structuur', value: 'Ruwe spuitstructuur', acceptable: true },
      { label: 'Geschikt voor', value: 'Technische ruimtes, zolders', acceptable: true },
      { label: 'Verf resultaat', value: 'Mat tot zijdeglans mogelijk', acceptable: true },
    ],
    recommendedFor: ['Zolderkamers', 'Garages', 'Technische ruimtes', 'Opslag'],
    notRecommendedFor: ['Woonkamers', 'Slaapkamers', 'Keukens', 'Kantoren'],
    lightReflection: 30,
  },
  {
    id: 'q2',
    name: 'Q2 - Glad',
    subtitle: 'Standaard afwerking',
    description: 'De meest gekozen afwerking voor een nette, gladde wand zonder grove oneffenheden.',
    priceRange: '€35-45 / m²',
    characteristics: [
      { label: 'Oneffenheden', value: 'Minimaal, niet storend', acceptable: true },
      { label: 'Structuur', value: 'Fijn tot glad', acceptable: true },
      { label: 'Geschikt voor', value: 'Woonkamers, slaapkamers', acceptable: true },
      { label: 'Verf resultaat', value: 'Alle glansgraden', acceptable: true },
    ],
    recommendedFor: ['Woonkamers', 'Slaapkamers', 'Gangen', 'Kinderkamers'],
    notRecommendedFor: ['Luxe interieurs', 'Kantoor recepties'],
    lightReflection: 60,
  },
  {
    id: 'q3',
    name: 'Q3 - Zijdeglad',
    subtitle: 'Luxe afwerking',
    description: 'Hoogwaardige afwerking met minimale structuur. Perfect voor een luxe uitstraling.',
    priceRange: '€45-60 / m²',
    characteristics: [
      { label: 'Oneffenheden', value: 'Nauwelijks zichtbaar', acceptable: true },
      { label: 'Structuur', value: 'Zijdeglad', acceptable: true },
      { label: 'Geschikt voor', value: 'Luxe woningen, kantoren', acceptable: true },
      { label: 'Verf resultaat', value: 'Perfect op alle glansgraden', acceptable: true },
    ],
    recommendedFor: ['Luxe woonkamers', 'Kantoren', 'Master bedrooms', 'Keukens'],
    notRecommendedFor: ['Budget projecten'],
    lightReflection: 80,
  },
  {
    id: 'q4',
    name: 'Q4 - Spiegelglad',
    subtitle: 'Premium afwerking',
    description: 'Ultieme perfectie. Spiegelglad oppervlak met maximale lichtreflectie.',
    priceRange: '€60-85 / m²',
    characteristics: [
      { label: 'Oneffenheden', value: 'Geen zichtbare oneffenheden', acceptable: true },
      { label: 'Structuur', value: 'Spiegelglad', acceptable: true },
      { label: 'Geschikt voor', value: 'Premium interieurs', acceptable: true },
      { label: 'Verf resultaat', value: 'Perfect, hoogglans mogelijk', acceptable: true },
    ],
    recommendedFor: ['Design interieurs', 'Showrooms', 'Premium kantoren', 'Villa\'s'],
    notRecommendedFor: ['Budget projecten', 'Snelle renovaties'],
    lightReflection: 95,
  },
]

export function FinishLevels() {
  const [selectedLevel, setSelectedLevel] = useState(finishLevels[1])

  return (
    <section className="py-24 bg-sand-50 seamless-section">
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
            Kwaliteitsniveaus
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-stone-800 mb-4">
            Afwerkings{' '}
            <span className="relative">
              gradaties
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-clay/30 rounded-full" />
            </span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Van basis spuitwerk tot spiegelglad. Kies het kwaliteitsniveau dat past bij uw wensen en budget.
          </p>
        </motion.div>

        {/* Level Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {finishLevels.map((level) => (
            <motion.button
              key={level.id}
              onClick={() => setSelectedLevel(level)}
              className={cn(
                'p-4 md:p-6 rounded-2xl text-left transition-all duration-300 border-2',
                selectedLevel.id === level.id
                  ? 'bg-white border-clay shadow-lg'
                  : 'bg-white/50 border-transparent hover:bg-white hover:border-sand-300'
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xs font-medium text-clay uppercase tracking-wider">
                {level.id}
              </span>
              <h3 className="font-heading font-semibold text-stone-800 mt-1">
                {level.name.split(' - ')[1]}
              </h3>
              <p className="text-sm text-stone-500 mt-1">{level.subtitle}</p>
              <p className="text-lg font-bold text-stone-800 mt-3">{level.priceRange} (DEMO)</p>
            </motion.button>
          ))}
        </div>

        {/* Detail View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedLevel.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-6 md:p-10"
          >
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Left: Info */}
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-stone-800 mb-2">
                  {selectedLevel.name}
                </h3>
                <p className="text-lg text-clay font-medium mb-4">{selectedLevel.subtitle}</p>
                <p className="text-stone-600 mb-8">{selectedLevel.description}</p>

                {/* Characteristics */}
                <div className="space-y-4">
                  {selectedLevel.characteristics.map((char) => (
                    <div key={char.label} className="flex items-center justify-between p-4 bg-sand-100 rounded-xl">
                      <span className="text-sm font-medium text-stone-700">{char.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-stone-600">{char.value}</span>
                        {char.acceptable ? (
                          <Check className="w-5 h-5 text-green-600" />
                        ) : (
                          <X className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Visual & Recommendations */}
              <div className="space-y-6">
                {/* Light Reflection Visual */}
                <div className="p-6 bg-stone-800 rounded-2xl text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <Info className="w-5 h-5 text-sand-300" />
                    <h4 className="font-medium">Lichtreflectie visualisatie</h4>
                  </div>
                  <div className="relative h-32 bg-gradient-to-r from-stone-700 to-stone-600 rounded-xl overflow-hidden">
                    {/* Light source */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full blur-xl opacity-80" />
                    {/* Reflection on surface */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/30 to-transparent"
                      style={{
                        opacity: selectedLevel.lightReflection / 100,
                        filter: `blur(${100 - selectedLevel.lightReflection}px)`,
                      }}
                    />
                    {/* Surface line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-sand-300" />
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-stone-400">
                    <span>Mat</span>
                    <span>Reflectie: {selectedLevel.lightReflection}%</span>
                    <span>Spiegelglad</span>
                  </div>
                </div>

                {/* Room Recommendations */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-green-50 rounded-2xl border border-green-200">
                    <h4 className="font-medium text-green-800 mb-3 flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Aanbevolen voor
                    </h4>
                    <ul className="space-y-2">
                      {selectedLevel.recommendedFor.map((room) => (
                        <li key={room} className="text-sm text-green-700">
                          {room}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-5 bg-red-50 rounded-2xl border border-red-200">
                    <h4 className="font-medium text-red-800 mb-3 flex items-center gap-2">
                      <X className="w-4 h-4" />
                      Minder geschikt voor
                    </h4>
                    <ul className="space-y-2">
                      {selectedLevel.notRecommendedFor.map((room) => (
                        <li key={room} className="text-sm text-red-700">
                          {room}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
