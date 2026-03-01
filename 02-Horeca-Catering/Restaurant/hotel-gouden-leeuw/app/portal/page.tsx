'use client';

/**
 * Guest Portal (/mijn-boeking or /portal)
 * 
 * Features:
 * - Login for demo guests
 * - Booking Overview with reservation details
 * - Digital key simulation
 * - Upgrade options
 * - Services: Room Service, Spa, Late Checkout
 * - City Guide with personalized recommendations
 * - Messaging with reception
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Key, 
  Calendar, 
  MapPin, 
  Utensils, 
  Sparkles, 
  Clock,
  MessageCircle,
  User,
  ChevronRight,
  Check,
  Lock,
  Send,
  Heart,
  Briefcase,
  Users
} from 'lucide-react';
import { demoBookings, spaTreatments, menuItems } from '@/lib/data';

// Login Component
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [bookingCode, setBookingCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login - accepts any input
    onLogin();
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-gold" />
          </div>
          <h1 className="font-serif text-2xl text-navy font-semibold mb-2">
            Mijn Boeking
          </h1>
          <p className="text-navy/60 text-sm">
            Log in om uw reservering te bekijken
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-navy/70 text-sm mb-2">E-mailadres</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="uw@email.nl"
              className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-navy placeholder:text-navy/30 focus:border-gold focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-navy/70 text-sm mb-2">Boekingsnummer</label>
            <input
              type="text"
              value={bookingCode}
              onChange={(e) => setBookingCode(e.target.value)}
              placeholder="GL-2025-XXXX"
              className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-navy placeholder:text-navy/30 focus:border-gold focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors btn-shimmer"
          >
            Inloggen
          </button>
        </form>

        <p className="text-center text-navy/40 text-xs mt-6">
          DEMO - Vul willekeurige gegevens in
        </p>
      </motion.div>
    </div>
  );
}

// Digital Key Card Component
function DigitalKeyCard({ booking }: { booking: typeof demoBookings[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-6 text-white relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
              <Key className="w-6 h-6 text-navy" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold">Digitale Sleutel</h3>
              <p className="text-white/60 text-sm">Tik om te ontgrendelen</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gold font-bold text-2xl">301</p>
            <p className="text-white/60 text-xs">Kamer</p>
          </div>
        </div>

        <div className="bg-white/10 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-xs mb-1">Gast</p>
              <p className="font-medium">{booking.guest.firstName} {booking.guest.lastName}</p>
            </div>
            <div className="text-right">
              <p className="text-white/60 text-xs mb-1">Tot</p>
              <p className="font-medium">{booking.checkOut.toLocaleDateString('nl-NL')}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-white/40 text-xs">
          <Lock className="w-3 h-3" />
          <span>DEMO - Geen echte toegang</span>
        </div>
      </div>
    </motion.div>
  );
}

// Upgrade Option Card
function UpgradeCard({ title, price, features, image }: { 
  title: string; 
  price: number; 
  features: string[];
  image: string;
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer">
      <div className="h-32 bg-navy/10 relative">
        <div className="absolute inset-0 flex items-center justify-center text-navy/20">
          <Sparkles className="w-16 h-16" />
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-medium text-navy mb-2">{title}</h4>
        <ul className="space-y-1 mb-4">
          {features.map((feature, i) => (
            <li key={i} className="text-navy/60 text-sm flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <span className="text-gold font-bold">+€{price}</span>
          <button className="px-4 py-2 bg-navy text-white text-sm rounded-lg hover:bg-navy-light transition-colors">
            Upgraden
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Portal Dashboard
function PortalDashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [lateCheckout, setLateCheckout] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Welkom bij Hotel De Gouden Leeuw! Kan ik u ergens mee helpen?', isUser: false },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const booking = demoBookings[0];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    setMessages(prev => [...prev, { text: newMessage, isUser: true }]);
    setNewMessage('');
    
    // Auto-reply after delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: 'Dank voor uw bericht! Onze receptie zal spoedig contact met u opnemen.', 
        isUser: false 
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-navy sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <User className="w-5 h-5 text-navy" />
              </div>
              <div>
                <h1 className="text-white font-semibold text-sm">{booking.guest.firstName} {booking.guest.lastName}</h1>
                <span className="text-gold text-xs">Kamer 301</span>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="text-white/70 hover:text-white text-sm"
            >
              Uitloggen
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1 overflow-x-auto scrollbar-hide">
            {[
              { id: 'overview', label: 'Overzicht', icon: Calendar },
              { id: 'services', label: 'Services', icon: Sparkles },
              { id: 'guide', label: 'City Guide', icon: MapPin },
              { id: 'messages', label: 'Berichten', icon: MessageCircle },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-navy border-gold'
                    : 'text-navy/60 border-transparent hover:text-navy'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Digital Key */}
            <DigitalKeyCard booking={booking} />

            {/* Booking Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-serif text-xl text-navy font-semibold mb-4">
                Reserveringsdetails
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-cream rounded-xl">
                  <p className="text-navy/50 text-xs mb-1">Check-in</p>
                  <p className="text-navy font-medium">{booking.checkIn.toLocaleDateString('nl-NL')}</p>
                  <p className="text-navy/50 text-sm">Vanaf 15:00</p>
                </div>
                <div className="p-4 bg-cream rounded-xl">
                  <p className="text-navy/50 text-xs mb-1">Check-out</p>
                  <p className="text-navy font-medium">{booking.checkOut.toLocaleDateString('nl-NL')}</p>
                  <p className="text-navy/50 text-sm">Tot 11:00</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-navy/60">Kamertype</span>
                  <span className="text-navy font-medium">{booking.room.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-navy/60">Aantal nachten</span>
                  <span className="text-navy font-medium">{booking.nights}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-navy/60">Boekingsnummer</span>
                  <span className="text-navy font-medium font-mono">{booking.confirmationNumber}</span>
                </div>
              </div>
            </div>

            {/* Upgrade Options */}
            <div>
              <h3 className="font-serif text-xl text-navy font-semibold mb-4">
                Upgrade Mogelijkheden
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <UpgradeCard
                  title="Upgrade naar Suite"
                  price={50}
                  features={['Meer ruimte', 'Domtoren zicht', 'Ligbad']}
                  image=""
                />
                <UpgradeCard
                  title="VIP Arrangement"
                  price={75}
                  features={['Champagne', 'Late checkout', 'Ontbijt op kamer']}
                  image=""
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-6">
            {/* Room Service */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-center gap-3 mb-2">
                  <Utensils className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-xl text-navy font-semibold">Room Service</h3>
                </div>
                <p className="text-navy/60 text-sm">24/7 beschikbaar</p>
              </div>
              <div className="p-6 space-y-4">
                {menuItems.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-cream rounded-xl">
                    <div>
                      <h4 className="font-medium text-navy">{item.name}</h4>
                      <p className="text-navy/60 text-sm">{item.description.slice(0, 50)}...</p>
                    </div>
                    <div className="text-right">
                      <span className="text-gold font-semibold">€{item.price}</span>
                      <button className="block text-navy text-sm mt-1 hover:text-gold">
                        + Toevoegen
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Spa Booking */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-xl text-navy font-semibold">Spa Afspraak</h3>
                </div>
                <p className="text-navy/60 text-sm">Boek een ontspannende behandeling</p>
              </div>
              <div className="p-6 space-y-4">
                {spaTreatments.slice(0, 2).map((treatment) => (
                  <div key={treatment.id} className="flex items-center justify-between p-4 bg-cream rounded-xl">
                    <div>
                      <h4 className="font-medium text-navy">{treatment.name}</h4>
                      <p className="text-navy/60 text-sm">{treatment.duration} min</p>
                    </div>
                    <div className="text-right">
                      <span className="text-gold font-semibold">€{treatment.price}</span>
                      <button className="block text-navy text-sm mt-1 hover:text-gold">
                        Boeken
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Late Checkout */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <div>
                    <h3 className="font-medium text-navy">Late Checkout</h3>
                    <p className="text-navy/60 text-sm">Verleng uw verblijf tot 14:00</p>
                  </div>
                </div>
                <button
                  onClick={() => setLateCheckout(!lateCheckout)}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    lateCheckout ? 'bg-gold' : 'bg-gray-200'
                  }`}
                >
                  <div className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform ${
                    lateCheckout ? 'translate-x-7' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              {lateCheckout && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto'}}
                  className="text-green-600 text-sm mt-4"
                >
                  ✓ Late checkout aangevraagd (+€25)
                </motion.p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'guide' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-serif text-xl text-navy font-semibold mb-4">
                Persoonlijke Aanbevelingen
              </h3>
              <p className="text-navy/60 text-sm mb-6">
                Gebaseerd op uw profiel: <span className="text-gold font-medium">Romantisch</span>
              </p>
              
              <div className="space-y-4">
                {[
                  { 
                    icon: Heart, 
                    title: 'Romantisch diner', 
                    desc: 'Restaurant De Leeuwenkelder - Chef\'s Table',
                    distance: 'In het hotel'
                  },
                  { 
                    icon: MapPin, 
                    title: 'Domtoren bij zonsondergang', 
                    desc: 'De mooiste plek voor een foto',
                    distance: '2 min lopen'
                  },
                  { 
                    icon: Sparkles, 
                    title: 'Koppel massage', 
                    desc: '60 minuten in onze spa',
                    distance: 'In het hotel'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-cream rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-navy">{item.title}</h4>
                      <p className="text-navy/60 text-sm">{item.desc}</p>
                    </div>
                    <span className="text-gold text-sm">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Selector */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="font-medium text-navy mb-4">Andere interesses?</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Heart, label: 'Romantisch' },
                  { icon: Briefcase, label: 'Zakelijk' },
                  { icon: Users, label: 'Familie' },
                ].map((profile) => (
                  <button
                    key={profile.label}
                    className="flex items-center gap-2 px-4 py-2 bg-cream rounded-full text-navy text-sm hover:bg-gold/20 transition-colors"
                  >
                    <profile.icon className="w-4 h-4" />
                    {profile.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b bg-navy">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Receptie</h3>
                  <span className="text-green-400 text-xs">Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.isUser
                        ? 'bg-navy text-white rounded-br-none'
                        : 'bg-white text-navy rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <span className="text-xs opacity-50 mt-1 block">
                      {new Date().toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Typ uw bericht..."
                className="flex-1 px-4 py-3 bg-cream rounded-lg text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="w-12 h-12 bg-navy text-white rounded-lg flex items-center justify-center hover:bg-navy-light transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-navy/40 text-sm text-center">
            DEMO - Guest Portal - Hotel De Gouden Leeuw
          </p>
        </div>
      </footer>
    </div>
  );
}

// Main Export
export default function PortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return <PortalDashboard onLogout={() => setIsLoggedIn(false)} />;
}
