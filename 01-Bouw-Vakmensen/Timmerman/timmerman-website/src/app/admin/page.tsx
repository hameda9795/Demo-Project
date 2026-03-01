/**
 * Admin Panel (/admin)
 * Van den Berg Timmerwerken
 * 
 * Dark wood aesthetic dashboard
 * - Pre-filled login (demo/demo123)
 * - Stats overview
 * - Wood inventory visualization
 * - Project timeline
 * - Quote generator
 * 
 * DEMO - All data is fictional
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard,
  Package,
  Users,
  FileText,
  Calendar,
  LogOut,
  AlertTriangle,
  Calculator,
  Check,
  X
} from "lucide-react";
import { ADMIN_CREDENTIALS, WOOD_STOCK } from "@/lib/data";

// Navigation items
const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "inventory", label: "Voorraad", icon: Package },
  { id: "projects", label: "Projecten", icon: FileText },
  { id: "quotes", label: "Offertes", icon: Calculator },
  { id: "calendar", label: "Kalender", icon: Calendar },
];

// Demo stats
const DASHBOARD_STATS = {
  activeProjects: 12,
  quotesThisMonth: 28,
  woodStock: 1535,
  totalCustomers: 156,
};

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: "demo", password: "demo123" });
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showQuoteGenerator, setShowQuoteGenerator] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === ADMIN_CREDENTIALS.username && 
        credentials.password === ADMIN_CREDENTIALS.password) {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Ongeldige inloggegevens");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#2D1B18] flex items-center justify-center p-4">
        {/* Wood grain background */}
        <div 
          className="fixed inset-0 opacity-10"
          style={{
            background: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 3px,
                #D4AF37 3px,
                #D4AF37 4px
              )
            `,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full max-w-md"
        >
          {/* Demo Warning */}
          <div className="mb-6 p-4 bg-red-600/20 border border-red-500/30 rounded-xl text-center">
            <p className="text-red-200 text-sm">
              ⚠️ DEMO - Admin panel voor demonstratiedoeleinden
            </p>
          </div>

          <div className="bg-[#3E2723] rounded-2xl p-8 shadow-2xl border border-[#D4AF37]/20">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#8B5A2B] to-[#D4AF37] flex items-center justify-center">
                <LayoutDashboard className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-playfair text-2xl font-bold text-[#F5F5DC]">
                Admin Login
              </h1>
              <p className="text-[#F5F5DC]/60 text-sm mt-1">
                Van den Berg Timmerwerken
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#F5F5DC]/80 mb-2">
                  Gebruikersnaam
                </label>
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials(c => ({ ...c, username: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#2D1B18] border border-[#8B5A2B]/30 rounded-lg text-[#F5F5DC] placeholder-[#F5F5DC]/40 focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#F5F5DC]/80 mb-2">
                  Wachtwoord
                </label>
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials(c => ({ ...c, password: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#2D1B18] border border-[#8B5A2B]/30 rounded-lg text-[#F5F5DC] placeholder-[#F5F5DC]/40 focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              {loginError && (
                <p className="text-red-400 text-sm">{loginError}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#8B5A2B] to-[#D4AF37] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Inloggen
              </button>
            </form>

            <p className="text-center text-[#F5F5DC]/40 text-xs mt-6">
              DEMO: Gebruik demo / demo123
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2D1B18] text-[#F5F5DC]">
      {/* Header */}
      <header className="bg-[#3E2723] border-b border-[#8B5A2B]/20 sticky top-0 z-30">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B5A2B] to-[#D4AF37] flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-playfair font-bold">Admin Panel</h1>
              <p className="text-xs text-[#F5F5DC]/50">DEMO MODE</p>
            </div>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-[#F5F5DC]/70 hover:text-[#F5F5DC] transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Uitloggen
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#3E2723] min-h-[calc(100vh-73px)] border-r border-[#8B5A2B]/20 hidden md:block">
          <nav className="p-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? "bg-[#8B5A2B] text-white"
                    : "text-[#F5F5DC]/70 hover:bg-[#8B5A2B]/20 hover:text-[#F5F5DC]"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Mobile Nav */}
          <div className="md:hidden mb-6 overflow-x-auto">
            <div className="flex gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm ${
                    activeTab === item.id
                      ? "bg-[#8B5A2B] text-white"
                      : "bg-[#3E2723] text-[#F5F5DC]/70"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Huidige Projecten", value: DASHBOARD_STATS.activeProjects.toString(), icon: FileText, change: "+2" },
                  { label: "Offertes deze maand", value: DASHBOARD_STATS.quotesThisMonth.toString(), icon: Calculator, change: "+5" },
                  { label: "Voorraad hout", value: `${DASHBOARD_STATS.woodStock} bm`, icon: Package, change: "-120" },
                  { label: "Klanten", value: DASHBOARD_STATS.totalCustomers.toString(), icon: Users, change: "+8" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#3E2723] rounded-xl p-6 border border-[#8B5A2B]/20">
                    <div className="flex items-start justify-between mb-4">
                      <stat.icon className="w-5 h-5 text-[#D4AF37]" />
                      <span className={`text-xs font-medium ${stat.change.startsWith("+") ? "text-[#22C55E]" : "text-[#EF4444]"}`}>
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-[#F5F5DC]">{stat.value}</p>
                    <p className="text-sm text-[#F5F5DC]/60">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Quote Generator Button */}
              <div className="bg-gradient-to-r from-[#8B5A2B] to-[#D4AF37] rounded-xl p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-playfair text-xl font-bold text-white mb-1">
                    Offerte Generator
                  </h3>
                  <p className="text-white/80 text-sm">
                    Bereken prijzen op basis van houtsoort, afmetingen en opties
                  </p>
                </div>
                <button
                  onClick={() => setShowQuoteGenerator(true)}
                  className="px-6 py-3 bg-white text-[#3E2723] font-semibold rounded-lg hover:bg-[#F5F5DC] transition-colors"
                >
                  Open Generator
                </button>
              </div>

              {/* Recent Projects */}
              <div className="bg-[#3E2723] rounded-xl border border-[#8B5A2B]/20">
                <div className="p-6 border-b border-[#8B5A2B]/20">
                  <h3 className="font-playfair text-lg font-bold">Recente Projecten</h3>
                </div>
                <div className="divide-y divide-[#8B5A2B]/10">
                  {[
                    { id: "PRJ-2024-015", name: "Eiken Vitrinekast", wood: "Eiken", phase: "Productie", status: "active" },
                    { id: "PRJ-2024-014", name: "Walnoot Eettafel", wood: "Walnoot", phase: "Afwerking", status: "active" },
                    { id: "PRJ-2024-013", name: "Grenen Tuinhuis", wood: "Grenen", phase: "Oplevering", status: "completed" },
                  ].map((project) => (
                    <div key={project.id} className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-[#F5F5DC]">{project.name}</p>
                        <p className="text-xs text-[#F5F5DC]/50">{project.id}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          project.wood === "Eiken" ? "bg-[#8B5A2B]/30 text-[#D4AF37]" :
                          project.wood === "Walnoot" ? "bg-[#5D4037]/50 text-[#D4AF37]" :
                          "bg-[#D4A574]/20 text-[#8B6914]"
                        }`}>
                          {project.wood}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          project.status === "completed" 
                            ? "bg-[#22C55E]/20 text-[#22C55E]" 
                            : "bg-[#D4AF37]/20 text-[#D4AF37]"
                        }`}>
                          {project.phase}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Inventory Tab */}
          {activeTab === "inventory" && (
            <div className="space-y-6">
              <h2 className="font-playfair text-2xl font-bold">Hout Voorraad</h2>
              
              <div className="grid gap-4">
                {WOOD_STOCK.map((item) => (
                  <div key={item.id} className="bg-[#3E2723] rounded-xl p-6 border border-[#8B5A2B]/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">{item.woodType}</h3>
                      {item.quantity < item.minLevel ? (
                        <span className="flex items-center gap-1 px-3 py-1 text-xs bg-[#EF4444]/20 text-[#EF4444] rounded-full">
                          <AlertTriangle className="w-3 h-3" />
                          Laag
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-xs bg-[#22C55E]/20 text-[#22C55E] rounded-full">
                          OK
                        </span>
                      )}
                    </div>
                    
                    {/* Stock visualization */}
                    <div className="relative h-8 bg-[#2D1B18] rounded-full overflow-hidden mb-3">
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#8B5A2B] to-[#D4AF37] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min((item.quantity / 1000) * 100, 100)}%` }}
                        transition={{ duration: 1 }}
                      />
                      {/* Minimum level marker */}
                      <div 
                        className="absolute top-0 bottom-0 w-0.5 bg-red-500"
                        style={{ left: `${(item.minLevel / 1000) * 100}%` }}
                      />
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-[#F5F5DC]/60">{item.quantity} bm</span>
                      <span className="text-[#F5F5DC]/40">Min: {item.minLevel} bm</span>
                    </div>
                    <p className="text-xs text-[#F5F5DC]/40 mt-2">
                      Laatste levering: {item.lastDelivery}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other tabs placeholder */}
          {activeTab !== "dashboard" && activeTab !== "inventory" && (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#8B5A2B]/20 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">DEMO Functionaliteit</h3>
              <p className="text-[#F5F5DC]/60">
                Deze pagina is voor demonstratiedoeleinden.
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Quote Generator Modal */}
      <AnimatePresence>
        {showQuoteGenerator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#3E2723] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-[#8B5A2B]/20 flex items-center justify-between">
                <h2 className="font-playfair text-xl font-bold">Offerte Berekening</h2>
                <button
                  onClick={() => setShowQuoteGenerator(false)}
                  className="p-2 hover:bg-[#8B5A2B]/20 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-[#8B5A2B]/10">
                    <span className="text-[#F5F5DC]/60">Basis prijs (kast)</span>
                    <span className="font-medium">€1.200,00</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[#8B5A2B]/10">
                    <span className="text-[#F5F5DC]/60">Hout multiplier (Walnoot 1.8x)</span>
                    <span className="font-medium">× 1,8</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[#8B5A2B]/10">
                    <span className="text-[#F5F5DC]/60">Afmetingsfactor</span>
                    <span className="font-medium">× 1,15</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[#8B5A2B]/10">
                    <span className="text-[#F5F5DC]/60">4 lades (€150 per stuk)</span>
                    <span className="font-medium">+ €600,00</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[#8B5A2B]/10">
                    <span className="text-[#F5F5DC]/60">Arbeidskosten</span>
                    <span className="font-medium">+ €450,00</span>
                  </div>
                  <div className="flex justify-between py-4 text-lg font-bold text-[#D4AF37]">
                    <span>Totaal (excl. BTW)</span>
                    <span>€4.110,00</span>
                  </div>
                  <div className="flex justify-between py-2 text-sm">
                    <span className="text-[#F5F5DC]/60">BTW (21%)</span>
                    <span>+ €863,10</span>
                  </div>
                  <div className="flex justify-between py-4 text-xl font-bold border-t-2 border-[#D4AF37]">
                    <span>Totaal (incl. BTW)</span>
                    <span className="text-[#D4AF37]">€4.973,10</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-[#2D1B18] rounded-lg">
                  <p className="text-sm text-[#F5F5DC]/60">
                    <strong className="text-[#F5F5DC]">Let op:</strong> Dit is een voorbeeld berekening voor demonstratiedoeleinden.
                    Werkelijke prijzen kunnen afwijken afhankelijk van specifieke wensen en marktprijzen.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
