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
        'gradient-header': 'linear-gradient(78.25deg, #112148 44.2%, #091227 72.98%)',

      },
      colors: {
        navyBlue: '#112148',
        darkPurpur:'#4C3DFF',
        navyBlue2:'#111E4D',
        navyBlue3:'#091029',
        blurp:'#4C3DFF',
        blurp2:'#2A1FA9',
        offWhite:'#E4E9FF',
        bluey:'#354682',
        offWhite2:'#F9FBFF',
        offPurPur:'#9895d1',
      },
    },
  },
  plugins: [],
}
