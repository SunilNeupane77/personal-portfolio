/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcF4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001f",
        primary: "#1E90FF", // Blue
        secondary: "#32CD32", // Green
        background: "#F0F8FF", // Light Blue
        text: "#333333", // Dark Gray
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      },
      boxShadow: {
        "black": "4px 4px 0 #000",
        "white": "$px 4px 0 #fff"
      },
      gridTemplateColumns: {
        "auto": "repeat(auto-fit,minmax(200px,1fr))"
      }
    },
  },
  darkMode: "selector",
  plugins: [],
};





