/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Editorial-scientific palette — cream paper, navy ink
        ink: {
          DEFAULT: '#0F2942',   // Deep navy ink — primary text on paper
          2: '#1F3A54',         // Slightly softer for secondary headings
          light: '#f1f5f9',     // Legacy light-text for dark sections
        },
        muted: {
          DEFAULT: '#52606F',   // Muted ink for body on paper
          2: '#7A8896',         // Even softer for meta
        },
        accent: {
          DEFAULT: '#3A6B7A',   // Desaturated deep ocean teal
          2: '#5A8A8A',         // Muted teal
          warm: '#C4564A',      // Sparingly used rust/coral
        },
        // Paper background is the new default
        paper: {
          DEFAULT: '#F4EFE6',   // Warm off-white "paper"
          2: '#EDE6D9',         // Slightly deeper tint for sections/cards
          3: '#E4DBC8',         // Deeper still for rules/borders
        },
        surface: {
          DEFAULT: '#0F2942',   // Dark navy now a sectional accent
          card: '#EDE6D9',      // Card = slightly deeper paper tint
          dark: '#0F172A',      // Legacy dark surface
        },
        line: {
          DEFAULT: '#C8BFAC',   // Warm paper border
          2: '#A8A08E',
        },
        // Legacy/sectional navy accents (kept for dark sections)
        'navy-deep': '#0F2942',
        'navy-dark': '#0F172A',
        'navy-card': '#1e293b',
        'navy-highlight': '#1e3a5f',
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
        serif: [
          'Playfair Display',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        mono: [
          '"IBM Plex Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
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
        // Editorial shadows: hairline, paper-on-paper, no glow
        DEFAULT: '0 1px 0 rgba(15, 41, 66, 0.08)',
        lg: '0 6px 18px rgba(15, 41, 66, 0.08)',
        glow: 'none',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
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
