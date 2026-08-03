import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F04E23',
          hover: '#D93D14',
        },
        secondary: '#0B1628',
        accent: {
          DEFAULT: '#2563EB',
          alt: '#F59E0B',
        },
        surface: {
          DEFAULT: '#F4F6F9',
          dark: '#112240',
        },
        border: {
          DEFAULT: '#E5E7EB',
          dark: '#1E3A5F',
        },
        muted: '#6B7280',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
