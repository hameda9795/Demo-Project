"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  diensten: [
    { label: "Boekhouding", href: "/diensten#boekhouding" },
    { label: "Belastingadvies", href: "/diensten#belastingadvies" },
    { label: "Salarisadministratie", href: "/diensten#salaris" },
    { label: "Financieel advies", href: "/diensten#advies" },
  ],
  bedrijf: [
    { label: "Over ons", href: "/over-ons" },
    { label: "Ons team", href: "/over-ons#team" },
    { label: "Vacatures", href: "/over-ons#vacatures" },
    { label: "Contact", href: "/contact" },
  ],
  juridisch: [
    { label: "Privacybeleid", href: "#" },
    { label: "Algemene voorwaarden", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#2C2420] text-[#F5F0E8] brutal-border-top">
      {/* Main Footer Content */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#C17A5C] brutal-border flex items-center justify-center">
                  <span className="font-mono font-bold text-white text-xl">BD</span>
                </div>
                <span className="font-serif text-2xl font-semibold">Bureau Dekker</span>
              </div>
            </Link>
            <p className="text-[#B8A99A] leading-relaxed max-w-sm">
              Uw vertrouwde partner voor administratie en belastingzaken sinds 1995. 
              Persoonlijke service met een modern perspectief.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <a href="tel:+31301234567" className="flex items-center gap-3 text-[#B8A99A] hover:text-[#C17A5C] transition-colors group">
                <div className="w-10 h-10 brutal-border bg-[#3D332D] flex items-center justify-center group-hover:bg-[#C17A5C] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-mono text-sm">+31 (0)30 123 4567</span>
              </a>
              <a href="mailto:info@bureaudekker.nl" className="flex items-center gap-3 text-[#B8A99A] hover:text-[#C17A5C] transition-colors group">
                <div className="w-10 h-10 brutal-border bg-[#3D332D] flex items-center justify-center group-hover:bg-[#C17A5C] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-mono text-sm">info@bureaudekker.nl</span>
              </a>
              <div className="flex items-start gap-3 text-[#B8A99A]">
                <div className="w-10 h-10 brutal-border bg-[#3D332D] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-mono text-sm leading-relaxed">
                  Maliebaan 45<br />
                  3581 CD Utrecht
                </span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-mono text-sm uppercase tracking-wider mb-6 text-[#C17A5C]">Diensten</h3>
            <ul className="space-y-3">
              {footerLinks.diensten.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-[#B8A99A] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-sm uppercase tracking-wider mb-6 text-[#C17A5C]">Bedrijf</h3>
            <ul className="space-y-3">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-[#B8A99A] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-sm uppercase tracking-wider mb-6 text-[#C17A5C]">Juridisch</h3>
            <ul className="space-y-3">
              {footerLinks.juridisch.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-[#B8A99A] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-sm uppercase tracking-wider mb-6 text-[#C17A5C]">Openingstijden</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-[#B8A99A]">
                <span>Ma - vr</span>
                <span>09:00 - 17:00</span>
              </div>
              <div className="flex justify-between text-[#B8A99A]">
                <span>Za</span>
                <span>Gesloten</span>
              </div>
              <div className="flex justify-between text-[#B8A99A]">
                <span>Zo</span>
                <span>Gesloten</span>
              </div>
            </div>
            <div className="mt-6 p-4 brutal-border bg-[#3D332D]">
              <p className="text-xs text-[#B8A99A]">
                <strong className="text-white">Let op:</strong> Op feestdagen en tijdens de kerstperiode hanteren wij aangepaste openingstijden.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="brutal-border-top bg-[#1A1512]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-[#B8A99A]">
              <span>&copy; {new Date().getFullYear()} Bureau Dekker. Alle rechten voorbehouden.</span>
              <Separator orientation="vertical" className="hidden sm:block h-4 bg-[#3D332D]" />
              <span className="text-[#C17A5C]">
                Website door{" "}
                <a 
                  href="https://www.techsolutionsutrecht.nl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  TechSolutions Utrecht
                  <ExternalLink className="w-3 h-3" />
                </a>
              </span>
            </div>
            
            {/* Disclaimer */}
            <p className="text-[10px] text-[#6D5B4F] max-w-2xl">
              Dit is een demoversie en alle materiële en intellectuele rechten behoren toe aan TechSolutions Utrecht.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
