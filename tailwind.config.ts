import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: '#FF6B35',
        forest: '#1A3A2A',
        mint: '#2ECC8A',
        cream: '#FFF8F0',
        gold: '#F0A500',
        'dark-bg': '#07070f',
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'sans-serif'],
        serif: ['var(--font-dm-serif)', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
