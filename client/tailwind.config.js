/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      transitionProperty: {
        "max-height": "max-height",
      },
      boxShadow: {
        balloon: "0 0 8px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        primary: "#fbf4ec",       // Fantasy
        secondary: "#007095",     // Navy
        tree: "#6fb793",          // Silver Tree
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        navBarSecondary: "rgba(45, 122, 156, 0.17)",  // Muted Blue
        dimPrimary: "rgba(251, 244, 236, 0.5)",       // Fantasy (dim)
        gr: "#515151",            // Grey
        malibu: "#72c7ea",        // Malibu
        orange: "#f49400",        // Dark Orange
        lightOrange: "#e3a782",   // Tumbleweed
        mutedBlue: "#2d7a9c",     // Muted Blue
        oliveGreen: "#9bd7b",     // Olive Green
        pavlova: "#d5c392",       // Pavlova
        lemonGrass: "#9b9c82",    // Lemon Grass
      },
      fontFamily: {
        sfProBold: ["SF Pro Bold", "sans-serif"],       // Headers and subheaders
        sfProRegular: ["SF Pro Regular", "sans-serif"], // Body text
        merri: ["Merriweather Italic", "sans-serif"],   // Quotes and highlighting
      },
      animation: {
        "fade-in": "fadeIn 300ms ease-out forwards",
        "fade-out": "fadeOut 300ms ease-in forwards",
        "slide-left": "slide-left 0.5s ease-in-out",
        "slide-up": "slide-up 0.7s ease-in-out",
        "slide-right": "slide-right 0.5s ease-in-out",
        grow: "grow 1s ease-in-out",
        "rotate-up": "rotate-up 0.5s ease-in-out forwards",
        "rotate-down": "rotate-down 0.5s ease-in-out forwards",
        "slide-down-2": "slide-down 500ms ease-out forwards",
        "slide-up-2": "slide-up 300ms ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-10px)" },
        },
        "slide-down-2": {
          "0%": { maxHeight: "0", opacity: 0 },
          "100%": { maxHeight: "100px", opacity: 1 },
        },
        "slide-up-2": {
          "0%": { maxHeight: "100px", opacity: 1 },
          "100%": { maxHeight: "0", opacity: 0 },
        },
        "rotate-down": {
          from: {
            transform: "rotate(-180deg)",
          },
          to: {
            transform: "rotate(0deg)",
          },
        },
        "rotate-up": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(-180deg)",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
          "100%": {
            transform: "translateY(-100%)",
            opacity: 1,
          },
        },
        "slide-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
        grow: {
          "0%": {
            transform: "scaleY(0)",
            transformOrigin: "bottom",
            opacity: 0,
          },
          "100%": {
            transform: "scaleY(1)",
            transformOrigin: "bottom",
            opacity: 1,
          },
        },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
