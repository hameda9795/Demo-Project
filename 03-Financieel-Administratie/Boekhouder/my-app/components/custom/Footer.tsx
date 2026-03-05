"use client";

import Link from "next/link";
import { Calculator, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#e5c158] flex items-center justify-center">
                <Calculator className="w-5 h-5 text-[#1e3a5f]" />
              </div>
              <div>
                <h3 className="font-bold text-white">De Betrouwbare Boekhouder</h3>
                <p className="text-xs text-[#d4af37]">Amsterdam</p>
              </div>
            </Link>
            <p className="text-white/70 text-sm max-w-sm">
              Uw financiële toekomst is onze zorg. Professionele boekhoudkundige 
              diensten voor ondernemers in Amsterdam en omgeving.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                Keizersgracht 123, 1015 CJ Amsterdam
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                +31 20 123 4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37]" />
                demo@techsolutionsutrecht.nl
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Snelle Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/diensten" className="hover:text-[#d4af37] transition-colors">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/tarieven" className="hover:text-[#d4af37] transition-colors">
                  Tarieven
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-[#d4af37] transition-colors">
                  Inloggen
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 text-center md:text-left">
            <p>
              Dit is een demo versie en alle intellectuele rechten behoren toe aan techsolutionsutrecht
            </p>
            <p>
              © 2024 De Betrouwbare Boekhouder - Gebouwd door{" "}
              <a 
                href="https://www.techsolutionsutrecht.nl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#d4af37] hover:underline"
              >
                www.techsolutionsutrecht.nl
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
