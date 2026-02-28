'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Image as ImageIcon,
  FileText,
  Shield,
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Droplets,
  Paintbrush,
  Sparkles,
} from 'lucide-react'

const DEMO_EMAIL = 'klant@demo.nl'
const DEMO_PASSWORD = 'demo2024'

const projectProgress = [
  { stage: 'Inspectie', completed: true, date: '15 jan 2024', icon: CheckCircle },
  { stage: 'Voorbereiding', completed: true, date: '16 jan 2024', icon: CheckCircle },
  { stage: 'Gronden', completed: true, date: '17 jan 2024', icon: CheckCircle },
  { stage: 'Stucen - Laag 1', completed: true, date: '18 jan 2024', icon: CheckCircle },
  { stage: 'Stucen - Laag 2', completed: true, date: '19 jan 2024', icon: CheckCircle },
  { stage: 'Afwerking', completed: false, date: '20 jan 2024', icon: Paintbrush },
  { stage: 'Drogen', completed: false, date: '21-26 jan 2024', icon: Droplets },
  { stage: 'Oplevering', completed: false, date: '27 jan 2024', icon: Sparkles },
]

const photoUpdates = [
  { id: 1, day: 'Dag 1', stage: 'Voorbereiding', description: 'Afplakken en primer aanbrengen', image: '/images/stukadoor/process/prep-masking.jpg' },
  { id: 2, day: 'Dag 2', stage: 'Gronden', description: 'Grondlaag aangebracht', image: '/images/stukadoor/process/applying-primer.jpg' },
  { id: 3, day: 'Dag 3', stage: 'Stucen', description: 'Eerste laag stucwerk', image: '/images/stukadoor/process/trowel-work.jpg' },
  { id: 4, day: 'Dag 4', stage: 'Afwerking', description: 'Eindafwerking bezig', image: '/images/stukadoor/process/finishing.jpg' },
]

const careInstructions = [
  { title: 'Wanneer kan ik schilderen?', content: 'Wacht minimaal 7 dagen na oplevering. Test op een onopvallende plek of de muur droog is.', icon: Clock },
  { title: 'Schoonmaken', content: 'Gebruik een zachte, licht vochtige doek. Geen schuurmiddelen gebruiken.', icon: Sparkles },
  { title: 'Garantie', content: '10 jaar garantie op afbladderen en scheuren door vakmanschap.', icon: Shield },
]

