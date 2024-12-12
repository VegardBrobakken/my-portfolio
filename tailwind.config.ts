import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
        fontFamily: {
          sans: ['Roboto', 'sans-serif'],
        },
        colors: {
          customDarkBrown: "#54473F2", 
          customLightBrown: "#9A7E6F",
          customGreen: "#CBD2A4",
          customLightGreen: "E9EED9"
        },
    }
  },

  plugins: []
} satisfies Config;
