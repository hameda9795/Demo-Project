/**
 * Customer Portal Login Page
 * Dakwerken Van der Berg
 * 
 * @description Customer login for the "Mijn Dak" portal
 */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, User, Eye, EyeOff, Home } from "lucide-react";

export default function CustomerLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Demo login - accept any email with @ and password > 3
    if (email.includes("@") && password.length > 3) {
      router.push("/mijn-dak/dashboard/");
    } else {
      setError("Ongeldig e-mailadres of wachtwoord");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cloud-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-safety-orange rounded-2xl mb-4 shadow-xl">
            <Home className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-storm-gray mb-2">
            Mijn Dak
          </h1>
          <p className="text-storm-gray/60">Klantenportaal Dakwerken Van der Berg</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="font-heading text-2xl font-bold text-storm-gray mb-6 text-center">
            Inloggen
          </h2>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-emergency-red/10 border-2 border-emergency-red/20 rounded-xl text-emergency-red text-sm"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-storm-gray mb-2">
                E-mailadres
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-storm-gray/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-storm-gray/10 rounded-xl focus:border-safety-orange focus:outline-none transition-colors"
                  placeholder="uw@email.nl"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-storm-gray mb-2">
                Wachtwoord
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-storm-gray/40" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 border-2 border-storm-gray/10 rounded-xl focus:border-safety-orange focus:outline-none transition-colors"
                  placeholder="Wachtwoord"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-storm-gray/40 hover:text-storm-gray transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-safety-orange text-white font-heading font-bold rounded-xl hover:bg-safety-orange/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full mx-auto"
                />
              ) : (
                "Inloggen"
              )}
            </button>
          </form>

          {/* Forgot Password */}
          <div className="mt-6 text-center">
            <a href="#" className="text-safety-orange hover:underline text-sm">
              Wachtwoord vergeten?
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="text-center mt-6 space-y-2">
          <p className="text-storm-gray/60 text-sm">
            Nog geen account?{" "}
            <a href="#" className="text-safety-orange hover:underline">
              Registreer hier
            </a>
          </p>
          <a href="/" className="text-storm-gray/40 hover:text-storm-gray text-sm transition-colors">
            ← Terug naar website
          </a>
        </div>
      </motion.div>
    </div>
  );
}
