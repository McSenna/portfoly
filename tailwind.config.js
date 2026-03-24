/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans:  ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        gold:        'var(--gold)',
        'gold-light':'var(--gold-light)',
        'gold-dim':  'var(--gold-dim)',
        ink:         'var(--ink)',
        'ink-2':     'var(--ink-2)',
        'ink-3':     'var(--ink-3)',
        'ink-4':     'var(--ink-4)',
        cream:       'var(--cream)',
        'cream-dim': 'var(--cream-dim)',
      },
      keyframes: {
        letterIn: {
          to: { opacity: '1', transform: 'translateY(0) rotateX(0deg)' },
        },
        fadeSlideUp: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        pulseOrb: {
          '0%,100%': { transform: 'scale(1)',    opacity: '0.7' },
          '50%':     { transform: 'scale(1.08)', opacity: '1'   },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)'    },
          '50%':     { transform: 'translateY(-10px)' },
        },
        ticker: {
          from: { transform: 'translateX(0)'   },
          to:   { transform: 'translateX(-50%)' },
        },
        scrollDown: {
          '0%':   { transform: 'scaleY(0)', transformOrigin: 'top'    },
          '50%':  { transform: 'scaleY(1)', transformOrigin: 'top'    },
          '51%':  { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        statusPulse: {
          '0%,100%': { opacity: '1',   transform: 'scale(1)'   },
          '50%':     { opacity: '0.5', transform: 'scale(1.3)' },
        },
      },
      animation: {
        'letter-in':    'letterIn 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-slide-up':'fadeSlideUp 0.7s ease forwards',
        'blink':        'blink 1s step-end infinite',
        'pulse-orb':    'pulseOrb 4s ease-in-out infinite',
        'float':        'float 6s ease-in-out infinite',
        'ticker':       'ticker 40s linear infinite',
        'scroll-line':  'scrollDown 2s ease-in-out infinite',
        'status-pulse': 'statusPulse 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
