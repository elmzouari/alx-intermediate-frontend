/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // ← THIS is the key fix
  theme: {
    extend: {},
  },
  plugins: [],
}
