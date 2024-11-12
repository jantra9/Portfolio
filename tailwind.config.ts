import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        salmon:"#DECCCF",
        "darkSalmon":"#bb6868",
      },
      boxShadow:{
        "3-sided":"23px 20px 3px 0px rgba(0,0,0,0.15)",
      },
      fontFamily:{
        custom:['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'custom-image': "url('../../public/dialog-container.png')", 
      },
    },
  },
  plugins: [],
};
export default config;
