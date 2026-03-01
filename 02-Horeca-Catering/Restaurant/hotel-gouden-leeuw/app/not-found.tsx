'use client';

/**
 * 404 Not Found Page
 */

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="text-9xl font-serif text-navy/20 font-bold mb-4">404</div>
        <h1 className="font-serif text-3xl text-navy font-semibold mb-4">
          Pagina niet gevonden
        </h1>
        <p className="text-navy/70 mb-8">
          De pagina die u zoekt bestaat niet of is verplaatst.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-navy-light transition-colors"
          >
            <Home className="w-5 h-5" />
            Terug naar home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-navy text-navy font-medium rounded-lg hover:bg-navy hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Ga terug
          </button>
        </div>
      </motion.div>
    </div>
  );
}
