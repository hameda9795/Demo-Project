'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Flower2, Menu, X, Lock, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Onze Kamers', href: '#kamers' },
  { label: 'Het Ontbijt', href: '#ontbijt' },
  { label: 'Over Ons', href: '#over-ons' },
  { label: 'Omgeving', href: '#omgeving' },
  { label: 'Blog', href: '/dagboek/' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-creamy-egg/95 backdrop-blur-sm border-b border-coffee-brown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Flower2 className="w-7 h-7 text-strawberry-jam" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-lora text-lg lg:text-xl font-semibold text-coffee-brown leading-tight">
                Het Kleine Paradijs
              </span>
              <span className="text-[10px] lg:text-xs text-coffee-brown/60 tracking-wider">
                BED & BREAKFAST
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-coffee-brown/80 hover:text-strawberry-jam transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-strawberry-jam transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right side: Admin, Portal, Demo badge */}
          <div className="flex items-center gap-3">
            {/* Demo Badge - Desktop */}
            <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-strawberry-jam/10 text-strawberry-jam border border-strawberry-jam/20">
              DEMO WEBSITE
            </span>

            {/* Admin & Portal buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/admin/"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-coffee-brown border border-strawberry-jam/30 rounded-full hover:bg-strawberry-jam/5 transition-colors"
              >
                <Lock className="w-3 h-3" />
                Admin
              </Link>
              <Link
                href="/portal/"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-coffee-brown border border-strawberry-jam/30 rounded-full hover:bg-strawberry-jam/5 transition-colors"
              >
                <User className="w-3 h-3" />
                Mijn Boeking
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-coffee-brown hover:text-strawberry-jam transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-creamy-egg border-t border-coffee-brown/10"
          >
            <div className="px-4 py-4 space-y-3">
              {/* Demo Badge - Mobile */}
              <div className="pb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-strawberry-jam/10 text-strawberry-jam border border-strawberry-jam/20">
                  DEMO WEBSITE
                </span>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-medium text-coffee-brown hover:text-strawberry-jam transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Admin & Portal */}
              <div className="pt-4 border-t border-coffee-brown/10 flex flex-col gap-2">
                <Link
                  href="/admin/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 py-2 text-sm text-coffee-brown/70 hover:text-strawberry-jam transition-colors"
                >
                  <Lock className="w-4 h-4" />
                  Admin Panel
                </Link>
                <Link
                  href="/portal/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 py-2 text-sm text-coffee-brown/70 hover:text-strawberry-jam transition-colors"
                >
                  <User className="w-4 h-4" />
                  Mijn Boeking
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
