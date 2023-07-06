/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins:{
    textTransform:false,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        navyBlue: '#112148',
        darkPurpur:'#4C3DFF',
        navyBlue2:'#111E4D',
        navyBlue3:'#091029',
        blurp:'#4C3DFF',
        blurp2:'#2A1FA9',
      },
    },
  },
  plugins: [],
}
