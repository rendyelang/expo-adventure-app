/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "bg-base": "#F3F2E7",
        "recom-card": "#131E2E",
        "secondary": "#FF7043",
        "tertier": "#EAE8D3"
      },
      fontFamily: {
        jakarta: ['Jakarta-Regular']
      }
    },
  },
  plugins: [],
}