/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [`pages/**/*.vue`],
  theme: {
    extend: {
      colors: {
        primary: '#000',
      },
    },
  },
  plugins: [],
}
