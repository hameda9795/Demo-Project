'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, Calendar, Users, Wrench, FileText, 
  LogOut, TrendingUp, Clock, CheckCircle, AlertCircle,
  ChevronRight
} from 'lucide-react'
import { cn, formatCurrency, formatDate } from '@/lib/utils'

// Mock data for demo
const stats = {
  newLeads: 12,
  openJobs: 8,
  monthlyRevenue: 24500,
  satisfiedCustomers: 156,
}

const activities = [
  { id: '1', type: 'offerte', description: 'Nieuwe offerte aangevraagd door De Jong', time: '5 min geleden' },
  { id: '2', type: 'afspraak', description: 'Afspraak gepland: Kralingen lekreparatie', time: '15 min geleden' },
  { id: '3', type: 'compleet', description: 'Job afgerond: CV installatie Schiedam', time: '1 uur geleden' },
  { id: '4', type: 'klant', description: 'Nieuwe klant geregistreerd: Bakker', time: '2 uur geleden' },
  { id: '5', type: 'offerte', description: 'Offerte geaccepteerd: Verwarming vervanging', time: '3 uur geleden' },
]

const appointments = [
  { id: '1', customer: 'De Vries', service: 'Lekreparatie', time: '09:00', type: 'spoed' },
  { id: '2', customer: 'Jansen', service: 'CV Onderhoud', time: '11:30', type: 'onderhoud' },
  { id: '3', customer: 'Van Berg', service: 'Badkamer renovatie', time: '14:00', type: 'installatie' },
  { id: '4', customer: 'Smit', service: 'Riool ontstoppen', time: '16:30', type: 'spoed' },
]

const monthlyData = [
  { month: 'Jan', revenue: 18000 },
  { month: 'Feb', revenue: 22000 },
  { month: 'Mrt', revenue: 19500 },
  { month: 'Apr', revenue: 24500 },
  { month: 'Mei', revenue: 28000 },
  { month: 'Jun', revenue: 32000 },
]

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'afspraken', label: 'Afspraken', icon: Calendar },
  { id: 'klanten', label: 'Klanten', icon: Users },
  { id: 'diensten', label: 'Diensten', icon: Wrench },
  { id: 'offertes', label: 'Offertes', icon: FileText },
]

/**
 * Admin Dashboard Page
 * Protected admin panel with statistics, calendar, and activity feed
 */
export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('demo')
  const [password, setPassword] = useState('demo123')
  const [activeTab, setActiveTab] = useState('dashboard')
  const [animatedStats, setAnimatedStats] = useState({ ...stats })

  // Animate stats on load
  useEffect(() => {
    if (isLoggedIn) {
      const duration = 1000
      const steps = 30
      const interval = duration / steps
      
      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        setAnimatedStats({
          newLeads: Math.round(stats.newLeads * progress),
          openJobs: Math.round(stats.openJobs * progress),
          monthlyRevenue: Math.round(stats.monthlyRevenue * progress),
          satisfiedCustomers: Math.round(stats.satisfiedCustomers * progress),
        })
        if (step >= steps) clearInterval(timer)
      }, interval)
      
      return () => clearInterval(timer)
    }
  }, [isLoggedIn])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'demo' && password === 'demo123') {
      setIsLoggedIn(true)
    }
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
            <h1 className="font-outfit text-2xl font-bold text-deep-navy mb-2">
              Admin Login
            </h1>
            <p className="text-steel-gray">
              Inloggen op het beheerpaneel
            </p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gebruikersnaam
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-water-blue focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Wachtwoord
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            Demo: gebruik demo / demo123
          </p>
        </motion.div>
      </div>
    )
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-off-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-deep-navy text-white flex-shrink-0">
        <div className="p-6">
          <h1 className="font-outfit text-xl font-bold">Van Dijk Admin</h1>
        </div>
        
        <nav className="px-4 pb-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors',
                activeTab === item.id
                  ? 'bg-water-blue text-white'
                  : 'text-gray-300 hover:bg-white/10'
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="mt-auto p-4 border-t border-white/10">
          <button
            onClick={() => setIsLoggedIn(false)}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Uitloggen
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-outfit text-2xl font-bold text-deep-navy mb-8">
            Dashboard
          </h2>

          {/* Stats row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-water-blue" />
                </div>
                <span className="text-green-500 text-sm font-medium">+12%</span>
              </div>
              <p className="text-3xl font-bold text-deep-navy">{animatedStats.newLeads}</p>
              <p className="text-steel-gray text-sm">Nieuwe leads</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-emergency-orange" />
                </div>
              </div>
              <p className="text-3xl font-bold text-deep-navy">{animatedStats.openJobs}</p>
              <p className="text-steel-gray text-sm">Openstaande jobs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-green-500 text-sm font-medium">+8%</span>
              </div>
              <p className="text-3xl font-bold text-deep-navy">
                {formatCurrency(animatedStats.monthlyRevenue)}
              </p>
              <p className="text-steel-gray text-sm">Omzet deze maand</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-deep-navy">{animatedStats.satisfiedCustomers}</p>
              <p className="text-steel-gray text-sm">Tevreden klanten</p>
            </motion.div>
          </div>

          {/* Middle section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Today's appointments */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg text-deep-navy">Afspraken vandaag</h3>
                <button className="text-water-blue text-sm hover:underline">
                  Bekijk alle
                </button>
              </div>
              <div className="space-y-3">
                {appointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="flex items-center gap-4 p-4 bg-off-white rounded-xl"
                  >
                    <div className={cn(
                      'w-2 h-12 rounded-full',
                      apt.type === 'spoed' && 'bg-emergency-orange',
                      apt.type === 'onderhoud' && 'bg-green-500',
                      apt.type === 'installatie' && 'bg-water-blue'
                    )} />
                    <div className="flex-1">
                      <p className="font-semibold text-deep-navy">{apt.customer}</p>
                      <p className="text-sm text-steel-gray">{apt.service}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{apt.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity feed */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-deep-navy mb-6">
                Recente activiteit
              </h3>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex gap-3">
                    <div className={cn(
                      'w-2 h-2 rounded-full mt-2 flex-shrink-0',
                      activity.type === 'spoed' && 'bg-emergency-orange',
                      activity.type === 'compleet' && 'bg-green-500',
                      activity.type === 'offerte' && 'bg-water-blue',
                      activity.type === 'klant' && 'bg-purple-500',
                      activity.type === 'afspraak' && 'bg-yellow-500'
                    )} />
                    <div>
                      <p className="text-sm text-gray-700">{activity.description}</p>
                      <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Revenue chart */}
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-deep-navy mb-6">
              Omzet per maand
            </h3>
            <div className="flex items-end gap-4 h-48">
              {monthlyData.map((data, index) => {
                const maxRevenue = Math.max(...monthlyData.map(d => d.revenue))
                const height = (data.revenue / maxRevenue) * 100
                return (
                  <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="w-full bg-emergency-orange/20 rounded-t-lg relative overflow-hidden"
                    >
                      <div className="absolute bottom-0 left-0 right-0 bg-emergency-orange rounded-t-lg" style={{ height: '100%' }} />
                    </motion.div>
                    <span className="text-xs text-gray-500">{data.month}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
