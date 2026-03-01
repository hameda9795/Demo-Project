import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'honey-gold': '#f4a261',
        'strawberry-jam': '#e76f51',
        'fresh-sage': '#2a9d8f',
        'creamy-egg': '#fefae0',
        'coffee-brown': '#6f4e37',
        'soft-linen': '#faedcd',
        'warm-terracotta': '#e76f51',
        'morning-cream': '#fefae0',
      },
      fontFamily: {
        'lora': ['var(--font-lora)', 'serif'],
        'nunito': ['var(--font-nunito)', 'sans-serif'],
      },
      animation: {
        'breathing': 'breathing 3s ease-in-out infinite',
        'steam': 'steam 3s ease-out infinite',
        'sunrise': 'sunrise 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'page-turn': 'pageTurn 0.6s ease-in-out',
        'fill-jam': 'fillJam 0.4s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 20px rgba(231, 111, 81, 0.4)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 30px rgba(231, 111, 81, 0.6)' },
        },
        steam: {
          '0%': { opacity: '0', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '0.6', transform: 'translateY(-10px) scale(1.1)' },
          '100%': { opacity: '0', transform: 'translateY(-20px) scale(1.2)' },
        },
        sunrise: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.9' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pageTurn: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(-180deg)' },
        },
        fillJam: {
          '0%': { backgroundPosition: '50% 100%' },
          '100%': { backgroundPosition: '50% 0%' },
        },
      },
      backgroundImage: {
        'linen-texture': "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noise\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100\\' height=\\'100\\' filter=\\'url(%23noise)\' opacity=\\'0.03\\'/%3E%3C/svg%3E')",
        'watercolor-wash': 'radial-gradient(ellipse at center, rgba(244, 162, 97, 0.1) 0%, rgba(254, 250, 224, 0) 70%)',
      },
      boxShadow: {
        'cozy': '0 20px 40px -15px rgba(111, 78, 55, 0.15)',
        'cozy-hover': '0 25px 50px -12px rgba(111, 78, 55, 0.25)',
        'inner-glow': 'inset 0 2px 10px rgba(244, 162, 97, 0.2)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}

export default config
