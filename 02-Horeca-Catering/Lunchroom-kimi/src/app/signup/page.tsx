'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import CustomCursor from '@/components/CustomCursor'
import FloatingButton from '@/components/FloatingButton'

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
    agreeTerms: false,
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.passwordConfirm) {
      alert('De wachtwoorden komen niet overeen.')
      return
    }
    
    if (formData.password.length < 8) {
      alert('Het wachtwoord moet minimaal 8 tekens bevatten.')
      return
    }
    
    alert('Account succesvol aangemaakt!\n\nJe kunt nu inloggen.')
    router.push('/login')
  }

  return (
    <>
      <CustomCursor />
      <FloatingButton />
      
      <div className="min-h-screen flex items-center justify-center bg-cream px-md py-xl">
        <div className="w-full max-w-[450px] bg-white p-xl shadow-xl">
          {/* Header */}
          <div className="text-center mb-lg">
            <Link href="/" className="inline-flex flex-col font-display leading-none mb-sm">
              <span className="text-xs font-body font-medium tracking-[0.2em] uppercase text-stone">De</span>
              <span className="text-xl font-bold text-primary">Lunchkamer</span>
            </Link>
            <h1 className="text-2xl mb-xs">Maak een account</h1>
            <p className="text-stone text-sm">Registreer om bestellingen te plaatsen</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-md">
            <div className="form-group">
              <label htmlFor="name">Volledige naam</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Jan Jansen"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mailadres</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jouw@email.nl"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefoonnummer</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="06 12345678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Wachtwoord</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Minimaal 8 tekens"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirm">Bevestig wachtwoord</label>
              <input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="••••••••"
                value={formData.passwordConfirm}
                onChange={(e) => setFormData({ ...formData, passwordConfirm: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="flex items-start gap-2 font-normal cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  required
                  className="mt-1"
                />
                <span className="text-sm">
                  Ik ga akkoord met de{' '}
                  <Link href="#" className="text-accent">algemene voorwaarden</Link>
                  {' '}en{' '}
                  <Link href="#" className="text-accent">privacy policy</Link>
                </span>
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              Account aanmaken
            </button>
          </form>

          {/* Footer */}
          <div className="mt-lg text-center text-sm text-stone">
            <p>Al een account? <Link href="/login" className="text-accent font-medium">Log hier in</Link></p>
            <p className="mt-2"><Link href="/" className="text-accent">← Terug naar website</Link></p>
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
