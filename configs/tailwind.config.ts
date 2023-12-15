/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [`pages/**/*.vue`, `components/**/*.vue`],
  theme: {
    extend: {
      colors: {
        primary: '#21283A',
      },
      fontFamily: {
        dongle: 'Dongle',
        rb: ['RB', '"Open Sans"'],
        iciel: ['iCiel', '"Open Sans"'],
        salsa: ['Salsa', '"Open Sans"'],
        mc: ['MC', '"Open Sans"']
      },
      spacing: {
        15: '60px',
        18: '4.5rem'
      }
    },
    
  },
  plugins: [],
}
