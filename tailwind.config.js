/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      colors: {
        orange: '#DF5000',
        lightOrange: '#F1B08C',
        grey:"#838383",
        
      },
      fontFamily: {
        'roboto': ['Roboto','sans-serif'],
        'russo': 'var(--font-russo_o)',
        'clock': 'var(--font-clock)',
        'lexend': 'var(--font-lexend)',
      },
      backgroundImage: {
        'lightningBG': "url('../public/BackgroundLightning.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
