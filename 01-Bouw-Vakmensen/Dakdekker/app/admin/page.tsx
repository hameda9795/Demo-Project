/**
 * Admin Login Page
 * Dakwerken Van der Berg
 * 
 * @description Admin login with demo credentials (demo/demo123)
 */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, User, Eye, EyeOff, Shield } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("demo");
  const [password, setPassword] = useState("demo123");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (username === "demo" && password === "demo123") {
      // In a real app, set auth token/cookie here
      router.push("/admin/dashboard/");
    } else {
      setError("Ongeldige gebruikersnaam of wachtwoord");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-storm-gray flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.1) 40px,
              rgba(255,255,255,0.1) 80px
            )`,
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-safety-orange rounded-2xl mb-4 shadow-xl">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-white mb-2">
            Admin Portal
          </h1>
          <p className="text-white/60">Dakwerken Van der Berg</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
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
            {/* Username */}
            <div>
              <label className="block text-sm font-semibold text-storm-gray mb-2">
                Gebruikersnaam
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-storm-gray/40" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-storm-gray/10 rounded-xl focus:border-safety-orange focus:outline-none transition-colors"
                  placeholder="Gebruikersnaam"
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

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-storm-gray/5 rounded-xl">
            <p className="text-xs text-storm-gray/60 text-center">
              Demo inloggegevens:<br />
              <strong>Gebruikersnaam:</strong> demo<br />
              <strong>Wachtwoord:</strong> demo123
            </p>
          </div>
        </div>

        {/* Back to site */}
        <div className="text-center mt-6">
          <a href="/" className="text-white/60 hover:text-white text-sm transition-colors">
            ← Terug naar website
          </a>
        </div>
      </motion.div>
    </div>
  );
}
