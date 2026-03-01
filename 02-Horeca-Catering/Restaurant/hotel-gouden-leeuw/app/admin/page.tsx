'use client';

/**
 * Admin Panel (/admin)
 * 
 * Features:
 * - Login: demo/demo123 (pre-filled)
 * - Luxury dark mode theme (navy background, gold accents)
 * - Dashboard with:
 *   - Occupancy Rate with trend
 *   - Today's Arrivals
 *   - Housekeeping Status
 *   - Revenue Chart
 *   - Bookings Table
 *   - Restaurant Reservations
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Bed, 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  TrendingDown,
  LogOut,
  Search,
  Filter,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  Crown
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { demoBookings, demoRestaurantReservations, housekeepingRooms } from '@/lib/data';

// Revenue chart data
const revenueData = [
  { date: '1 feb', revenue: 4500 },
  { date: '5 feb', revenue: 5200 },
  { date: '10 feb', revenue: 4800 },
  { date: '15 feb', revenue: 6100 },
  { date: '20 feb', revenue: 5800 },
  { date: '25 feb', revenue: 7200 },
  { date: '1 mrt', revenue: 6500 },
];

// Login Component
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('demo');
  const [password, setPassword] = useState('demo123');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'demo' && password === 'demo123') {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-navy-dark flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-navy rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gold/20"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-4">
            <Crown className="w-8 h-8 text-navy" />
          </div>
          <h1 className="font-serif text-2xl text-white font-semibold mb-2">
            Hotel De Gouden Leeuw
          </h1>
          <p className="text-white/60 text-sm">Admin Dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/70 text-sm mb-2">Gebruikersnaam</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-gold/30 rounded-lg text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-white/70 text-sm mb-2">Wachtwoord</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-gold/30 rounded-lg text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors btn-shimmer"
          >
            Inloggen
          </button>
        </form>

        <p className="text-center text-white/40 text-xs mt-6">
          DEMO: gebruik demo / demo123
        </p>
      </motion.div>
    </div>
  );
}

// Dashboard Stats Card
function StatCard({ 
  title, 
  value, 
  trend, 
  trendUp, 
  icon: Icon 
}: { 
  title: string; 
  value: string; 
  trend: string; 
  trendUp: boolean;
  icon: React.ElementType;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-navy rounded-xl p-6 border border-gold/10"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white/60 text-sm mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-white">{value}</h3>
        </div>
        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-gold" />
        </div>
      </div>
      <div className="flex items-center gap-1 mt-4">
        {trendUp ? (
          <TrendingUp className="w-4 h-4 text-green-400" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-400" />
        )}
        <span className={`text-sm ${trendUp ? 'text-green-400' : 'text-red-400'}`}>
          {trend}
        </span>
        <span className="text-white/40 text-sm">vs vorige maand</span>
      </div>
    </motion.div>
  );
}

// Housekeeping Status Badge
function HousekeepingBadge({ status }: { status: string }) {
  const styles = {
    clean: 'bg-green-500/20 text-green-400 border-green-500/30',
    dirty: 'bg-red-500/20 text-red-400 border-red-500/30',
    'in-progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    inspection: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'out-of-order': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  };

  const labels = {
    clean: 'Schoon',
    dirty: 'Vies',
    'in-progress': 'Bezig',
    inspection: 'Controle',
    'out-of-order': 'Buiten gebruik',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${styles[status as keyof typeof styles] || styles.dirty}`}>
      {labels[status as keyof typeof labels] || status}
    </span>
  );
}

// Main Dashboard
function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-navy-dark">
      {/* Header */}
      <header className="bg-navy border-b border-gold/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <Crown className="w-5 h-5 text-navy" />
              </div>
              <div>
                <h1 className="text-white font-semibold">Hotel De Gouden Leeuw</h1>
                <span className="text-gold text-xs">Admin Dashboard</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-white/60 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Systeem online
              </div>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Uitloggen</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-navy border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1 overflow-x-auto scrollbar-hide">
            {[
              { id: 'overview', label: 'Overzicht' },
              { id: 'bookings', label: 'Boekingen' },
              { id: 'housekeeping', label: 'Housekeeping' },
              { id: 'restaurant', label: 'Restaurant' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-gold border-gold'
                    : 'text-white/60 border-transparent hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Bezettingsgraad"
                value="78%"
                trend="+5%"
                trendUp={true}
                icon={Bed}
              />
              <StatCard
                title="Aankomsten vandaag"
                value="12"
                trend="+3"
                trendUp={true}
                icon={Users}
              />
              <StatCard
                title="Omzet deze maand"
                value="€42.5k"
                trend="+12%"
                trendUp={true}
                icon={DollarSign}
              />
              <StatCard
                title="Restaurant res."
                value="24"
                trend="-2"
                trendUp={false}
                icon={Calendar}
              />
            </div>

            {/* Revenue Chart */}
            <div className="bg-navy rounded-xl p-6 border border-gold/10">
              <h3 className="text-white font-semibold mb-6">Omzet deze maand</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#0f172a', 
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: '8px'
                      }}
                      labelStyle={{ color: '#fff' }}
                      itemStyle={{ color: '#d4af37' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#d4af37" 
                      strokeWidth={3}
                      dot={{ fill: '#d4af37', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Today's Arrivals */}
            <div className="bg-navy rounded-xl border border-gold/10 overflow-hidden">
              <div className="p-6 border-b border-gold/10">
                <h3 className="text-white font-semibold">Aankomsten vandaag</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-white/60 text-sm border-b border-gold/10">
                      <th className="text-left p-4 font-medium">Gast</th>
                      <th className="text-left p-4 font-medium">Kamer</th>
                      <th className="text-left p-4 font-medium">Type</th>
                      <th className="text-left p-4 font-medium">Check-in</th>
                      <th className="text-left p-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demoBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-gold/5 last:border-0">
                        <td className="p-4 text-white">
                          {booking.guest.firstName} {booking.guest.lastName}
                        </td>
                        <td className="p-4 text-white/70">301</td>
                        <td className="p-4 text-white/70">{booking.room.name}</td>
                        <td className="p-4 text-white/70">15:00</td>
                        <td className="p-4">
                          <span className="flex items-center gap-1 text-green-400 text-sm">
                            <CheckCircle className="w-4 h-4" />
                            Bevestigd
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="bg-navy rounded-xl border border-gold/10 overflow-hidden">
            <div className="p-6 border-b border-gold/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="text-white font-semibold">Alle Boekingen</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Zoeken..."
                    className="pl-10 pr-4 py-2 bg-white/10 border border-gold/20 rounded-lg text-white placeholder:text-white/40 text-sm focus:border-gold focus:outline-none"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-gold/20 rounded-lg text-white text-sm hover:bg-white/20 transition-colors">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-white/60 text-sm border-b border-gold/10">
                    <th className="text-left p-4 font-medium">Boekingsnr</th>
                    <th className="text-left p-4 font-medium">Gast</th>
                    <th className="text-left p-4 font-medium">Check-in</th>
                    <th className="text-left p-4 font-medium">Check-out</th>
                    <th className="text-left p-4 font-medium">Kamer</th>
                    <th className="text-left p-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {demoBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-gold/5 last:border-0">
                      <td className="p-4 text-gold font-mono">{booking.confirmationNumber}</td>
                      <td className="p-4 text-white">
                        {booking.guest.firstName} {booking.guest.lastName}
                      </td>
                      <td className="p-4 text-white/70">{booking.checkIn.toLocaleDateString('nl-NL')}</td>
                      <td className="p-4 text-white/70">{booking.checkOut.toLocaleDateString('nl-NL')}</td>
                      <td className="p-4 text-white/70">{booking.room.name}</td>
                      <td className="p-4">
                        <span className="flex items-center gap-1 text-green-400 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          Bevestigd
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'housekeeping' && (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-white/70 text-sm">Schoon</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="text-white/70 text-sm">Bezig</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-white/70 text-sm">Vies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-white/70 text-sm">Controle</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3">
              {housekeepingRooms.map((room) => (
                <motion.div
                  key={room.roomNumber}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-3 rounded-lg border ${
                    room.status === 'clean' ? 'bg-green-500/10 border-green-500/30' :
                    room.status === 'in-progress' ? 'bg-yellow-500/10 border-yellow-500/30' :
                    room.status === 'dirty' ? 'bg-red-500/10 border-red-500/30' :
                    'bg-blue-500/10 border-blue-500/30'
                  } ${room.priority ? 'ring-2 ring-gold' : ''}`}
                >
                  <div className="text-white font-semibold">{room.roomNumber}</div>
                  <div className="text-white/50 text-xs">{room.roomType}</div>
                  <HousekeepingBadge status={room.status} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'restaurant' && (
          <div className="bg-navy rounded-xl border border-gold/10 overflow-hidden">
            <div className="p-6 border-b border-gold/10">
              <h3 className="text-white font-semibold">Restaurant Reserveringen</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-white/60 text-sm border-b border-gold/10">
                    <th className="text-left p-4 font-medium">Tijd</th>
                    <th className="text-left p-4 font-medium">Gast</th>
                    <th className="text-left p-4 font-medium">Personen</th>
                    <th className="text-left p-4 font-medium">Tafel</th>
                    <th className="text-left p-4 font-medium">Speciaal verzoek</th>
                    <th className="text-left p-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {demoRestaurantReservations.map((res) => (
                    <tr key={res.id} className="border-b border-gold/5 last:border-0">
                      <td className="p-4 text-white">{res.time}</td>
                      <td className="p-4 text-white">{res.guestName}</td>
                      <td className="p-4 text-white/70">{res.partySize}</td>
                      <td className="p-4 text-white/70">{res.tableNumber}</td>
                      <td className="p-4 text-white/70">{res.specialRequests || '-'}</td>
                      <td className="p-4">
                        {res.status === 'confirmed' ? (
                          <span className="flex items-center gap-1 text-green-400 text-sm">
                            <CheckCircle className="w-4 h-4" />
                            Bevestigd
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-yellow-400 text-sm">
                            <Clock className="w-4 h-4" />
                            In behandeling
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-navy border-t border-gold/10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2025 Tech Solutions Utrecht - Admin Dashboard (DEMO)
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>DEMO systeem - Geen echte data</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Main Export
export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return <Dashboard onLogout={() => setIsLoggedIn(false)} />;
}
