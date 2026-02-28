'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, FileText, History, MessageSquare, 
  LogOut, CheckCircle2, Clock, Calendar, 
  AlertCircle, Download, Plus
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Mock data for demo customer
const mockCustomer = {
  name: 'Jan de Vries',
  email: 'jan@example.com',
  phone: '06-12345678',
  address: 'Hoofdstraat 45, 3011 AA Rotterdam',
}

const serviceStatus = {
  currentStep: 2,
  totalSteps: 4,
  steps: [
    { id: 1, label: 'Aanvraag', completed: true },
    { id: 2, label: 'In behandeling', completed: true },
    { id: 3, label: 'Gepland', completed: false },
    { id: 4, label: 'Uitgevoerd', completed: false },
  ],
  nextAppointment: '15 maart 2024 om 14:00',
}

const documents = [
  { id: '1', name: 'Offerte badkamer renovatie', type: 'offerte', date: '2024-03-01', size: '245 KB' },
  { id: '2', name: 'Factuur #2024-0342', type: 'factuur', date: '2024-02-15', size: '189 KB' },
  { id: '3', name: 'Garantiebewijs cv-ketel', type: 'garantie', date: '2024-01-20', size: '312 KB' },
]

const serviceHistory = [
  { id: '1', service: 'CV ketel onderhoud', date: '2024-02-15', status: 'voltooid', price: '€149,00' },
  { id: '2', service: 'Lekreparatie keuken', date: '2023-11-08', status: 'voltooid', price: '€185,00' },
  { id: '3', service: 'Toilet vervanging', date: '2023-08-22', status: 'voltooid', price: '€425,00' },
]

const navItems = [
  { id: 'overzicht', label: 'Overzicht', icon: User },
  { id: 'documenten', label: 'Documenten', icon: FileText },
  { id: 'geschiedenis', label: 'Service historie', icon: History },
]

/**
 * Customer Portal Page
 * Login protected customer dashboard with service status, documents, and history
 */
