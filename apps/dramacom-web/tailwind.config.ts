import daisyui from "daisyui";
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  plugins: [daisyui],
} satisfies Config;
