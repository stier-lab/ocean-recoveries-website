/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Navy-based color palette
        ink: {
          DEFAULT: '#f1f5f9',  // Light text on dark bg
          2: '#e2e8f0',
        },
        muted: {
          DEFAULT: '#94a3b8',  // Muted text on dark bg
          2: '#64748b',
        },
        accent: {
          DEFAULT: '#38bdf8',  // Sky blue accent
          2: '#2dd4bf',        // Teal accent
          warm: '#ff6f5b',     // Coral/warm accent
        },
        surface: {
          DEFAULT: '#0f172a',  // Dark navy background
          card: '#1e293b',     // Slightly lighter card bg
        },
        line: {
          DEFAULT: '#334155',  // Border/line color
          2: '#475569',
        },
        // Semantic background colors (flattened for opacity support)
        'navy-deep': '#0b2545',    // Deepest navy (bg-primary)
        'navy-dark': '#0f172a',    // Dark slate (bg-secondary)
        'navy-card': '#1e293b',    // Card background
        'navy-highlight': '#1e3a5f', // Highlighted sections
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        // Fluid typography
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3rem)',
        'fluid-5xl': 'clamp(2.75rem, 2rem + 3.75vw, 3.75rem)',
      },
      spacing: {
        's-1': '0.5rem',    // 8px
        's0': '0.75rem',    // 12px
        's1': '1.125rem',   // 18px
        's2': '1.5rem',     // 24px
        's3': '2rem',       // 32px
        's4': 'clamp(3rem, 8vw, 4.5rem)',      // 48-72px
        's5': 'clamp(4.5rem, 10vw, 6rem)',     // 72-96px
        'edge': 'clamp(1.125rem, 5vw, 3rem)',  // 18-48px
      },
      borderRadius: {
        DEFAULT: '1rem',    // 16px
        lg: '1.375rem',     // 22px
      },
      boxShadow: {
        DEFAULT: '0 6px 16px rgba(0, 0, 0, 0.2)',
        lg: '0 18px 42px rgba(0, 0, 0, 0.3)',
        glow: '0 0 20px rgba(56, 189, 248, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'count-up': 'countUp 1.5s ease-out forwards',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};
