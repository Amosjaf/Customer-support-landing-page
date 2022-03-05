module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Lato: "'Lato', sans-serif"
      },
      fontWeight: {
        Light: 300,
        Regular: 400,
        Bold: 700
      },
      backgroundImage: {
        hero: "url('/public/images/Hero-image.jpg')",
        statsImage: "url('/public/images/stats-image.jpg')"
      },
      colors: {
        gradientDark: "hsl(242, 94%, 7%)/80",
        gradientLight: "hsl(246, 95%, 16%)/80"
      }
    },
  },
  plugins: [],
}
