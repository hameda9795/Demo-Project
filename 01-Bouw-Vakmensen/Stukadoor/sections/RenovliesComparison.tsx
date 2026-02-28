'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, ArrowRight, HelpCircle, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const comparisonData = {
  renovlies: {
    name: 'Renovlies',
    subtitle: 'Behang als oplossing',
    description: 'Een speciaal renovatiebehang dat oneffenheden maskeert. Snelle oplossing voor wanden die niet perfect zijn.',
    pros: [
      'Snellere aanbreng',
      'Lagere kosten',
      'Oneffenheden worden bedekt',
      'Veel dessins beschikbaar',
    ],
    cons: [
      'Minder duurzaam',
      'Kan loslaten bij vocht',
      'Minder luxe uitstraling',
      'Beperkte levensduur',
    ],
    priceRange: '€15-25 / m² (DEMO)',
    durability: '5-10 jaar',
    suitable: ['Snelle make-over', 'Tijdelijke oplossing', 'Budget renovatie'],
    bestFor: ['Studentenkamers', 'Huurwoningen', 'Tijdelijke bewoning'],
  },
  stucwerk: {
    name: 'Stucwerk',
    subtitle: 'Permanente oplossing',
    description: 'Professioneel pleisterwerk voor een perfecte, naadloze wandafwerking die jaren meegaat.',
    pros: [
      'Permanente oplossing',
      'Spiegelglad resultaat',
      '10+ jaar garantie',
      'Verhoogt woningwaarde',
      'Vochtbestendig',
    ],
    cons: [
      'Hogere investering',
      'Meer droogtijd nodig',
      'Professioneel vakwerk vereist',
    ],
    priceRange: '€35-75 / m² (DEMO)',
    durability: '20+ jaar',
    suitable: ['Permanente oplossing', 'Luxe afwerking', 'Langdurig resultaat'],
    bestFor: ['Eigen woning', 'Luxe interieurs', 'Verkoopvoorbereiding'],
  },
}

const decisionQuestions = [
  {
    id: 1,
    question: 'Hoe lang blijft u wonen?',
    options: [
      { label: 'Korter dan 2 jaar', points: { renovlies: 2, stucwerk: 0 } },
      { label: '2-5 jaar', points: { renovlies: 1, stucwerk: 1 } },
      { label: 'Langer dan 5 jaar', points: { renovlies: 0, stucwerk: 2 } },
    ],
  },
  {
    id: 2,
    question: 'Wat is uw prioriteit?',
    options: [
      { label: 'Lage kosten', points: { renovlies: 2, stucwerk: 0 } },
      { label: 'Snelle oplevering', points: { renovlies: 2, stucwerk: 0 } },
      { label: 'Hoogste kwaliteit', points: { renovlies: 0, stucwerk: 2 } },
      { label: 'Balans kosten/kwaliteit', points: { renovlies: 1, stucwerk: 1 } },
    ],
  },
  {
    id: 3,
    question: 'Wat voor soort ruimte is het?',
    options: [
      { label: 'Slaapkamer/kantoor', points: { renovlies: 1, stucwerk: 1 } },
      { label: 'Woonkamer/keuken', points: { renovlies: 0, stucwerk: 2 } },
      { label: 'Badkamer', points: { renovlies: 0, stucwerk: 2 } },
      { label: 'Zolder/garage', points: { renovlies: 2, stucwerk: 0 } },
    ],
  },
]

