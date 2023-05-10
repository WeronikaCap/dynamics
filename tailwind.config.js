/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important:"#root",
  theme: {
    extend: {
      colors: {
        "base-black": "#1A1A1A",
        "neutral-black": "#272D37",
        "main-dark": "#1c2534",
        "light-gray": "#DAE0E6",
        "main-gray": "#A5ACBA",
        "primary": "#E8EFFD",
        "blue": "#1976d2"
      },
      maxWidth: {
        "screen-3xl": "1920px",
      },
    },
  },
  plugins: [],
};
