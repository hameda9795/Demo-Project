"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Zap, 
  User, 
  Home, 
  AlertTriangle, 
  FileText, 
  Phone,
  LogOut,
  Activity,
  Calendar,
  CheckCircle,
  Wrench,
  TrendingDown,
  TrendingUp
} from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import Image from "next/image"

// Mock data
const energyData = [
  { day: "Ma", kwh: 12.5 },
  { day: "Di", kwh: 10.2 },
  { day: "Wo", kwh: 14.8 },
  { day: "Do", kwh: 11.5 },
  { day: "Vr", kwh: 13.2 },
  { day: "Za", kwh: 18.5 },
  { day: "Zo", kwh: 16.3 },
]

const serviceHistory = [
  { id: 1, date: "15 januari 2024", type: "Jaarlijkse inspectie", technician: "M. Jansen", status: "completed", image: "/images/elektricien/hero/electrician-work.svg" },
  { id: 2, date: "3 november 2023", type: "Laadpaal installatie", technician: "P. de Vries", status: "completed", image: "/images/elektricien/projects/laadpaal-driveway.svg" },
  { id: 3, date: "12 augustus 2023", type: "Meterkast uitbreiding", technician: "M. Jansen", status: "completed", image: "/images/elektricien/hero/meterkast-open.svg" },
]

const circuitStatus = [
  { name: "Verlichting", status: "ok", load: 45 },
  { name: "Stopcontacten", status: "ok", load: 62 },
  { name: "Keuken", status: "warning", load: 78 },
  { name: "Laadpaal", status: "ok", load: 85 },
  { name: "Wasmachine", status: "ok", load: 30 },
]

export default function ClientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-circuit-dark flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-circuit-pattern opacity-20" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full max-w-md"
        >
          <div className="bg-circuit-dark border border-electric-800 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex p-4 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl mb-4">
                <Home className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl font-heading font-bold text-white">Mijn Stroom</h1>
              <p className="text-gray-400 mt-2">Klantenportaal Stroom & Veiligheid</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">E-mailadres</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-electric-900/50 border border-electric-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="klant@voorbeeld.nl"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Wachtwoord</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-electric-900/50 border border-electric-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
              >
                Inloggen
              </button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-6">
              Demo - gebruik willekeurige gegevens
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-circuit-dark">
      {/* Header */}
      <header className="bg-circuit-dark border-b border-electric-800 sticky top-8 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-600 rounded-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-heading font-bold text-white">Mijn Stroom</h1>
                <p className="text-xs text-gray-400">Welkom, J. van Demo</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsLoggedIn(false)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Uitloggen</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Emergency Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <motion.a
            href="tel:020-1234567"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-red-600/30"
          >
            <AlertTriangle className="w-6 h-6" />
            Storing Melden (SPOED)
            <Phone className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Circuit Diagram Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-electric-900/20 border border-electric-800 rounded-2xl p-6 mb-8"
        >
          <h2 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-electric-500" />
            Mijn Installatie
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {circuitStatus.map((circuit, index) => (
              <motion.div
                key={circuit.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`p-4 rounded-xl border ${
                  circuit.status === "warning"
                    ? "bg-orange-900/20 border-orange-600/30"
                    : "bg-electric-900/30 border-electric-800"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-white">{circuit.name}</span>
                  <div className={`w-3 h-3 rounded-full ${
                    circuit.status === "warning" ? "bg-orange-500 animate-pulse" : "bg-green-500"
                  }`} />
                </div>
                
                <div className="h-2 bg-electric-900 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${
                      circuit.status === "warning" ? "bg-orange-500" : "bg-green-500"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${circuit.load}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                  <span>Belasting</span>
                  <span>{circuit.load}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Energy Usage Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-electric-900/20 border border-electric-800 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-electric-500" />
                Energieverbruik
              </h2>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-400">Deze week:</span>
                <span className="text-green-400 font-bold">97 kWh</span>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={energyData}>
                  <defs>
                    <linearGradient id="colorKwh" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" />
                  <XAxis dataKey="day" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #1e3a8a",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="kwh"
                    stroke="#2563eb"
                    fillOpacity={1}
                    fill="url(#colorKwh)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center p-3 bg-electric-900/30 rounded-lg">
                <p className="text-gray-400 text-xs">Vandaag</p>
                <p className="text-white font-bold">12.5 kWh</p>
              </div>
              <div className="text-center p-3 bg-electric-900/30 rounded-lg">
                <p className="text-gray-400 text-xs">Verwachte kosten</p>
                <p className="text-white font-bold">€28,50</p>
              </div>
              <div className="text-center p-3 bg-electric-900/30 rounded-lg">
                <p className="text-gray-400 text-xs">Vs vorige week</p>
                <p className="text-green-400 font-bold flex items-center justify-center gap-1">
                  <TrendingDown className="w-3 h-3" />
                  -8%
                </p>
              </div>
            </div>
          </motion.div>

          {/* Service History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-electric-900/20 border border-electric-800 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                <Wrench className="w-5 h-5 text-electric-500" />
                Service Geschiedenis
              </h2>
              <button className="text-electric-400 hover:text-electric-300 text-sm">
                Bekijk alles
              </button>
            </div>

            <div className="space-y-4">
              {serviceHistory.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex gap-4 p-4 bg-electric-900/30 rounded-xl border border-electric-800 hover:border-electric-700 transition-colors"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.type}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-white">{service.type}</h3>
                      {service.status === "completed" && (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {service.date}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Technicus: {service.technician}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Upcoming Appointment */}
            <div className="mt-6 p-4 bg-green-900/20 border border-green-600/30 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-green-400" />
                <h3 className="font-bold text-white">Aankomende Afspraak</h3>
              </div>
              <p className="text-gray-400 text-sm">Jaarlijkse inspectie - 15 januari 2025</p>
              <p className="text-gray-500 text-xs mt-1">08:00 - 10:00 | Technicus: M. Jansen</p>
            </div>
          </motion.div>
        </div>

        {/* Documents Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-electric-900/20 border border-electric-800 rounded-2xl p-6"
        >
          <h2 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-electric-500" />
            Documenten
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Inspectierapport 2024.pdf", type: "PDF", size: "2.4 MB" },
              { name: "Laadpaal handleiding.pdf", type: "PDF", size: "1.8 MB" },
              { name: "Factuur #2024-001.pdf", type: "PDF", size: "456 KB" },
            ].map((doc) => (
              <div
                key={doc.name}
                className="flex items-center gap-3 p-4 bg-electric-900/30 rounded-xl border border-electric-800 hover:border-electric-600 transition-colors cursor-pointer"
              >
                <div className="p-2 bg-red-600/20 rounded-lg">
                  <FileText className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{doc.name}</p>
                  <p className="text-gray-500 text-xs">{doc.type} • {doc.size}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
