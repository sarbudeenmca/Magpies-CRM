/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EF587F',
        primaryd1: '#C7496A',
        primaryd2: '#A63D58',
        primaryd3: '#853146',
        primaryd4: '#6A2738',
        secondary: '#BF99B8',
        secondaryd1: '#9F7F9A',
        secondaryd2: '#856A80',
        secondaryd3: '#6A5566',
        secondaryd4: '#554452',
        accent: '#7086C1',
        accentd1: '#5E70A1',
        accentd2: '#4E5D86',
        accentd3: '#3E4A6B',
        accentd4: '#323C56',
        dark: '#212E4C',
        darkd1: '#1C2640',
        darkd2: '#172035',
        darkd3: '#131A2C',
        darkd4: '#101625',
        darkd5: '#0D121E',
        darkd6: '#0A0E18',
      },
    },
  },
  plugins: [],
}

