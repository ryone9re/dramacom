import daisyui from "daisyui";
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  plugins: [daisyui],
  theme: {
    extend: {
      colors: {
        darkgray: "#252525",
      },
    },
  },
} satisfies Config;
