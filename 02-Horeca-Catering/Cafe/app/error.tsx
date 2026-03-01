'use client';

/**
 * Error Boundary Page
 */

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-cream-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        {/* Error Icon */}
        <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </div>

        <h1 className="text-2xl font-bold text-espresso-900 mb-2">
          Er ging iets mis
        </h1>
        <p className="text-espresso-600 mb-2">
          Sorry, er is een fout opgetreden. We werken er aan!
        </p>
        {error.digest && (
          <p className="text-xs text-espresso-400 mb-6 font-mono">
            Foutcode: {error.digest}
          </p>
        )}

        <div className="flex flex-col gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-white font-bold rounded-full shadow-elevated"
          >
            <RefreshCw className="w-5 h-5" />
            Opnieuw proberen
          </motion.button>

          <Link href="/">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-espresso-200 text-espresso-700 font-bold rounded-full"
            >
              <Home className="w-5 h-5" />
              Naar home
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
