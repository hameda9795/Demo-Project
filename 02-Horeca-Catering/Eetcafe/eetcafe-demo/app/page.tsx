'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  User, 
  Lock, 
  X, 
  Calendar,
  Users,
  ChefHat,
  Receipt,
  Heart,
  History,
  Star,
  CheckCircle,
  Menu,
  ExternalLink
} from 'lucide-react';

// ============================================
// TYPES
// ============================================

type UserRole = 'admin' | 'client' | null;

interface Reservation {
  id: string;
  name: string;
  date: string;
  time: string;
  guests: number;
  table: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface Order {
  id: string;
  date: string;
  items: string[];
  total: number;
  status: string;
}

// ============================================
// MOCK DATA
// ============================================

const MOCK_RESERVATIONS: Reservation[] = [
  { id: '1', name: 'Jan de Vries', date: '2026-03-05', time: '19:00', guests: 4, table: 'T3', status: 'confirmed' },
  { id: '2', name: 'Maria Jansen', date: '2026-03-05', time: '20:00', guests: 2, table: 'T1', status: 'pending' },
  { id: '3', name: 'Peter Bakker', date: '2026-03-06', time: '18:30', guests: 6, table: 'T5', status: 'confirmed' },
  { id: '4', name: 'Lisa van Dam', date: '2026-03-06', time: '19:30', guests: 3, table: 'T2', status: 'confirmed' },
];

const MOCK_MENU: MenuItem[] = [
  { id: '1', name: 'Gegrilde Groenten', description: 'Seizoensgroenten uit de regio', price: 18.50, category: 'Hoofdgerecht' },
  { id: '2', name: 'Verse Vis van de Dag', description: 'Met citroen-kappersaus', price: 24.00, category: 'Hoofdgerecht' },
  { id: '3', name: 'Huisgemaakte Soep', description: 'Dagverse groentesoep', price: 8.50, category: 'Voorgerecht' },
  { id: '4', name: 'Cheese Plank', description: 'Locale kazen met honing', price: 15.00, category: 'Borrel' },
];

const MOCK_ORDERS: Order[] = [
  { id: '1', date: '2026-02-28', items: ['Gegrilde Groenten', 'Huiswijn Rood'], total: 26.50, status: 'Bezorgd' },
  { id: '2', date: '2026-02-15', items: ['Verse Vis', 'Café de Specialiteit'], total: 31.50, status: 'Bezorgd' },
];

const PUBLIC_MENU_ITEMS = [
  { name: 'Gegrilde seizoensgroenten', description: 'Met kruidenolie en geitenkaas', price: '€18,50' },
  { name: 'Huisgemaakte soep', description: 'Dagverse groentesoep met brood', price: '€8,50' },
  { name: 'Verse vis van de dag', description: 'Met citroen-kappersaus', price: '€24,00' },
  { name: 'Stamppot traditie', description: 'Met rookworst en jus', price: '€16,50' },
  { name: 'Cheese & charcuterie', description: 'Locale kazen en vleeswaren', price: '€15,00' },
  { name: 'Café de Specialiteit', description: 'Huisgerecht met seizoensgroenten', price: '€21,00' },
  { name: 'Huiswijn Rood', description: 'Huismerk, 175ml', price: '€6,50' },
  { name: 'Huiswijn Wit', description: 'Huismerk, 175ml', price: '€6,50' },
  { name: 'Speciaalbier', description: 'Lokaal gebrouwen', price: '€5,50' },
  { name: 'Koffie verkeerd', description: 'Met een koekje', price: '€3,50' },
];

// ============================================
// COMPONENTS
// ============================================

// Abstract Overlapping Circles SVG Animation
function AbstractCircles() {
  return (
    <svg 
      viewBox="0 0 400 400" 
      className="w-full h-full"
      style={{ animation: 'fadeInUp 1s ease-out forwards' }}
    >
      <defs>
        <linearGradient id="circleGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f766e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0f766e" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="circleGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c4785a" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#c4785a" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="circleGrad3" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0.1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Large teal circle */}
      <circle 
        cx="200" cy="200" r="120" 
        fill="url(#circleGrad1)"
        className="animate-pulse-slow"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Overlapping orange circle */}
      <circle 
        cx="280" cy="150" r="80" 
        fill="url(#circleGrad2)"
        className="animate-pulse-slow"
        style={{ animationDelay: '0.5s' }}
      />
      
      {/* Overlapping charcoal circle */}
      <circle 
        cx="150" cy="280" r="60" 
        fill="url(#circleGrad3)"
        className="animate-pulse-slow"
        style={{ animationDelay: '1s' }}
      />
      
      {/* Small accent circles */}
      <circle cx="320" cy="250" r="25" fill="#c4785a" opacity="0.5" />
      <circle cx="100" cy="150" r="35" fill="#0f766e" opacity="0.4" />
      
      {/* Connection lines - abstract conversation */}
      <path 
        d="M200 200 Q250 180 280 150" 
        stroke="#c4785a" 
        strokeWidth="2" 
        fill="none" 
        opacity="0.4"
        strokeDasharray="5,5"
      />
      <path 
        d="M200 200 Q180 240 150 280" 
        stroke="#0f766e" 
        strokeWidth="2" 
        fill="none" 
        opacity="0.4"
        strokeDasharray="5,5"
      />
    </svg>
  );
}

