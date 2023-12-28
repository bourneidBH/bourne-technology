import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    './src/routes/**/*.{js,ts,jsx,tsx,mdx, svelte}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx, svelte}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx,jpg,jpeg,png,svg,html, svelte}',
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
    './public/**/.{jpg,jpeg,png,svg,html}',
  ],
  theme: {
    colors: {
      'primary': '#00aeef',
      'primary-light': '#66d5fe',
      'primary-dark': '#0185b6',
      'neutral': '#333',
      'neutral-light': '#f4f4f4',
      'neutral-dark': '#282828',
      'white': '#fff',
      'black': '#000',
      'transparent': 'transparent',
    },
  },
  plugins: [],
}

export default config