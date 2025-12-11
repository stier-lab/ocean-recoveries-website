/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        ink: {
          DEFAULT: '#0b2545',
          2: '#173451',
        },
        muted: {
          DEFAULT: '#566579',
          2: '#6e7d8a',
        },
        accent: {
          DEFAULT: '#117db2',
          2: '#11c5b3',
          warm: '#ff6f5b',
        },
        surface: {
          DEFAULT: '#ffffff',
          card: '#ffffff',
        },
        line: {
          DEFAULT: '#e6edf6',
          2: '#dbe7f3',
        },
        // Dark mode specific
        dark: {
          ink: '#f1f5f9',
          'ink-2': '#e2e8f0',
          muted: '#94a3b8',
          'muted-2': '#64748b',
          accent: '#38bdf8',
          'accent-2': '#2dd4bf',
          surface: '#0f172a',
          card: '#1e293b',
          line: '#334155',
        },
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
        DEFAULT: '0 6px 16px rgba(17, 34, 68, 0.08)',
        lg: '0 18px 42px rgba(17, 34, 68, 0.14)',
        glow: '0 0 20px rgba(17, 125, 178, 0.3)',
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
