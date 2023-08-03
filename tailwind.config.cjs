/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: {
        1: colors.sky[200],
        2: colors.sky[300],
        3: colors.sky[400],
        4: colors.sky[500],
        5: colors.sky[600],
        6: colors.sky[700]
      },
      secondary: {
        1: colors.violet[200],
        2: colors.violet[300],
        3: colors.violet[400],
        4: colors.violet[500],
        5: colors.violet[600],
        6: colors.violet[700]
      },
      main: {
        1: colors.white,
        2: colors.neutral[50],
        3: colors.neutral[200],
        4: colors.neutral[500],
        5: colors.neutral[600],
        6: colors.neutral[700],
        7: colors.neutral[800],
        8: colors.neutral[900],
        9: colors.neutral[950]
      },
      emerald: {
        1: colors.emerald[50],
        2: colors.emerald[100],
        3: colors.emerald[200],
        4: colors.emerald[300],
        5: colors.emerald[400],
        6: colors.emerald[500],
        7: colors.emerald[600],
        8: colors.emerald[700],
        9: colors.emerald[800],
        10: colors.emerald[900],
        11: colors.emerald[950]
      },
      transparent: colors.transparent
    },
    fontFamily: {
      primary: ['Inter', ...fontFamily.sans]
    }
  },
  plugins: []
}
