import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Leaf, AlertTriangle } from "lucide-react";
import { DemoBadge } from "@/components/DemoBadge";
import { demoContact } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact | Offerte Aanvragen - Groen & Tuin Architectuur",
  description: "Neem contact op met Groen & Tuin Architectuur voor een vrijblijvend adviesgesprek of offerte. Werkzaam in Amsterdam, Haarlem en omgeving.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-earth-50">
      {/* Demo Banner */}
      <div className="bg-red-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <AlertTriangle className="w-6 h-6" />
            <p className="font-bold">DEMO WEBSITE - Geen echte contactgegevens - Voorbeeld only</p>
            <AlertTriangle className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <DemoBadge variant="inline" />
          <h1 className="font-serif text-5xl md:text-6xl text-white mt-4 mb-6">
            Contact
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Klaar om uw tuin te transformeren? Neem contact met ons op voor een 
            vrijblijvend adviesgesprek.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-nature">
              <h2 className="font-serif text-3xl text-forest-900 mb-2">
                Stuur ons een bericht
              </h2>
              <p className="text-forest-600 mb-8">
                Vul het formulier in en we nemen binnen 24 uur contact met u op.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Voornaam
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-2 border-forest-200 focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Jan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Achternaam
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-2 border-forest-200 focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Jansen"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-forest-200 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="jan@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border-2 border-forest-200 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="06-12345678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Onderwerp
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border-2 border-forest-200 focus:border-green-500 focus:outline-none transition-colors">
                    <option>Kies een onderwerp...</option>
                    <option>Tuinontwerp</option>
                    <option>Tuinaanleg</option>
                    <option>Tuinonderhoud</option>
                    <option>Boomverzorging</option>
                    <option>Vijveraanleg</option>
                    <option>Offerte aanvraag</option>
                    <option>Anders</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Bericht
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-forest-200 focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="Vertel ons over uw tuinplannen..."
                  />
                </div>

                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-800 text-sm">
                      <strong>DEMO:</strong> Dit formulier werkt niet. 
                      Voor echt contact, gebruik de "Direct Contact" knop.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-green-600 text-white rounded-full font-medium text-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                  disabled>
                  Verstuur bericht (DEMO)
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-nature">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-medium text-forest-900 mb-1">Telefoon</h3>
                  <p className="text-forest-600">{demoContact.phoneRaw}</p>
                  <p className="text-amber-600 text-xs mt-1">DEMO - Voorbeeld</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-nature">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-medium text-forest-900 mb-1">Email</h3>
                  <p className="text-forest-600 text-sm">{demoContact.emailRaw}</p>
                  <p className="text-amber-600 text-xs mt-1">DEMO</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-nature">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-medium text-forest-900 mb-1">Adres</h3>
                  <p className="text-forest-600 text-sm">{demoContact.address}</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-nature">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-medium text-forest-900 mb-1">Openingstijden</h3>
                  <p className="text-forest-600 text-sm">
                    Ma-Vr: 08:00 - 17:00<br />
                    Za: Op afspraak
                  </p>
                </div>
              </div>

              {/* Working Area */}
              <div className="bg-forest-900 rounded-2xl p-8 text-white">
                <Leaf className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="font-serif text-2xl mb-4">Werkgebied</h3>
                <p className="text-white/80 mb-6">
                  Wij zijn actief in Amsterdam, Haarlem en omgeving. 
                  Voor grotere projecten komen we ook graag buiten deze regio.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Amsterdam', 'Haarlem', 'Zandvoort', 'Heemstede', 'Bloemendaal', 'Amstelveen'].map((city) => (
                    <span key={city} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* KVK/BTW */}
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Bedrijfsgegevens (DEMO)
                </h4>
                <div className="space-y-2 text-sm">
                  <p className="text-amber-800">
                    <span className="font-medium">KVK:</span> {demoContact.kvk}
                  </p>
                  <p className="text-amber-800">
                    <span className="font-medium">BTW:</span> {demoContact.btw}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
