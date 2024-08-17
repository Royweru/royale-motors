import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          dark: "#e2e2e2",
          grey: "#d3d3d3",
        },
        black: {
          DEFAULT: "#000000",
          1: "#1e1717",
          2: "#212121",
        },
        blue: {
          primary: "#244855",
          secondary: "#4d6771",
          accent: "#9dacb1",
        },
        red: {
          primary: "#e64833",
          secondary: "#873f41",
        },
        txt: {
          primary: "#fde9d0",
          secondary: "#a49682",
          accent: "#ffc87d",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[78.5rem] mx-auto px-5 md:px-10 xl:max-w-[80.5rem] xl:px-[16]":
            {},
        },
        ".h1": {
          "@apply font-bold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] font-bold leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] font-bold leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] font-bold leading-normal": {},
        },
        ".h5": {
          "@apply font-bold text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};

export default config;
