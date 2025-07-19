/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vibrantPink: "#FF4DC0",
        softPink: "#FFD1E3",
        darkPink: "#B30C7B",
        midnight: "#1E1B2E",
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
