import type { Config } from "tailwindcss";

/**
 * Tailwind CSS Configuration
 * Van den Berg Timmerwerken
 * 
 * "The Living Grain" Design System
 * Custom colors, fonts, and animations for artisanal woodworking aesthetic
 */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /**
       * Custom Font Families
       * Playfair Display for headings (elegant craft feel)
       * Inter for body text (modern readability)
       */
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
      },

      /**
       * Custom Colors
       * Warm wood tones and complementary colors
       */
      colors: {
        // Primary wood colors
        oak: {
          DEFAULT: "#8B5A2B",
          light: "#A67B5B",
          dark: "#6B4423",
        },
        walnut: {
          DEFAULT: "#3E2723",
          light: "#5D4037",
        },
        cream: {
          DEFAULT: "#F5F5DC",
        },
        steel: {
          DEFAULT: "#4A5568",
        },
        amber: {
          DEFAULT: "#D4AF37",
          light: "#E5C158",
          dark: "#B8962F",
        },
      },

      /**
       * Custom Animations
       * Organic, smooth animations mimicking wood processes
       */
      animation: {
        "carve-in": "carveIn 0.8s cubic-bezier(0.7, 0, 0.3, 1) forwards",
        "grain-grow": "grainGrow 2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "ken-burns": "kenBurns 20s ease-in-out infinite alternate",
        "breathing-pulse": "breathingPulse 3s ease-in-out infinite",
        "float-sawdust": "floatSawdust 15s ease-in-out infinite",
      },

      keyframes: {
        carveIn: {
          from: {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
            opacity: "0",
          },
          to: {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            opacity: "1",
          },
        },
        grainGrow: {
          to: {
            strokeDashoffset: "0",
          },
        },
        kenBurns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        breathingPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0.4)" },
          "50%": { boxShadow: "0 0 0 15px rgba(212, 175, 55, 0)" },
        },
        floatSawdust: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "33%": { transform: "translateY(-10px) translateX(5px)" },
          "66%": { transform: "translateY(5px) translateX(-5px)" },
        },
      },

      /**
       * Box Shadows
       * Warm, organic shadows
       */
      boxShadow: {
        "wood-sm": "0 2px 4px -1px rgba(62, 39, 35, 0.1)",
        "wood": "0 4px 6px -1px rgba(62, 39, 35, 0.1), 0 2px 4px -1px rgba(62, 39, 35, 0.06)",
        "wood-lg": "0 20px 40px -10px rgba(62, 39, 35, 0.2)",
        "amber": "0 4px 20px rgba(212, 175, 55, 0.3)",
      },

      /**
       * Background Images
       */
      backgroundImage: {
        "wood-grain": "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(139, 90, 43, 0.05) 3px, rgba(139, 90, 43, 0.05) 4px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
