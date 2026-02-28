'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { User, Lock, Eye, EyeOff } from 'lucide-react'

export default function PortalLoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    localStorage.setItem('portal-auth', 'true')
    router.push('/portal/')
  }

  return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="font-heading font-bold text-2xl text-navy mb-2">
              Klantportaal
            </h1>
            <p className="text-concrete">
              Log in om uw projecten te bekijken
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-navy text-sm font-medium mb-2">E-mail</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-concrete" size={18} />
                <input
                  type="email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-navy focus:ring-2 focus:ring-safety focus:border-transparent"
                  placeholder="uw@email.nl"
                />
              </div>
            </div>

            <div>
              <label className="block text-navy text-sm font-medium mb-2">Wachtwoord</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-concrete" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 pr-12 text-navy focus:ring-2 focus:ring-safety focus:border-transparent"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-concrete"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-safety text-white font-heading font-bold py-4 rounded-xl hover:bg-safety-dark transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Inloggen...' : 'Inloggen'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="/" className="text-concrete hover:text-navy text-sm">
              ← Terug naar website
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
