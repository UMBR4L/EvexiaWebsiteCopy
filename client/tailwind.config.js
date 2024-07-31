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
        grey: "#515151", // Grey
        primary: "#fbf4ec", // Fantasy
        secondary: "#007095", // Navy
        tree: "#6fb793", // Silver Tree
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        navBarSecondary: "rgba(45, 122, 156, 0.17)", // Muted Blue
        dimPrimary: "rgba(251, 244, 236, 0.5)", // Fantasy (dim)
        malibu: "#72c7ea", // Malibu
        darkOrange: "#f49400", // Dark Orange
        tumbleweed: "#e3a782", // Tumbleweed
        mutedBlue: "#2d7a9c", // Muted Blue
        oliveGreen: "#9bd7b", // Olive Green
        pureBlack: "#000000", // Pure Black
        pavlova: "#d5c392", // Pavlova
        lemonGrass: "#9b9c82", // Lemon Grass
        // Updating the colors with new design system values
        neutralColors: {    // supporting secondary colours in backgrounds, text colours, separators, models, etc.
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        primaryColors: {    // supporting secondary colours in backgrounds, text colours, separators, models, etc.
          100: "#FFEDCC",
          300: "#FFB655",
          500: "#FF8D00",
          700: "#AA4B00",
          900: "#331600",
        },
        secondaryColors: {   // supporting secondary colours in backgrounds, text colours, separators, models, etc.
          100: "#CCD3E7",
          300: "#8BA4E4",
          500: "#104785",
          700: "#01378F",
          900: "#00132C",
        },
        successColors: {    // supporting secondary colours in backgrounds, text colours, separators, models, etc.
          100: "#CBEBBA",
          300: "#9FF655",
          500: "#17D1A9",
          700: "#2A714F",
          900: "#153928",
        },
        warningColors: {    // for warning or on-hold states.
          100: "#FCE480",
          300: "#F59C60",
          500: "#F6AE11",
          700: "#A47408",
          900: "#523A06",
        },
        errorColors: {      // Generally used across error states
          100: "#F9DBD8",
          300: "#F97722",
          500: "#E03C4C",
          700: "#8B424E",
          900: "#761313",
        },
        shadesColors: {     // supporting secondary colours in backgrounds, text colours, separators, models, etc.
          0: "#FFFFFF",
          100: "#000000",
        },
      },
      fontFamily: {   // not sure if this is accurate as I cant find the typography sheet
        H1: ["Inter Bold", "sans-serif"], // H1
        H2: ["Inter Bold", "sans-serif"], // H2
        body1: ["Inter Regular", "sans-serif"], // Body 1
        subheader: ["Inter Semi Bold", "sans-serif"], // Subheaders and selected buttons
        sfProBold: ["SF Pro Bold", "sans-serif"], // Existing headers and subheaders
        sfProRegular: ["SF Pro Regular", "sans-serif"], // Existing body text
        merri: ["Merriweather Italic", "sans-serif"], // Existing quotes and highlighting
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
