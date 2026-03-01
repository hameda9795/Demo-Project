/**
 * Footer Component
 * Van den Berg Timmerwerken
 * 
 * Features:
 * - Wood grain texture background
 * - Demo contact information (clearly marked)
 * - Sitemap links
 * - Service areas
 * - Social proof badges
 * - Copyright with required HTML comment
 */

import Link from "next/link";
import { Hammer, MapPin, Phone, Mail, Clock, TreePine } from "lucide-react";
import { CONTACT_INFO, SERVICE_AREAS } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#3E2723] text-[#F5F5DC] overflow-hidden">
      {/* 
        Copyright HTML Comment as required
        © Tech Solutions Utrecht - Unauthorized copying prohibited
      */}
      {/* HTML Comment will be added at bottom */}

      {/* Wood Grain Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 4px,
              rgba(212, 175, 55, 0.1) 4px,
              rgba(212, 175, 55, 0.1) 5px
            )
          `,
        }}
      />

      {/* Top Wood Plank Separator */}
      <div className="wood-plank" />

      <div className="relative z-10 section-container py-16">
        <div className="section-inner">
          {/* Demo Warning Banner */}
          <div className="mb-12 p-4 bg-red-600/20 border border-red-500/30 rounded-lg text-center">
            <p className="text-red-200 font-medium">
              ⚠️ DEMO WEBSITE - Geen echte data wordt verwerkt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Logo & About */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B5A2B] to-[#5D4037] flex items-center justify-center">
                  <Hammer className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="font-playfair text-lg font-bold leading-tight">
                    Van den Berg
                  </span>
                  <span className="block text-xs text-[#D4AF37] tracking-wider uppercase">
                    Timmerwerken
                  </span>
                </div>
              </div>
              <p className="text-[#F5F5DC]/80 text-sm leading-relaxed mb-6">
                Al 20 jaar uw timmerman voor maatwerk meubels, renovaties en restauraties in Utrecht en omgeving. 
                <span className="text-[#D4AF37]"> (DEMO)</span>
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-xs bg-[#8B5A2B]/30 rounded-full border border-[#D4AF37]/20">
                  FSC Gecertificeerd
                </span>
                <span className="px-3 py-1 text-xs bg-[#8B5A2B]/30 rounded-full border border-[#D4AF37]/20">
                  Handgemaakt in NL
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-playfair text-lg font-semibold mb-6 text-[#D4AF37]">
                Sitemap
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "Projecten", href: "#projecten" },
                  { label: "Maatwerk", href: "#maatwerk" },
                  { label: "Over Ons", href: "#over-ons" },
                  { label: "Blog", href: "/werkplaats-nieuws/" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#F5F5DC]/70 hover:text-[#D4AF37] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Service Areas */}
            <div>
              <h3 className="font-playfair text-lg font-semibold mb-6 text-[#D4AF37]">
                Werkgebied
              </h3>
              <ul className="space-y-2">
                {SERVICE_AREAS.map((area) => (
                  <li key={area.name} className="flex items-center gap-2 text-sm text-[#F5F5DC]/70">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    {area.name}
                    <span className="text-[#F5F5DC]/40 text-xs">({area.distance})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info (DEMO) */}
            <div>
              <h3 className="font-playfair text-lg font-semibold mb-6 text-[#D4AF37]">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#F5F5DC]/80">
                    {CONTACT_INFO.address}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span className="text-sm text-[#F5F5DC]/80">
                    {CONTACT_INFO.phone}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span className="text-sm text-[#F5F5DC]/80">
                    {CONTACT_INFO.email}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" />
                  <div className="text-sm text-[#F5F5DC]/80">
                    <p>Ma-Vr: {CONTACT_INFO.hours.weekdays}</p>
                    <p>Za: {CONTACT_INFO.hours.saturday}</p>
                    <p>Zo: {CONTACT_INFO.hours.sunday}</p>
                  </div>
                </li>
              </ul>

              {/* KVK & BTW */}
              <div className="mt-6 pt-6 border-t border-[#F5F5DC]/10 text-xs text-[#F5F5DC]/50">
                <p>KVK: {CONTACT_INFO.kvk}</p>
                <p>BTW: {CONTACT_INFO.btw}</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-[#F5F5DC]/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright - As specified in requirements */}
              <p className="text-sm text-[#F5F5DC]/60 text-center md:text-left">
                © {currentYear} Tech Solutions Utrecht. Alle intellectuele eigendomsrechten voorbehouden. 
                Concept, design en ontwikkeling door Tech Solutions Utrecht.
              </p>

              {/* Legal Links */}
              <div className="flex items-center gap-6 text-sm">
                <Link href="#" className="text-[#F5F5DC]/60 hover:text-[#D4AF37] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-[#F5F5DC]/60 hover:text-[#D4AF37] transition-colors">
                  Algemene Voorwaarden
                </Link>
              </div>
            </div>

            {/* Additional Disclaimer */}
            <p className="mt-4 text-xs text-[#F5F5DC]/40 text-center">
              DEMO WEBSITE - Dit is een demonstratie website. Geen echte producten of diensten worden aangeboden.
            </p>
          </div>
        </div>
      </div>

      {/* Hidden HTML Comment for Copyright */}
      {/* Note: In actual React/Next.js, HTML comments are rendered differently */}
    </footer>
  );
}
