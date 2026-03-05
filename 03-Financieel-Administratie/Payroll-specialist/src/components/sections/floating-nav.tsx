"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogIn, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/werkgevers", label: "Werkgevers" },
  { href: "/werknemers", label: "Werknemers" },
  { href: "/loonberekening", label: "Loonberekening" },
  { href: "/blog", label: "Kennisbank" },
  { href: "/contact", label: "Contact" },
];

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <>
      {/* Desktop Floating Nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="glass-dark rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl">
          <Link
            href="/"
            className="px-4 py-2 text-white font-bold text-lg flex items-center gap-2"
          >
            <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm">
              SP
            </span>
            <span className="hidden lg:inline">SalarisPro</span>
          </Link>

          <div className="w-px h-6 bg-white/20 mx-2" />

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="w-px h-6 bg-white/20 mx-2" />

          {user ? (
            <div className="flex items-center gap-2">
              <Link href={user.role === "admin" ? "/admin" : "/dashboard"}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  <User className="w-4 h-4 mr-2" />
                  {user.name}
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Link href="/login">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Inloggen
              </Button>
            </Link>
          )}
        </div>
      </motion.nav>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 safe-area-pb">
        <div className="flex items-center justify-around px-2 py-2">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col items-center gap-1 px-3 py-2 text-xs text-gray-600 hover:text-primary"
            >
              <span>{link.label}</span>
            </Link>
          ))}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex flex-col items-center gap-1 px-3 py-2 text-xs text-gray-600 hover:text-primary"
          >
            <Menu className="w-5 h-5" />
            <span>Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 md:hidden max-h-[80vh] overflow-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-bold text-xl text-primary">SalarisPro</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-lg hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t">
                  {user ? (
                    <div className="space-y-2">
                      <Link
                        href={user.role === "admin" ? "/admin" : "/dashboard"}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button className="w-full" variant="outline">
                          <User className="w-4 h-4 mr-2" />
                          Mijn Account
                        </Button>
                      </Link>
                      <Button
                        className="w-full"
                        variant="destructive"
                        onClick={() => {
                          handleLogout();
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Uitloggen
                      </Button>
                    </div>
                  ) : (
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full">
                        <LogIn className="w-4 h-4 mr-2" />
                        Inloggen
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
