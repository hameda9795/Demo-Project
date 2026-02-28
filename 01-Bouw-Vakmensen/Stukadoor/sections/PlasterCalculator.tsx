'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { Calculator, Clock, Droplets, Calendar, ArrowRight } from 'lucide-react'
import { calculatePlasterPrice, formatPrice, cn } from '@/lib/utils'

const textureOptions = [
  { value: 'glad', label: 'Glad stucwerk', price: 35 },
  { value: 'spachtelputz', label: 'Spachtelputz', price: 45 },
  { value: 'granol', label: 'Granol', price: 50 },
  { value: 'sierpleister', label: 'Sierpleister', price: 75 },
]

const colorOptions = [
  { value: 'wit', label: 'Wit', multiplier: 1 },
  { value: 'creme', label: 'Crème', multiplier: 1.1 },
  { value: 'gekleurd', label: 'Gekleurd', multiplier: 1.25 },
]

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(0, { stiffness: 50, damping: 20 })
  const display = useTransform(spring, (current) => Math.round(current))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    spring.set(value)
  }, [value, spring])

  useEffect(() => {
    const unsubscribe = display.on('change', (v) => setDisplayValue(v))
    return unsubscribe
  }, [display])

  return <span>{displayValue.toLocaleString('nl-NL')}</span>
}

export function PlasterCalculator() {
  const [area, setArea] = useState(50)
  const [texture, setTexture] = useState('glad')
  const [color, setColor] = useState('wit')
  const [includeCeiling, setIncludeCeiling] = useState(false)
  const [result, setResult] = useState({
    min: 0,
    max: 0,
    primerLiters: 0,
    workDays: 0,
  })

  useEffect(() => {
    const newResult = calculatePlasterPrice(area, texture, color, includeCeiling)
    setResult(newResult)
  }, [area, texture, color, includeCeiling])

  return (
    <section id="calculator" className="py-24 bg-sand-100 seamless-section">
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
            Prijsindicatie
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-stone-800 mb-4">
            Bereken uw{' '}
            <span className="relative">
              investering
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-clay/30 rounded-full" />
            </span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Vul uw oppervlakte en voorkeuren in voor een vrijblijvende prijsindicatie.
            Exacte prijzen hangen af van specifieke situatie.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Input Panel */}
          <motion.div
            className="glass-card p-6 md:p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sand-300 to-sand-400 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-stone-700" />
              </div>
              <h3 className="text-xl font-heading font-bold text-stone-800">
                Uw specificaties
              </h3>
            </div>

            <div className="space-y-8">
              {/* Area Slider */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-medium text-stone-700">
                    Oppervlakte (m²)
                  </label>
                  <span className="text-2xl font-bold text-stone-800">
                    <AnimatedNumber value={area} /> m²
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-stone-500 mt-2">
                  <span>10 m²</span>
                  <span>500 m²</span>
                </div>
              </div>

              {/* Texture Selection */}
              <div>
                <label className="text-sm font-medium text-stone-700 mb-3 block">
                  Type structuur
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {textureOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setTexture(option.value)}
                      className={cn(
                        'p-4 rounded-xl text-left transition-all border-2',
                        texture === option.value
                          ? 'bg-white border-clay shadow-md'
                          : 'bg-white/50 border-transparent hover:bg-white hover:border-sand-300'
                      )}
                    >
                      <p className="font-medium text-stone-800">{option.label}</p>
                      <p className="text-sm text-stone-500">
                        {formatPrice(option.price)}/m²
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <label className="text-sm font-medium text-stone-700 mb-3 block">
                  Nuancering
                </label>
                <div className="flex gap-3">
                  {colorOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setColor(option.value)}
                      className={cn(
                        'flex-1 p-3 rounded-xl text-center transition-all border-2',
                        color === option.value
                          ? 'bg-white border-clay shadow-md'
                          : 'bg-white/50 border-transparent hover:bg-white hover:border-sand-300'
                      )}
                    >
                      <p className="font-medium text-stone-800">{option.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Ceiling Toggle */}
              <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                <div>
                  <p className="font-medium text-stone-800">Plafond mee stucen?</p>
                  <p className="text-sm text-stone-500">+30% extra oppervlakte</p>
                </div>
                <button
                  onClick={() => setIncludeCeiling(!includeCeiling)}
                  className={cn(
                    'relative w-14 h-8 rounded-full transition-colors',
                    includeCeiling ? 'bg-clay' : 'bg-stone-300'
                  )}
                >
                  <span
                    className={cn(
                      'absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform',
                      includeCeiling ? 'left-7' : 'left-1'
                    )}
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Price Card */}
            <div className="glass-card p-6 md:p-8 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
              <p className="text-stone-400 mb-2">Geschatte investering (DEMO)</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl md:text-6xl font-bold">
                  {formatPrice(result.min)}
                </span>
                <span className="text-2xl text-stone-500">-</span>
                <span className="text-3xl md:text-4xl font-bold text-stone-300">
                  {formatPrice(result.max)}
                </span>
              </div>
              <p className="text-sm text-stone-400">
                Inclusief materialen en arbeid. Exacte prijs na inspectie.
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-5">
                <div className="w-10 h-10 rounded-xl bg-sand-200 flex items-center justify-center mb-3">
                  <Droplets className="w-5 h-5 text-stone-700" />
                </div>
                <p className="text-sm text-stone-500 mb-1">Primer nodig</p>
                <p className="text-xl font-bold text-stone-800">
                  <AnimatedNumber value={result.primerLiters} /> liter
                </p>
              </div>

              <div className="glass-card p-5">
                <div className="w-10 h-10 rounded-xl bg-sand-200 flex items-center justify-center mb-3">
                  <Calendar className="w-5 h-5 text-stone-700" />
                </div>
                <p className="text-sm text-stone-500 mb-1">Werkdagen</p>
                <p className="text-xl font-bold text-stone-800">
                  <AnimatedNumber value={result.workDays} /> dagen
                </p>
              </div>

              <div className="glass-card p-5 col-span-2">
                <div className="w-10 h-10 rounded-xl bg-sand-200 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-stone-700" />
                </div>
                <p className="text-sm text-stone-500 mb-1">Droogtijd tot schilderklaar</p>
                <p className="text-xl font-bold text-stone-800">5-7 dagen</p>
                <p className="text-xs text-stone-500 mt-1">
                  Afhankelijk van temperatuur en luchtvochtigheid
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://techsolutionsutrecht.nl/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 
                         bg-gradient-to-br from-sand-300 to-sand-400 
                         text-stone-800 font-semibold rounded-full
                         shadow-lg hover:shadow-xl hover:scale-105 
                         transition-all duration-300"
            >
              Details offerte aanvragen
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
