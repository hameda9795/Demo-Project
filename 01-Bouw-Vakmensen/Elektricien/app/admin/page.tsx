"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Zap, 
  Calendar, 
  Package, 
  FileText, 
  AlertTriangle, 
  Clock, 
  CheckCircle, 
  X,
  LogOut,
  User,
  TrendingUp,
  Wrench,
  Phone
} from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data
const emergencyJobs = [
  { id: 1, type: "Stroomstoring", address: "DEMO Laan 12, Eindhoven", time: "15 min geleden", priority: "high", status: "pending" },
  { id: 2, type: "Meterkast defect", address: "Voorbeeldstraat 45, Rotterdam", time: "1 uur geleden", priority: "medium", status: "assigned" },
  { id: 3, type: "Laadpaal storing", address: "Testweg 8, Eindhoven", time: "2 uur geleden", priority: "low", status: "completed" },
]

const appointments = [
  { id: 1, type: "installation", title: "Laadpaal installatie", time: "09:00", client: "J. van Demo", color: "blue" },
  { id: 2, type: "emergency", title: "Spoed: Stroom eruit", time: "11:30", client: "M. Test", color: "red" },
  { id: 3, type: "maintenance", title: "Jaarlijkse inspectie", time: "14:00", client: "B. Voorbeeld", color: "green" },
  { id: 4, type: "installation", title: "Smart home setup", time: "16:30", client: "P. Sample", color: "blue" },
]

const inventory = [
  { item: "Kabels (3x2.5mm)", quantity: "150m", status: "ok" },
  { item: "Automaten (16A)", quantity: "12 stuks", status: "low" },
  { item: "Aardlekschakelaars", quantity: "8 stuks", status: "ok" },
  { item: "Wallbox units", quantity: "3 stuks", status: "ok" },
  { item: "Groepenkasten", quantity: "2 stuks", status: "low" },
]

