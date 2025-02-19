/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins-Regular', 'sans-serif'],
        "poppins-bold": ['Poppins-Bold', 'sans-serif'],
        "poppins-light": ['Poppins-Light', 'sans-serif'],
        "poppins-semibold": ['Poppins-SemiBold', 'sans-serif'],
        "poppins-extrabold": ['Poppins-ExtraBold', 'sans-serif'],
      },
      colors: {
        "primary": {
          100: '#61AC4D',
          200:'#404040'
        },
        secondary: {
          100: '#B6B6B7',
          200: '#F0F0F1'
        },
        black: {
          DEFAULT: '#000000',
          100: '#0A0A0A',
        }
      }
    },
  },
  plugins: [],
}
