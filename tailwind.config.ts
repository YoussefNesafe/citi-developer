import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
      '3xl': '1600px',
      tablet: '481px',
      desktop: '1024px',
    },
    extend: {
      backgroundImage: {
       'linear-black': 'radial-gradient(circle, rgba(45,49,60,1) 0%, rgba(0,0,0,1) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
