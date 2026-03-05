"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Bezoekadres",
    lines: [
      "Nobelstraat 42",
      "3583 CE Utrecht",
      "Nederland",
    ],
  },
  {
    icon: Phone,
    title: "Telefoon",
    lines: [
      "030 - 123 4567",
      "Bereikbaar tijdens kantooruren",
    ],
    action: {
      label: "Bel direct",
      href: "tel:0301234567",
    },
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: [
      "info@debrugadviseurs.nl",
      "Reactie binnen 24 uur",
    ],
    action: {
      label: "Stuur een e-mail",
      href: "mailto:info@debrugadviseurs.nl",
    },
  },
  {
    icon: Clock,
    title: "Openingstijden",
    lines: [
      "Ma-Vr: 08:30 - 17:30",
      "Di: 08:30 - 20:00 (koopavond)",
      "Za-Zo: Gesloten",
    ],
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <>
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-cream-200">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-concrete-200/20 -skew-x-12 translate-x-1/4" />
          
          <div className="container-asymmetric relative z-10">
            <div className="max-w-3xl">
              <p className="text-terracotta-500 text-sm uppercase tracking-[0.3em] font-medium mb-4">
                Contact
              </p>
              <h1 className="editorial-title mb-8">
                Laten we kennismaken
              </h1>
              <p className="editorial-body text-xl">
                Heeft u een vraag of wilt u een afspraak maken? 
                Wij staan voor u klaar. Vul het formulier in of neem 
                direct contact met ons op.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24">
          <div className="container-asymmetric">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="brutalist-card p-6">
                  <info.icon className="w-8 h-8 text-terracotta-400 mb-4" />
                  <h3 className="text-lg font-serif mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.lines.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-concrete-600 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                  {info.action && (
                    <a 
                      href={info.action.href}
                      className="inline-flex items-center text-sm font-medium text-terracotta-500 mt-4 hover:text-terracotta-600"
                    >
                      {info.action.label}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="editorial-spacing bg-cream-200">
          <div className="container-asymmetric">
            <div className="asymmetric-grid gap-12 md:gap-16">
              {/* Contact Form */}
              <div className="bg-cream-50 p-8 md:p-12 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-serif mb-6">
                  Stuur ons een bericht
                </h2>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-serif mb-2">Bedankt voor uw bericht!</h3>
                    <p className="text-concrete-600">
                      We nemen zo snel mogelijk contact met u op.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                          Naam *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-4 py-3 bg-cream-100 border border-concrete-300 text-ink placeholder-concrete-400 focus:outline-none focus:border-terracotta-400 transition-colors"
                          placeholder="Uw naam"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-4 py-3 bg-cream-100 border border-concrete-300 text-ink placeholder-concrete-400 focus:outline-none focus:border-terracotta-400 transition-colors"
                          placeholder="uw@email.nl"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                          Telefoon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-cream-100 border border-concrete-300 text-ink placeholder-concrete-400 focus:outline-none focus:border-terracotta-400 transition-colors"
                          placeholder="06 - 123 456 78"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-ink mb-2">
                          Onderwerp *
                        </label>
                        <select
                          id="subject"
                          required
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-cream-100 border border-concrete-300 text-ink focus:outline-none focus:border-terracotta-400 transition-colors"
                        >
                          <option value="">Kies een onderwerp</option>
                          <option value="belasting">Belastingadvies</option>
                          <option value="administratie">Financiële Administratie</option>
                          <option value="salaris">Salarisadministratie</option>
                          <option value="bedrijf">Bedrijfsadvies</option>
                          <option value="overig">Overig</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                        Bericht *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 bg-cream-100 border border-concrete-300 text-ink placeholder-concrete-400 focus:outline-none focus:border-terracotta-400 transition-colors resize-none"
                        placeholder="Vertel ons over uw vraag..."
                      />
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        className="mt-1 w-4 h-4 border-concrete-300 text-terracotta-500 focus:ring-terracotta-400"
                      />
                      <label htmlFor="privacy" className="text-sm text-concrete-600">
                        Ik ga akkoord met de{" "}
                        <a href="/privacy" className="text-terracotta-500 hover:underline">
                          privacyverklaring
                        </a>
                        . Mijn gegevens worden vertrouwelijk behandeld.
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn-brutalist w-full md:w-auto inline-flex items-center justify-center"
                    >
                      Verstuur bericht
                      <Send className="ml-2 w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
              
              {/* Map Placeholder */}
              <div className="space-y-6">
                <div className="aspect-square md:aspect-auto md:h-full min-h-[300px] bg-concrete-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-concrete-300 to-concrete-400" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="w-16 h-16 mx-auto mb-4 text-concrete-500" />
                      <p className="text-concrete-600 font-serif text-lg mb-2">Nobelstraat 42</p>
                      <p className="text-concrete-500">3583 CE Utrecht</p>
                      <a 
                        href="https://maps.google.com/?q=Nobelstraat+42+Utrecht"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-4 text-terracotta-500 hover:text-terracotta-600"
                      >
                        Open in Google Maps
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parking & Accessibility */}
        <section className="editorial-spacing">
          <div className="container-asymmetric">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
                Praktische informatie
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-serif">Bereikbaarheid</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-terracotta-400 flex-shrink-0 mt-0.5" />
                      <span className="text-ink-light">Op loopafstand van Station Utrecht Centraal (12 minuten)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-terracotta-400 flex-shrink-0 mt-0.5" />
                      <span className="text-ink-light">Tramlijn 20 stopt voor de deur (halte Nobelstraat)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-terracotta-400 flex-shrink-0 mt-0.5" />
                      <span className="text-ink-light">Betaalde parkeergarages in de nabije omgeving</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-serif">Toegankelijkheid</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-terracotta-400 flex-shrink-0 mt-0.5" />
                      <span className="text-ink-light">Rolstoeltoegankelijk pand</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-terracotta-400 flex-shrink-0 mt-0.5" />
                      <span className="text-ink-light">Lift aanwezig naar alle verdiepingen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-terracotta-400 flex-shrink-0 mt-0.5" />
                      <span className="text-ink-light">Toegankelijk toilet op de begane grond</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 md:py-32 bg-ink text-cream-50">
          <div className="container-asymmetric">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
veelgestelde vragen
              </h2>
              <p className="text-concrete-300 mb-8">
                Heeft u een vraag? Misschien staat het antwoord al tussen onze FAQ's.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="text-left bg-concrete-800/50 p-6 rounded max-w-sm">
                  <h4 className="font-serif text-lg mb-2">Wat neem ik mee naar het eerste gesprek?</h4>
                  <p className="text-concrete-400 text-sm">
                    Neem relevante documenten mee zoals uw laatste aangifte, 
                    jaarrekening of bedrijfsplan. We bespreken vooraf wat u nodig heeft.
                  </p>
                </div>
                <div className="text-left bg-concrete-800/50 p-6 rounded max-w-sm">
                  <h4 className="font-serif text-lg mb-2">Hoe snel krijg ik reactie?</h4>
                  <p className="text-concrete-400 text-sm">
                    We streven ernaar om binnen 24 uur te reageren op uw bericht. 
                    Voor spoedzaken kunt u ons direct bellen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingActionButton />
    </>
  );
}
