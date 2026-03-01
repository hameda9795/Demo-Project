'use client';

/**
 * Bottom Navigation Bar
 * Mobile-only sticky bottom navigation with centered elevated Order button
 * 
 * Thumb-Zone Design Principles:
 * - Primary actions (Order) in easy thumb reach (center-bottom)
 * - Secondary actions (Home, Menu, Location) within thumb sweep
 * - Min 48px touch targets throughout
 * - Safe area insets for notched devices
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Coffee, ShoppingBag, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { 
    href: '/', 
    label: 'Home', 
    icon: Home,
    // Home icon - left side, easy thumb reach
  },
  { 
    href: '/menu', 
    label: 'Menu', 
    icon: Coffee,
    // Menu icon - left-center
  },
  { 
    href: '/order', 
    label: 'Order', 
    icon: ShoppingBag,
    isCenter: true,
    // Center elevated button - PRIMARY CTA
    // Most prominent, highest in visual hierarchy
  },
  { 
    href: '/locatie', 
    label: 'Locatie', 
    icon: MapPin,
    // Location icon - right side
  },
];

export function BottomNav() {
  const pathname = usePathname();

  // Hide on desktop (md breakpoint and up)
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40">
      {/* Background blur effect for depth */}
      <div className="absolute inset-0 bg-cream-100/95 backdrop-blur-lg border-t border-latte-100" />
      
      {/* Safe area padding for iPhone X+ notches */}
      <div className="relative flex items-end justify-around px-2 pb-safe-bottom h-18">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;

          if (item.isCenter) {
            // CENTER ELEVATED BUTTON - Primary Action
            // Positioned higher (-translateY) for prominence
            // Circular amber design for high contrast
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative -translate-y-3"
                aria-label={item.label}
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    // Large circular button - min 56px for easy tapping
                    'flex flex-col items-center justify-center',
                    'w-14 h-14 rounded-full shadow-elevated',
                    'bg-amber-500 text-white',
                    // Active state adds glow effect
                    isActive && 'ring-4 ring-amber-200 shadow-glow'
                  )}
                >
                  <Icon className="w-6 h-6" strokeWidth={2.5} />
                </motion.div>
                {/* Label below button */}
                <span className={cn(
                  'absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap',
                  isActive ? 'text-amber-600' : 'text-espresso-600'
                )}>
                  {item.label}
                </span>
              </Link>
            );
          }

          // REGULAR NAV ITEMS
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center py-2 px-3 min-w-[64px]"
              aria-label={item.label}
            >
              <motion.div
                whileTap={{ scale: 0.85 }}
                className={cn(
                  // Min 48px touch target
                  'flex items-center justify-center w-12 h-12 rounded-2xl',
                  'transition-colors duration-200',
                  isActive 
                    ? 'bg-amber-100 text-amber-600' 
                    : 'text-espresso-600'
                )}
              >
                <Icon 
                  className="w-6 h-6" 
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </motion.div>
              <span className={cn(
                'text-xs mt-1 font-medium',
                isActive ? 'text-amber-600' : 'text-espresso-600'
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
