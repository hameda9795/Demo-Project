'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Home, Calendar, ImageIcon, FileText, MessageSquare,
  LogOut, ChevronRight, CheckCircle2, Clock,
  PaintBucket, Camera, AlertCircle
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const sidebarItems = [
  { id: 'overview', label: 'Overzicht', icon: Home },
  { id: 'planning', label: 'Planning', icon: Calendar },
  { id: 'photos', label: 'Foto\'s', icon: ImageIcon },
  { id: 'invoice', label: 'Factuur', icon: FileText },
  { id: 'messages', label: 'Berichten', icon: MessageSquare },
]

const projectStatus = {
  percentage: 65,
  phase: 'Schilderen',
  nextStep: 'Aflakken details',
  daysLeft: 3,
}

const selectedColors = [
  { id: 1, name: 'Woonkamer', color: 'RAL 9010 - Zuiver Wit', hex: '#FFFFFF' },
  { id: 2, name: 'Keuken', color: 'RAL 7047 - Tele Grijs', hex: '#D3D3D3' },
  { id: 3, name: 'Slaapkamer', color: 'RAL 1001 - Beige', hex: '#C2B280' },
]

const schedule = [
  { id: 1, day: 'Ma', date: '26', title: 'Voorbereiding', time: '08:00 - 16:00', status: 'completed' },
  { id: 2, day: 'Di', date: '27', title: 'Grondlaag', time: '08:00 - 16:00', status: 'completed' },
  { id: 3, day: 'Wo', date: '28', title: 'Schilderen muren', time: '08:00 - 16:00', status: 'in-progress' },
  { id: 4, day: 'Do', date: '29', title: 'Aflakken details', time: '08:00 - 16:00', status: 'pending' },
  { id: 5, day: 'Vr', date: '1', title: 'Oplevering', time: '09:00 - 12:00', status: 'pending' },
]

const progressPhotos = [
  { id: 1, day: 'Dag 1', description: 'Start situatie', image: '/images/schilder/before/living-beige.jpg' },
  { id: 2, day: 'Dag 2', description: 'Voorbereiding', image: '/images/schilder/rooms/empty-living.jpg' },
  { id: 3, day: 'Dag 3', description: 'Grondlaag aangebracht', image: '/images/schilder/hero/paint-cans.jpg' },
]

const invoicePreview = {
  subtotal: 1875,
  vat: 393.75,
  total: 2268.75,
  items: [
    { description: 'Binnenschilderwerk woonkamer', quantity: '45 m²', price: 1125 },
    { description: 'Keukenkastjes spuiten', quantity: '8 stuks', price: 400 },
    { description: 'Plafond slaapkamer', quantity: '20 m²', price: 350 },
  ]
}

export default function KlantDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showDemoBanner, setShowDemoBanner] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Banner */}
      {showDemoBanner && (
        <div className="bg-amber-500 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="text-sm font-medium flex items-center gap-2">
              ⚠️ DEMO KLANT PORTAAL - Alle data is fictief
            </span>
            <button 
              onClick={() => setShowDemoBanner(false)}
              className="text-sm hover:underline"
            >
              Verbergen
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Mijn Project</h1>
                <p className="text-xs text-gray-500">Fam. van den Berg - Woonkamer</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-teal-700">V</span>
              </div>
              <Link href="/mijn-project/" className="p-2 text-gray-400 hover:text-gray-600">
                <LogOut className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                    activeTab === item.id
                      ? 'bg-teal-50 text-teal-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Help card */}
            <div className="mt-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-2">Hulp nodig?</h3>
              <p className="text-sm text-teal-100 mb-4">
                Heeft u vragen over uw project?
              </p>
              <button className="w-full py-2 bg-white text-teal-600 font-medium rounded-lg text-sm hover:bg-teal-50 transition-colors">
                Stuur bericht
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Progress Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Project voortgang</h2>
                  <p className="text-sm text-gray-500">
                    Geschatte oplevering: over {projectStatus.daysLeft} dagen
                  </p>
                </div>
                <span className="text-3xl font-bold text-teal-600">
                  {projectStatus.percentage}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${projectStatus.percentage}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <PaintBucket className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Huidige fase</p>
                    <p className="text-gray-500">{projectStatus.phase}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">Volgende stap</p>
                  <p className="text-gray-500">{projectStatus.nextStep}</p>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Selected Colors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
              >
                <h2 className="text-lg font-bold text-gray-900 mb-4">Gekozen kleuren</h2>
                <div className="space-y-3">
                  {selectedColors.map((color) => (
                    <div key={color.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div 
                        className="w-12 h-12 rounded-lg border-2 border-gray-200 shadow-sm"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div>
                        <p className="font-medium text-sm text-gray-900">{color.name}</p>
                        <p className="text-xs text-gray-500">{color.color}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full py-2 text-teal-600 font-medium text-sm hover:bg-teal-50 rounded-lg transition-colors">
                  Wijziging aanvragen
                </button>
              </motion.div>

              {/* Schedule */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
              >
                <h2 className="text-lg font-bold text-gray-900 mb-4">Weekplanning</h2>
                <div className="space-y-2">
                  {schedule.map((item) => (
                    <div 
                      key={item.id} 
                      className={`flex items-center gap-3 p-3 rounded-xl ${
                        item.status === 'in-progress' ? 'bg-teal-50 border border-teal-100' : 'bg-gray-50'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex flex-col items-center justify-center text-xs font-bold ${
                        item.status === 'completed' ? 'bg-green-100 text-green-700' :
                        item.status === 'in-progress' ? 'bg-teal-100 text-teal-700' :
                        'bg-gray-200 text-gray-600'
                      }`}>
                        <span>{item.day}</span>
                        <span>{item.date}</span>
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium text-sm ${
                          item.status === 'in-progress' ? 'text-teal-900' : 'text-gray-900'
                        }`}>
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500">{item.time}</p>
                      </div>
                      {item.status === 'completed' && (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      )}
                      {item.status === 'in-progress' && (
                        <Clock className="w-5 h-5 text-teal-500" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Progress Photos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Voortgang foto's</h2>
                <button className="flex items-center gap-1 text-teal-600 text-sm font-medium">
                  <Camera className="w-4 h-4" />
                  Alle foto's
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {progressPhotos.map((photo) => (
                  <div key={photo.id} className="relative aspect-square rounded-xl overflow-hidden group">
                    <Image
                      src={photo.image}
                      alt={photo.description}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <p className="font-medium text-sm">{photo.day}</p>
                      <p className="text-xs opacity-80">{photo.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Invoice Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Factuur voorbeeld</h2>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                  DEMO
                </span>
              </div>
              <div className="space-y-2 mb-4">
                {invoicePreview.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <p className="font-medium text-sm text-gray-900">{item.description}</p>
                      <p className="text-xs text-gray-500">{item.quantity}</p>
                    </div>
                    <p className="font-medium text-gray-900">€{item.price}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotaal</span>
                  <span className="font-medium">€{invoicePreview.subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">BTW (21%)</span>
                  <span className="font-medium">€{invoicePreview.vat}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                  <span className="text-gray-900">Totaal</span>
                  <span className="text-teal-600">€{invoicePreview.total}</span>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <button className="flex-1 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors">
                  Download PDF (DEMO)
                </button>
                <button className="flex items-center justify-center gap-1 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  <AlertCircle className="w-4 h-4" />
                  Vraag aanpassing
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