export default function ClientPortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [activeTab, setActiveTab] = useState('overview')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      setIsLoggedIn(true)
      setLoginError('')
    } else {
      setLoginError(`Ongeldige inloggegevens. Gebruik ${DEMO_EMAIL} / ${DEMO_PASSWORD}`)
    }
  }

  const completedStages = projectProgress.filter(p => p.completed).length
  const progressPercentage = (completedStages / projectProgress.length) * 100

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-sand-100 flex items-center justify-center p-4">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Demo Notice */}
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-6 flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <p className="text-sm text-amber-800">
              <strong>DEMO:</strong> Gebruik <code className="bg-amber-200 px-1 rounded">{DEMO_EMAIL}</code> / 
              <code className="bg-amber-200 px-1 rounded">{DEMO_PASSWORD}</code>
            </p>
          </div>

          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-sand-300 to-sand-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-stone-700" />
              </div>
              <h1 className="text-2xl font-heading font-bold text-stone-800">Mijn Stucwerk</h1>
              <p className="text-stone-500">Klantenportaal (DEMO)</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-white
                             focus:outline-none focus:ring-2 focus:ring-clay/50"
                  placeholder={DEMO_EMAIL}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Wachtwoord
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-white
                             focus:outline-none focus:ring-2 focus:ring-clay/50"
                  placeholder={DEMO_PASSWORD}
                />
              </div>
              {loginError && (
                <p className="text-red-600 text-sm">{loginError}</p>
              )}
              <button
                type="submit"
                className="w-full py-3 bg-stone-800 text-white rounded-xl font-medium
                           hover:bg-stone-700 transition-colors"
              >
                Inloggen
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-sand-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-heading font-bold text-stone-800">Mijn Project</h1>
            <p className="text-stone-500">Woning renovatie - DEMO Straat 12 (DEMO)</p>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="px-4 py-2 text-stone-600 hover:text-stone-800 transition-colors"
          >
            Uitloggen
          </button>
        </div>

        {/* Progress Overview */}
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-semibold text-stone-800">Project Voortgang</h2>
            <span className="text-2xl font-bold text-clay">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-sand-200 rounded-full h-4 mb-6 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-clay to-orange-400 h-4 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <div className="flex items-center justify-between text-sm text-stone-500">
            <span>Gestart: 15 januari 2024</span>
            <span>Verwachte oplevering: 27 januari 2024</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overzicht', icon: Home },
            { id: 'photos', label: 'Foto Updates', icon: ImageIcon },
            { id: 'documents', label: 'Documenten', icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-stone-800 text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Timeline */}
              <div className="glass-card p-6">
                <h3 className="font-heading font-semibold text-stone-800 mb-6">Project Timeline</h3>
                <div className="space-y-4">
                  {projectProgress.map((stage, index) => {
                    const Icon = stage.icon
                    return (
                      <div key={stage.stage} className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          stage.completed ? 'bg-green-100 text-green-600' : 'bg-sand-100 text-stone-400'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className={`font-medium ${stage.completed ? 'text-stone-800' : 'text-stone-500'}`}>
                              {stage.stage}
                            </h4>
                            <span className="text-xs text-stone-400">{stage.date}</span>
                          </div>
                          {index === completedStages - 1 && stage.completed && (
                            <span className="text-xs text-green-600">Voltooid</span>
                          )}
                          {index === completedStages && !stage.completed && (
                            <span className="text-xs text-clay">Huidige fase</span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Care Instructions */}
              <div className="space-y-4">
                {careInstructions.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="glass-card p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-sand-200 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-stone-700" />
                        </div>
                        <div>
                          <h4 className="font-medium text-stone-800 mb-1">{item.title}</h4>
                          <p className="text-sm text-stone-600">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}

                {/* Warranty Card */}
                <div className="glass-card p-6 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-sand-300" />
                    <h3 className="font-heading font-semibold">10 Jaar Garantie</h3>
                  </div>
                  <p className="text-stone-300 text-sm mb-4">
                    Uw stucwerk valt onder onze uitgebreide garantie. 
                    Download uw garantiebewijs hier.
                  </p>
                  <button className="px-4 py-2 bg-sand-300 text-stone-800 rounded-lg text-sm font-medium hover:bg-sand-400 transition-colors">
                    Download Certificaat (DEMO)
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'photos' && (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {photoUpdates.map((photo) => (
                  <div key={photo.id} className="glass-card overflow-hidden">
                    <div className="aspect-video bg-sand-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                        <ImageIcon className="w-12 h-12" />
                      </div>
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full text-sm font-medium">
                        {photo.day}
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-clay font-medium uppercase tracking-wider">
                        {photo.stage}
                      </span>
                      <h4 className="font-medium text-stone-800 mt-1">{photo.description}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'documents' && (
            <motion.div
              key="documents"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card p-6"
            >
              <h3 className="font-heading font-semibold text-stone-800 mb-6">Documenten (DEMO)</h3>
              <div className="space-y-3">
                {[
                  { name: 'Offerte - Woning Renovatie.pdf', date: '10 jan 2024', size: '245 KB' },
                  { name: 'Contract Stucwerk.pdf', date: '12 jan 2024', size: '180 KB' },
                  { name: 'Factuur - Aanbetaling.pdf', date: '14 jan 2024', size: '120 KB' },
                  { name: 'Garantiebewijs.pdf', date: 'Beschikbaar na oplevering', size: '-' },
                ].map((doc) => (
                  <div key={doc.name} className="flex items-center justify-between p-4 bg-white rounded-xl hover:bg-sand-50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-clay" />
                      <div>
                        <p className="font-medium text-stone-800">{doc.name}</p>
                        <p className="text-sm text-stone-500">{doc.date} • {doc.size}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-stone-400" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
