/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textShadow: {
        'pink-glow': '0 0 5px #e60073, 0 0 15px #e60073, 0 0 20px #e60073, 0 0 40px #e60073',
        'magenta-deep-purple':
          '0 0 8px #ff00ff, 0 0 10px #ff00ff, 0 0 12px #ff00ff, 0 0 14px #9400d3',
        'hotpink-light': '0 0 3px #ff69b4, 0 0 5px #ff69b4'
      }
    }
  },
  plugins: [
    // Plugin for applying text shadow
    function ({ addUtilities, theme }) {
      const newUtilities = {}
      Object.entries(theme('textShadow')).forEach(([name, value]) => {
        newUtilities[`.text-shadow-${name}`] = {
          textShadow: value
        }
      })
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ]
}
