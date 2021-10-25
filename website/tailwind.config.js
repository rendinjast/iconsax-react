module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      screens: {
        xs: '365px',
      },
      zIndex: {
        '-1': '-1',
      },
      colors: {
        // primary: 'rgba(139, 92, 246)',
        primary: '#FF8A65',
        bg: '#0F0F0F',
        card: '#151515',
        border: '#1d1d1d',
      },
      boxShadow: {
        primary: '0 10px 30px rgb(0 0 0 / 8%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