export function RenovliesComparison() {
  const [activeTab, setActiveTab] = useState<'renovlies' | 'stucwerk'>('stucwerk')
  const [showDecisionTree, setShowDecisionTree] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState({ renovlies: 0, stucwerk: 0 })
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (points: { renovlies: number; stucwerk: number }) => {
    const newScores = {
      renovlies: scores.renovlies + points.renovlies,
      stucwerk: scores.stucwerk + points.stucwerk,
    }
    setScores(newScores)

    if (currentQuestion < decisionQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetDecisionTree = () => {
    setCurrentQuestion(0)
    setScores({ renovlies: 0, stucwerk: 0 })
    setShowResult(false)
  }

  const activeData = comparisonData[activeTab]

  return (
    <section className="py-24 bg-sand-100 seamless-section">
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
            Keuzehulp
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-stone-800 mb-4">
            Renovlies of{' '}
            <span className="relative">
              Stucwerk?
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-clay/30 rounded-full" />
            </span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Twijfelt u tussen renovliesbehang en stucwerk? Vergelijk de opties en vind wat het beste bij uw situatie past.
          </p>
        </motion.div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
            {(['renovlies', 'stucwerk'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'px-8 py-3 rounded-full text-sm font-semibold transition-all',
                  activeTab === tab
                    ? 'bg-gradient-to-br from-sand-300 to-sand-400 text-stone-800'
                    : 'text-stone-500 hover:text-stone-700'
                )}
              >
                {tab === 'renovlies' ? 'Renovlies' : 'Stucwerk'}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Active Card */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-8"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold text-stone-800 mb-1">
                {activeData.name}
              </h3>
              <p className="text-clay font-medium">{activeData.subtitle}</p>
            </div>
            <p className="text-stone-600 mb-6">{activeData.description}</p>

            {/* Price & Durability */}
            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-sand-50 rounded-xl">
              <div>
                <p className="text-sm text-stone-500 mb-1">Prijsindicatie (DEMO)</p>
                <p className="text-xl font-bold text-stone-800">{activeData.priceRange}</p>
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-1">Levensduur</p>
                <p className="text-xl font-bold text-stone-800">{activeData.durability}</p>
              </div>
            </div>

            {/* Pros */}
            <div className="mb-6">
              <h4 className="font-medium text-stone-700 mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                Voordelen
              </h4>
              <ul className="space-y-2">
                {activeData.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="mb-6">
              <h4 className="font-medium text-stone-700 mb-3 flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" />
                Nadelen
              </h4>
              <ul className="space-y-2">
                {activeData.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>

            {/* Best For */}
            <div>
              <h4 className="font-medium text-stone-700 mb-3">Ideaal voor</h4>
              <div className="flex flex-wrap gap-2">
                {activeData.bestFor.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-sand-200 text-stone-600 text-sm rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Decision Tree */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sand-300 to-sand-400 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-stone-700" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-stone-800">
                  Wat past bij mij?
                </h3>
                <p className="text-sm text-stone-500">Beantwoord 3 vragen</p>
              </div>
            </div>

            {!showDecisionTree ? (
              <motion.button
                onClick={() => setShowDecisionTree(true)}
                className="w-full py-4 bg-stone-800 text-white rounded-xl font-medium
                           hover:bg-stone-700 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start de keuzehulp
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            ) : (
              <AnimatePresence mode="wait">
                {!showResult ? (
                  <motion.div
                    key="question"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-stone-500">
                          Vraag {currentQuestion + 1} van {decisionQuestions.length}
                        </span>
                        <div className="flex gap-1">
                          {decisionQuestions.map((_, i) => (
                            <div
                              key={i}
                              className={cn(
                                'w-8 h-1 rounded-full',
                                i <= currentQuestion ? 'bg-clay' : 'bg-sand-300'
                              )}
                            />
                          ))}
                        </div>
                      </div>
                      <h4 className="text-lg font-medium text-stone-800">
                        {decisionQuestions[currentQuestion].question}
                      </h4>
                    </div>

                    <div className="space-y-3">
                      {decisionQuestions[currentQuestion].options.map((option) => (
                        <button
                          key={option.label}
                          onClick={() => handleAnswer(option.points)}
                          className="w-full p-4 text-left bg-sand-50 hover:bg-sand-200 
                                     rounded-xl transition-colors text-stone-700"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <div className="mb-6">
                      <p className="text-stone-500 mb-2">Onze aanbeveling:</p>
                      <h4 className="text-2xl font-heading font-bold text-stone-800">
                        {scores.stucwerk > scores.renovlies ? 'Stucwerk' : 'Renovlies'}
                      </h4>
                    </div>

                    <div className="p-4 bg-sand-50 rounded-xl mb-6 text-left">
                      <p className="text-sm text-stone-600">
                        {scores.stucwerk > scores.renovlies
                          ? 'Op basis van uw antwoorden raden wij stucwerk aan. Dit biedt de beste kwaliteit en duurzaamheid voor uw situatie.'
                          : 'Op basis van uw antwoorden raden wij renovlies aan. Dit is een praktische en kostenefficiënte oplossing voor uw situatie.'}
                      </p>
                    </div>

                    <button
                      onClick={resetDecisionTree}
                      className="text-clay font-medium hover:underline"
                    >
                        Opnieuw beginnen
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
