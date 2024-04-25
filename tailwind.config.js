/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      'sm': '550px',
      // => @media (min-width: 640px) { ... }

      'md': '750px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }


      // => @media (min-width: 1536px) { ... }
    },

    colors: {
      "lightOrange": "rgba(255,90,61, 0.3)",
      "orange": "#FF5A3D",
      "white": "#fff",
      "darkBlue": "#0A2C3D",
      "subText": "#555",
      "dark": "#071A1D",
      "overlay": "rgba(0,0,0,0.5)",
      "light-gray": "#F3F6F7",
      "green": "#76C520"
  
    },
    extend: {},
  },
  plugins: [],
}

