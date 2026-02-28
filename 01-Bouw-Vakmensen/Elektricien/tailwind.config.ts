import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: {
          DEFAULT: "#2563eb",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        circuit: {
          DEFAULT: "#0f172a",
          dark: "#0a0f1c",
        },
        warning: {
          DEFAULT: "#facc15",
        },
        safety: {
          DEFAULT: "#f97316",
        },
      },
      fontFamily: {
        heading: ["Rajdhani", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "electric-shock": "electric-shock 0.3s ease-in-out",
        "spark": "spark 0.5s ease-in-out",
        "flash": "flash 0.3s ease-out",
        "flow": "flow 3s linear infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(37,99,235,0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(37,99,235,0.8)" },
        },
        "electric-shock": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-2px)" },
          "75%": { transform: "translateX(2px)" },
        },
        "spark": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
          "100%": { opacity: "0", transform: "scale(1)" },
        },
        "flash": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "flow": {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      boxShadow: {
        "electric": "0 0 20px rgba(37,99,235,0.5)",
        "electric-lg": "0 0 40px rgba(37,99,235,0.7)",
      },
    },
  },
  plugins: [],
}

export default config
