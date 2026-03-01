'use client';

/**
 * Virtual Concierge Section
 * 
 * Features:
 * - Chat interface simulation with animated messages
 * - Quick action buttons
 * - Recommendation cards that animate in
 * - Local guide map with interactive hotspots
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Utensils, 
  Car, 
  MapPin, 
  Clock,
  ChevronRight,
  Send
} from 'lucide-react';

const quickActions = [
  { icon: Utensils, label: 'Restaurant reserveren', color: 'bg-burgundy/10 text-burgundy' },
  { icon: Car, label: 'Taxi bestellen', color: 'bg-navy/10 text-navy' },
  { icon: MapPin, label: 'Tips voor Utrecht', color: 'bg-gold/20 text-gold-dark' },
];

const recommendations = [
  {
    title: 'Domtoren',
    description: 'Beklim de iconische toren voor een panoramisch uitzicht',
    distance: '2 min lopen',
    image: '/images/hotel/exterior/facade-golden-hour.jpg',
  },
  {
    title: 'Grachten',
    description: 'Maak een boottocht door de historische grachten',
    distance: '1 min lopen',
    image: '/images/hotel/exterior/terrace-canal.jpg',
  },
  {
    title: 'Centraal Station',
    description: 'Snelle verbindingen naar Amsterdam en Rotterdam',
    distance: '10 min lopen',
    image: '/images/hotel/lobby/reception-desk.jpg',
  },
];

export default function Concierge() {
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: 'Goedemorgen! Waar kan ik u mee helpen?', isUser: false },
  ]);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const handleAction = (label: string) => {
    setSelectedAction(label);
    setMessages(prev => [...prev, { text: label, isUser: true }]);
    
    setTimeout(() => {
      let response = '';
      switch(label) {
        case 'Restaurant reserveren':
          response = 'Graag help ik u met een reservering bij De Leeuwenkelder. Voor hoeveel personen en op welke tijd?';
          break;
        case 'Taxi bestellen':
          response = 'Ik regel direct een taxi voor u. Waar moet u naartoe?';
          break;
        case 'Tips voor Utrecht':
          response = 'Hier zijn enkele aanbevelingen in de buurt van het hotel:';
          setShowRecommendations(true);
          break;
      }
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 800);
  };

  return (
    <section id="locatie" className="py-24 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">
            Persoonlijke Service
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-6">
            Uw persoonlijke concierge
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Onze conciërge staat 24/7 voor u klaar om uw verblijf zo aangenaam mogelijk te maken.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-navy p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-navy" />
              </div>
              <div>
                <h4 className="text-white font-medium">Conciërge</h4>
                <span className="text-green-400 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Online
                </span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-cream/50">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.isUser 
                          ? 'bg-navy text-white rounded-br-none' 
                          : 'bg-white text-navy rounded-bl-none shadow-sm'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs opacity-50 mt-1 block">
                        {new Date().toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Recommendations */}
              <AnimatePresence>
                {showRecommendations && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3 mt-4"
                  >
                    {recommendations.map((rec, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-3 rounded-xl shadow-sm flex gap-3 cursor-pointer hover:shadow-md transition-shadow"
                      >
                        <div 
                          className="w-16 h-16 rounded-lg bg-cover bg-center flex-shrink-0"
                          style={{ backgroundImage: `url(${rec.image})` }}
                        />
                        <div className="flex-1">
                          <h5 className="font-medium text-navy text-sm">{rec.title}</h5>
                          <p className="text-navy/60 text-xs mt-0.5">{rec.description}</p>
                          <span className="text-gold text-xs mt-1 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {rec.distance}
                          </span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-navy/30 self-center" />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t bg-white">
              <p className="text-xs text-navy/50 mb-3">Snelle opties:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => handleAction(action.label)}
                    disabled={selectedAction !== null}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${action.color} hover:opacity-80 disabled:opacity-50`}
                  >
                    <action.icon className="w-4 h-4" />
                    {action.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area (Demo) */}
            <div className="p-4 bg-cream border-t flex gap-2">
              <input
                type="text"
                placeholder="Typ uw bericht... (DEMO)"
                disabled
                className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm disabled:opacity-50"
              />
              <button 
                disabled
                className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Local Guide Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Map Header */}
              <div className="p-6 border-b">
                <h3 className="font-serif text-2xl text-navy font-semibold mb-2">
                  Ontdek Utrecht
                </h3>
                <p className="text-navy/70 text-sm">
                  Bezienswaardigheden op loopafstand van het hotel
                </p>
              </div>

              {/* Map Area */}
              <div className="relative aspect-[4/3] bg-cream">
                {/* Map Background */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url('/images/hotel/exterior/facade-golden-hour.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%) sepia(20%)',
                  }}
                />
                
                {/* Map Overlay */}
                <div className="absolute inset-0 bg-navy/10" />

                {/* Hotspots */}
                {[
                  { x: '50%', y: '30%', label: 'Domtoren', icon: '🏰' },
                  { x: '30%', y: '60%', label: 'Grachten', icon: '🚤' },
                  { x: '70%', y: '50%', label: 'Restaurant', icon: '🍽️' },
                  { x: '45%', y: '45%', label: 'Hotel', icon: '🏨', isHotel: true },
                ].map((spot, index) => (
                  <motion.button
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: spot.x, top: spot.y }}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 ${
                      spot.isHotel ? 'bg-gold text-navy' : 'bg-white text-navy'
                    }`}>
                      <span className="text-xl">{spot.icon}</span>
                    </div>
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-opacity ${
                      spot.isHotel ? 'bg-gold text-navy' : 'bg-navy text-white'
                    }`}>
                      {spot.label}
                    </div>
                  </motion.button>
                ))}

                {/* Walking Time Legend */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gold" />
                        <span className="text-navy/70">2 min → Domtoren</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gold" />
                        <span className="text-navy/70">10 min → Station</span>
                      </div>
                    </div>
                    <span className="text-navy/50 text-xs">DEMO kaart</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="font-serif text-xl text-navy font-semibold mb-4">
                Openingstijden Receptie
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-navy/70">Maandag - Zondag</span>
                  <span className="font-medium text-navy">24/7</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-navy/70">Check-in</span>
                  <span className="font-medium text-navy">Vanaf 15:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-navy/70">Check-out</span>
                  <span className="font-medium text-navy">Tot 11:00</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
