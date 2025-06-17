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
        darkTheme: "#0f172a", // Updated dark theme color - Slate 900
        primary: "#2563eb", // Updated to blue-600
        secondary: "#10b981", // Updated to emerald-500
        accent: "#8b5cf6", // Added purple accent
        background: "#f9fafb", // Updated background
        text: "#1f2937", // Updated text color
      },
      backdropBlur: {
        xs: '2px',
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
      },
      animation: {
        'wave': 'wave 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  darkMode: "selector",
  plugins: [],
};





