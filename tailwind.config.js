/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        "base-black": "#1A1A1A",
        "neutral-black": "#272D37",
        "main-dark": "#1c2534",
        "light-gray": "#DAE0E6",
        "main-gray": "#A5ACBA",
        "border-grey": "#EAEBF0",
        primary: "#E8EFFD",
        "primary-blue": "#437EF7",
        "light-blue": "#F5FAFF",
        "neutral-gray": "#FAFBFC",
        blue: "#1976d2",
        "blue-link": "#437EF7",
      },
      maxWidth: {
        "screen-3xl": "1920px",
      },
      screens: {
        md: "641px",
        lg: "1008px",
      },
    },
  },
  plugins: [],
};