// Light Beam SVG for atmosphere
function LightBeamSVG() {
  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <defs>
        <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="30%" stopColor="#f5f1e8" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points="0,0 40,0 60,100 20,100" fill="url(#beamGrad)" />
      <polygon points="30,0 60,0 100,100 70,100" fill="url(#beamGrad)" opacity="0.5" />
    </svg>
  );
}

// Custom Cursor Component
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor-hover]') || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{ 
        left: position.x, 
        top: position.y,
      }}
    />
  );
}

// Login Modal Component
function LoginModal({ 
  isOpen, 
  onClose, 
  onLogin 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onLogin: (role: UserRole) => void;
}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === 'demo' && password === 'demo123') {
      onLogin('admin');
      onClose();
    } else if (username === 'klant' && password === 'demo123') {
      onLogin('client');
      onClose();
    } else {
      setError('Onjuiste inloggegevens');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-eetcafe-charcoal/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-eetcafe-beige border-4 border-eetcafe-charcoal p-8 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-eetcafe-charcoal/10 transition-colors"
          data-cursor-hover
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-serif mb-6 text-eetcafe-charcoal">Demo Login</h2>

        <div className="mb-6 p-4 bg-white/50 border-l-4 border-eetcafe-teal">
          <p className="text-sm text-eetcafe-charcoal/70 mb-2">
            <strong>Admin:</strong> demo / demo123
          </p>
          <p className="text-sm text-eetcafe-charcoal/70">
            <strong>Klant:</strong> klant / demo123
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Gebruikersnaam</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-eetcafe-charcoal/50" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border-2 border-eetcafe-charcoal/20 focus:border-eetcafe-teal outline-none transition-colors"
                placeholder="demo of klant"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Wachtwoord</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-eetcafe-charcoal/50" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border-2 border-eetcafe-charcoal/20 focus:border-eetcafe-teal outline-none transition-colors"
                placeholder="demo123"
              />
            </div>
          </div>

          {error && (
            <p className="text-eetcafe-orange text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-eetcafe-teal text-white font-medium hover:bg-eetcafe-teal/90 transition-colors"
            data-cursor-hover
          >
            Inloggen
          </button>
        </form>
      </div>
    </div>
  );
}

// Admin Panel Component
function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<'reservations' | 'menu' | 'orders'>('reservations');
  const [reservations, setReservations] = useState(MOCK_RESERVATIONS);
  const [menuItems, setMenuItems] = useState(MOCK_MENU);
  const [newMenuItem, setNewMenuItem] = useState({ name: '', description: '', price: '', category: 'Hoofdgerecht' });

  const updateReservationStatus = (id: string, status: Reservation['status']) => {
    setReservations(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  const addMenuItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMenuItem.name && newMenuItem.price) {
      setMenuItems(prev => [...prev, {
        id: Date.now().toString(),
        name: newMenuItem.name,
        description: newMenuItem.description,
        price: parseFloat(newMenuItem.price),
        category: newMenuItem.category,
      }]);
      setNewMenuItem({ name: '', description: '', price: '', category: 'Hoofdgerecht' });
    }
  };

  return (
    <div className="min-h-screen bg-eetcafe-cream p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b-4 border-eetcafe-charcoal">
          <div>
            <h1 className="text-3xl font-serif text-eetcafe-charcoal">Admin Dashboard</h1>
            <p className="text-eetcafe-charcoal/60">Eetcafe De Demo - Beheerpaneel</p>
          </div>
          <button
            onClick={onLogout}
            className="mt-4 md:mt-0 px-6 py-2 bg-eetcafe-charcoal text-white hover:bg-eetcafe-charcoal/90 transition-colors"
            data-cursor-hover
          >
            Uitloggen
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { key: 'reservations', label: 'Reserveringen', icon: Calendar },
            { key: 'menu', label: 'Menu Editor', icon: ChefHat },
            { key: 'orders', label: 'Bestellingen', icon: Receipt },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2 border-2 transition-colors ${
                activeTab === key 
                  ? 'bg-eetcafe-teal text-white border-eetcafe-teal' 
                  : 'bg-white text-eetcafe-charcoal border-eetcafe-charcoal/20 hover:border-eetcafe-teal'
              }`}
              data-cursor-hover
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Reservations Tab */}
        {activeTab === 'reservations' && (
          <div className="bg-white border-2 border-eetcafe-charcoal/10">
            <div className="p-4 border-b-2 border-eetcafe-charcoal/10">
              <h2 className="text-xl font-serif">Reserveringen</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-eetcafe-beige">
                  <tr>
                    <th className="text-left p-4">Naam</th>
                    <th className="text-left p-4">Datum</th>
                    <th className="text-left p-4">Tijd</th>
                    <th className="text-left p-4">Personen</th>
                    <th className="text-left p-4">Tafel</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Actie</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map(res => (
                    <tr key={res.id} className="border-t border-eetcafe-charcoal/10">
                      <td className="p-4">{res.name}</td>
                      <td className="p-4">{res.date}</td>
                      <td className="p-4">{res.time}</td>
                      <td className="p-4">{res.guests}</td>
                      <td className="p-4">{res.table}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 text-sm ${
                          res.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                          res.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {res.status === 'confirmed' ? 'Bevestigd' : res.status === 'pending' ? 'In afwachting' : 'Geannuleerd'}
                        </span>
                      </td>
                      <td className="p-4">
                        <select
                          value={res.status}
                          onChange={(e) => updateReservationStatus(res.id, e.target.value as Reservation['status'])}
                          className="p-2 border border-eetcafe-charcoal/20 rounded"
                        >
                          <option value="confirmed">Bevestigd</option>
                          <option value="pending">In afwachting</option>
                          <option value="cancelled">Geannuleerd</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Menu Editor Tab */}
        {activeTab === 'menu' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-eetcafe-charcoal/10 p-6">
              <h2 className="text-xl font-serif mb-4">Menu Toevoegen</h2>
              <form onSubmit={addMenuItem} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Naam</label>
                  <input
                    type="text"
                    value={newMenuItem.name}
                    onChange={(e) => setNewMenuItem({ ...newMenuItem, name: e.target.value })}
                    className="w-full p-3 border-2 border-eetcafe-charcoal/20 focus:border-eetcafe-teal outline-none"
                    placeholder="Gerechtnaam"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Beschrijving</label>
                  <textarea
                    value={newMenuItem.description}
                    onChange={(e) => setNewMenuItem({ ...newMenuItem, description: e.target.value })}
                    className="w-full p-3 border-2 border-eetcafe-charcoal/20 focus:border-eetcafe-teal outline-none"
                    rows={3}
                    placeholder="Beschrijving"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Prijs (€)</label>
                    <input
                      type="number"
                      step="0.50"
                      value={newMenuItem.price}
                      onChange={(e) => setNewMenuItem({ ...newMenuItem, price: e.target.value })}
                      className="w-full p-3 border-2 border-eetcafe-charcoal/20 focus:border-eetcafe-teal outline-none"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Categorie</label>
                    <select
                      value={newMenuItem.category}
                      onChange={(e) => setNewMenuItem({ ...newMenuItem, category: e.target.value })}
                      className="w-full p-3 border-2 border-eetcafe-charcoal/20 focus:border-eetcafe-teal outline-none"
                    >
                      <option>Voorgerecht</option>
                      <option>Hoofdgerecht</option>
                      <option>Nagerecht</option>
                      <option>Borrel</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-eetcafe-teal text-white hover:bg-eetcafe-teal/90 transition-colors"
                  data-cursor-hover
                >
                  Toevoegen
                </button>
              </form>
            </div>

            <div className="bg-white border-2 border-eetcafe-charcoal/10 p-6">
              <h2 className="text-xl font-serif mb-4">Huidig Menu</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {menuItems.map(item => (
                  <div key={item.id} className="p-4 bg-eetcafe-beige/50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-eetcafe-charcoal/60">{item.description}</p>
                        <span className="text-xs text-eetcafe-teal">{item.category}</span>
                      </div>
                      <span className="font-medium">€{item.price.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="bg-white border-2 border-eetcafe-charcoal/10">
            <div className="p-4 border-b-2 border-eetcafe-charcoal/10">
              <h2 className="text-xl font-serif">Bestellingen per Tafel</h2>
            </div>
            <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['T1', 'T2', 'T3', 'T4', 'T5'].map(table => (
                <div key={table} className="p-4 border-2 border-eetcafe-charcoal/10 bg-eetcafe-beige/30">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">{table}</h3>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700">Actief</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Huiswijn Rood x2</span>
                      <span>€13,00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bitterbal</span>
                      <span>€4,50</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-eetcafe-charcoal/10 flex justify-between font-medium">
                    <span>Totaal</span>
                    <span>€17,50</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Client Portal Component
function ClientPortal({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<'reservations' | 'orders' | 'favorites'>('reservations');

  return (
    <div className="min-h-screen bg-eetcafe-cream p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b-4 border-eetcafe-charcoal">
          <div>
            <h1 className="text-3xl font-serif text-eetcafe-charcoal">Mijn Portal</h1>
            <p className="text-eetcafe-charcoal/60">Welkom terug, Demo Klant</p>
          </div>
          <button
            onClick={onLogout}
            className="mt-4 md:mt-0 px-6 py-2 bg-eetcafe-charcoal text-white hover:bg-eetcafe-charcoal/90 transition-colors"
            data-cursor-hover
          >
            Uitloggen
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { key: 'reservations', label: 'Mijn Reserveringen', icon: Calendar },
            { key: 'orders', label: 'Bestelgeschiedenis', icon: History },
            { key: 'favorites', label: 'Favorieten', icon: Heart },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2 border-2 transition-colors ${
                activeTab === key 
                  ? 'bg-eetcafe-teal text-white border-eetcafe-teal' 
                  : 'bg-white text-eetcafe-charcoal border-eetcafe-charcoal/20 hover:border-eetcafe-teal'
              }`}
              data-cursor-hover
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* My Reservations */}
        {activeTab === 'reservations' && (
          <div className="space-y-4">
            <h2 className="text-xl font-serif mb-4">Komende Reserveringen</h2>
            {MOCK_RESERVATIONS.slice(0, 2).map(res => (
              <div key={res.id} className="bg-white border-2 border-eetcafe-charcoal/10 p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-eetcafe-teal" />
                      <span className="font-medium">{res.date} om {res.time}</span>
                    </div>
                    <p className="text-eetcafe-charcoal/60">{res.guests} personen • Tafel {res.table}</p>
                  </div>
                  <span className="px-4 py-2 bg-green-100 text-green-700 text-sm self-start">
                    Bevestigd
                  </span>
                </div>
              </div>
            ))}
            <button 
              className="w-full py-4 border-2 border-dashed border-eetcafe-charcoal/30 text-eetcafe-charcoal/60 hover:border-eetcafe-teal hover:text-eetcafe-teal transition-colors"
              data-cursor-hover
            >
              + Nieuwe reservering
            </button>
          </div>
        )}

        {/* Order History */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            <h2 className="text-xl font-serif mb-4">Bestelgeschiedenis</h2>
            {MOCK_ORDERS.map(order => (
              <div key={order.id} className="bg-white border-2 border-eetcafe-charcoal/10 p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <Receipt className="w-5 h-5 text-eetcafe-teal" />
                    <span className="font-medium">Bestelling #{order.id}</span>
                  </div>
                  <span className="text-sm text-eetcafe-charcoal/60">{order.date}</span>
                </div>
                <div className="space-y-1 mb-3">
                  {order.items.map((item, i) => (
                    <p key={i} className="text-eetcafe-charcoal/70">• {item}</p>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-eetcafe-charcoal/10">
                  <span className={`text-sm ${order.status === 'Bezorgd' ? 'text-green-600' : 'text-eetcafe-orange'}`}>
                    {order.status}
                  </span>
                  <span className="font-medium">€{order.total.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Favorites */}
        {activeTab === 'favorites' && (
          <div className="space-y-4">
            <h2 className="text-xl font-serif mb-4">Mijn Favorieten</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {MOCK_MENU.slice(0, 3).map(item => (
                <div key={item.id} className="bg-white border-2 border-eetcafe-charcoal/10 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{item.name}</h3>
                    <Heart className="w-5 h-5 text-eetcafe-orange fill-eetcafe-orange" />
                  </div>
                  <p className="text-sm text-eetcafe-charcoal/60 mb-3">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-eetcafe-teal">{item.category}</span>
                    <span className="font-medium">€{item.price.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================

export default function EetcafePage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setIsHeaderShrunk(y > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // If logged in, show portal
  if (userRole === 'admin') {
    return <AdminPanel onLogout={() => setUserRole(null)} />;
  }

  if (userRole === 'client') {
    return <ClientPortal onLogout={() => setUserRole(null)} />;
  }

  return (
    <main className="min-h-screen bg-eetcafe-beige overflow-x-hidden">
      <CustomCursor />

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={setUserRole}
      />

      {/* ============================================
          HEADER
      ============================================ */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isHeaderShrunk 
            ? 'py-2 bg-eetcafe-beige/95 backdrop-blur-sm shadow-sm' 
            : 'py-4 md:py-6 bg-eetcafe-beige'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" data-cursor-hover>
            <div className={`font-serif font-bold text-eetcafe-charcoal transition-all duration-300 ${
              isHeaderShrunk ? 'text-xl' : 'text-2xl md:text-3xl'
            }`}>
              Eetcafe De Demo
            </div>
            <span className="px-2 py-0.5 bg-eetcafe-teal text-white text-xs">DEMO</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Sfeer', 'Menu', 'Reserveren', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-eetcafe-charcoal hover:text-eetcafe-teal transition-colors text-sm font-medium"
                data-cursor-hover
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side: Demo Login + Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsLoginOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-eetcafe-charcoal text-white text-sm hover:bg-eetcafe-charcoal/90 transition-colors"
              data-cursor-hover
            >
              <Lock className="w-4 h-4" />
              <span className="hidden sm:inline">Demo Login</span>
              <span className="sm:hidden">Login</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
              data-cursor-hover
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Demo Badge */}
        <div className="absolute top-full right-4 md:right-8 mt-2">
          <span className="flex items-center gap-1 px-2 py-1 bg-eetcafe-orange/20 text-eetcafe-orange text-xs font-medium">
            <Lock className="w-3 h-3" />
            Demo
          </span>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-eetcafe-beige border-t-4 border-eetcafe-charcoal shadow-lg">
            <nav className="p-4 space-y-2">
              {['Sfeer', 'Menu', 'Reserveren', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 text-eetcafe-charcoal hover:bg-eetcafe-charcoal/5 transition-colors text-lg"
                  data-cursor-hover
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ============================================
          HERO SECTION
      ============================================ */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-0">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Text Content - 55% */}
            <div className="md:col-span-7 space-y-6 md:space-y-8">
              <div 
                className="space-y-2"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              >
                <p className="text-eetcafe-teal text-sm md:text-base font-medium tracking-wider uppercase">
                  Eetcafe • Utrecht
                </p>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-eetcafe-charcoal leading-[0.9] tracking-tight">
                  Eten &
                  <br />
                  <span className="text-eetcafe-teal">Drinken</span>
                  <br />
                  in Utrecht
                </h1>
              </div>

              <p 
                className="text-lg md:text-xl text-eetcafe-charcoal/70 max-w-lg leading-relaxed"
                style={{ 
                  transform: `translateY(${scrollY * 0.05}px)`,
                  opacity: Math.max(0.5, 1 - scrollY / 1000)
                }}
              >
                Een plek waar gesprekken stromen en tijd even stilstaat. 
                Geen vertoon, alleen goed gezelschap.
              </p>

              <div 
                className="flex flex-wrap gap-4"
                style={{ transform: `translateY(${scrollY * 0.03}px)` }}
              >
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-eetcafe-charcoal text-white font-medium hover:bg-eetcafe-teal transition-colors min-h-[56px]"
                  data-cursor-hover
                >
                  Bekijk Menu
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#reserveren"
                  className="inline-flex items-center gap-2 px-8 py-4 border-4 border-eetcafe-charcoal text-eetcafe-charcoal font-medium hover:bg-eetcafe-charcoal hover:text-white transition-colors min-h-[56px]"
                  data-cursor-hover
                >
                  Reserveer
                </a>
              </div>
            </div>

            {/* Abstract Circles - 45% */}
            <div 
              className="md:col-span-5 relative h-[300px] md:h-[500px]"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
              {/* Paper grain texture overlay */}
              <div className="paper-grain absolute inset-0 z-10 rounded-full overflow-hidden" />
              <AbstractCircles />
            </div>
          </div>
        </div>

        {/* Light beams */}
        <LightBeamSVG />
      </section>

      {/* ============================================
          SFEER SECTION
      ============================================ */}
      <section id="sfeer" className="relative py-24 md:py-32 border-t-8 border-eetcafe-charcoal">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="relative pl-8 md:pl-16">
            {/* Thick burnt orange border */}
            <div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-eetcafe-orange" />
            
            <p className="text-eetcafe-teal text-sm font-medium tracking-wider uppercase mb-6">
              Onze Sfeer
            </p>

            <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl text-eetcafe-charcoal leading-tight mb-12">
              &ldquo;Gezelligheid is geen decor, maar wat er gebeurt als mensen samenkomen.&rdquo;
            </blockquote>

            <div className="prose prose-lg max-w-none">
              <p className="text-eetcafe-charcoal/70 text-lg md:text-xl leading-relaxed mb-6">
                Eetcafe De Demo is geen tent met een concept. Het is een plek waar Utrechters 
                elkaar ontmoeten, waar de krant op tafel ligt en de koffie nooit te snel op is.
              </p>
              <p className="text-eetcafe-charcoal/70 text-lg md:text-xl leading-relaxed">
                We geloven niet in over-the-top ervaringen. Wel in een goed gesprek, 
                een eerlijk bord eten, en de ruimte om gewoon te zijn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          MENU SECTION
      ============================================ */}
      <section id="menu" className="py-24 md:py-32 bg-white border-t-8 border-eetcafe-charcoal">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-eetcafe-teal text-sm font-medium tracking-wider uppercase mb-4">
              Menu
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-eetcafe-charcoal">
              Wat we serveren
            </h2>
          </div>

          {/* Minimalist list - like poetry */}
          <div className="space-y-0">
            {PUBLIC_MENU_ITEMS.map((item, index) => (
              <div
                key={index}
                className="menu-item group flex items-baseline justify-between py-6 border-b-2 border-eetcafe-charcoal/10 cursor-pointer"
                data-cursor-hover
              >
                <div className="flex-1 pr-8">
                  <h3 className="font-serif text-xl md:text-2xl text-eetcafe-charcoal group-hover:text-eetcafe-teal transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-eetcafe-charcoal/50 text-sm md:text-base mt-1">
                    {item.description}
                  </p>
                </div>
                <span className="text-eetcafe-charcoal/40 text-sm md:text-base font-medium whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-eetcafe-charcoal/50 text-sm">
            Menu wijzigt seizoensgebonden. Vraag naar de dagspecialiteit.
          </p>
        </div>
      </section>

      {/* ============================================
          RESERVEREN SECTION
      ============================================ */}
      <section id="reserveren" className="py-24 md:py-32 border-t-8 border-eetcafe-charcoal relative">
        {/* Abstract texture background */}
        <div className="absolute inset-0 paper-grain opacity-50" />
        
        <div className="relative max-w-xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-eetcafe-teal text-sm font-medium tracking-wider uppercase mb-4">
              Reserveren
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-eetcafe-charcoal">
              Kom langs
            </h2>
          </div>

          {/* Reservation card with thick border */}
          <div className="bg-white p-8 md:p-12 border-4 border-eetcafe-charcoal shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-eetcafe-charcoal mb-2">
                  Naam
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-eetcafe-beige/50 border-2 border-eetcafe-charcoal/20 focus:border-eetcafe-teal outline-none transition-colors"
                  placeholder="Je naam"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-eetcafe-charcoal mb-2">
                    Datum
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-eetcafe-beige/50 border-2 border-eetcafe-charcoal/20 focus:border-eetcafe-teal outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-eetcafe-charcoal mb-2">
                    Personen
                  </label>
                  <select className="w-full px-4 py-3 bg-eetcafe-beige/50 border-2 border-eetcafe-charcoal/20 focus:border-eetcafe-teal outline-none transition-colors">
                    <option>2 personen</option>
                    <option>3 personen</option>
                    <option>4 personen</option>
                    <option>5 personen</option>
                    <option>6+ personen</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-eetcafe-charcoal mb-2">
                  Telefoon
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-eetcafe-beige/50 border-2 border-eetcafe-charcoal/20 focus:border-eetcafe-teal outline-none transition-colors"
                  placeholder="+31 6..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-eetcafe-teal text-white font-medium hover:bg-eetcafe-teal/90 transition-colors flex items-center justify-center gap-2 min-h-[56px]"
                data-cursor-hover
              >
                <CheckCircle className="w-5 h-5" />
                Reservering aanvragen
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-eetcafe-charcoal/50">
              Of bel direct: <a href="tel:+31623434286" className="text-eetcafe-teal hover:underline">+31 6 23434286</a>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          CONTACT SECTION
      ============================================ */}
      <section id="contact" className="py-24 md:py-32 bg-eetcafe-charcoal text-white border-t-8 border-eetcafe-orange">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-eetcafe-orange text-sm font-medium tracking-wider uppercase mb-4">
                Contact
              </p>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">
                Eetcafe De Demo
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-eetcafe-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Adres</p>
                    <p className="text-white/70">Utrecht 3553 CW</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-eetcafe-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Telefoon</p>
                    <a href="tel:+31623434286" className="text-white/70 hover:text-eetcafe-orange transition-colors">
                      +31 6 23434286
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-eetcafe-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@techsolutionsutrecht.nl" className="text-white/70 hover:text-eetcafe-orange transition-colors">
                      info@techsolutionsutrecht.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-eetcafe-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Openingstijden</p>
                    <p className="text-white/70">Ma-Zo: 11:00 - 23:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              {/* Abstract map placeholder */}
              <div className="aspect-square bg-eetcafe-teal/20 border-4 border-white/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-eetcafe-orange mx-auto mb-4" />
                  <p className="text-white/70">Utrecht 3553 CW</p>
                  <p className="text-sm text-white/50 mt-2">Nederland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER
      ============================================ */}
      <footer className="py-12 bg-eetcafe-charcoal border-t-4 border-eetcafe-teal">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <p className="text-white/80 text-sm leading-relaxed text-center">
            Deze website is een demonstratieversie. Alle intellectuele eigendomsrechten en inhoud behoren toe aan TechSolutionsUtrecht.
          </p>
          <p className="text-white/60 text-sm text-center mt-4">
            Adres: Utrecht 3553 CW<br />
            Tel: +31 6 23434286<br />
            Email: info@techsolutionsutrecht.nl<br />
            KvK: 99202301<br />
            Site: techsolutiosutrecht.nl
          </p>
        </div>
      </footer>

      {/* ============================================
          FLOATING CTA BUTTON
      ============================================ */}
      <a
        href="https://techsolutionsutrecht.nl/contact"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 flex items-center gap-2 px-6 py-4 bg-eetcafe-teal text-white font-medium shadow-2xl hover:bg-eetcafe-teal/90 transition-all animate-pulse-slow"
        style={{
          borderRadius: '9999px',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        data-cursor-hover
      >
        <span>Offerte aanvragen</span>
        <ExternalLink className="w-4 h-4" />
      </a>

      {/* Mobile positioning adjustment */}
      <style jsx>{`
        @media (max-width: 768px) {
          .fixed-cta {
            right: 16px;
            left: auto;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}
