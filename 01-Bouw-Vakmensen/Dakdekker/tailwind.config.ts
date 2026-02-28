import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dakdekker Brand Colors - Roof Angle Design System
        "roof-slate": "#475569",
        "safety-orange": "#ea580c",
        "sky-blue": "#0ea5e9",
        "cloud-white": "#f8fafc",
        "storm-gray": "#334155",
        // Supporting colors
        "dark-slate": "#1e293b",
        "emergency-red": "#dc2626",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      clipPath: {
        "hero-diagonal": "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        "tile-shape": "polygon(0 0, 100% 10%, 100% 100%, 0 90%)",
        "circle-mask": "circle(90% at 50% 50%)",
      },
      animation: {
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-in-left": "slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "pulse-ring": "pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ken-burns": "kenBurns 20s ease-in-out infinite alternate",
        "ringing": "ringing 1.5s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "tile-place": "tilePlace 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "leaf-fall": "leafFall 3s ease-in-out infinite",
        "snow-fall": "snowFall 4s ease-in-out infinite",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(40px) rotate(2deg)", opacity: "0" },
          "100%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-40px) rotate(-5deg)", opacity: "0" },
          "100%": { transform: "translateX(0) rotate(0deg)", opacity: "1" },
        },
        pulseRing: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.8" },
        },
        kenBurns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        ringing: {
          "0%, 100%": { transform: "scale(1)" },
          "10%": { transform: "scale(1.05) rotate(-5deg)" },
          "20%": { transform: "scale(1.05) rotate(5deg)" },
          "30%": { transform: "scale(1.05) rotate(-5deg)" },
          "40%": { transform: "scale(1.05) rotate(5deg)" },
          "50%": { transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        tilePlace: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        leafFall: {
          "0%": { transform: "translate(0, 0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translate(20px, 100px) rotate(360deg)", opacity: "0" },
        },
        snowFall: {
          "0%": { transform: "translate(0, 0)", opacity: "1" },
          "100%": { transform: "translate(10px, 100px)", opacity: "0" },
        },
      },
      rotate: {
        "15": "15deg",
        "30": "30deg",
        "neg-15": "-15deg",
        "neg-30": "-30deg",
      },
    },
  },
  plugins: [],
};

export default config;
