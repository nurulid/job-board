/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#CDEBC8',
        //ijoChrome: '#B7D07B', // hitamnya: #263500 // source chrome browser
      },
    },
  },
  plugins: [],
};
