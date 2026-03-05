import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#f5f1eb',
        accent: '#c75b39',
        'accent-light': '#e07a5f',
        'warm-white': '#faf8f5',
        cream: '#f2efe9',
        stone: '#8b8680',
        'stone-light': '#b5b0a8',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'sm': 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
        'base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'lg': 'clamp(1.125rem, 1rem + 0.6vw, 1.375rem)',
        'xl': 'clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)',
        '2xl': 'clamp(2rem, 1.5rem + 2.5vw, 3.5rem)',
        '3xl': 'clamp(3rem, 2rem + 5vw, 6rem)',
        '4xl': 'clamp(4rem, 3rem + 5vw, 8rem)',
      },
      spacing: {
        'xs': 'clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)',
        'sm': 'clamp(1rem, 0.8rem + 1vw, 1.5rem)',
        'md': 'clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem)',
        'lg': 'clamp(2.5rem, 2rem + 2.5vw, 4rem)',
        'xl': 'clamp(4rem, 3rem + 5vw, 8rem)',
        '2xl': 'clamp(6rem, 4rem + 10vw, 12rem)',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      animation: {
        'float': 'float 20s infinite ease-in-out',
        'float-reverse': 'float 15s infinite ease-in-out reverse',
        'float-delayed': 'float 18s infinite ease-in-out',
        'pulse-slow': 'pulse 2s infinite',
        'scroll-line': 'scrollLine 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        scrollLine: {
          '0%, 100%': { transform: 'scaleY(1)', opacity: '1' },
          '50%': { transform: 'scaleY(0.5)', opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}
export default config
