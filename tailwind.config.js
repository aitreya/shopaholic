module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        cgrey : "#D7DEDC",
        cblack : "#FCE694",
        cred : "#160C28",
        cblue : "#5CC9FF",
        cyellow : "#FEC601",
        dgreen : "#388e3c",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
