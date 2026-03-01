'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  User, Lock, LogOut, Home, Utensils, MessageSquare, 
  CloudRain, Sun, Cloud, FileText, Send, Check,
  Key, Car, Coffee, Clock, ChevronRight, Heart,
  Sparkles, Moon, Umbrella
} from 'lucide-react'
import { rooms } from '@/lib/data'

// Demo guest credentials
const GUEST_CREDENTIALS = { username: 'gast', password: 'gast123' }

const breakfastOptions = [
  { id: 'full', label: 'Het complete ontbijt', description: 'Brood, kaas, vleeswaren, ei, fruit, yoghurt', icon: '🥐' },
  { id: 'continental', label: 'Continentaal', description: 'Croissant, jam, koffie, jus d\'orange', icon: '🥐' },
  { id: 'healthy', label: 'Gezond', description: 'Yoghurt, granola, vers fruit, groene thee', icon: '🥗' },
  { id: 'early', label: 'Vroeg vertrek', description: 'Ontbijtpakket mee voor onderweg', icon: '📦' },
]

export default function GuestPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [loginError, setLoginError] = useState('')
  const [activeTab, setActiveTab] = useState('welcome')
  const [selectedBreakfast, setSelectedBreakfast] = useState('')
  const [messageSent, setMessageSent] = useState(false)
  const [specialRequests, setSpecialRequests] = useState('')

  useEffect(() => {
    const session = localStorage.getItem('paradijs-guest')
    if (session === 'authenticated') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginForm.username === GUEST_CREDENTIALS.username && 
        loginForm.password === GUEST_CREDENTIALS.password) {
      setIsAuthenticated(true)
      localStorage.setItem('paradijs-guest', 'authenticated')
      setLoginError('')
    } else {
      setLoginError('Ongeldige inloggegevens')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('paradijs-guest')
    setLoginForm({ username: '', password: '' })
  }

  const handleBreakfastSubmit = () => {
    setMessageSent(true)
    setTimeout(() => setMessageSent(false), 3000)
  }

  if (!isAuthenticated) {
    return <GuestLogin form={loginForm} setForm={setLoginForm} onSubmit={handleLogin} error={loginError} />
  }

  return (
    <div className="min-h-screen bg-creamy-egg">
      {/* Portal Header */}
      <header className="bg-white border-b border-coffee-brown/10 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-fresh-sage rounded-xl flex items-center justify-center text-white">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h1 className="font-lora text-lg font-semibold text-coffee-brown">
                  Mijn Verblijf
                </h1>
                <p className="text-xs text-coffee-brown/50">Gast Portaal</p>
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'welcome', label: 'Welkom', icon: Home },
            { id: 'breakfast', label: 'Ontbijt', icon: Utensils },
            { id: 'weather', label: 'Weer', icon: Sun },
            { id: 'guide', label: 'Gids', icon: FileText },
            { id: 'message', label: 'Bericht', icon: MessageSquare },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-fresh-sage text-white'
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
            {activeTab === 'welcome' && (
              <WelcomeTab room={rooms[2]} onBreakfastClick={() => setActiveTab('breakfast')} />
            )}
            {activeTab === 'breakfast' && (
              <BreakfastTab 
                selected={selectedBreakfast} 
                onSelect={setSelectedBreakfast}
                onSubmit={handleBreakfastSubmit}
                submitted={messageSent}
                specialRequests={specialRequests}
                setSpecialRequests={setSpecialRequests}
              />
            )}
            {activeTab === 'weather' && <WeatherTab />}
            {activeTab === 'guide' && <GuideTab />}
            {activeTab === 'message' && <MessageTab />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Demo Banner */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-coffee-brown text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg">
        <Sparkles className="w-4 h-4" />
        DEMO - Gast Portaal
      </div>
    </div>
  )
}

