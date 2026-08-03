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
          DEFAULT: '#F97316',
          hover: '#EA580C',
        },
        navy: '#0F172A',
        secondary: '#0F172A',
        warm: '#FFF7ED',
        slate2: '#475569',
        muted: '#475569',
        border: {
          DEFAULT: '#E2E8F0',
          dark: '#1E293B',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          warm: '#FFF7ED',
          dark: '#1E293B',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
