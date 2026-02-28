"use client";

import { AlertTriangle } from "lucide-react";

interface DemoBadgeProps {
  variant?: "header" | "banner" | "footer" | "inline";
}

export function DemoBadge({ variant = "inline" }: DemoBadgeProps) {
  if (variant === "header") {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1.5 
        bg-red-500/90 backdrop-blur-sm
        text-white text-xs font-bold uppercase tracking-wider
        rounded-full border border-red-400/50
        shadow-lg shadow-red-500/20">
        <AlertTriangle className="w-3.5 h-3.5" />
        <span>Demo Website</span>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div className="w-full py-3 px-4
        bg-amber-400/95 backdrop-blur-sm
        border-y border-amber-500/50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-900" />
          <p className="text-amber-900 font-bold text-center">
            DEMO WEBSITE - Alle contactgegevens zijn fictief / voorbeeld
          </p>
          <AlertTriangle className="w-6 h-6 text-amber-900" />
        </div>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className="flex items-start gap-2 p-4 
        bg-amber-100/80 
        rounded-xl border border-amber-300">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-amber-800 text-sm">
          <strong>Let op:</strong> Dit is een demonstratie website. Alle contactgegevens, 
          projecten en prijzen zijn fictief en uitsluitend bedoeld als voorbeeld.
        </p>
      </div>
    );
  }

  // Inline variant
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 
      bg-red-100 text-red-700 
      text-xs font-medium 
      rounded-full border border-red-200">
      <AlertTriangle className="w-3 h-3" />
      DEMO
    </span>
  );
}

export function DemoWatermark() {
  return (
    <div className="fixed bottom-4 left-4 z-40 
      px-3 py-2 
      bg-red-500/80 backdrop-blur-sm
      text-white text-xs font-bold
      rounded-lg border border-red-400/50
      shadow-lg shadow-red-500/20
      pointer-events-none
      md:block hidden">
      DEMO WEBSITE
    </div>
  );
}
