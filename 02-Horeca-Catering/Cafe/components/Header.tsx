'use client';

/**
 * Header Component
 * Mobile: Minimal - Logo left, Admin/Profile icons right
 * Desktop: Full horizontal navigation with text buttons
 * 
 * Mobile Design:
 * - Sticky top
 * - Clean minimal design
 * - DEMO badge prominently displayed
 * - Icon-only buttons for Admin/Profile (thumb-reachable)
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, User, Coffee } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DEMO_CONTACT } from '@/lib/data';

// Desktop navigation items
const desktopNavItems = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/locatie', label: 'Locatie' },
  { href: '/koffiekennis', label: 'Koffie Kennis' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-cream-50/95 backdrop-blur-lg border-b border-latte-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              {/* Logo Icon */}
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shadow-soft">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              {/* Brand Name - Hidden on very small screens */}
              <div className="hidden xs:block">
                <h1 className="text-lg font-bold text-espresso-900 leading-tight">
                  De Gouden Boon
                </h1>
                <p className="text-xs text-espresso-500">Utrecht</p>
              </div>
            </motion.div>
          </Link>

          {/* DEMO Badge - Always visible */}
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 text-xs font-bold text-amber-700 bg-amber-200 rounded-full animate-pulse">
              DEMO PLEK
            </span>

            {/* Mobile: Icon-only buttons */}
            <div className="flex items-center gap-1 md:hidden">
              <Link href="/admin">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-espresso-100 transition-colors"
                  aria-label="Admin"
                >
                  <Lock className="w-5 h-5 text-espresso-600" />
                </motion.button>
              </Link>
              <Link href="/mijn-koffie">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-espresso-100 transition-colors"
                  aria-label="Mijn Profiel"
                >
                  <User className="w-5 h-5 text-espresso-600" />
                </motion.button>
              </Link>
            </div>

            {/* Desktop: Full navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {desktopNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-amber-100 text-amber-700'
                        : 'text-espresso-600 hover:bg-espresso-50'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              <div className="w-px h-6 bg-latte-200 mx-2" />
              
              <Link
                href="/admin"
                className="px-4 py-2 rounded-lg text-sm font-medium text-espresso-600 hover:bg-espresso-50 transition-colors"
              >
                Admin
              </Link>
              <Link
                href="/mijn-koffie"
                className="px-4 py-2 rounded-lg text-sm font-medium text-espresso-600 hover:bg-espresso-50 transition-colors"
              >
                Inloggen
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
