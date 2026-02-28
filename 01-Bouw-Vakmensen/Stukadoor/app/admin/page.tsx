'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  Calculator,
  Package,
  Image as ImageIcon,
  MessageSquare,
  Calendar,
  LogOut,
  AlertTriangle,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp,
  Users,
  Euro,
  Droplets,
} from 'lucide-react'

// Demo login credentials
const DEMO_USERNAME = 'demo'
const DEMO_PASSWORD = 'demo123'

const projectStages = [
  { id: 'offerte', label: 'Offerte', color: 'bg-blue-500' },
  { id: 'inmeet', label: 'Inmeet', color: 'bg-purple-500' },
  { id: 'voorbereiding', label: 'Voorbereiding', color: 'bg-yellow-500' },
  { id: 'stucen', label: 'Stucen', color: 'bg-orange-500' },
  { id: 'drogen', label: 'Drogen', color: 'bg-cyan-500' },
  { id: 'oplevering', label: 'Oplevering', color: 'bg-green-500' },
]

const mockProjects = [
  { id: 1, client: 'Jansen Family', address: 'DEMO Straat 12, Amsterdam', stage: 'stucen', progress: 60, m2: 120, startDate: '2024-01-15', endDate: '2024-01-22' },
  { id: 2, client: 'De Vries B.V.', address: 'DEMO Laan 45, Utrecht', stage: 'drogen', progress: 80, m2: 350, startDate: '2024-01-10', endDate: '2024-01-24' },
  { id: 3, client: 'Van Dam Project', address: 'DEMO Weg 8, Amsterdam', stage: 'offerte', progress: 10, m2: 85, startDate: null, endDate: null },
  { id: 4, client: 'Bakker Renovatie', address: 'DEMO Plein 23, Utrecht', stage: 'oplevering', progress: 95, m2: 200, startDate: '2024-01-05', endDate: '2024-01-20' },
]

