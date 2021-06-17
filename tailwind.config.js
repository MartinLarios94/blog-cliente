module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      domine: ["Domine", "serif"],
      poppins: ["Poppins", "serif"],
    },
    flexGrow: {
      2: "2",
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      tuatara: "#3C3B39"
    }),
    gridTemplateRows: {
      footer: "repeat(2, minmax(0, auto))"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
