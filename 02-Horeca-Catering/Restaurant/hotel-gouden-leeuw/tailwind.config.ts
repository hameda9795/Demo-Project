import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // The Art of Arrival - Hotel Brand Colors
        navy: {
          DEFAULT: '#1e3a5f',
          dark: '#0f172a',
          light: '#2d4a6f',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#e4c95a',
          dark: '#b8960c',
        },
        cream: {
          DEFAULT: '#faf9f6',
          dark: '#f0efe9',
        },
        burgundy: {
          DEFAULT: '#722f37',
          light: '#8b3a42',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
      animation: {
        'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'curtain-open': 'curtainOpen 1s ease-out forwards',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(212, 175, 55, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        curtainOpen: {
          '0%': { clipPath: 'inset(0 50% 0 50%)', opacity: '0' },
          '100%': { clipPath: 'inset(0 0% 0 0%)', opacity: '1' },
        },
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 8px 30px rgba(212, 175, 55, 0.4)',
        'arch': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'lift': '0 20px 40px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        'arch': '50% 50% 0 0',
        'arch-full': '50%',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
