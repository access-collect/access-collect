import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnightBlue: "#124076",
        transparentMidnightBlue: "#8A9FC0",
        oliveGreen: "#7F9F80",
        lightOliveGreen: "#7F9F8066",
        transparentOliveGreen: "#7F9F801A",
        lightOrange: "#FFC374",
        transparentLightOrange: "#FFC37440",
        brightOrange: "#FFA632",
        transparentBrightOrange: "#FFA63240",
        strongYellow: "#F5D03B",
        imperialYellow: "#F9E897",
        transparentImperialYellow: "#F9E89733",
        darkGrey: "#D9D9D9",
        lightGrey: "#E3E5E8",
      },
      fontFamily: {
        title: ["verdana"],
        subTitle: ["openDyslexic"],
        body: ["openDyslexic"],
        section: ["courrierPrimeBold"],
      },
    },
  },
  plugins: [],
};
export default config;
