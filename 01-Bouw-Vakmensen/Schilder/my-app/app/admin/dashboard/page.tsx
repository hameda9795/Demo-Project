'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, Calendar, Palette, FileText, Image, Settings,
  LogOut, Users, TrendingUp, DollarSign, Briefcase,
  MoreHorizontal, Plus, Search, Bell
} from 'lucide-react'
import Link from 'next/link'
import { demoContact } from '@/lib/utils'

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'projects', label: 'Projecten', icon: Briefcase },
  { id: 'calendar', label: 'Agenda', icon: Calendar },
  { id: 'inventory', label: 'Voorraad', icon: Palette },
  { id: 'quotes', label: 'Offertes', icon: FileText },
  { id: 'photos', label: 'Foto\'s', icon: Image },
  { id: 'customers', label: 'Klanten', icon: Users },
  { id: 'settings', label: 'Instellingen', icon: Settings },
]

const projectPipeline = [
  { id: 1, title: 'De Jong - Woonkamer', client: 'Fam. de Jong', status: 'quote', color: 'bg-blue-500' },
  { id: 2, title: 'Bakker - Gevel', client: 'Bakker BV', status: 'planning', color: 'bg-yellow-500' },
  { id: 3, title: 'Van Dijk - Keuken', client: 'M. van Dijk', status: 'execution', color: 'bg-orange-500' },
  { id: 4, title: 'Peters - Slaapkamers', client: 'Fam. Peters', status: 'completed', color: 'bg-green-500' },
  { id: 5, title: 'Jansen - Complete woning', client: 'Dhr. Jansen', status: 'quote', color: 'bg-blue-500' },
]

const paintInventory = [
  { id: 1, color: 'RAL 9010', name: 'Zuiver Wit', stock: 45, minStock: 20 },
  { id: 2, color: 'RAL 7047', name: 'Tele Grijs', stock: 12, minStock: 15 },
  { id: 3, color: 'RAL 7016', name: 'Antraciet', stock: 28, minStock: 10 },
  { id: 4, color: 'RAL 9001', name: 'Cremewit', stock: 8, minStock: 12 },
  { id: 5, color: 'RAL 5007', name: 'Brillant Blauw', stock: 15, minStock: 8 },
]

const upcomingJobs = [
  { id: 1, title: 'Schilderen woonkamer', client: 'De Jong', date: 'Vandaag', time: '08:00', type: 'interior' },
  { id: 2, title: 'Gevel onderhoud', client: 'Bakker BV', date: 'Morgen', time: '09:00', type: 'exterior' },
  { id: 3, title: 'Keukenkastjes', client: 'Van Dijk', date: 'Wo 28 feb', time: '10:00', type: 'interior' },
  { id: 4, title: 'Spoedklus - lekkage', client: 'Nieuw', date: 'Do 29 feb', time: '08:00', type: 'emergency' },
]

const statusColumns = [
  { id: 'quote', label: 'Offerte', color: 'bg-blue-50 border-blue-200' },
  { id: 'planning', label: 'Planning', color: 'bg-yellow-50 border-yellow-200' },
  { id: 'execution', label: 'Uitvoering', color: 'bg-orange-50 border-orange-200' },
  { id: 'completed', label: 'Afgerond', color: 'bg-green-50 border-green-200' },
]

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showDemoBanner, setShowDemoBanner] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Banner */}
      {showDemoBanner && (
        <div className="bg-red-500 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="text-sm font-medium flex items-center gap-2">
              ⚠️ DEMO ADMIN PANEL - Alle data is fictief
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
                <LayoutDashboard className="w-5 h-5 text-white" />
              </div>
              <h1 className="font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-teal-700">A</span>
              </div>
              <Link href="/admin/" className="p-2 text-gray-400 hover:text-gray-600">
                <LogOut className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
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
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4 space-y-8">
            {/* Stats Row */}
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { label: 'Open projecten', value: '12', icon: Briefcase, color: 'bg-blue-500' },
                { label: 'Deze maand', value: '€24.5k', icon: DollarSign, color: 'bg-green-500' },
                { label: 'Nieuwe klanten', value: '8', icon: Users, color: 'bg-purple-500' },
                { label: 'Te voltooien', value: '5', icon: TrendingUp, color: 'bg-orange-500' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Project Pipeline */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Project Pipeline</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-lg hover:bg-teal-600 transition-colors">
                  <Plus className="w-4 h-4" />
                  Nieuw project
                </button>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                {statusColumns.map((column) => (
                  <div key={column.id} className={`${column.color} rounded-xl p-4 border`}>
                    <h3 className="font-semibold text-gray-700 mb-3 flex items-center justify-between">
                      {column.label}
                      <span className="text-xs bg-white px-2 py-0.5 rounded-full">
                        {projectPipeline.filter(p => p.status === column.id).length}
                      </span>
                    </h3>
                    <div className="space-y-2">
                      {projectPipeline
                        .filter(p => p.status === column.id)
                        .map((project) => (
                          <div
                            key={project.id}
                            className="bg-white rounded-lg p-3 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-start justify-between mb-1">
                              <span className={`w-2 h-2 rounded-full ${project.color}`} />
                              <button className="text-gray-400 hover:text-gray-600">
                                <MoreHorizontal className="w-4 h-4" />
                              </button>
                            </div>
                            <p className="font-medium text-sm text-gray-900">{project.title}</p>
                            <p className="text-xs text-gray-500">{project.client}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Paint Inventory */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-gray-900">Voorraad Verf</h2>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-3">
                  {paintInventory.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded-lg border-2 border-gray-200"
                          style={{ backgroundColor: item.color.replace('RAL ', '#') === item.color ? '#ccc' : undefined }}
                        />
                        <div>
                          <p className="font-medium text-sm text-gray-900">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.color}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${item.stock < item.minStock ? 'text-red-500' : 'text-gray-900'}`}>
                          {item.stock}L
                        </p>
                        {item.stock < item.minStock && (
                          <p className="text-xs text-red-500">Bestellen</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Jobs */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-gray-900">Aankomende Klussen</h2>
                  <button className="text-teal-600 text-sm font-medium hover:underline">
                    Alles bekijken
                  </button>
                </div>
                <div className="space-y-3">
                  {upcomingJobs.map((job) => (
                    <div key={job.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-2 h-10 rounded-full ${
                        job.type === 'interior' ? 'bg-blue-500' :
                        job.type === 'exterior' ? 'bg-orange-500' :
                        'bg-red-500'
                      }`} />
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-900">{job.title}</p>
                        <p className="text-xs text-gray-500">{job.client}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{job.date}</p>
                        <p className="text-xs text-gray-500">{job.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Quote Generator */}
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-6 text-white">
              <h2 className="text-lg font-bold mb-4">Snelle Offerte Calculator</h2>
              <div className="grid sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm text-teal-100 mb-1">Oppervlakte (m²)</label>
                  <input
                    type="number"
                    placeholder="25"
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-teal-100"
                  />
                </div>
                <div>
                  <label className="block text-sm text-teal-100 mb-1">Type werk</label>
                  <select className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white">
                    <option value="" className="text-gray-900">Selecteer</option>
                    <option value="interior" className="text-gray-900">Binnen</option>
                    <option value="exterior" className="text-gray-900">Buiten</option>
                    <option value="cabinets" className="text-gray-900">Kastjes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-teal-100 mb-1">Lagen</label>
                  <select className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white">
                    <option value="2" className="text-gray-900">2 lagen</option>
                    <option value="3" className="text-gray-900">3 lagen</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full py-2 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors">
                    Bereken (DEMO)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
