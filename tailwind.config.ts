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
      keyframes: {
        slideToBottom: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeInSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(10%)' },
          '100%': { opacity: '100%', transform: 'translateY(0)' },
        },
      },
      animation: {
        slideToBottom: 'slideToBottom 1.5s forwards linear',
        slideToBottom2: 'slideToBottom 1.5s 500ms forwards linear',
        slideToBottom3: 'slideToBottom 1.5s 1000ms forwards linear',
        fadeInSlideUp: 'fadeInSlideUp 1s 800ms forwards linear',
      },
      backgroundImage: {
       'linear-black': 'radial-gradient(circle, rgba(45,49,60,1) 0%, rgba(0,0,0,1) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
