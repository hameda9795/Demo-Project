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
        // Industrial palette
        concrete: {
          DEFAULT: '#6b7280',
          light: '#9ca3af',
          dark: '#4b5563',
        },
        safety: {
          DEFAULT: '#f97316',
          light: '#fb923c',
          dark: '#ea580c',
        },
        navy: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          dark: '#020617',
        },
        offwhite: {
          DEFAULT: '#fafaf9',
          dark: '#f5f5f4',
        },
        charcoal: {
          DEFAULT: '#1a1a1a',
          light: '#262626',
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      clipPath: {
        'diagonal': 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        'diagonal-reverse': 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
