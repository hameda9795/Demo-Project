'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import CustomCursor from '@/components/CustomCursor'
import FloatingButton from '@/components/FloatingButton'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    if (formData.email && formData.password) {
      alert('Succesvol ingelogd!\n\nJe wordt doorgestuurd naar het dashboard.')
      router.push('/dashboard')
    }
  }

  return (
    <>
      <CustomCursor />
      <FloatingButton />
      
      <div className="min-h-screen flex items-center justify-center bg-cream px-4 py-8">
        <div className="w-full max-w-md bg-white p-8 shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex flex-col font-display leading-none mb-4">
              <span className="text-xs font-body font-medium tracking-[0.2em] uppercase text-stone">De</span>
              <span className="text-xl font-bold text-primary">Lunchkamer</span>
            </Link>
            <h1 className="text-2xl mb-2">Welkom terug</h1>
            <p className="text-stone text-sm">Log in om je dashboard te bekijken</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-primary">E-mailadres</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jouw@email.nl"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 border border-stone-light font-body text-base bg-warm-white focus:outline-none focus:border-accent box-border"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-medium text-primary">Wachtwoord</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="w-full px-4 py-3 border border-stone-light font-body text-base bg-warm-white focus:outline-none focus:border-accent box-border"
              />
            </div>
            <button type="submit" className="w-full bg-accent text-white border border-accent py-4 font-body text-sm font-semibold hover:bg-accent-light hover:border-accent-light transition-all">
              Inloggen
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="bg-cream p-4 mt-6 border-l-4 border-accent">
            <p className="text-sm"><strong className="text-accent">Demo inloggegevens:</strong></p>
            <p className="text-sm">Gebruikersnaam: <code>demo@delunchkamer.nl</code></p>
            <p className="text-sm">Wachtwoord: <code>demo123</code></p>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-stone space-y-2">
            <p>Nog geen account? <Link href="/signup" className="text-accent font-medium">Registreer hier</Link></p>
            <p><Link href="/" className="text-accent">← Terug naar website</Link></p>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="fixed bottom-2.5 left-0 right-0 text-center text-[11px] text-stone px-5">
        Dit is een demoversie - alle rechten behoren toe aan{' '}
        <Link href="https://www.techsolutionsutrecht.nl" target="_blank" className="text-accent">
          TechSolutions Utrecht
        </Link>
      </div>
    </>
  )
}
