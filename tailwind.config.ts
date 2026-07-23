import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── CURIUZ TECHNOLOGIES (brand) — deep navy base (from the logo) ──
        ink: {
          DEFAULT: '#0A1A48',
          950: '#060F2E',
          900: '#0A1A48',
          800: '#122352',
          700: '#1C3068',
        },
        // Royal blue — Curiuz primary accent (the "Z" in the logo)
        curi: {
          DEFAULT: '#3D5AA9',
          600: '#324B8C',
          500: '#4D68B5',
          400: '#7A90CC',
          100: '#E2E7F4',
          50: '#F1F4FB',
        },
        // Gold "spark" — signature highlight (the logo dot)
        spark: '#F2B01E',

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
        card: '0 1px 2px rgba(10,26,72,0.04), 0 14px 36px -18px rgba(10,26,72,0.18)',
        'card-hover': '0 6px 12px rgba(10,26,72,0.07), 0 28px 56px -24px rgba(61,90,169,0.30)',
        glowc: '0 0 60px -10px rgba(61,90,169,0.50)',
        glowp: '0 0 60px -10px rgba(0,198,255,0.5)',
      },
      backgroundImage: {
        'curi-grad': 'linear-gradient(135deg, #3D5AA9 0%, #F2B01E 100%)',
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
