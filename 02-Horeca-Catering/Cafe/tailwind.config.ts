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
        // Café Brand Colors
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Primary CTA
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        espresso: {
          50: '#efebe9',
          100: '#d7ccc8',
          200: '#bcaaa4',
          300: '#a1887f',
          400: '#8d6e63',
          500: '#795548',
          600: '#6d4c41',
          700: '#5d4037',
          800: '#4e342e',
          900: '#3e2723', // Primary text
        },
        cream: {
          50: '#fffdf5',
          100: '#fff8e1', // Background
          200: '#ffecb3',
          300: '#ffe082',
        },
        latte: {
          100: '#d7ccc8',
          200: '#c4b5b0',
        },
        mint: {
          400: '#4ecdc4', // Accent
          500: '#26a69a',
        },
        // Status colors
        status: {
          quiet: '#22c55e',    // Green - Rustig
          busy: '#f59e0b',     // Orange - Gezellig druk
          crowded: '#ef4444',  // Red - Even wachten
        }
      },
      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
      fontSize: {
        'mobile-body': ['16px', { lineHeight: '1.6' }], // Minimum 16px for mobile
        'mobile-lg': ['18px', { lineHeight: '1.5' }],
        'mobile-xl': ['20px', { lineHeight: '1.4' }],
        'mobile-2xl': ['24px', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',  // Bottom nav height
        '20': '5rem',    // Bottom nav + padding
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-top': 'env(safe-area-inset-top)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(62, 39, 35, 0.08)',
        'elevated': '0 8px 30px rgba(62, 39, 35, 0.12)',
        'glow': '0 0 20px rgba(245, 158, 11, 0.5)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'bounce-bean': 'bounce-bean 1s ease-in-out infinite',
        'slide-up': 'slide-up 0.3s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
        'slide-right': 'slide-right 0.3s ease-out',
        'stamp': 'stamp 0.3s ease-out',
        'confetti': 'confetti 0.5s ease-out',
        'fill-cup': 'fill-cup 1.5s ease-in-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(245, 158, 11, 0.7)' },
        },
        'bounce-bean': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'stamp': {
          '0%': { transform: 'scale(2)', opacity: '0' },
          '50%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'confetti': {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(-100px) rotate(720deg)', opacity: '0' },
        },
        'fill-cup': {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
