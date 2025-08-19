import type { Config } from "tailwindcss";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-pattern": "url('/img/bg-pattern.svg'), url('/img/climber.jpg')",
      },
      fontFamily: {
        Garnett: ["Garnett"],
      },
      colors: {
        primary: "#E85324",
        secondary: "#FFF1EC",
        tertiary: "#FFDCDE",
        fourth: "#FC5D2B",
        yellow: "#FCEB12",
        fifth: "#008BCC",
        mainGray: "#E1E0DC",
        secondaryBlue: "#2B6DCD",
        greenLight: "#BEFAC1",
        greenLighter: "#A8E5A3",
      },
      aspectRatio: {
        "9/16": "9 / 16",
        "16/9": "16 / 9",
      },
    },
  },
  plugins: [aspectRatio],
};

export default config;
