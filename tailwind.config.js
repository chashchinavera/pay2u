module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background": "url('./images/background.png')",
      },
      colors: {
        white: "#FFF",
        black: "#000",
        blue: {
          dark: "#1D2749",
          light: "#80D1FF"
        },

        purple: {
          text: "#8D59E9",
          icon: "#8B79EE",
          primary: "rgba(134, 56, 229, 0.80)",
        },
        orange: "#F8A51B",
        violet: "#DA71FF",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}