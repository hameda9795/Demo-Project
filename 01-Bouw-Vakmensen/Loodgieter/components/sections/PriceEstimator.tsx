'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Droplets, Flame, Bath, Pipette, Clock, ChevronRight, Check, Euro } from 'lucide-react'
import { Button } from '@/components/ui/Button'

/**
 * Problem types with icons and base prices
 */
const problemTypes = [
  { 
    id: 'dripping_tap', 
    label: 'Drippende kraan', 
    icon: Droplets, 
    basePrice: { min: 85, max: 125 },
    description: 'Eenvoudige reparatie binnen 1 uur'
  },
  { 
    id: 'blocked_drain', 
    label: 'Verstopte afvoer', 
    icon: Pipette, 
    basePrice: { min: 95, max: 150 },
    description: 'Inclusief ontstoppen en inspectie'
  },
  { 
    id: 'broken_boiler', 
    label: 'Storing cv-ketel', 
    icon: Flame, 
    basePrice: { min: 125, max: 195 },
    description: 'Reparatie of vervanging onderdelen'
  },
  { 
    id: 'leak', 
    label: 'Lekkage', 
    icon: Droplets, 
    basePrice: { min: 150, max: 250 },
    description: 'Detectie en reparatie leidingwerk'
  },
  { 
    id: 'toilet', 
    label: 'Toilet probleem', 
    icon: Bath, 
    basePrice: { min: 95, max: 165 },
    description: 'Reparatie of vervanging mechanismen'
  },
]

const urgencyLevels = [
  { id: 'vandaag', label: 'Vandaag', multiplier: 1.5, color: 'text-emergency-orange' },
  { id: 'deze_week', label: 'Deze week', multiplier: 1.2, color: 'text-water-blue' },
  { id: 'niet_spoed', label: 'Niet spoed', multiplier: 1.0, color: 'text-green-600' },
]

/**
 * Price Estimator Tool
 * Multi-step form with visual progress indicator
 * Calculates estimated price based on problem type and urgency
 */
export function PriceEstimator() {
  const [step, setStep] = useState(1)
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null)
  const [selectedUrgency, setSelectedUrgency] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const selectedProblemData = problemTypes.find(p => p.id === selectedProblem)
  const selectedUrgencyData = urgencyLevels.find(u => u.id === selectedUrgency)

  const calculatePrice = () => {
    if (!selectedProblemData || !selectedUrgencyData) return { min: 0, max: 0 }
    return {
      min: Math.round(selectedProblemData.basePrice.min * selectedUrgencyData.multiplier),
      max: Math.round(selectedProblemData.basePrice.max * selectedUrgencyData.multiplier),
    }
  }

  const price = calculatePrice()

  const handleNext = () => {
    if (step === 2) {
      setShowResult(true)
    } else {
      setStep(step + 1)
    }
  }

  const handleReset = () => {
    setStep(1)
    setSelectedProblem(null)
    setSelectedUrgency(null)
    setShowResult(false)
  }

  return (
    <section className="py-20 bg-deep-navy text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border-4 border-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border-4 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-water-blue font-semibold text-sm uppercase tracking-wider">
            Prijsindicatie
          </span>
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mt-3 mb-4">
            Bereken uw kosten
          </h2>
          <p className="text-gray-300">
            Ontvang direct een indicatie van de kosten voor uw loodgieterswerk.
            Definitieve prijs na inspectie ter plaatse.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8"
        >
          {/* Progress indicator - water filling pipe */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Stap {step} van 3</span>
              <span className="text-sm text-water-blue">{Math.round((step / 3) * 100)}%</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-water-blue to-emergency-orange rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {step === 1 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 bg-water-blue rounded-full flex items-center justify-center text-sm">1</span>
                      Wat is het probleem?
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {problemTypes.map((problem) => (
                        <button
                          key={problem.id}
                          onClick={() => setSelectedProblem(problem.id)}
                          className={`p-4 rounded-2xl border-2 text-left transition-all ${
                            selectedProblem === problem.id
                              ? 'border-water-blue bg-water-blue/20'
                              : 'border-white/20 hover:border-white/40'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              selectedProblem === problem.id ? 'bg-water-blue' : 'bg-white/10'
                            }`}>
                              <problem.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="font-semibold">{problem.label}</p>
                              <p className="text-sm text-gray-400">{problem.description}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 bg-water-blue rounded-full flex items-center justify-center text-sm">2</span>
                      Hoe spoedig?
                    </h3>
                    <div className="space-y-3">
                      {urgencyLevels.map((urgency) => (
                        <button
                          key={urgency.id}
                          onClick={() => setSelectedUrgency(urgency.id)}
                          className={`w-full p-4 rounded-2xl border-2 flex items-center justify-between transition-all ${
                            selectedUrgency === urgency.id
                              ? 'border-water-blue bg-water-blue/20'
                              : 'border-white/20 hover:border-white/40'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Clock className={`w-5 h-5 ${urgency.color}`} />
                            <span className="font-semibold">{urgency.label}</span>
                          </div>
                          {selectedUrgency === urgency.id && (
                            <Check className="w-5 h-5 text-water-blue" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="flex gap-4 mt-8">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="px-6 py-3 border-2 border-white/20 rounded-full hover:border-white/40 transition-colors"
                    >
                      Terug
                    </button>
                  )}
                  <Button
                    variant="primary"
                    onClick={handleNext}
                    disabled={
                      (step === 1 && !selectedProblem) ||
                      (step === 2 && !selectedUrgency)
                    }
                    className="flex-1"
                  >
                    {step === 2 ? 'Bekindig indicatie' : 'Volgende'}
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-emergency-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Euro className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Geschatte kosten</h3>
                <p className="text-gray-300 mb-6">
                  Voor: {selectedProblemData?.label} ({selectedUrgencyData?.label})
                </p>
                
                <div className="bg-white/10 rounded-2xl p-6 mb-6">
                  <p className="text-4xl font-bold text-emergency-orange">
                    €{price.min} - €{price.max}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Inclusief voorrijkosten en btw
                  </p>
                </div>

                <div className="text-sm text-gray-400 mb-6">
                  <p>Dit is een indicatie. De definitieve prijs kan variëren</p>
                  <p>afhankelijk van de exacte situatie ter plaatse.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/#contact"
                    className="flex-1 bg-emergency-orange text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                  >
                    Definitieve offerte aanvragen
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 border-2 border-white/20 rounded-full hover:border-white/40 transition-colors"
                  >
                    Opnieuw berekenen
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
