import Link from "next/link";
import { TreePine, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-earth-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <TreePine className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="font-serif text-6xl text-forest-900 mb-4">404</h1>
        <h2 className="font-serif text-2xl text-forest-800 mb-4">
          Pagina niet gevonden
        </h2>
        <p className="text-forest-600 mb-8">
          Deze pagina lijkt te zijn verdwenen zoals bladeren in de herfst. 
          Geen zorgen, we helpen u terug naar de juiste weg.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 
            bg-green-600 text-white rounded-full font-medium
            hover:bg-green-700 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Terug naar home
        </Link>
      </div>
    </div>
  );
}
