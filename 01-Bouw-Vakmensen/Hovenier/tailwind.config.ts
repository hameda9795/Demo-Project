import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        earth: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
        stone: {
          450: "#a8a29e",
        },
      },
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "sway": "sway 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "grow": "grow 0.6s ease-out forwards",
        "vine-draw": "vine-draw 2s ease-out forwards",
      },
      keyframes: {
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        grow: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "vine-draw": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      borderRadius: {
        organic: "60% 40% 30% 70% / 60% 30% 70% 40%",
        "organic-alt": "30% 60% 70% 40% / 50% 60% 30% 60%",
        leaf: "0% 100% 0% 100% / 0% 100% 0% 100%",
      },
      boxShadow: {
        nature: "0 10px 40px -10px rgba(22, 101, 52, 0.15)",
        "nature-lg": "0 20px 60px -15px rgba(22, 101, 52, 0.2)",
        glow: "0 0 20px rgba(22, 163, 74, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
