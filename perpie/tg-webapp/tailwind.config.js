/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  mode: "jit",

  theme: {
    borderRadius: {
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      md: "0.375rem",
      full: "9999px",
      large: "12px",
      reguler: "10px",
    },

    screens: {
      mobile: { max: "640px" },
      tablet: { max: "768px" },
      smallMobile: { max: "510px" },
      smallLaptop: { max: "1000px" },
      laptop: { max: "1150px" },
      largeLaptop: { max: "1550px" },
      pc: { max: "1920px" },
      largepc: { max: "2400px" },
    },

    extend: {
      boxShadow: {
        centeredXL: "0 2px 5px 8px rgba(0, 0, 0, 0.1)",
        glassmorph: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      },
      colors: {
        current: "currentColor",
        custom: {
          // Background colors
          bg: `var(--tg-theme-secondary-bg-color)`,
          light: "rgba(187, 142, 237, 0.86)",
          textColor: "var(--tg-theme-text-color)",
          button: "#ffffff",
          component: "#9063DE",
          bigComponent: ({ opacityValue }) =>
            `rgba(111, 95, 193, ${opacityValue})`,
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        popup: "popup 0.2s ease-in-out",
        dropdown: "dropdown 0.2s ease-in-out",
        modal: "modal 0.3s ease-in-out",
        sidebar: "sidebar 0.2s ease-in-out",
        log: "log 0.1s ease-in-out",
        configSlide: "configSlide 0.3s ease-in-out",
        fill: "fill 0.4s ease-in-out",
        stepPopup: "stepPopup 0.2s ease-in-out",
        straightEdge: "straightEdge 0.5s ease-in-out",
        faq: "faq 0.2s ease-in-out",
      },
      keyframes: (theme) => ({
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-550px * 6))" },
        },
        popup: {
          "0%": {
            transform: "scale(0.5)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        straightEdge: {
          "0%": {
            transform: "scaleY(0)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        },
        stepPopup: {
          "0%": {
            transform: "scale(0.5) translateX(-50%)",
          },
          "100%": {
            transform: "scale(1) translateX(-50%)",
          },
        },
        fill: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        modal: {
          "0%": {
            transform: "translateY(200%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        sidebar: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        log: {
          "0%": {
            transform: "translateY(-20%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        toolTipTop: {
          "0%": {
            transform: "translate(-50%, -125%) scale(0.25)",
          },
          "100%": {
            transform: "translate(-50%, -125%) scale(1)",
          },
        },
        toolTipBottom: {
          "0%": {
            transform: "translate(-50%, +25%) scale(0.25)",
          },
          "100%": {
            transform: "translate(-50%, +25%) scale(1)",
          },
        },
        toolTipLeft: {
          "0%": {
            transform: "translate(-125%, -50%) scale(0.25)",
          },
          "100%": {
            transform: "translate(-125%, -50%) scale(1)",
          },
        },
        toolTipRight: {
          "0%": {
            transform: "translate(+25%, -50%) scale(0.25)",
          },
          "100%": {
            transform: "translate(+25%, -50%) scale(1)",
          },
        },
        dropdown: {
          "0%": {
            height: "100%",
          },
          "100%": {
            height: "max",
          },
        },
        faq: {
          "0%": {
            height: "0%",
          },
          "100%": {
            height: "max",
          },
        },
        accountPopup: {
          "0%": {
            transform: "translateX(-100px) scale(0)",
          },
          "100%": {
            transform: "translateX(-100px) scale(1)",
          },
        },
        modalAppear: {
          "0%": {
            transform: "translateY(100vw)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        configSlide: {
          "0%": {
            transform: "translateX(100vw)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      }),
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
