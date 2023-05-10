/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-dark": "#1c2534",
        "light-gray": "#DAE0E6",
        "main-gray": "#A5ACBA",
        "primary-blue": "#437EF7",
        "light-blue": "#F5FAFF",
      },
      
    },
  },
  plugins: [],
};
