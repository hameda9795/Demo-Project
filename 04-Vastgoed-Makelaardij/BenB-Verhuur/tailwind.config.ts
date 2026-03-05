import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary hospitality palette
        terracotta: {
          DEFAULT: "#E07A5F",
          50: "#FDF0ED",
          100: "#F9E1DA",
          200: "#F3C3B5",
          300: "#EDA590",
          400: "#E7876B",
          500: "#E07A5F",
          600: "#D55A3A",
          700: "#B34529",
          800: "#8C351F",
          900: "#652515",
        },
        sage: {
          DEFAULT: "#81B29A",
          50: "#EEF5F1",
          100: "#DDEBE3",
          200: "#BBD7C7",
          300: "#99C3AB",
          400: "#77AF8F",
          500: "#81B29A",
          600: "#5D9A7E",
          700: "#477A62",
          800: "#315A46",
          900: "#1B3A2A",
        },
        cream: {
          DEFAULT: "#F2F0E9",
          50: "#FDFCFA",
          100: "#F2F0E9",
          200: "#E5E1D3",
          300: "#D8D2BD",
          400: "#CBC3A7",
          500: "#BEB491",
          600: "#B1A57B",
          700: "#948865",
          800: "#766B4F",
          900: "#584E39",
        },
        charcoal: {
          DEFAULT: "#3D405B",
          50: "#8A8FB0",
          100: "#7D82A5",
          200: "#686D8F",
          300: "#565A75",
          400: "#44475F",
          500: "#3D405B",
          600: "#2A2C3E",
          700: "#171823",
          800: "#040408",
          900: "#000000",
        },
        coral: {
          DEFAULT: "#F2CC8F",
          50: "#FDF8F0",
          100: "#FAF1E1",
          200: "#F5E3C3",
          300: "#F0D5A5",
          400: "#EBC787",
          500: "#F2CC8F",
          600: "#EBB869",
          700: "#E5A443",
          800: "#D08C2B",
          900: "#A46D22",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "blob": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "heartbeat": {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.1)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.1)" },
          "70%": { transform: "scale(1)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blob": "blob 7s infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "heartbeat": "heartbeat 1.5s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
