"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  Briefcase,
  CreditCard,
  BookOpen,
  Mail,
  LogIn,
  Shield,
  Menu,
  X,
  Calculator,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/context/AuthContext";
import { MagneticButton } from "./MagneticButton";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/over-ons", label: "Over Ons", icon: Users },
  { href: "/diensten", label: "Diensten", icon: Briefcase },
  { href: "/tarieven", label: "Tarieven", icon: CreditCard },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-[60] lg:hidden w-12 h-12 rounded-full glass-card flex items-center justify-center text-[#1e3a5f] dark:text-white shadow-lg"
        aria-label={isOpen ? "Sluit menu" : "Open menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-[55] lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        className={`fixed left-0 top-0 h-screen w-72 z-[56] glass-card border-r border-[#1e3a5f]/10 dark:border-white/10 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full p-6 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2a4a73] flex items-center justify-center shadow-lg">
              <Calculator className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-[#1e3a5f] dark:text-white leading-tight">
                De Betrouwbare
              </h1>
              <p className="text-xs text-[#d4af37] font-medium">Boekhouder</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex-1" aria-label="Hoofdnavigatie">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                        isActive
                          ? "bg-[#1e3a5f] text-white shadow-md"
                          : "text-[#1e3a5f]/70 dark:text-white/70 hover:bg-[#1e3a5f]/10 dark:hover:bg-white/10"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${
                          isActive ? "text-[#d4af37]" : ""
                        }`}
                      />
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute right-4 w-1.5 h-1.5 rounded-full bg-[#d4af37]"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Auth Buttons */}
          <div className="space-y-3 mt-auto">
            {user ? (
              <Link href={user.role === "admin" ? "/admin" : "/dashboard"} onClick={() => setIsOpen(false)}>
                <MagneticButton
                  className="w-full justify-center gap-2 bg-[#d4af37] hover:bg-[#e5c158] text-[#1e3a5f] font-semibold"
                >
                  <Shield className="w-4 h-4" />
                  {user.role === "admin" ? "Admin Panel" : "Mijn Dashboard"}
                </MagneticButton>
              </Link>
            ) : (
              <>
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <MagneticButton
                    className="w-full justify-center gap-2 bg-[#1e3a5f] hover:bg-[#2a4a73] text-white"
                  >
                    <LogIn className="w-4 h-4" />
                    Inloggen
                  </MagneticButton>
                </Link>
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-2 border-[#1e3a5f]/20 text-[#1e3a5f] dark:text-white hover:bg-[#1e3a5f]/10"
                  >
                    <Shield className="w-4 h-4" />
                    Admin
                  </Button>
                </Link>
              </>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-[#1e3a5f]/70 dark:text-white/70 hover:bg-[#1e3a5f]/10 dark:hover:bg-white/10 transition-colors"
              aria-label={isDark ? "Schakel naar lichte modus" : "Schakel naar donkere modus"}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span className="text-sm">{isDark ? "Licht thema" : "Donker thema"}</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
