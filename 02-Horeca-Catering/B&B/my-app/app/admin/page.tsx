'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Lock, Users, Coffee, Calendar, MessageSquare, 
  CheckSquare, LogOut, Sun, Moon, Home,
  AlertCircle, CheckCircle, Clock, Search,
  ChevronRight, Star, Utensils, Leaf, Wheat,
  Droplets, Sparkles
} from 'lucide-react'
import { demoBookings, guestbookEntries } from '@/lib/data'

// Admin auth check (demo)
const ADMIN_CREDENTIALS = { username: 'demo', password: 'demo123' }

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [loginError, setLoginError] = useState('')
  const [activeTab, setActiveTab] = useState('dashboard')

  // Check for existing session
  useEffect(() => {
    const session = localStorage.getItem('paradijs-admin')
    if (session === 'authenticated') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginForm.username === ADMIN_CREDENTIALS.username && 
        loginForm.password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true)
      localStorage.setItem('paradijs-admin', 'authenticated')
      setLoginError('')
    } else {
      setLoginError('Ongeldige gebruikersnaam of wachtwoord')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('paradijs-admin')
    setLoginForm({ username: '', password: '' })
  }

  if (!isAuthenticated) {
    return <LoginScreen form={loginForm} setForm={setLoginForm} onSubmit={handleLogin} error={loginError} />
  }

  return (
    <div className="min-h-screen bg-creamy-egg">
      {/* Admin Header */}
      <header className="bg-white border-b border-coffee-brown/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-strawberry-jam rounded-xl flex items-center justify-center text-white">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h1 className="font-lora text-lg font-semibold text-coffee-brown">
                  Het Kleine Paradijs
                </h1>
                <p className="text-xs text-coffee-brown/50">Admin Dashboard</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm text-coffee-brown/70 hover:text-strawberry-jam transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Uitloggen
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: Home },
            { id: 'guests', label: 'Vandaag', icon: Users },
            { id: 'breakfast', label: 'Ontbijt', icon: Coffee },
            { id: 'calendar', label: 'Kalender', icon: Calendar },
            { id: 'reviews', label: 'Gastenboek', icon: MessageSquare },
            { id: 'housekeeping', label: 'Housekeeping', icon: CheckSquare },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-strawberry-jam text-white'
                  : 'bg-white text-coffee-brown hover:bg-coffee-brown/5'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'dashboard' && <DashboardTab />}
            {activeTab === 'guests' && <GuestsTab />}
            {activeTab === 'breakfast' && <BreakfastTab />}
            {activeTab === 'calendar' && <CalendarTab />}
            {activeTab === 'reviews' && <ReviewsTab />}
            {activeTab === 'housekeeping' && <HousekeepingTab />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Demo Banner */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-coffee-brown text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg">
        <AlertCircle className="w-4 h-4" />
        DEMO MODE - Admin Panel
      </div>
    </div>
  )
}

// Login Screen Component
function LoginScreen({ 
  form, 
  setForm, 
  onSubmit, 
  error 
}: { 
  form: { username: string; password: string }
  setForm: React.Dispatch<React.SetStateAction<{ username: string; password: string }>>
  onSubmit: (e: React.FormEvent) => void
  error: string 
}) {
  return (
    <div className="min-h-screen bg-creamy-egg flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 w-full max-w-md shadow-cozy"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-strawberry-jam rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="font-lora text-2xl font-semibold text-coffee-brown mb-1">
            Admin Login
          </h1>
          <p className="text-sm text-coffee-brown/60">
            Het Kleine Paradijs Beheerpaneel
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-xl text-sm flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-coffee-brown mb-2">
              Gebruikersnaam
            </label>
            <input
              type="text"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full px-4 py-3 bg-soft-linen rounded-xl border-0 focus:ring-2 focus:ring-strawberry-jam/50"
              placeholder="demo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-coffee-brown mb-2">
              Wachtwoord
            </label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-3 bg-soft-linen rounded-xl border-0 focus:ring-2 focus:ring-strawberry-jam/50"
              placeholder="demo123"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-strawberry-jam text-white font-medium rounded-xl hover:bg-strawberry-jam/90 transition-colors"
          >
            Inloggen
          </button>
        </form>

        <div className="mt-6 p-4 bg-creamy-egg rounded-xl">
          <p className="text-xs text-coffee-brown/60 text-center">
            <span className="font-medium">Demo credentials:</span><br />
            Gebruikersnaam: demo<br />
            Wachtwoord: demo123
          </p>
        </div>
      </motion.div>
    </div>
  )
}

