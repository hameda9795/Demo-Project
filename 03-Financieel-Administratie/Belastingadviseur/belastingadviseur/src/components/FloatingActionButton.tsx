"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingActionButton() {
  return (
    <a
      href="https://techsolutionsutrecht.nl/contact"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Neem contact op"
    >
      <div className="relative">
        {/* Pulsing rings */}
        <span className="absolute inset-0 rounded-full bg-terracotta-400 opacity-75 animate-ping" />
        <span className="absolute -inset-2 rounded-full bg-terracotta-400/30 animate-pulse-slow" />
        
        {/* Main button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-terracotta-500 rounded-full shadow-lg hover:bg-terracotta-600 transition-all duration-300 hover:scale-110 animate-blink">
          <MessageCircle className="w-6 h-6 text-cream-50" />
        </div>
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-ink text-cream-50 text-xs font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Laten we praten
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-4 border-transparent border-l-ink" />
        </span>
      </div>
    </a>
  );
}
