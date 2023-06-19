/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      // colors: {
      //   background: "hsl(var(--background))",
      //   foreground: "hsl(var(--foreground))",
      //   heading: "hsl(var(--text-heading))",
      //   paragraph: "hsl(var(--text-paragraph))",
      //   primary: {
      //     DEFAULT: "hsl(var(--primary))",
      //     foreground: "hsl(var(--primary-foreground))",
      //   },
      //   secondary: {
      //     DEFAULT: "hsl(var(--secondary))",
      //     foreground: "hsl(var(--secondary-foreground))",
      //   },
      // },
    },
  },
  plugins: [],
};