const revenueData = [
  { name: "Ma", revenue: 2400 },
  { name: "Di", revenue: 1398 },
  { name: "Wo", revenue: 9800 },
  { name: "Do", revenue: 3908 },
  { name: "Vr", revenue: 4800 },
  { name: "Za", revenue: 3800 },
  { name: "Zo", revenue: 4300 },
]

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "demo" && password === "demo123") {
      setIsLoggedIn(true)
      setError("")
    } else {
      setError("Ongeldige inloggegevens. Gebruik demo / demo123")
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-circuit-dark flex items-center justify-center p-4">
        {/* Circuit background */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-20" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full max-w-md"
        >
          <div className="bg-circuit-dark border border-electric-800 rounded-2xl p-8 shadow-2xl">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="inline-flex p-4 bg-gradient-to-br from-electric-600 to-electric-800 rounded-2xl mb-4">
                <Zap className="w-10 h-10 text-white" fill="currentColor" />
              </div>
              <h1 className="text-2xl font-heading font-bold text-white">Admin Dashboard</h1>
              <p className="text-gray-400 mt-2">Stroom & Veiligheid Elektro</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Gebruikersnaam</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-electric-900/50 border border-electric-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 transition-colors"
                  placeholder="demo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Wachtwoord</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-electric-900/50 border border-electric-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 transition-colors"
                  placeholder="demo123"
                />
              </div>
              
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-900/30 border border-red-600/30 rounded-lg text-red-400 text-sm"
                >
                  {error}
                </motion.div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-electric-600 hover:bg-electric-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <User className="w-5 h-5" />
                Inloggen
              </button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-6">
              Demo login: <span className="text-electric-400">demo / demo123</span>
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-circuit-dark">
      {/* Top Navigation */}
      <header className="bg-circuit-dark border-b border-electric-800 sticky top-8 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-electric-600 rounded-lg">
                <Zap className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <h1 className="font-heading font-bold text-white">Admin Dashboard</h1>
                <p className="text-xs text-gray-400">Stroom & Veiligheid Elektro</p>
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
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Openstaande klussen", value: "12", icon: Wrench, color: "blue" },
            { label: "Spoedmeldingen", value: "3", icon: AlertTriangle, color: "red" },
            { label: "Vandaag gepland", value: "5", icon: Calendar, color: "green" },
            { label: "Omzet deze week", value: "€4.2k", icon: TrendingUp, color: "purple" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-electric-900/30 border border-electric-800 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
                <span className="text-2xl font-heading font-bold text-white">{stat.value}</span>
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Emergency Jobs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-electric-900/20 border border-electric-800 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Spoedmeldingen
              </h2>
              <span className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm">
                3 actief
              </span>
            </div>

            <div className="space-y-3">
              {emergencyJobs.map((job) => (
                <div
                  key={job.id}
                  className={`p-4 rounded-xl border ${
                    job.priority === "high"
                      ? "bg-red-900/20 border-red-600/30"
                      : job.priority === "medium"
                      ? "bg-orange-900/20 border-orange-600/30"
                      : "bg-green-900/20 border-green-600/30"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-white">{job.type}</h3>
                        {job.priority === "high" && (
                          <span className="px-2 py-0.5 bg-red-600 text-white text-xs rounded-full">
                            SPOED
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm">{job.address}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {job.time}
                        </span>
                        <span className={`capitalize ${
                          job.status === "pending" ? "text-red-400" :
                          job.status === "assigned" ? "text-orange-400" :
                          "text-green-400"
                        }`}>
                          {job.status === "pending" ? "Wachtend" :
                           job.status === "assigned" ? "Toegewezen" :
                           "Afgerond"}
                        </span>
                      </div>
                    </div>
                    <button className="p-2 bg-electric-600/20 hover:bg-electric-600 text-electric-400 hover:text-white rounded-lg transition-colors">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Inventory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-electric-900/20 border border-electric-800 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                <Package className="w-5 h-5 text-electric-500" />
                Voorraad
              </h2>
            </div>

            <div className="space-y-3">
              {inventory.map((item) => (
                <div
                  key={item.item}
                  className="flex items-center justify-between p-3 bg-electric-900/30 rounded-lg"
                >
                  <div>
                    <p className="text-white text-sm">{item.item}</p>
                    <p className="text-gray-400 text-xs">{item.quantity}</p>
                  </div>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.status === "ok" ? "bg-green-500" : "bg-orange-500"
                    }`}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Calendar & Chart Row */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Today's Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-electric-900/20 border border-electric-800 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-electric-500" />
                Agenda Vandaag
              </h2>
              <span className="text-gray-400 text-sm">
                {new Date().toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long" })}
              </span>
            </div>

            <div className="space-y-3">
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className={`flex items-center gap-4 p-3 rounded-xl border ${
                    apt.color === "red"
                      ? "bg-red-900/20 border-red-600/30"
                      : apt.color === "green"
                      ? "bg-green-900/20 border-green-600/30"
                      : "bg-blue-900/20 border-blue-600/30"
                  }`}
                >
                  <div className={`w-1 h-12 rounded-full ${
                    apt.color === "red" ? "bg-red-500" :
                    apt.color === "green" ? "bg-green-500" :
                    "bg-blue-500"
                  }`} />
                  <div className="flex-1">
                    <p className="font-bold text-white">{apt.title}</p>
                    <p className="text-gray-400 text-sm">{apt.client}</p>
                  </div>
                  <span className="text-white font-mono">{apt.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-electric-900/20 border border-electric-800 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-electric-500" />
                Omzet Deze Week
              </h2>
              <span className="text-green-400 text-sm">+12% vs vorige week</span>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" />
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #1e3a8a",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#fff" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#2563eb"
                    strokeWidth={2}
                    dot={{ fill: "#2563eb" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Invoice Generator Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-electric-900/20 border border-electric-800 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-electric-500" />
              Factuur Generator (Demo)
            </h2>
            <button className="px-4 py-2 bg-electric-600 hover:bg-electric-700 text-white rounded-lg text-sm font-medium transition-colors">
              Nieuwe Factuur
            </button>
          </div>

          <div className="bg-white text-gray-900 rounded-lg p-6 max-w-2xl">
            <div className="border-b-2 border-electric-600 pb-4 mb-4">
              <h3 className="text-2xl font-heading font-bold text-electric-700">Stroom & Veiligheid Elektro</h3>
              <p className="text-gray-600">DEMO Straat 123, 1234 AB Eindhoven</p>
              <p className="text-gray-600">KVK: 12345678 | BTW: NL001234567B01</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <p className="text-gray-500 text-sm">Factuur aan:</p>
                <p className="font-bold">J. van Demo</p>
                <p className="text-gray-600">Voorbeeldlaan 1</p>
                <p className="text-gray-600">1234 AB Eindhoven</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm">Factuurnummer:</p>
                <p className="font-bold">2024-001</p>
                <p className="text-gray-500 text-sm mt-2">Datum:</p>
                <p>{new Date().toLocaleDateString("nl-NL")}</p>
              </div>
            </div>

            <table className="w-full mb-6">
              <thead className="border-b border-gray-300">
                <tr>
                  <th className="text-left py-2">Omschrijving</th>
                  <th className="text-right py-2">Aantal</th>
                  <th className="text-right py-2">Prijs</th>
                  <th className="text-right py-2">Totaal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Meterkast vervanging</td>
                  <td className="text-right">1</td>
                  <td className="text-right">€850,00</td>
                  <td className="text-right">€850,00</td>
                </tr>
                <tr>
                  <td className="py-2">Materialen</td>
                  <td className="text-right">1</td>
                  <td className="text-right">€320,00</td>
                  <td className="text-right">€320,00</td>
                </tr>
                <tr>
                  <td className="py-2">Voorrijkosten</td>
                  <td className="text-right">1</td>
                  <td className="text-right">€45,00</td>
                  <td className="text-right">€45,00</td>
                </tr>
              </tbody>
            </table>

            <div className="border-t border-gray-300 pt-4 flex justify-between">
              <p className="font-bold">Totaal incl. BTW (21%)</p>
              <p className="text-2xl font-bold text-electric-700">€1.487,65</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
