"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Calculator, Lock, User, Eye, EyeOff, AlertCircle } from "lucide-react";
import { GlassCard } from "@/components/custom/GlassCard";
import { MagneticButton } from "@/components/custom/MagneticButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/context/AuthContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const success = await login(username, password);
    if (success) {
      router.push("/dashboard");
    } else {
      setError("Ongeldige gebruikersnaam of wachtwoord");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#1e3a5f]/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <GlassCard className="relative overflow-hidden">
          {/* Decorative top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e3a5f] via-[#d4af37] to-[#1e3a5f]" />

          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2a4a73] flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-[#d4af37]" />
            </div>
            <h1 className="text-2xl font-bold text-[#1e3a5f] dark:text-white">
              Welkom terug
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Log in op uw account
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-red-600 text-sm"
            >
              <AlertCircle className="w-4 h-4" />
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="username" className="text-[#1e3a5f] dark:text-white">
                Gebruikersnaam
              </Label>
              <div className="relative mt-1.5">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="username"
                  type="text"
                  placeholder="demo"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10"
                  aria-label="Gebruikersnaam"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="text-[#1e3a5f] dark:text-white">
                Wachtwoord
              </Label>
              <div className="relative mt-1.5">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  aria-label="Wachtwoord"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-[#1e3a5f] transition-colors"
                  aria-label={showPassword ? "Verberg wachtwoord" : "Toon wachtwoord"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#1e3a5f]/20 text-[#d4af37] focus:ring-[#d4af37]"
                  aria-label="Onthoud mij"
                />
                <span className="text-muted-foreground">Onthoud mij</span>
              </label>
              <a
                href="#"
                className="text-[#d4af37] hover:underline font-medium"
              >
                Wachtwoord vergeten?
              </a>
            </div>

            <MagneticButton
              type="submit"
              disabled={isLoading}
              className="w-full justify-center bg-[#d4af37] hover:bg-[#e5c158] text-[#1e3a5f] font-semibold disabled:opacity-50"
            >
              {isLoading ? "Inloggen..." : "Inloggen"}
            </MagneticButton>
          </form>

          <div className="mt-8 pt-6 border-t border-[#1e3a5f]/10">
            <p className="text-center text-sm text-muted-foreground mb-4">
              Demo credentials:
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-[#1e3a5f]/5 dark:bg-white/5">
                <p className="font-semibold text-[#1e3a5f] dark:text-white mb-1">Client</p>
                <p className="text-muted-foreground">Gebruiker: demo</p>
                <p className="text-muted-foreground">Wachtwoord: demo123</p>
              </div>
              <div className="p-3 rounded-lg bg-[#1e3a5f]/5 dark:bg-white/5">
                <p className="font-semibold text-[#1e3a5f] dark:text-white mb-1">Admin</p>
                <p className="text-muted-foreground">Gebruiker: admin</p>
                <p className="text-muted-foreground">Wachtwoord: admin123</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
