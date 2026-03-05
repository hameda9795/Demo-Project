/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom colors for Catering Atelier
        teal: {
          DEFAULT: '#0f766e',
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        cream: {
          DEFAULT: '#faf7f2',
          50: '#ffffff',
          100: '#faf7f2',
          200: '#f5efe6',
          300: '#efe5d6',
        },
        charcoal: {
          DEFAULT: '#1a1a1a',
          50: '#737373',
          100: '#595959',
          200: '#404040',
          300: '#262626',
          400: '#1a1a1a',
          500: '#0d0d0d',
        },
        terracotta: {
          DEFAULT: '#d4845e',
          50: '#faf3ef',
          100: '#f5e7df',
          200: '#eac7b5',
          300: '#dfa78b',
          400: '#d4845e',
          500: '#c96a3d',
          600: '#a1522d',
          700: '#793d21',
          800: '#512916',
          900: '#28140b',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        editorial: "0 4px 20px -2px rgb(0 0 0 / 0.1)",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "pulse-gentle": {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.03) rotate(0.5deg)" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "plate-draw": {
          "0%": { strokeDasharray: "0 283", strokeDashoffset: "0" },
          "100%": { strokeDasharray: "283 283", strokeDashoffset: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "pulse-gentle": "pulse-gentle 4s ease-in-out infinite",
        "draw-line": "draw-line 1s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.8s ease-out forwards",
        "plate-draw": "plate-draw 1.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
