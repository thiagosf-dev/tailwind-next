import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        myColor: '#8257e6',
        violet: {
          25: '#fcfaff',
        },
      },

      borderWidth: {
        6: '6px',
      },

      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },
    },
  },
  plugins: [],
}
export default config
