/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // banner: "url('./src/assets/images/banner.png')",
      },
      colors: {
        "btn-bg-common": "#0BE58A",
      },
    },
    fontFamily: {
      Lexend: ["Lexend", "sans-serif"],
      "Fira-Sans": ["Fira Sans", "sans-serif"],
    },
  },
  plugins: [],
};