export default function CustomerPortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('overzicht')
  const [expandedHistory, setExpandedHistory] = useState<string | null>(null)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  // Login screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-off-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-water-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-water-blue" />
            </div>
            <h1 className="font-outfit text-2xl font-bold text-deep-navy mb-2">
              Mijn Account
            </h1>
            <p className="text-steel-gray">
              Log in om uw service status te bekijken
            </p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                defaultValue="jan@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-water-blue focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Wachtwoord
              </label>
              <input
                type="password"
                defaultValue="wachtwoord"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-water-blue focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-water-blue text-white py-3 rounded-xl font-semibold hover:bg-deep-navy transition-colors"
            >
              Inloggen
            </button>
          </form>
          
          <p className="text-center text-sm text-gray-400 mt-6">
            <a href="#" className="text-water-blue hover:underline">
              Wachtwoord vergeten?
            </a>
          </p>
        </motion.div>
      </div>
    )
  }

  // Customer Dashboard
  return (
    <div className="min-h-screen bg-off-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-water-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold">
                {mockCustomer.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <p className="font-semibold text-deep-navy text-sm">{mockCustomer.name}</p>
              <p className="text-xs text-gray-500">Klant sinds 2023</p>
            </div>
          </div>
        </div>
        
        <nav className="p-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors',
                activeTab === item.id
                  ? 'bg-water-blue/10 text-water-blue'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="mt-auto p-4 border-t border-gray-100">
          <button
            onClick={() => setIsLoggedIn(false)}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-red-500 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Uitloggen
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          {/* Welcome header */}
          <div className="mb-8">
            <h1 className="font-outfit text-2xl font-bold text-deep-navy">
              Welkom terug, {mockCustomer.name.split(' ')[0]}
            </h1>
            <p className="text-steel-gray">
              Bekijk hier de status van uw lopende opdrachten
            </p>
          </div>

          {/* New request CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-emergency-orange rounded-2xl p-6 text-white mb-8 flex items-center justify-between"
          >
            <div>
              <h2 className="font-bold text-lg mb-1">Nieuwe melding maken?</h2>
              <p className="text-white/80 text-sm">
                Heeft u een nieuw probleem? Wij helpen u graag!
              </p>
            </div>
            <button className="bg-white text-emergency-orange px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow flex-shrink-0">
              <Plus className="w-5 h-5" />
              Melding maken
            </button>
          </motion.div>

          {activeTab === 'overzicht' && (
            <>
              {/* Service status timeline */}
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <h2 className="font-semibold text-lg text-deep-navy mb-6">
                  Huidige service status
                </h2>
                
                {/* Timeline */}
                <div className="relative">
                  {/* Progress bar background */}
                  <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 rounded-full" />
                  {/* Progress bar fill */}
                  <div 
                    className="absolute top-5 left-0 h-1 bg-water-blue rounded-full transition-all duration-500"
                    style={{ width: `${((serviceStatus.currentStep - 1) / (serviceStatus.totalSteps - 1)) * 100}%` }}
                  />
                  
                  {/* Steps */}
                  <div className="relative flex justify-between">
                    {serviceStatus.steps.map((step, index) => (
                      <div key={step.id} className="flex flex-col items-center">
                        <div className={cn(
                          'w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors',
                          step.completed
                            ? 'bg-water-blue text-white'
                            : index === serviceStatus.currentStep - 1
                              ? 'bg-white border-2 border-water-blue text-water-blue'
                              : 'bg-gray-100 text-gray-400'
                        )}>
                          {step.completed ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            <span className="text-sm font-bold">{step.id}</span>
                          )}
                        </div>
                        <span className={cn(
                          'text-sm mt-2',
                          step.completed || index === serviceStatus.currentStep - 1
                            ? 'text-deep-navy font-medium'
                            : 'text-gray-400'
                        )}>
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next appointment info */}
                <div className="mt-8 p-4 bg-blue-50 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-water-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-deep-navy">Volgende afspraak</p>
                    <p className="text-steel-gray">{serviceStatus.nextAppointment}</p>
                  </div>
                </div>
              </div>

              {/* Recent documents preview */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-lg text-deep-navy">Recente documenten</h2>
                  <button 
                    onClick={() => setActiveTab('documenten')}
                    className="text-water-blue text-sm hover:underline"
                  >
                    Bekijk alle
                  </button>
                </div>
                <div className="space-y-3">
                  {documents.slice(0, 2).map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-4 bg-off-white rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-water-blue" />
                        <div>
                          <p className="font-medium text-deep-navy text-sm">{doc.name}</p>
                          <p className="text-xs text-gray-500">{doc.date} • {doc.size}</p>
                        </div>
                      </div>
                      <Download className="w-5 h-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'documenten' && (
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="font-semibold text-lg text-deep-navy mb-6">
                Mijn documenten
              </h2>
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-4 bg-off-white rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        'w-10 h-10 rounded-lg flex items-center justify-center',
                        doc.type === 'factuur' && 'bg-green-100 text-green-600',
                        doc.type === 'offerte' && 'bg-blue-100 text-water-blue',
                        doc.type === 'garantie' && 'bg-purple-100 text-purple-600'
                      )}>
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-deep-navy">{doc.name}</p>
                        <p className="text-sm text-gray-500">{doc.date} • {doc.size}</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-water-blue hover:text-deep-navy transition-colors">
                      <Download className="w-5 h-5" />
                      <span className="text-sm">Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'geschiedenis' && (
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="font-semibold text-lg text-deep-navy mb-6">
                Service historie
              </h2>
              <div className="space-y-3">
                {serviceHistory.map((service) => (
                  <div
                    key={service.id}
                    className="border border-gray-100 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedHistory(
                        expandedHistory === service.id ? null : service.id
                      )}
                      className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-deep-navy">{service.service}</p>
                          <p className="text-sm text-gray-500">{service.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-deep-navy">{service.price}</span>
                        <span className={cn(
                          'transform transition-transform',
                          expandedHistory === service.id && 'rotate-180'
                        )}>
                          ▼
                        </span>
                      </div>
                    </button>
                    {expandedHistory === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-4 pb-4 pt-0 bg-gray-50"
                      >
                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-sm text-gray-600 mb-2">
                            <strong>Status:</strong> {service.status}
                          </p>
                          <p className="text-sm text-gray-600 mb-2">
                            <strong>Adres:</strong> {mockCustomer.address}
                          </p>
                          <button className="text-water-blue text-sm hover:underline">
                            Bekijk details
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
