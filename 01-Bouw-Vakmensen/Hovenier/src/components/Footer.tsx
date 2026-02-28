"use client";

import Link from "next/link";
import { TreePine, Leaf, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { DemoBadge } from "./DemoBadge";
import { demoContact } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-forest-900 text-white">
      {/* Demo Warning */}
      <div className="bg-amber-500/20 border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <DemoBadge variant="footer" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 
                bg-gradient-to-br from-green-500 to-green-700
                rounded-organic 
                flex items-center justify-center">
                <TreePine className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl">Groen & Tuin</h3>
                <p className="text-green-300 text-sm">Architectuur</p>
              </div>
            </div>
            <p className="text-forest-200 text-sm leading-relaxed">
              Wij creëren duurzame tuinen die harmonieus samengaan met de natuur. 
              Van ontwerp tot onderhoud, voor Amsterdam en omgeving.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-forest-800 rounded-full hover:bg-green-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-forest-800 rounded-full hover:bg-green-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="font-serif text-lg mb-4 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-green-400" />
              Diensten
            </h4>
            <ul className="space-y-3">
              {['Tuinontwerp', 'Tuinaanleg', 'Tuinonderhoud', 'Boomverzorging', 'Vijveraanleg'].map((service) => (
                <li key={service}>
                  <Link 
                    href="/diensten/"
                    className="text-forest-200 hover:text-green-400 transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Snelle Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-green-400" />
              Snelle Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Over Ons', href: '/over-ons/' },
                { label: 'Projecten', href: '/#projecten' },
                { label: 'Tuinblog', href: '/tuinblog/' },
                { label: 'Contact', href: '/contact/' },
                { label: 'Mijn Tuin (Klanten)', href: '/mijn-tuin/' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-forest-200 hover:text-green-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-green-400" />
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{demoContact.phoneRaw}</p>
                  <p className="text-amber-400 text-xs">DEMO - Voorbeeld</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm">{demoContact.emailRaw}</p>
                  <p className="text-amber-400 text-xs">DEMO</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm">{demoContact.address}</p>
                </div>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-forest-800">
              <p className="text-forest-300 text-xs">KVK: {demoContact.kvk}</p>
              <p className="text-forest-300 text-xs">BTW: {demoContact.btw}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-forest-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-forest-300 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Groen & Tuin Architectuur. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6 text-sm text-forest-300">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Algemene Voorwaarden</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
