'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Building2, Eye, EyeOff, Lock, User } from 'lucide-react'

/**
 * Admin Login Page
 * Centered card with dark industrial aesthetic
 * Pre-filled demo credentials
 */
export default function AdminLoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: 'demo',
    password: 'demo123',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Save to localStorage
    localStorage.setItem('admin-auth', 'true')
    
    router.push('/admin/')
  }

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
        {/* Decorative shapes */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-safety/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-safety/5 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        <div className="bg-navy-light rounded-2xl p-8 border border-white/10 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-safety/10 rounded-xl flex items-center justify-center">
              <Building2 className="text-safety" size={32} />
            </div>
            <h1 className="font-heading font-bold text-2xl text-white mb-2">
              Admin Login
            </h1>
            <p className="text-white/50 text-sm">
              Bouwbedrijf Van den Berg
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-white/70 text-sm mb-2">Gebruikersnaam</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 pl-12 text-white placeholder-white/30 focus:ring-2 focus:ring-safety focus:border-transparent transition-all"
                  placeholder="demo"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-white/70 text-sm mb-2">Wachtwoord</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 pl-12 pr-12 text-white placeholder-white/30 focus:ring-2 focus:ring-safety focus:border-transparent transition-all"
                  placeholder="demo123"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Demo Notice */}
            <div className="bg-safety/10 border border-safety/20 rounded-lg p-3">
              <p className="text-safety text-sm text-center">
                Demo: gebruik <strong>demo</strong> / <strong>demo123</strong>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-safety text-white font-heading font-bold py-4 rounded-xl hover:bg-safety-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Inloggen...
                </>
              ) : (
                'Inloggen'
              )}
            </button>
          </form>

          {/* Back Link */}
          <div className="mt-6 text-center">
            <a href="/" className="text-white/40 hover:text-white text-sm transition-colors">
              ← Terug naar website
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
