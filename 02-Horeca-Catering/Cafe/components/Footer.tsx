'use client';

/**
 * Footer Component
 * Contains copyright information and required attribution
 */

import Link from 'next/link';
import { DEMO_CONTACT, OPENING_HOURS } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-espresso-900 text-cream-100 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-amber-400 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-espresso-200">{DEMO_CONTACT.address}</li>
              <li className="text-espresso-200">{DEMO_CONTACT.phone}</li>
              <li className="text-espresso-200">{DEMO_CONTACT.email}</li>
              <li className="text-espresso-300 text-xs mt-2">
                KVK: {DEMO_CONTACT.kvk}
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold text-amber-400 mb-4">Openingstijden</h3>
            <ul className="space-y-1 text-sm">
              {OPENING_HOURS.map((item) => (
                <li key={item.day} className="flex justify-between text-espresso-200">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-amber-400 mb-4">Snelle Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/menu" className="text-espresso-200 hover:text-amber-400 transition-colors">
                  Ons Menu
                </Link>
              </li>
              <li>
                <Link href="/locatie" className="text-espresso-200 hover:text-amber-400 transition-colors">
                  Routebeschrijving
                </Link>
              </li>
              <li>
                <Link href="/mijn-koffie" className="text-espresso-200 hover:text-amber-400 transition-colors">
                  Mijn Account
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-espresso-200 hover:text-amber-400 transition-colors">
                  Admin Paneel
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-espresso-800 pt-6">
          {/* Copyright Notice */}
          <p className="text-center text-xs text-espresso-400">
            © 2025 Tech Solutions Utrecht. Alle intellectuele eigendomsrechten voorbehouden. 
            Concept, design en ontwikkeling door{' '}
            <a 
              href="https://techsolutionsutrecht.nl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              Tech Solutions Utrecht
            </a>.
          </p>
          
          {/* Demo Disclaimer */}
          <p className="text-center text-xs text-espresso-500 mt-2">
            {DEMO_CONTACT.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
