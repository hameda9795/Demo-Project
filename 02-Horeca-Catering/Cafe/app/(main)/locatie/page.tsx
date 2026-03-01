'use client';

/**
 * Location Page
 * Address, map, opening hours, and contact info
 * All marked as DEMO data
 */

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';
import { DEMO_CONTACT, OPENING_HOURS } from '@/lib/data';

export default function LocationPage() {
  const handleGetDirections = () => {
    // Open Google Maps with demo location (Utrecht city center area)
    window.open(
      'https://maps.google.com/?q=Oudegracht+Utrecht',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-espresso-900 text-white p-6">
        <h1 className="text-3xl font-extrabold mb-2">Locatie</h1>
        <p className="text-espresso-200">Kom langs in het hart van Utrecht</p>
      </div>

      {/* Map Placeholder */}
      <div className="relative h-64 bg-espresso-200">
        {/* Simulated Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-espresso-300 via-latte-200 to-amber-200">
          {/* Map Grid Lines */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={`h-${i}`} className="absolute w-full border-t border-espresso-400" style={{ top: `${i * 10}%` }} />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={`v-${i}`} className="absolute h-full border-l border-espresso-400" style={{ left: `${i * 10}%` }} />
            ))}
          </div>
        </div>

        {/* Pin Marker */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-elevated">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            {/* Pulse ring */}
            <div className="absolute inset-0 w-12 h-12 bg-amber-500 rounded-full animate-ping opacity-30" />
          </div>
        </motion.div>

        {/* DEMO Badge on Map */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-amber-500 text-white text-sm font-bold rounded-full shadow-soft">
            DEMO LOCATIE
          </span>
        </div>
      </div>

      {/* Address Card */}
      <div className="px-4 -mt-6 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl p-6 shadow-elevated"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-espresso-900">De Gouden Boon</h2>
              <p className="text-espresso-600">{DEMO_CONTACT.address}</p>
              <p className="text-amber-600 text-sm font-semibold mt-1">
                5 min lopen van Domtoren
              </p>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleGetDirections}
            className="w-full py-3 bg-amber-500 text-white font-bold rounded-xl flex items-center justify-center gap-2"
          >
            <Navigation className="w-5 h-5" />
            Route plannen
          </motion.button>
        </motion.div>
      </div>

      {/* Opening Hours */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold text-espresso-900 mb-4">Openingstijden</h2>
        <div className="bg-white rounded-2xl p-4 shadow-soft">
          {OPENING_HOURS.map((item, index) => {
            const today = new Date().getDay();
            const dayIndex = today === 0 ? 6 : today - 1;
            const isToday = index === dayIndex;

            return (
              <div
                key={item.day}
                className={`flex justify-between py-3 ${
                  index !== OPENING_HOURS.length - 1 ? 'border-b border-latte-100' : ''
                } ${isToday ? 'bg-amber-50 -mx-4 px-4' : ''}`}
              >
                <span className={`font-medium ${isToday ? 'text-amber-700 font-bold' : 'text-espresso-700'}`}>
                  {item.day}
                  {isToday && <span className="ml-2 text-xs text-amber-500">(vandaag)</span>}
                </span>
                <span className={isToday ? 'text-amber-700 font-bold' : 'text-espresso-600'}>
                  {item.hours}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Info */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold text-espresso-900 mb-4">Contact</h2>
        <div className="space-y-3">
          <a
            href={`tel:${DEMO_CONTACT.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-soft"
          >
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-espresso-500">Telefoon</p>
              <p className="font-semibold text-espresso-900">{DEMO_CONTACT.phone}</p>
            </div>
            <ExternalLink className="w-5 h-5 text-espresso-400" />
          </a>

          <a
            href={`mailto:${DEMO_CONTACT.email.replace(' (DEMO)', '')}`}
            className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-soft"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-espresso-500">Email</p>
              <p className="font-semibold text-espresso-900">{DEMO_CONTACT.email}</p>
            </div>
            <ExternalLink className="w-5 h-5 text-espresso-400" />
          </a>
        </div>
      </div>

      {/* DEMO Notice */}
      <div className="px-4 py-6">
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4">
          <p className="text-amber-800 text-sm font-semibold mb-1">⚠️ DEMO WEBSITE</p>
          <p className="text-amber-700 text-sm">
            Alle contactgegevens en locatiegegevens op deze pagina zijn fictief en uitsluitend bedoeld als voorbeeld. 
            KVK: {DEMO_CONTACT.kvk}
          </p>
        </div>
      </div>

      {/* Reserve Table Button */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold text-espresso-900 mb-4">Reserveren</h2>
        <p className="text-espresso-600 mb-4">
          Wil je zeker zijn van een plekje? Reserveer dan van tevoren een tafel.
        </p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full py-4 bg-espresso-800 text-white font-bold rounded-full shadow-soft"
        >
          Tafel reserveren
        </motion.button>
      </div>
    </div>
  );
}