const materialStock = [
  { name: 'Stuc zakken (25kg)', quantity: 45, minLevel: 20, unit: 'zakken' },
  { name: 'Primer', quantity: 28, minLevel: 15, unit: 'liters' },
  { name: 'Afplaktape', quantity: 12, minLevel: 10, unit: 'rollen' },
  { name: 'Hoekprofielen', quantity: 150, minLevel: 50, unit: 'stuks' },
  { name: 'Schuurpapier', quantity: 8, minLevel: 5, unit: 'pakken' },
]

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [activeTab, setActiveTab] = useState('dashboard')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
      setIsLoggedIn(true)
      setLoginError('')
    } else {
      setLoginError('Ongeldige inloggegevens. Gebruik demo/demo123')
    }
  }

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
              <strong>DEMO:</strong> Gebruik <code className="bg-amber-200 px-1 rounded">demo</code> / 
              <code className="bg-amber-200 px-1 rounded">demo123</code> om in te loggen
            </p>
          </div>

          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-heading font-bold text-stone-800">Admin Login</h1>
              <p className="text-stone-500">Perfect Stucwerk (DEMO)</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Gebruikersnaam
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-white
                             focus:outline-none focus:ring-2 focus:ring-clay/50"
                  placeholder="demo"
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
                  placeholder="demo123"
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
    <div className="min-h-screen bg-sand-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-stone-800 text-white flex-shrink-0">
        <div className="p-6 border-b border-stone-700">
          <h1 className="text-xl font-heading font-bold">Perfect Stucwerk</h1>
          <p className="text-sm text-stone-400">Admin Panel (DEMO)</p>
        </div>

        <nav className="p-4 space-y-1">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'calculator', label: 'M² Calculator', icon: Calculator },
            { id: 'stock', label: 'Materiaal voorraad', icon: Package },
            { id: 'photos', label: 'Foto documentatie', icon: ImageIcon },
            { id: 'messages', label: 'Communicatie', icon: MessageSquare },
            { id: 'calendar', label: 'Kalender', icon: Calendar },
          ].map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  activeTab === item.id
                    ? 'bg-sand-300 text-stone-800'
                    : 'text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="p-4 mt-auto border-t border-stone-700">
          <button
            onClick={() => setIsLoggedIn(false)}
            className="w-full flex items-center gap-3 px-4 py-3 text-stone-300 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Uitloggen
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-heading font-bold text-stone-800">Projecten Pipeline</h2>
                <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  DEMO MODE
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Actieve projecten', value: '4', icon: TrendingUp, color: 'bg-blue-500' },
                  { label: 'Totaal m² deze maand', value: '755', icon: Calculator, color: 'bg-green-500' },
                  { label: 'Nieuwe klanten', value: '3', icon: Users, color: 'bg-purple-500' },
                  { label: 'Omzet (DEMO)', value: '€28.5k', icon: Euro, color: 'bg-orange-500' },
                ].map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="glass-card p-5">
                      <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-stone-800">{stat.value}</p>
                      <p className="text-sm text-stone-500">{stat.label}</p>
                    </div>
                  )
                })}
              </div>

              {/* Project Pipeline */}
              <div className="glass-card p-6">
                <h3 className="font-heading font-semibold text-stone-800 mb-6">Project Pipeline</h3>
                <div className="space-y-4">
                  {mockProjects.map((project) => (
                    <div key={project.id} className="p-4 bg-white rounded-xl border border-sand-200">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-stone-800">{project.client}</h4>
                          <p className="text-sm text-stone-500">{project.address}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          projectStages.find(s => s.id === project.stage)?.color
                        } text-white`}>
                          {projectStages.find(s => s.id === project.stage)?.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-stone-500 mb-3">
                        <span>{project.m2} m²</span>
                        {project.startDate && <span>Start: {project.startDate}</span>}
                        {project.endDate && <span>Oplevering: {project.endDate}</span>}
                      </div>
                      <div className="w-full bg-sand-200 rounded-full h-2">
                        <div
                          className="bg-clay h-2 rounded-full transition-all"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'stock' && (
            <motion.div
              key="stock"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-2xl font-heading font-bold text-stone-800 mb-8">Materiaal Voorraad</h2>
              <div className="glass-card p-6">
                <div className="space-y-4">
                  {materialStock.map((item) => {
                    const isLow = item.quantity <= item.minLevel
                    return (
                      <div key={item.name} className="flex items-center justify-between p-4 bg-white rounded-xl">
                        <div>
                          <h4 className="font-medium text-stone-800">{item.name}</h4>
                          <p className="text-sm text-stone-500">Minimaal: {item.minLevel} {item.unit}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`text-2xl font-bold ${isLow ? 'text-red-600' : 'text-green-600'}`}>
                            {item.quantity}
                          </span>
                          <span className="text-sm text-stone-500">{item.unit}</span>
                          {isLow && <AlertCircle className="w-5 h-5 text-red-600" />}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'calendar' && (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-2xl font-heading font-bold text-stone-800 mb-8">Droog Kalender</h2>
              <div className="glass-card p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-cyan-400 rounded" />
                    <span className="text-sm text-stone-600">Aan het drogen - niet schilderen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded" />
                    <span className="text-sm text-stone-600">Droog - schilderklaar</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 28 }).map((_, i) => {
                    const day = i + 1
                    const isDrying = day >= 15 && day <= 21
                    const isDry = day > 21
                    return (
                      <div
                        key={i}
                        className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium ${
                          isDrying ? 'bg-cyan-100 text-cyan-800' :
                          isDry ? 'bg-green-100 text-green-800' :
                          'bg-sand-100 text-stone-600'
                        }`}
                      >
                        {day}
                        {isDrying && <Droplets className="w-3 h-3 ml-1" />}
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab !== 'dashboard' && activeTab !== 'stock' && activeTab !== 'calendar' && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center justify-center h-96"
            >
              <div className="text-center">
                <Clock className="w-16 h-16 text-sand-300 mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-stone-800 mb-2">
                  Functionaliteit in ontwikkeling
                </h3>
                <p className="text-stone-500">Deze module is beschikbaar in de volledige versie.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
