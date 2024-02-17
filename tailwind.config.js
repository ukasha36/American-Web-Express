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
      backgroundImage: {
        'hero-image': "url('/public/about5.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
          monte: ['Montserrat', "sans-serif"],
      },
      },
    colors: {
      brand: {
        50: '#7A7A7A',
        100: '#FF0000',
        200: '#33373d',
        300:  '#FFFFFF',
        400:  '#110729',
        500:  '#F9F9F9',
        600:  '#1c2022'

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

