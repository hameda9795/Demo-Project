import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'water-blue': '#3b82f6',
        'deep-navy': '#1e3a8a',
        'emergency-orange': '#ea580c',
        'steel-gray': '#64748b',
        'off-white': '#f8fafc',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        'organic': '60px 20px 60px 20px',
        'organic-reverse': '20px 60px 20px 60px',
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shake': 'shake 0.5s ease-in-out',
        'ripple': 'ripple 3s ease-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'water-fill': 'water-fill 1s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'marquee-pause': 'marquee 30s linear infinite paused',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'shake': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
        'ripple': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'water-fill': {
          '0%': { width: '0%' },
          '100%': { width: 'var(--fill-width, 100%)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      clipPath: {
        'diagonal': 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
        'diagonal-reverse': 'polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 15%)',
        'wave': 'polygon(0 10%, 50% 0, 100% 10%, 100% 90%, 50% 100%, 0 90%)',
      },
    },
  },
  plugins: [],
}

export default config
