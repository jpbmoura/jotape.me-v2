/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brown: {
          100: "#FFE5D9",
          200: "#F0C3AD",
          300: "#E09670",
          400: "#F57331",
          500: "#E55C17",
          600: "#BF521B",
          700: "#994318",
          800: "#823D1A",
          900: "#6B3316",
        },
      },
      listStyleType: {
        square: "square",
        emoji: "#128073",
      },

      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },

        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 6s ease infinite alternate",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};
