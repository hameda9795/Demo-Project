"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("demo@techsolutionsutrecht.nl");
  const [password, setPassword] = useState("demo123");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"guest" | "owner">("guest");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email === "demo@techsolutionsutrecht.nl" && password === "demo123") {
      // Redirect based on selected tab
      if (activeTab === "owner") {
        router.push("/eigenaarsdashboard");
      } else {
        router.push("/gastenportaal");
      }
    } else {
      setError("Ongeldige inloggegevens. Probeer demo / demo123");
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/images/modern-bnb-living.jpg"
          alt="Gezellig interieur"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent" />
        
        {/* Content on image */}
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white max-w-md"
          >
            <h2 className="font-display text-4xl font-bold mb-4">
              Welkom terug
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Log in om uw boekingen te beheren, met uw gastheer te communiceren, 
              of uw eigendommen te beheren.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-terracotta rounded-xl flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">V</span>
            </div>
            <span className="font-display font-bold text-xl text-charcoal">
              VakantieHuizen <span className="text-terracotta">Pro</span>
            </span>
          </Link>

          <h1 className="font-display text-3xl font-bold text-charcoal mb-2">
            Inloggen
          </h1>
          <p className="text-charcoal/60 mb-8">
            Kies uw accounttype en log in om verder te gaan
          </p>

          {/* Account Type Tabs */}
          <div className="flex gap-2 p-1 bg-white rounded-xl mb-6 shadow-sm">
            <button
              onClick={() => setActiveTab("guest")}
              className={cn(
                "flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all",
                activeTab === "guest"
                  ? "bg-terracotta text-white shadow-md"
                  : "text-charcoal/60 hover:text-charcoal"
              )}
            >
              Ik ben een gast
            </button>
            <button
              onClick={() => setActiveTab("owner")}
              className={cn(
                "flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all",
                activeTab === "owner"
                  ? "bg-sage text-white shadow-md"
                  : "text-charcoal/60 hover:text-charcoal"
              )}
            >
              Ik ben een eigenaar
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                E-mailadres
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  placeholder="uw@email.nl"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Wachtwoord
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-charcoal"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-cream-300 text-terracotta focus:ring-terracotta" />
                <span className="text-charcoal/60">Onthoud mij</span>
              </label>
              <Link href="#" className="text-terracotta hover:underline">
                Wachtwoord vergeten?
              </Link>
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-12 text-base"
              isLoading={isLoading}
            >
              Inloggen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-sage/10 rounded-xl border border-sage/20">
            <p className="text-sm font-medium text-sage mb-1">Demo inloggegevens:</p>
            <p className="text-sm text-charcoal/60">Email: demo@techsolutionsutrecht.nl</p>
            <p className="text-sm text-charcoal/60">Wachtwoord: demo123</p>
          </div>

          {/* Register Link */}
          <p className="mt-8 text-center text-charcoal/60">
            Nog geen account?{" "}
            <Link href="#" className="text-terracotta font-medium hover:underline">
              Registreer hier
            </Link>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
