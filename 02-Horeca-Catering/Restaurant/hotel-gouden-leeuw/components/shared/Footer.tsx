'use client';

/**
 * Footer Component
 * 
 * Features:
 * - Four column layout with hotel info, quick links, contact, and newsletter
 * - DEMO contact info clearly marked
 * - Copyright notice with HTML comment protection
 * - Gold accent lines and elegant typography
 */

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Crown, Instagram, Facebook, Linkedin } from 'lucide-react';
import { DEMO_CONTACT } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white relative overflow-hidden">
      {/* HTML Copyright Comment Protection */}
      {/* 
        COPYRIGHT NOTICE
        © 2025 Tech Solutions Utrecht. Alle intellectuele eigendomsrechten voorbehouden.
        Concept, design en ontwikkeling door Tech Solutions Utrecht.
        Ongeautoriseerd kopiëren, verspreiden of wijzigen van deze code is strikt verboden.
      */}
      
      {/* Gold accent line at top */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Hotel Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <Crown className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">Hotel De Gouden Leeuw</h3>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Een boutique 4-sterren hotel in het hart van Utrecht. 
              Geniet van luxe, comfort en persoonlijke service met een 
              adembenemend uitzicht op de Domtoren.
            </p>
            
            {/* DEMO Badge in Footer */}
            <div className="inline-block bg-red-600/90 text-white text-xs font-bold px-3 py-1.5 rounded mb-4">
              DEMO WEBSITE - Geen echte reserveringen
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">Snelmenu</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#kamers" className="text-white/70 hover:text-gold transition-colors text-sm">
                  Onze Kamers
                </Link>
              </li>
              <li>
                <Link href="/#restaurant" className="text-white/70 hover:text-gold transition-colors text-sm">
                  Restaurant
                </Link>
              </li>
              <li>
                <Link href="/#spa" className="text-white/70 hover:text-gold transition-colors text-sm">
                  Spa & Wellness
                </Link>
              </li>
              <li>
                <Link href="/utrecht-tips/" className="text-white/70 hover:text-gold transition-colors text-sm">
                  Utrecht Tips
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-white/70 hover:text-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/portal/" className="text-white/70 hover:text-gold transition-colors text-sm">
                  Mijn Boeking
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (DEMO) */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  {DEMO_CONTACT.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  {DEMO_CONTACT.phone}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  {DEMO_CONTACT.email}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm">
                  <p>Receptie: 24/7 geopend</p>
                  <p>Restaurant: 07:00 - 22:00</p>
                  <p>Spa: 09:00 - 21:00</p>
                </div>
              </li>
            </ul>
            
            {/* KVK Info */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-white/50 text-xs">
                KvK: {DEMO_CONTACT.kvk}
              </p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">Nieuwsbrief</h4>
            <p className="text-white/70 text-sm mb-4">
              Schrijf u in voor exclusieve aanbiedingen en het laatste nieuws.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Uw e-mailadres"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:border-gold focus:outline-none transition-colors text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gold text-navy font-medium rounded-lg hover:bg-gold-light transition-colors text-sm btn-shimmer"
              >
                Inschrijven
              </button>
            </form>
            <p className="text-white/40 text-xs mt-3">
              DEMO - Geen echte nieuwsbrief
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} Hotel De Gouden Leeuw (DEMO). Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-white/50 hover:text-gold text-sm transition-colors">
                Privacybeleid
              </Link>
              <Link href="#" className="text-white/50 hover:text-gold text-sm transition-colors">
                Algemene Voorwaarden
              </Link>
              <Link href="#" className="text-white/50 hover:text-gold text-sm transition-colors">
                Cookiebeleid
              </Link>
            </div>
          </div>
          
          {/* Copyright Notice */}
          <div className="mt-6 pt-4 border-t border-white/5">
            <p className="text-white/30 text-xs text-center">
              © 2025 Tech Solutions Utrecht. Alle intellectuele eigendomsrechten voorbehouden. 
              Concept, design en ontwikkeling door Tech Solutions Utrecht.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
