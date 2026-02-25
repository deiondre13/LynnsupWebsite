import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Gradient text classes for active navigation
    'from-blue-500',
    'to-cyan-500',
    'from-purple-500',
    'to-pink-500',
    'from-green-500',
    'to-emerald-500',
    'from-orange-500',
    'to-amber-500',
    'from-red-500',
    'to-rose-500',
    'from-indigo-500',
    'to-violet-500',
    'bg-gradient-to-r',
    'bg-clip-text',
    'text-transparent',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0D1B2A',
          gold: '#D4AF37',
          off: '#F7F8FA',
          graphite: '#2C2C2C',
        },
        primary: {
          base: '#0D1B2A',
          contrast: '#1B263B',
        },
        accent: {
          gold: '#D4AF37',
          amber: '#E0B94D',
        },
        neutral: {
          light: '#F7F8FA',
          surface: '#E4E6EB',
          dark: '#2C2C2C',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'Montserrat', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0D1B2A 0%, #1B263B 50%, #E0B94D 100%)',
        'gradient-light': 'linear-gradient(to bottom, #FFFFFF 0%, #F7F8FA 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0B0C10 0%, #1B263B 50%, #D4AF37 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #E0B94D 100%)',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.3)',
        'elevation-sm': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'elevation-md': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