// Dashboard Tab
function DashboardTab() {
  const today = new Date().toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' })
  
  const stats = [
    { label: 'Aankomst vandaag', value: '2', icon: Users, color: 'bg-fresh-sage' },
    { label: 'Vertrek vandaag', value: '1', icon: CheckCircle, color: 'bg-strawberry-jam' },
    { label: 'Ontbijt morgen', value: '6', icon: Coffee, color: 'bg-honey-gold' },
    { label: 'Bezetting', value: '75%', icon: Home, color: 'bg-coffee-brown' },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="bg-white rounded-3xl p-6 shadow-cozy">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-coffee-brown/60 mb-1">{today}</p>
            <h2 className="font-lora text-2xl font-semibold text-coffee-brown">
              Goedemorgen, Maria! ☕
            </h2>
            <p className="text-coffee-brown/70 mt-1">
              Klaar voor een mooie dag in Het Kleine Paradijs?
            </p>
          </div>
          <div className="w-16 h-16 bg-honey-gold/20 rounded-2xl flex items-center justify-center">
            <Sun className="w-8 h-8 text-honey-gold" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-cozy">
            <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center text-white mb-3`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold text-coffee-brown">{stat.value}</p>
            <p className="text-sm text-coffee-brown/60">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-cozy">
          <h3 className="font-lora text-lg font-semibold text-coffee-brown mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-strawberry-jam" />
            Vandaag op de planning
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-fresh-sage/10 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-fresh-sage" />
              <div className="flex-1">
                <p className="text-sm font-medium text-coffee-brown">Aankomst: Familie Van Dijk</p>
                <p className="text-xs text-coffee-brown/60">14:00 - De Tuinkamer</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-strawberry-jam/10 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-strawberry-jam" />
              <div className="flex-1">
                <p className="text-sm font-medium text-coffee-brown">Vertrek: Sophie Bakker</p>
                <p className="text-xs text-coffee-brown/60">11:00 - De Attic Suite</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-honey-gold/10 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-honey-gold" />
              <div className="flex-1">
                <p className="text-sm font-medium text-coffee-brown">Aankomst: Peter & Linda</p>
                <p className="text-xs text-coffee-brown/60">16:00 - Het Romantisch Hoekje</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-cozy">
          <h3 className="font-lora text-lg font-semibold text-coffee-brown mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-strawberry-jam" />
            Speciale verzoeken
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-soft-linen rounded-xl">
              <p className="text-sm font-medium text-coffee-brown">🎂 Jubileum</p>
              <p className="text-xs text-coffee-brown/60">Familie Van Dijk - 25 jaar getrouwd. Extra bloemen op de kamer.</p>
            </div>
            <div className="p-3 bg-soft-linen rounded-xl">
              <p className="text-sm font-medium text-coffee-brown">🌾 Glutenvrij</p>
              <p className="text-xs text-coffee-brown/60">Peter & Linda - speciaal brood nodig</p>
            </div>
            <div className="p-3 bg-soft-linen rounded-xl">
              <p className="text-sm font-medium text-coffee-brown">🌙 Late aankomst</p>
              <p className="text-xs text-coffee-brown/60">Nachtslot activeren na 20:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Guests Tab
function GuestsTab() {
  return (
    <div className="bg-white rounded-3xl shadow-cozy overflow-hidden">
      <div className="p-6 border-b border-coffee-brown/10">
        <h3 className="font-lora text-lg font-semibold text-coffee-brown">Vandaag&apos;s Gasten</h3>
      </div>
      <div className="divide-y divide-coffee-brown/10">
        {demoBookings.map((booking) => (
          <div key={booking.id} className="p-6 hover:bg-soft-linen/50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className={`w-3 h-3 rounded-full mt-2 ${
                  booking.status === 'confirmed' ? 'bg-fresh-sage' : 'bg-honey-gold'
                }`} />
                <div>
                  <h4 className="font-medium text-coffee-brown">{booking.guestName}</h4>
                  <p className="text-sm text-coffee-brown/60">
                    Kamer: {booking.roomId === '1' && 'De Zonnebloem'}
                    {booking.roomId === '2' && 'Het Romantisch Hoekje'}
                    {booking.roomId === '3' && 'De Tuinkamer'}
                    {booking.roomId === '4' && 'De Attic Suite'}
                  </p>
                  <p className="text-xs text-coffee-brown/40">
                    {new Date(booking.checkIn).toLocaleDateString('nl-NL')} - {new Date(booking.checkOut).toLocaleDateString('nl-NL')}
                  </p>
                  {booking.notes && (
                    <p className="text-xs text-strawberry-jam mt-1">📝 {booking.notes}</p>
                  )}
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                booking.status === 'confirmed' 
                  ? 'bg-fresh-sage/10 text-fresh-sage' 
                  : 'bg-honey-gold/10 text-honey-gold'
              }`}>
                {booking.status === 'confirmed' ? 'Bevestigd' : 'In behandeling'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Breakfast Tab
function BreakfastTab() {
  const breakfastCount = 6
  const dietaryCounts = {
    vegetarian: 2,
    vegan: 1,
    glutenFree: 2,
    lactoseFree: 1,
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-cozy">
        <h3 className="font-lora text-lg font-semibold text-coffee-brown mb-6">
          Ontbijt voor morgen
        </h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-soft-linen rounded-2xl">
            <Coffee className="w-6 h-6 text-coffee-brown mx-auto mb-2" />
            <p className="text-2xl font-bold text-coffee-brown">{breakfastCount}</p>
            <p className="text-xs text-coffee-brown/60">Personen</p>
          </div>
          <div className="text-center p-4 bg-fresh-sage/10 rounded-2xl">
            <Leaf className="w-6 h-6 text-fresh-sage mx-auto mb-2" />
            <p className="text-2xl font-bold text-fresh-sage">{dietaryCounts.vegetarian}</p>
            <p className="text-xs text-coffee-brown/60">Vegetarisch</p>
          </div>
          <div className="text-center p-4 bg-honey-gold/10 rounded-2xl">
            <Wheat className="w-6 h-6 text-honey-gold mx-auto mb-2" />
            <p className="text-2xl font-bold text-honey-gold">{dietaryCounts.glutenFree}</p>
            <p className="text-xs text-coffee-brown/60">Glutenvrij</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-2xl">
            <Droplets className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-500">{dietaryCounts.lactoseFree}</p>
            <p className="text-xs text-coffee-brown/60">Lactosevrij</p>
          </div>
        </div>

        <h4 className="font-medium text-coffee-brown mb-3">Dieetoverzicht per gast</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-soft-linen rounded-xl">
            <span className="text-sm text-coffee-brown">Familie Van Dijk</span>
            <span className="text-xs px-2 py-1 bg-fresh-sage/10 text-fresh-sage rounded-full">Vegetarisch</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-soft-linen rounded-xl">
            <span className="text-sm text-coffee-brown">Peter & Linda</span>
            <span className="text-xs px-2 py-1 bg-honey-gold/10 text-honey-gold rounded-full">Glutenvrij</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-soft-linen rounded-xl">
            <span className="text-sm text-coffee-brown">Sophie Bakker</span>
            <span className="text-xs text-coffee-brown/60">Geen speciale wensen</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-soft-linen rounded-xl">
            <span className="text-sm text-coffee-brown">De Jong familie</span>
            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">Lactosevrij</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Calendar Tab
function CalendarTab() {
  const days = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo']
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' })

  return (
    <div className="bg-white rounded-3xl p-6 shadow-cozy">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-lora text-lg font-semibold text-coffee-brown">{currentMonth}</h3>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-fresh-sage" />
            <span className="text-coffee-brown/60">Bezet</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-honey-gold" />
            <span className="text-coffee-brown/60">Optie</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-coffee-brown/20" />
            <span className="text-coffee-brown/60">Vrij</span>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-coffee-brown/50 py-2">
            {day}
          </div>
        ))}
        {/* Demo calendar days */}
        {[...Array(31)].map((_, i) => {
          const day = i + 1
          const isToday = day === currentDate.getDate()
          const isBooked = [5, 6, 7, 12, 13, 14, 15, 20, 21, 22].includes(day)
          const isOption = [8, 18, 25].includes(day)

          return (
            <div
              key={i}
              className={`
                aspect-square flex items-center justify-center text-sm rounded-lg
                ${isToday ? 'ring-2 ring-strawberry-jam font-bold' : ''}
                ${isBooked ? 'bg-fresh-sage/20 text-fresh-sage' : ''}
                ${isOption ? 'bg-honey-gold/20 text-honey-gold' : ''}
                ${!isBooked && !isOption ? 'text-coffee-brown/70 hover:bg-soft-linen' : ''}
              `}
            >
              {day}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Reviews Tab
function ReviewsTab() {
  return (
    <div className="bg-white rounded-3xl shadow-cozy overflow-hidden">
      <div className="p-6 border-b border-coffee-brown/10">
        <h3 className="font-lora text-lg font-semibold text-coffee-brown">Gastenboek Beheer</h3>
      </div>
      <div className="divide-y divide-coffee-brown/10">
        {guestbookEntries.map((entry) => (
          <div key={entry.id} className="p-6">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-medium text-coffee-brown">{entry.name}</h4>
                <p className="text-xs text-coffee-brown/50">{entry.stayType}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-fresh-sage/10 text-fresh-sage text-xs rounded-full">
                  Goedgekeurd
                </span>
              </div>
            </div>
            <p className="text-sm text-coffee-brown/70 line-clamp-2">&ldquo;{entry.story}&rdquo;</p>
            <div className="flex items-center gap-2 mt-3">
              <Star className="w-4 h-4 text-honey-gold fill-honey-gold" />
              <span className="text-sm text-coffee-brown">{entry.rating}.0</span>
              <span className="text-xs text-coffee-brown/40 ml-auto">
                {new Date(entry.date).toLocaleDateString('nl-NL')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Housekeeping Tab
function HousekeepingTab() {
  const tasks = [
    { id: '1', room: 'De Zonnebloem', task: 'Bed verschonen', status: 'done' },
    { id: '2', room: 'Het Romantisch Hoekje', task: 'Handdoeken vervangen', status: 'pending' },
    { id: '3', room: 'De Tuinkamer', task: 'Minibar aanvullen', status: 'pending' },
    { id: '4', room: 'De Attic Suite', task: 'Schoonmaken', status: 'done' },
    { id: '5', room: 'Keuken', task: 'Ontbijt voorbereiden', status: 'pending' },
    { id: '6', room: 'Tuin', task: 'Tafels klaarzetten', status: 'pending' },
  ]

  return (
    <div className="bg-white rounded-3xl shadow-cozy overflow-hidden">
      <div className="p-6 border-b border-coffee-brown/10">
        <h3 className="font-lora text-lg font-semibold text-coffee-brown">Housekeeping Checklist</h3>
      </div>
      <div className="divide-y divide-coffee-brown/10">
        {tasks.map((task) => (
          <label
            key={task.id}
            className="flex items-center gap-4 p-6 cursor-pointer hover:bg-soft-linen/30 transition-colors"
          >
            <input
              type="checkbox"
              defaultChecked={task.status === 'done'}
              className="w-5 h-5 rounded border-coffee-brown/30 text-strawberry-jam focus:ring-strawberry-jam"
            />
            <div className="flex-1">
              <p className={`font-medium ${task.status === 'done' ? 'line-through text-coffee-brown/40' : 'text-coffee-brown'}`}>
                {task.task}
              </p>
              <p className="text-xs text-coffee-brown/50">{task.room}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}
