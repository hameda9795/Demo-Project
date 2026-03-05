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
        teal: {
          DEFAULT: "#0f766e",
          dark: "#0d5c56",
          light: "#115e59",
        },
        cream: "#faf9f6",
        charcoal: "#1a1a1a",
        gold: "#d4af37",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      aspectRatio: {
        "3/2": "3 / 2",
        "4/3": "4 / 3",
        "16/9": "16 / 9",
      },
    },
  },
  plugins: [],
};

export default config;
