"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, User, ArrowLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Demo credentials
  const DEMO_USERNAME = "demo@accountant.nl";
  const DEMO_PASSWORD = "demo123";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Demo authentication
    if (formData.username === DEMO_USERNAME && formData.password === DEMO_PASSWORD) {
      router.push("/dashboard");
    } else {
      alert("Ongeldige inloggegevens. Gebruik de demo credentials hieronder.");
      setIsLoading(false);
    }
  };

  const fillDemoCredentials = () => {
    setFormData({
      username: DEMO_USERNAME,
      password: DEMO_PASSWORD,
    });
  };

  return (
    <div className="min-h-screen bg-warm-cream flex">
      {/* Left Side - Decorative */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 bg-warm-charcoal relative overflow-hidden"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Abstract Shapes */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 -left-20 w-80 h-80 bg-warm-terracotta/20 shape-blob"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-60 h-60 bg-warm-beige/10 shape-ellipse"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-16">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-caption text-warm-terracotta mb-4 block">
              Klantenportaal
            </span>
            <h1 className="font-display text-5xl text-warm-cream mb-6 leading-tight">
              Welkom terug
            </h1>
            <p className="text-body-large text-warm-beige/80 max-w-md">
              Log in om je financiële documenten te bekijken, 
              aangiftes te downloaden en direct contact op te nemen 
              met je accountant.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 gap-8"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div>
              <span className="font-display text-3xl text-warm-cream">24/7</span>
              <span className="block text-caption text-warm-beige/60 mt-1">Toegang</span>
            </div>
            <div>
              <span className="font-display text-3xl text-warm-cream">Bank</span>
              <span className="block text-caption text-warm-beige/60 mt-1">Koppeling</span>
            </div>
          </motion.div>
        </div>

        {/* Back Link */}
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center gap-2 text-warm-beige/60 hover:text-warm-cream transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-caption">Terug naar website</span>
        </Link>
      </motion.div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-12">
        <motion.div
          className="max-w-md w-full mx-auto"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Mobile Logo */}
          <div className="lg:hidden mb-12">
            <Link href="/" className="inline-block">
              <span className="font-display text-xl font-semibold text-warm-charcoal">
                VAN DEN BERG
              </span>
            </Link>
          </div>

          {/* Demo Credentials Notice */}
          <motion.div
            className="mb-8 p-4 bg-warm-terracotta/10 border-l-4 border-warm-terracotta"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-warm-terracotta flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-display text-sm text-warm-charcoal mb-1">
                  Demo versie
                </p>
                <p className="text-xs text-warm-taupe mb-2">
                  Gebruik onderstaande gegevens om in te loggen:
                </p>
                <div className="text-xs font-mono bg-warm-cream p-2 space-y-1">
                  <p><span className="text-warm-taupe">Gebruikersnaam:</span> {DEMO_USERNAME}</p>
                  <p><span className="text-warm-taupe">Wachtwoord:</span> {DEMO_PASSWORD}</p>
                </div>
                <button
                  onClick={fillDemoCredentials}
                  className="mt-2 text-xs text-warm-terracotta hover:underline font-medium"
                >
                  Vul automatisch in →
                </button>
              </div>
            </div>
          </motion.div>

          <h2 className="font-display text-3xl text-warm-charcoal mb-2">
            Inloggen
          </h2>
          <p className="text-body text-warm-taupe mb-8">
            Vul je gegevens in om toegang te krijgen tot je account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-caption text-warm-taupe">
                Gebruikersnaam
              </Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-taupe/50" />
                <Input
                  id="username"
                  type="email"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  placeholder="naam@bedrijf.nl"
                  required
                  className="pl-12 h-14 bg-white border-warm-taupe/20 focus:border-warm-terracotta rounded-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-caption text-warm-taupe">
                Wachtwoord
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-taupe/50" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  required
                  className="pl-12 pr-12 h-14 bg-white border-warm-taupe/20 focus:border-warm-terracotta rounded-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-warm-taupe/50 hover:text-warm-taupe transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-warm-taupe/30 rounded-none text-warm-terracotta focus:ring-warm-terracotta"
                />
                <span className="text-sm text-warm-taupe">Onthoud mij</span>
              </label>
              <Link
                href="#"
                className="text-sm text-warm-terracotta hover:underline"
              >
                Wachtwoord vergeten?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-warm-charcoal hover:bg-warm-terracotta text-warm-cream rounded-none font-display tracking-wide transition-colors disabled:opacity-50"
            >
              {isLoading ? "Bezig met inloggen..." : "Inloggen"}
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-warm-taupe/20">
            <p className="text-center text-sm text-warm-taupe">
              Nog geen account?{" "}
              <Link href="#" className="text-warm-terracotta hover:underline font-medium">
                Vraag toegang aan
              </Link>
            </p>
          </div>

          {/* Security Note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-warm-taupe/60">
            <Lock className="w-3 h-3" />
            <span>Beveiligde verbinding (SSL)</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
