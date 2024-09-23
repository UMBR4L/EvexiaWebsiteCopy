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
        neutralColors: {
          // supporting secondary colours 2 backgrounds, text colours, separators, models, etc.
          10: "#F7F9FA", // white
          25: "#B1B2B2", // light grey
          50: "#9B8C8C", // grey
          75: "#4E4F4F", // dark grey
          100: "#222222", // black
        },
        primaryColors: {
          // supporting secondary colours in backgrounds, text colours, separators, models, etc.
          10: "#DAEBF2", // lightest blue
          25: "#A3C9D9", // light blue
          50: "#2D7A9C", // blue
          75: "#144D66", // dark blue
          100: "#062E40", // black-blue
        },
        secondaryColors: {
          // supporting secondary colours in backgrounds, text colours, separators, models, etc.
          100: "#CCD3E7",
          300: "#8BA4E4",
          500: "#104785",
          700: "#01378F",
          900: "#00132C",
        },
        successColors: {
          // supporting secondary colours in backgrounds, text colours, separators, models, etc.
          100: "#CBEBBA",
          300: "#9FF655",
          500: "#17D1A9",
          700: "#2A714F",
          900: "#153928",
        },
        warningColors: {
          // for warning or on-hold states.
          10: "#F3DAC3", // Warning 10 (lightest warning color)
          500: "#F38723", // Warning (default warning color)
          100: "#844205", // Warning 100 (darkest warning color)
        },
        errorColors: {
          // Generally used across error states
          100: "#F9DBD8",
          300: "#F97722",
          500: "#E03C4C",
          700: "#8B424E",
          900: "#761313",
        },
        shadesColors: {
          // supporting secondary colours in backgrounds, text colours, separators, models, etc.
          0: "#FFFFFF",
          100: "#000000",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        merri: ["Merriweather Italic", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 900,
      },
      fontSize: {
        xs: '0.75rem',  // 12px
        sm: '0.875rem', // 14px
        base: "1rem",   // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem",  // 20px
        "2xl": "1.5rem",// 24px
        "3xl": "2.25rem",// 36px
        "4xl": "3rem",  // 48px
        "5xl": "4rem",  // 64px
      },
      lineHeight: {
        snug: "1.25rem",
        relaxed: "1.5rem",
        loose: "1.75rem",
        comfy: "1.875rem",
        spacious: "2.5rem",
        roomy: "2.75rem",
        huge: "5rem",
      },
      spacing: {
        'base': "0.5rem", // 8px base spacing unit
        'lg': "1rem", // 16px
        'xl': "1.5rem", // 24px
        "2xl": "2rem", // 32px
        "3xl": "2.5rem", // 40px
        "4xl": "3rem", // 48px
        "5xl": "3.5rem", // 56px
        "6xl": "4rem", // 64px
        "7xl": "4.5rem", // 72px
        "8xl": "5rem", // 80px
        "9xl": "5.5rem", // 88px
        "10xl": "6rem", // 96px
        "11xl": "6.5rem", // 104px
        "12xl": "7rem", // 112px
        "13xl": "7.5rem", // 120px
        "14xl": "8rem", // 128px
        "15xl": "8.5rem", // 136px
        "16xl": "9rem", // 144px
        "17xl": "9.5rem", // 152px
        "18xl": "10rem", // 160px
        "19xl": "10.5rem", // 168px
        "20xl": "11.5rem", // 184px

        gutter: "1.25rem", // 20px gutter width
        "mobile-padding": "16px", // padding for mobile 
        "desktop-padding": "32px", // padding for desktop 
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
          "0%": { opacity: 0, transform: "translateY(-0.625rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-0.625rem)" },
        },
        "slide-down-2": {
          "0%": { maxHeight: "0", opacity: 0 },
          "100%": { maxHeight: "6.25rem", opacity: 1 },
        },
        "slide-up-2": {
          "0%": { maxHeight: "6.25rem", opacity: 1 },
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
      sm: "320px", // mobile breakpoint
      md: "768px", // tablet breakpoint
      lg: "1024px", // desktop breakpoint
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
