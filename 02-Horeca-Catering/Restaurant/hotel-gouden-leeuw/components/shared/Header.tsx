'use client';

/**
 * Header Component - Navigation & Brand
 * 
 * Design: Transparent on scroll, navy background when scrolled
 * Features:
 * - Left: Logo with lion icon and DEMO badge
 * - Center: Navigation items with dropdown for Kamers
 * - Right: Admin & Guest Portal buttons (outline style)
 * - Mobile: Hamburger menu with gold accent
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Lock, 
  User,
  Crown
} from 'lucide-react';
import { navItems } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled 
            ? 'bg-navy/95 backdrop-blur-nav shadow-lg py-3' 
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with DEMO Badge */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center transition-colors',
                isScrolled ? 'bg-gold' : 'bg-white/20 backdrop-blur-sm'
              )}>
                <Crown className={cn(
                  'w-6 h-6',
                  isScrolled ? 'text-navy' : 'text-gold'
                )} />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  'font-serif text-lg sm:text-xl font-semibold tracking-wide transition-colors',
                  isScrolled ? 'text-white' : 'text-white'
                )}>
                  Hotel De Gouden Leeuw
                </span>
                {/* DEMO Badge */}
                <span className="text-[10px] font-medium text-gold bg-red-600/90 px-1.5 py-0.5 rounded self-start -mt-0.5">
                  DEMO WEBSITE - Voorbeeld
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold',
                      isScrolled ? 'text-white/90' : 'text-white'
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className={cn(
                        'w-4 h-4 transition-transform',
                        activeDropdown === item.label && 'rotate-180'
                      )} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-navy hover:bg-gold/10 hover:text-gold transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Admin & Portal Buttons (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/admin/"
                className={cn(
                  'flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md border transition-all',
                  'border-gold/50 text-gold hover:bg-gold hover:text-navy'
                )}
              >
                <Lock className="w-4 h-4" />
                Admin
              </Link>
              <Link
                href="/portal/"
                className={cn(
                  'flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md border transition-all',
                  'border-gold/50 text-gold hover:bg-gold hover:text-navy'
                )}
              >
                <User className="w-4 h-4" />
                Mijn Boeking
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-2 rounded-md transition-colors',
                isScrolled ? 'text-white' : 'text-white'
              )}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-navy shadow-2xl"
            >
              <div className="p-6 pt-20">
                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-lg font-medium text-white hover:text-gold transition-colors py-2"
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <div className="ml-4 mt-2 space-y-2 border-l-2 border-gold/30 pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-sm text-white/70 hover:text-gold transition-colors py-1"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Admin & Portal */}
                <div className="mt-8 pt-8 border-t border-gold/20 space-y-3">
                  <Link
                    href="/admin/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium rounded-md border border-gold/50 text-gold hover:bg-gold hover:text-navy transition-all"
                  >
                    <Lock className="w-4 h-4" />
                    Admin
                  </Link>
                  <Link
                    href="/portal/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium rounded-md border border-gold/50 text-gold hover:bg-gold hover:text-navy transition-all"
                  >
                    <User className="w-4 h-4" />
                    Mijn Boeking
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
