'use client'

import { useState, FormEvent } from 'react'
import ScrollReveal from '../ScrollReveal'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'algemeen',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.\n\n(Dit is een demo - geen echt bericht verstuurd)')
    setFormData({ name: '', email: '', subject: 'algemeen', message: '' })
  }

  return (
    <section id="contact" className="section bg-cream overflow-hidden relative">
      {/* Background Shapes */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-accent blur-[100px] opacity-30 -top-[200px] -right-[200px]" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-stone-light blur-[100px] opacity-30 -bottom-[150px] -left-[100px]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 gap-xl items-start max-lg:grid-cols-1">
          {/* Contact Info */}
          <div>
            <ScrollReveal>
              <span className="section-eyebrow">Kom langs</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="section-title">Contact</h2>
            </ScrollReveal>

            <div className="mt-lg space-y-md">
              <ScrollReveal delay={200}>
                <div>
                  <span className="block text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-xs">Adres</span>
                  <address className="text-base leading-relaxed text-stone not-italic">
                    De Lunchkamer<br />
                    Oudegracht 123<br />
                    3511 AB Utrecht
                  </address>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div>
                  <span className="block text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-xs">Contact</span>
                  <p className="text-base leading-relaxed">
                    <a href="tel:+31301234567" className="text-primary border-b border-transparent hover:border-accent transition-colors">030 - 123 4567</a><br />
                    <a href="mailto:hallo@delunchkamer.nl" className="text-primary border-b border-transparent hover:border-accent transition-colors">hallo@delunchkamer.nl</a>
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div>
                  <span className="block text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-xs">Openingstijden</span>
                  <p className="text-base leading-relaxed text-stone">
                    Ma - Vr: 08:00 - 17:00<br />
                    Za: 09:00 - 16:00<br />
                    Zo: Gesloten
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Contact Form */}
          <ScrollReveal delay={300}>
            <div className="bg-white p-lg shadow-xl max-md:p-md">
              <form onSubmit={handleSubmit} className="flex flex-col gap-md">
                <div className="form-group">
                  <label htmlFor="name">Naam</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Onderwerp</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="algemeen">Algemene vraag</option>
                    <option value="catering">Catering aanvraag</option>
                    <option value="reservering">Reservering</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Bericht</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Verstuur bericht
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
