import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './*.html', './src/**/*.{ts,js,html}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070707',
          900: '#0c0c0c',
          800: '#141414',
          700: '#1a1a1a',
        },
        cream: {
          50: '#fbf8f2',
          100: '#f5f1ea',
          200: '#e8e1d3',
          300: '#cdc4b1',
          400: '#a89e8a',
        },
        gold: {
          300: '#e2c697',
          400: '#d4b27d',
          500: '#c9a96e',
          600: '#a98855',
          700: '#86683f',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.32em',
        widest3: '0.5em',
      },
      fontSize: {
        '11xl': ['10rem', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        '12xl': ['13rem', { lineHeight: '0.9',  letterSpacing: '-0.045em' }],
        '13xl': ['18rem', { lineHeight: '0.88', letterSpacing: '-0.05em' }],
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marqueeX: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        breath: { '0%,100%': { opacity: '0.5' }, '50%': { opacity: '1' } },
      },
      animation: {
        marquee: 'marqueeX 38s linear infinite',
        floatY: 'floatY 8s ease-in-out infinite',
        breath: 'breath 3.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
