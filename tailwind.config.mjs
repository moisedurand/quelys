/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cobalt:     '#1F3464',
        'cobalt-80':'rgba(31,52,100,0.80)',
        muted:      '#8196A9',
        sky:        '#ACC4D8',
        apricot:    '#DD9C7A',
        peach:      '#C97E5D',
        paprika:    '#B25C45',
        terra:      '#821F0F',
        surface:    '#F7F8FA',
      },
      fontFamily: {
        script: ["'Dancing Script'", 'cursive'],
        sans:   ["'Raleway'", 'sans-serif'],
        body:   ["'Inter'", 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollPulse: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%':      { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'fade-up':      'fadeUp 0.7s ease forwards',
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
