module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: { extend: { colors: { primary: "rgb(40, 0, 0)" } } },
  variants: { extend: {} },
  plugins: [],
};
