import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'

/**
 * Privacy Policy Page
 * GDPR compliant privacy policy in Dutch
 */
export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-off-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-outfit text-4xl font-bold text-deep-navy mb-8">
            Privacybeleid
          </h1>
          
          <div className="bg-white rounded-3xl p-8 shadow-sm space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
            </p>

            <div>
              <h2 className="font-semibold text-deep-navy text-lg mb-3">1. Inleiding</h2>
              <p>
                Van Dijk Loodgieters respecteert uw privacy en zorgt ervoor dat de persoonlijke 
                informatie die u ons verschaft vertrouwelijk wordt behandeld. Dit privacybeleid 
                beschrijft hoe wij omgaan met uw persoonsgegevens.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-deep-navy text-lg mb-3">2. Gegevensverwerking</h2>
              <p className="mb-3">
                Wij verwerken uw persoonsgegevens wanneer u:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Een offerte aanvraagt</li>
                <li>Een afspraak maakt</li>
                <li>Het contactformulier invult</li>
                <li>Ons telefonisch benadert</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-deep-navy text-lg mb-3">3. Welke gegevens verzamelen wij</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Naam en contactgegevens</li>
                <li>Adresgegevens</li>
                <li>Telefoonnummer en e-mailadres</li>
                <li>Gegevens over uw woning en installaties</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-deep-navy text-lg mb-3">4. Doeleinden</h2>
              <p>
                Wij gebruiken uw gegevens uitsluitend voor het uitvoeren van onze diensten, 
                communicatie over afspraken, en het versturen van facturen.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-deep-navy text-lg mb-3">5. Bewaartermijn</h2>
              <p>
                Wij bewaren uw gegevens niet langer dan noodzakelijk is voor de doeleinden 
                waarvoor ze zijn verzameld, met een maximum van 7 jaar na het laatste contact.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-deep-navy text-lg mb-3">6. Uw rechten</h2>
              <p className="mb-3">U heeft het recht om:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Uw gegevens in te zien</li>
                <li>Uw gegevens te laten corrigeren</li>
                <li>Uw gegevens te laten verwijderen</li>
                <li>Bezwaar te maken tegen verwerking</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-deep-navy text-lg mb-3">7. Contact</h2>
              <p>
                Voor vragen over dit privacybeleid kunt u contact met ons opnemen via{' '}
                <a href="mailto:privacy@vandijkloodgieters.nl" className="text-water-blue hover:underline">
                  privacy@vandijkloodgieters.nl
                </a>
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
              <p className="text-sm text-yellow-800">
                <strong>Demo website:</strong> Dit is een demonstratie website. 
                Geen echte persoonsgegevens worden verwerkt of opgeslagen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
