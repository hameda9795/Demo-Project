'use client';

/**
 * Contact Page
 * 
 * Features:
 * - Contact form (DEMO)
 * - Demo contact information clearly marked
 * - Map placeholder
 * - FAQ section
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  Crown,
  ChevronRight
} from 'lucide-react';
import { DEMO_CONTACT } from '@/lib/data';

const faqs = [
  {
    question: 'Hoe kan ik mijn reservering wijzigen?',
    answer: 'U kunt uw reservering wijzigen via het gastenportaal of door contact op te nemen met onze receptie. Wijzigingen zijn mogelijk tot 24 uur voor aankomst.',
  },
  {
    question: 'Is er parkeergelegenheid bij het hotel?',
    answer: 'Ja, wij hebben een eigen parkeergarage. De kosten zijn €25 per nacht. Reserveren is aanbevolen.',
  },
  {
    question: 'Kan ik met mijn huisdier verblijven?',
    answer: 'Huisdieren zijn welkom in ons hotel. Er wordt een toeslag van €15 per nacht berekend.',
  },
  {
    question: 'Wat zijn de check-in en check-out tijden?',
    answer: 'Check-in is vanaf 15:00 uur en check-out is tot 11:00 uur. Late check-out is mogelijk op aanvraag.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-gold text-sm mb-4">
              <a href="/" className="hover:underline">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span>Contact</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-4">
              Neem contact met ons op
            </h1>
            <p className="text-white/70 max-w-2xl text-lg">
              Heeft u vragen over uw verblijf of wilt u meer informatie? 
              Ons team staat voor u klaar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: 'Adres', value: DEMO_CONTACT.address },
              { icon: Phone, label: 'Telefoon', value: DEMO_CONTACT.phone },
              { icon: Mail, label: 'E-mail', value: DEMO_CONTACT.email },
              { icon: Clock, label: 'Openingstijden', value: '24/7 geopend' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-medium text-navy mb-2">{item.label}</h3>
                <p className="text-navy/70 text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* DEMO Warning */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <Crown className="w-4 h-4 text-red-600" />
            </div>
            <div>
              <h4 className="font-medium text-red-800">DEMO WEBSITE</h4>
              <p className="text-red-600 text-sm">
                Alle contactgegevens op deze pagina zijn fictief en uitsluitend voor demonstratiedoeleinden. 
                Er kunnen geen echte reserveringen of aanvragen worden gedaan via deze website.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="font-serif text-2xl text-navy font-semibold mb-6">
                  Stuur ons een bericht
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-serif text-xl text-navy font-semibold mb-2">
                      Bericht verzonden!
                    </h3>
                    <p className="text-navy/70">
                      DEMO - Dit is een demonstratie
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-navy/70 text-sm mb-2">Naam *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-navy focus:border-gold focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-navy/70 text-sm mb-2">E-mail *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-navy focus:border-gold focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-navy/70 text-sm mb-2">Onderwerp</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-navy focus:border-gold focus:outline-none transition-colors"
                      >
                        <option value="">Selecteer een onderwerp</option>
                        <option value="reservation">Reservering</option>
                        <option value="question">Vraag</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Overig</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-navy/70 text-sm mb-2">Bericht *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-navy focus:border-gold focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors btn-shimmer flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Verstuur bericht
                    </button>

                    <p className="text-navy/40 text-xs text-center">
                      DEMO - Bericht wordt niet echt verzonden
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map & Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-80 bg-navy/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                      <p className="text-navy/60">Interactieve kaart (DEMO)</p>
                      <p className="text-navy font-medium">Domplein 1, Utrecht</p>
                    </div>
                  </div>
                  {/* Decorative map pattern */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a5f' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                </div>
              </div>

              {/* Route Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-serif text-xl text-navy font-semibold mb-4">
                  Routebeschrijving
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-navy">Met de auto</h4>
                      <p className="text-navy/70 text-sm">
                        Volg de A2 of A12 richting Utrecht. Parkeergarage Hoog Catharijne 
                        bevindt zich op 5 minuten loopafstand.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-navy">Met het OV</h4>
                      <p className="text-navy/70 text-sm">
                        Vanaf Utrecht Centraal is het 10 minuten lopen. 
                        U kunt ook bus 2 nemen naar halte Domplein.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-navy">Met de taxi</h4>
                      <p className="text-navy/70 text-sm">
                        Taxi's kunnen voor de hoofdingang stoppen. 
                        Wij werken samen met UTC Taxi Service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-white font-semibold mb-4">
              Veelgestelde vragen
            </h2>
            <p className="text-white/70">
              Hier vindt u antwoorden op de meest gestelde vragen
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <ChevronRight 
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-90' : ''
                    }`} 
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    className="px-6 pb-6"
                  >
                    <p className="text-white/70">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark border-t border-gold/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-2 text-white hover:text-gold transition-colors">
              <ChevronRight className="w-4 h-4 rotate-180" />
              Terug naar home
            </a>
            <p className="text-white/40 text-sm">
              KvK: {DEMO_CONTACT.kvk}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
