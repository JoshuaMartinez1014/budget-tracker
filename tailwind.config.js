// tailwind.config.js
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202225", // gives primary-100 to primary-900
        bgcolor: colors.gray, // gives bgcolor-100 to bgcolor-900
      },
    },
  },
  plugins: [],
};
