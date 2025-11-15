import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-br":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      },
      animation: {
        'color-fade': 'color-fade 3s ease-in-out infinite',
      },
      keyframes: {
        'color-fade': {
          '0%': { 'color': '#3b82f6' },
          '16.66%': { 'color': '#8b5cf6' },
          '33.33%': { 'color': '#ec4899' },
          '50%': { 'color': '#ef4444' },
          '66.66%': { 'color': '#f59e0b' },
          '83.33%': { 'color': '#10b981' },
          '100%': { 'color': '#3b82f6' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