// Guest Login Component
function GuestLogin({ 
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
          <div className="w-16 h-16 bg-fresh-sage rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
            <User className="w-8 h-8" />
          </div>
          <h1 className="font-lora text-2xl font-semibold text-coffee-brown mb-1">
            Mijn Verblijf
          </h1>
          <p className="text-sm text-coffee-brown/60">
            Log in om je verblijf te beheren
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-xl text-sm">
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
              className="w-full px-4 py-3 bg-soft-linen rounded-xl border-0 focus:ring-2 focus:ring-fresh-sage/50"
              placeholder="gast"
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
              className="w-full px-4 py-3 bg-soft-linen rounded-xl border-0 focus:ring-2 focus:ring-fresh-sage/50"
              placeholder="gast123"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-fresh-sage text-white font-medium rounded-xl hover:bg-fresh-sage/90 transition-colors"
          >
            Inloggen
          </button>
        </form>

        <div className="mt-6 p-4 bg-creamy-egg rounded-xl">
          <p className="text-xs text-coffee-brown/60 text-center">
            <span className="font-medium">Demo login:</span><br />
            Gebruikersnaam: gast<br />
            Wachtwoord: gast123
          </p>
        </div>
      </motion.div>
    </div>
  )
}

// Welcome Tab
function WelcomeTab({ room, onBreakfastClick }: { room: typeof rooms[0], onBreakfastClick: () => void }) {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-white rounded-3xl p-6 shadow-cozy">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src={room.images[0]}
              alt={room.name}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="font-lora text-2xl font-semibold text-coffee-brown">
              Welkom terug, Familie Van Dijk! 👋
            </h2>
            <p className="text-coffee-brown/70 mt-1">
              Jullie verblijven in <span className="font-medium text-strawberry-jam">{room.name}</span>
            </p>
            <p className="text-sm text-coffee-brown/50 mt-2">
              Check-in: 14:00 | Check-out: 11:00 (3 nachten)
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-5 shadow-cozy">
          <div className="w-10 h-10 bg-strawberry-jam/10 rounded-xl flex items-center justify-center text-strawberry-jam mb-3">
            <Key className="w-5 h-5" />
          </div>
          <h3 className="font-medium text-coffee-brown mb-1">Deurcode</h3>
          <p className="text-2xl font-bold text-coffee-brown">1234</p>
          <p className="text-xs text-coffee-brown/50">Hoofdingang & jullie kamer</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-cozy">
          <div className="w-10 h-10 bg-honey-gold/10 rounded-xl flex items-center justify-center text-honey-gold mb-3">
            <Car className="w-5 h-5" />
          </div>
          <h3 className="font-medium text-coffee-brown mb-1">Parkeren</h3>
          <p className="text-sm text-coffee-brown/70">Gratis parkeerplaats</p>
          <p className="text-xs text-coffee-brown/50">Voor het pand</p>
        </div>
      </div>

      {/* Breakfast CTA */}
      <div 
        onClick={onBreakfastClick}
        className="bg-gradient-to-r from-strawberry-jam to-honey-gold rounded-3xl p-6 text-white cursor-pointer hover:shadow-lg transition-shadow"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-lora text-lg font-semibold">Wat wil je eten?</h3>
              <p className="text-white/80 text-sm">Kies je ontbijt voor morgen</p>
            </div>
          </div>
          <ChevronRight className="w-6 h-6" />
        </div>
      </div>

      {/* WiFi Info */}
      <div className="bg-white rounded-2xl p-5 shadow-cozy">
        <h3 className="font-medium text-coffee-brown mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-honey-gold" />
          WiFi
        </h3>
        <div className="flex items-center justify-between p-3 bg-soft-linen rounded-xl">
          <div>
            <p className="text-sm text-coffee-brown/60">Netwerk</p>
            <p className="font-medium text-coffee-brown">KleineParadijs_Guest</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-coffee-brown/60">Wachtwoord</p>
            <p className="font-medium text-coffee-brown">Welkom2024!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Breakfast Tab
function BreakfastTab({ 
  selected, 
  onSelect, 
  onSubmit, 
  submitted,
  specialRequests,
  setSpecialRequests 
}: { 
  selected: string
  onSelect: (id: string) => void
  onSubmit: () => void
  submitted: boolean
  specialRequests: string
  setSpecialRequests: (val: string) => void
}) {
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 text-center shadow-cozy"
      >
        <div className="w-16 h-16 bg-fresh-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-fresh-sage" />
        </div>
        <h3 className="font-lora text-xl font-semibold text-coffee-brown mb-2">
          Ontbijtkeuze opgeslagen!
        </h3>
        <p className="text-coffee-brown/70">
          We zien je morgen om 9:00 voor het ontbijt. Smakelijk!
        </p>
      </motion.div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-cozy">
        <h3 className="font-lora text-xl font-semibold text-coffee-brown mb-2">
          Wat wil je eten morgen?
        </h3>
        <p className="text-coffee-brown/70 mb-6">
          Kies je ontbijt voor morgenochtend (08:00 - 10:30)
        </p>

        <div className="space-y-3">
          {breakfastOptions.map((option) => (
            <label
              key={option.id}
              className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-colors ${
                selected === option.id
                  ? 'border-fresh-sage bg-fresh-sage/5'
                  : 'border-transparent bg-soft-linen hover:bg-soft-linen/70'
              }`}
            >
              <input
                type="radio"
                name="breakfast"
                value={option.id}
                checked={selected === option.id}
                onChange={() => onSelect(option.id)}
                className="w-5 h-5 text-fresh-sage focus:ring-fresh-sage"
              />
              <div className="text-2xl">{option.icon}</div>
              <div className="flex-1">
                <p className="font-medium text-coffee-brown">{option.label}</p>
                <p className="text-sm text-coffee-brown/60">{option.description}</p>
              </div>
            </label>
          ))}
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-coffee-brown mb-2">
            Speciale verzoeken
          </label>
          <textarea
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            className="w-full px-4 py-3 bg-soft-linen rounded-xl border-0 focus:ring-2 focus:ring-fresh-sage/50 resize-none"
            rows={3}
            placeholder="Bijv. Extra kussen, late check-out verzoek..."
          />
        </div>

        <button
          onClick={onSubmit}
          disabled={!selected}
          className="w-full mt-4 py-3 bg-fresh-sage text-white font-medium rounded-xl hover:bg-fresh-sage/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Check className="w-4 h-4" />
          Bevestig keuze
        </button>
      </div>
    </div>
  )
}

// Weather Tab
function WeatherTab() {
  const hourly = [
    { time: 'Nu', temp: 18, icon: Sun },
    { time: '14:00', temp: 20, icon: Sun },
    { time: '17:00', temp: 19, icon: Cloud },
    { time: '20:00', temp: 16, icon: Moon },
    { time: 'Morgen', temp: 17, icon: CloudRain },
  ]

  return (
    <div className="space-y-6">
      {/* Current Weather */}
      <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 text-sm mb-1">Vandaag in Dorpje</p>
            <p className="text-5xl font-bold">18°</p>
            <p className="text-white/90 mt-2">Zonnig met wat wolken</p>
          </div>
          <Sun className="w-20 h-20 text-yellow-300" />
        </div>
        
        <div className="mt-6 p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Umbrella className="w-5 h-5" />
            <p className="text-sm">
              Perfect weer voor een fietstocht! Neem wel een jas mee voor vanavond.
            </p>
          </div>
        </div>
      </div>

      {/* Hourly Forecast */}
      <div className="bg-white rounded-3xl p-6 shadow-cozy">
        <h3 className="font-medium text-coffee-brown mb-4">Verwachting</h3>
        <div className="flex justify-between">
          {hourly.map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-xs text-coffee-brown/50 mb-2">{item.time}</p>
              <item.icon className={`w-6 h-6 mx-auto mb-2 ${
                item.icon === Sun ? 'text-honey-gold' :
                item.icon === CloudRain ? 'text-blue-400' :
                'text-coffee-brown/50'
              }`} />
              <p className="font-medium text-coffee-brown">{item.temp}°</p>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Suggestion */}
      <div className="bg-white rounded-3xl p-6 shadow-cozy">
        <h3 className="font-medium text-coffee-brown mb-3 flex items-center gap-2">
          <Heart className="w-5 h-5 text-strawberry-jam" />
          Activiteitentip
        </h3>
        <p className="text-coffee-brown/70">
          Vandaag is het perfect weer voor de <span className="font-medium text-fresh-sage">Geheime Tuin Route</span>. 
          Een prachtige wandeling van 20 minuten door oude boomgaarden. 
          Jan heeft de routebeschrijving voor je klaarliggen bij de ontbijttafel!
        </p>
      </div>
    </div>
  )
}

// Guide Tab
function GuideTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-cozy">
        <h3 className="font-lora text-xl font-semibold text-coffee-brown mb-4">
          Maria&apos;s Favorieten
        </h3>
        <p className="text-coffee-brown/70 mb-6">
          Onze persoonlijke gids vol met tips die je nergens anders vindt.
        </p>

        <div className="space-y-4">
          <div className="p-4 bg-soft-linen rounded-2xl">
            <h4 className="font-medium text-coffee-brown mb-1">🥐 Bakkerij Van den Berg</h4>
            <p className="text-sm text-coffee-brown/60">
              De beste appelflappen van het dorp. Open vanaf 7:00 uur.
            </p>
          </div>
          <div className="p-4 bg-soft-linen rounded-2xl">
            <h4 className="font-medium text-coffee-brown mb-1">🌳 Geheime Tuin Route</h4>
            <p className="text-sm text-coffee-brown/60">
              Onze favoriete ochtendwandeling door de oude boomgaarden.
            </p>
          </div>
          <div className="p-4 bg-soft-linen rounded-2xl">
            <h4 className="font-medium text-coffee-brown mb-1">☕ Lunchcafé De Hoek</h4>
            <p className="text-sm text-coffee-brown/60">
              Heerlijke soepen en broodjes. Vraag naar de dagsoep!
            </p>
          </div>
        </div>

        <button className="w-full mt-6 py-3 bg-strawberry-jam text-white font-medium rounded-xl hover:bg-strawberry-jam/90 transition-colors flex items-center justify-center gap-2">
          <FileText className="w-4 h-4" />
          Download PDF Gids
        </button>
      </div>
    </div>
  )
}

// Message Tab
function MessageTab() {
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setMessage('')
    }, 3000)
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 text-center shadow-cozy"
      >
        <div className="w-16 h-16 bg-fresh-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-fresh-sage" />
        </div>
        <h3 className="font-lora text-xl font-semibold text-coffee-brown mb-2">
          Bericht verstuurd!
        </h3>
        <p className="text-coffee-brown/70">
          We reageren zo snel mogelijk.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Host Message */}
      <div className="bg-fresh-sage/10 rounded-3xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-fresh-sage rounded-full flex items-center justify-center text-white flex-shrink-0">
            <User className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium text-coffee-brown mb-1">Maria & Jan</p>
            <p className="text-sm text-coffee-brown/70">
              &ldquo;Zien we jullie morgen om 9:00 uur voor het ontbijt? 
              Het wordt mooi weer, dus we kunnen buiten zitten! ☀️&rdquo;
            </p>
            <p className="text-xs text-coffee-brown/40 mt-2">Vandaag, 08:30</p>
          </div>
        </div>
      </div>

      {/* Reply Form */}
      <div className="bg-white rounded-3xl p-6 shadow-cozy">
        <h3 className="font-medium text-coffee-brown mb-4">Stuur een bericht</h3>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 bg-soft-linen rounded-xl border-0 focus:ring-2 focus:ring-fresh-sage/50 resize-none mb-4"
          rows={4}
          placeholder="Typ je bericht..."
        />
        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className="w-full py-3 bg-fresh-sage text-white font-medium rounded-xl hover:bg-fresh-sage/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          Verstuur bericht
        </button>
      </div>
    </div>
  )
}
