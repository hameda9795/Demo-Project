'use client';

/**
 * 404 Not Found Page
 */

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coffee, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-cream-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        {/* Animated Coffee Cup */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-24 h-24 mx-auto mb-6 bg-amber-500 rounded-full flex items-center justify-center"
        >
          <Coffee className="w-12 h-12 text-white" />
        </motion.div>

        <h1 className="text-6xl font-black text-espresso-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-espresso-800 mb-2">
          Oeps! Koffie is op
        </h2>
        <p className="text-espresso-600 mb-8 max-w-sm mx-auto">
          Deze pagina bestaat niet. Laten we je terugbrengen naar waar de koffie vers is.
        </p>

        <Link href="/">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white font-bold rounded-full shadow-elevated"
          >
            <ArrowLeft className="w-5 h-5" />
            Terug naar home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
