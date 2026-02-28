import Link from 'next/link'
import { Droplets, ArrowLeft } from 'lucide-react'

/**
 * 404 Not Found Page
 * Custom error page with navigation back to home
 */
export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-off-white flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 bg-water-blue rounded-full flex items-center justify-center">
            <Droplets className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-outfit font-bold text-xl leading-tight text-deep-navy">
              Van Dijk
            </span>
            <span className="text-xs text-steel-gray leading-tight">
              Loodgieters
            </span>
          </div>
        </div>

        {/* Error code */}
        <h1 className="font-outfit text-8xl font-bold text-water-blue mb-4">
          404
        </h1>
        
        <h2 className="font-outfit text-2xl font-bold text-deep-navy mb-4">
          Pagina niet gevonden
        </h2>
        
        <p className="text-steel-gray mb-8">
          De pagina die u zoekt bestaat niet of is verplaatst. 
          Controleer het adres of ga terug naar de homepage.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-water-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-deep-navy transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Terug naar home
        </Link>
      </div>
    </main>
  )
}
