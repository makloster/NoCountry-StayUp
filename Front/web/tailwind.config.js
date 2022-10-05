/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        final: "0px 0px 15px 1px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
