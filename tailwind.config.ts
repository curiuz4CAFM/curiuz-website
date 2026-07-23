import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── CURIUZ TECHNOLOGIES (brand) — navy base ──
        ink: {
          DEFAULT: '#10233B',
          950: '#0B1A2E',
          900: '#10233B',
          800: '#17304C',
          700: '#20405F',
        },
        // Ember / terracotta — Curiuz brand accent
        curi: {
          DEFAULT: '#E07A5F',
          600: '#C2603F',
          500: '#E88C74',
          400: '#EDA48F',
          100: '#FBE5DD',
          50: '#FDF4F0',
        },
        // Warm "spark" — used sparingly for highlights
        spark: '#F2B07A',

        // ── PREMYZ (endorsed product) — exact product tokens ──
        navy: { DEFAULT: '#0B1B33', 900: '#091C3E', 800: '#0F2A52', 700: '#1E3A66' },
        brand: { DEFAULT: '#0057FF', 500: '#2f74ff', 100: '#e6efff', 50: '#f0f5ff' },
        cyan: { DEFAULT: '#00C6FF', 400: '#33d2ff', 300: '#7fe3ff' },

        // Neutral surfaces
        mist: '#F5F7FC',
        line: '#E4E8F1',
        slatey: '#5B6580',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1200px' },
      boxShadow: {
        card: '0 1px 2px rgba(16,35,59,0.04), 0 14px 36px -18px rgba(16,35,59,0.18)',
        'card-hover': '0 6px 12px rgba(16,35,59,0.07), 0 28px 56px -24px rgba(224,122,95,0.30)',
        glowc: '0 0 60px -10px rgba(224,122,95,0.50)',
        glowp: '0 0 60px -10px rgba(0,198,255,0.5)',
      },
      backgroundImage: {
        'curi-grad': 'linear-gradient(135deg, #E07A5F 0%, #C2603F 100%)',
        'premyz-grad': 'linear-gradient(135deg, #0057FF 0%, #00C6FF 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-node': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-node': 'pulse-node 3s ease-in-out infinite',
        marquee: 'marquee 44s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
