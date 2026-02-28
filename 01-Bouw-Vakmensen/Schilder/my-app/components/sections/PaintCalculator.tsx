'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Calculator, PaintBucket, Info } from 'lucide-react'

interface CalculationResult {
  liters: number
  priceMin: number
  priceMax: number
}

export function PaintCalculator() {
  const [surfaceArea, setSurfaceArea] = useState(25)
  const [layers, setLayers] = useState(2)
  const [surfaceType, setSurfaceType] = useState<'smooth' | 'porous'>('smooth')
  const [coverage, setCoverage] = useState<'good' | 'excellent'>('good')

  const calculation: CalculationResult = useMemo(() => {
    // Base coverage: 8-10 m² per liter per layer
    const baseCoverage = coverage === 'excellent' ? 10 : 8
    const surfaceMultiplier = surfaceType === 'porous' ? 1.3 : 1
    
    const totalM2 = surfaceArea * layers * surfaceMultiplier
    const liters = Math.ceil(totalM2 / baseCoverage)
    
    // Price estimation (DEMO prices)
    const pricePerLiter = 25 // Average paint price
    const priceMin = liters * pricePerLiter
    const priceMax = liters * (pricePerLiter + 15)

    return { liters, priceMin, priceMax }
  }, [surfaceArea, layers, surfaceType, coverage])

  // Calculate bucket fill percentage (max 20L)
  const bucketFill = Math.min((calculation.liters / 20) * 100, 100)

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4"
          >
            Rekenhulp
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Verf <span className="text-blue-600">Calculator</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Bereken hoeveel verf u nodig heeft voor uw project
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Input form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Uw project</h3>
            </div>

            {/* Surface area */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Oppervlakte (m²)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="5"
                  max="200"
                  value={surfaceArea}
                  onChange={(e) => setSurfaceArea(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="w-20">
                  <input
                    type="number"
                    value={surfaceArea}
                    onChange={(e) => setSurfaceArea(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Layers */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Aantal lagen
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => setLayers(num)}
                    className={`py-3 rounded-xl border-2 font-semibold transition-all ${
                      layers === num
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 text-gray-600 hover:border-blue-300'
                    }`}
                  >
                    {num} {num === 1 ? 'laag' : 'lagen'}
                  </button>
                ))}
              </div>
            </div>

            {/* Surface type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ondergrond
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSurfaceType('smooth')}
                  className={`py-3 px-4 rounded-xl border-2 font-medium transition-all text-left ${
                    surfaceType === 'smooth'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 text-gray-600 hover:border-blue-300'
                  }`}
                >
                  <span className="block text-sm opacity-70">Glad</span>
                  Geschilderde muren
                </button>
                <button
                  onClick={() => setSurfaceType('porous')}
                  className={`py-3 px-4 rounded-xl border-2 font-medium transition-all text-left ${
                    surfaceType === 'porous'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 text-gray-600 hover:border-blue-300'
                  }`}
                >
                  <span className="block text-sm opacity-70">Poreus</span>
                  Nieuwe/stuc muren
                </button>
              </div>
            </div>

            {/* Coverage quality */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dekkingsgraad verf
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setCoverage('good')}
                  className={`py-3 px-4 rounded-xl border-2 font-medium transition-all text-left ${
                    coverage === 'good'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 text-gray-600 hover:border-blue-300'
                  }`}
                >
                  <span className="block text-sm opacity-70">Goed</span>
                  ~8 m² per liter
                </button>
                <button
                  onClick={() => setCoverage('excellent')}
                  className={`py-3 px-4 rounded-xl border-2 font-medium transition-all text-left ${
                    coverage === 'excellent'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 text-gray-600 hover:border-blue-300'
                  }`}
                >
                  <span className="block text-sm opacity-70">Dekkend</span>
                  ~10 m² per liter
                </button>
              </div>
            </div>
          </motion.div>

          {/* Result card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-8">Berekening resultaat</h3>

            {/* Paint bucket visualization */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                {/* Bucket outline */}
                <div className="w-32 h-40 border-4 border-white/30 rounded-b-3xl relative overflow-hidden">
                  {/* Fill level */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-400 to-blue-300"
                    initial={{ height: 0 }}
                    animate={{ height: `${bucketFill}%` }}
                    transition={{ type: 'spring', stiffness: 100 }}
                  >
                    {/* Bubbles */}
                    <div className="absolute top-2 left-1/4 w-3 h-3 bg-white/30 rounded-full" />
                    <div className="absolute top-6 right-1/3 w-2 h-2 bg-white/20 rounded-full" />
                    <div className="absolute top-4 left-1/2 w-4 h-4 bg-white/25 rounded-full" />
                  </motion.div>
                </div>
                {/* Handle */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-12 border-4 border-white/30 rounded-t-full" />
                
                {/* Label */}
                <div className="absolute -right-16 top-1/2 -translate-y-1/2 bg-white text-blue-700 px-3 py-2 rounded-lg font-bold shadow-lg">
                  {calculation.liters}L
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-100">Benodigde verf</span>
                  <PaintBucket className="w-5 h-5 text-blue-200" />
                </div>
                <p className="text-3xl font-bold">{calculation.liters} liter</p>
                <p className="text-sm text-blue-200">
                  Aanbevolen: {Math.ceil(calculation.liters / 2.5) * 2.5}L bussen
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-100">Geschatte prijs</span>
                  <Info className="w-5 h-5 text-blue-200" />
                </div>
                <p className="text-3xl font-bold">
                  €{calculation.priceMin} - €{calculation.priceMax}
                </p>
                <p className="text-xs text-blue-200">
                  (Indicatie prijzen - DEMO)
                </p>
              </div>
            </div>

            <a
              href="https://techsolutionsutrecht.nl/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full py-4 bg-white text-blue-700 font-bold rounded-xl text-center hover:bg-blue-50 transition-colors"
            >
              Offerte aanvragen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
