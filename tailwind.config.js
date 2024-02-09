/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      listStyle: {
        none: 'none',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
          sans: ['Montserrat', "sans-serif"],
      },
      },
    colors: {
      brand: {
        50: '#7A7A7A',
        100: '#fe7062',
        200: '#33373d',
        300:  '#FFFFFF',
        400:  '#000',
        500:  '#F9F9F9'

        /* ... other shades for brand */
      },
    },
    screens: {
      sm: '340px',
      md: '800px', // Change to '850px'
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      'tailwind' : '450',
    },
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}

