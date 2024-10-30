import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data.json",
  ],
  theme: {
    extend: {
      colors: {
        "light-red": "hsl(0, 100%, 67%)",
        "orange-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "light-slate-blue": "hsl(252, 100%, 67%)",
        "light-royal-blue": "hsl(241, 81%, 54%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",
        white: "hsl(0, 0%, 100%)",
        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
        "dark-lavender": "hsl(246, 100%, 73.73%)",
        "light-gray": "hsl(276, 4.9%, 60%)",
      },
      boxShadow: {
        "custom-light": "0 25px 78px #e9efff",
      },
      fontFamily: {
        "hanken-grotesk": "var(--font-hanken-grotesk)",
      },
    },
  },
  plugins: [],
};
export default config;
