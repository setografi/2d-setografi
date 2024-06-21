/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cornflowerBlue: "#6f6abf",
        paleGoldenrod: "#f7efba",
        deepAubergine: "#311047",
      },
    },
  },
  plugins: [],
};
