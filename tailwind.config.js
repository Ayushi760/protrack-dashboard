/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-gradient': 'linear-gradient(89.91deg, rgba(67, 24, 255, 0.4) -5%, #FEC6DF 66.33%)',
        'sidebar-gradient':'linear-gradient(180deg, #FD71AF 0%, #FEC6DF 100%)'
      },
      colors:{
        button_primary:'#49CCF9',
        secondary:'#56555C'
      },
      boxShadow: {
        custom: '0px 21.82px 21.82px 1px rgba(0, 0, 0, 0.05)', // Adjust the opacity as needed
      },
    },
  },
  plugins: [],
}


