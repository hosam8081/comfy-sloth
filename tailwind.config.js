/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:'2rem'
    },
    extend: {
      colors:{
        main:"#ab7a5f",
        overlay:"#00000085",
        line: "#0000001f",
        primary:{
          50 : "#eaded7",
          100 : "#453227",
          200 : "#5f4435",
          300 : "#795744",
          400 : "#936a53",
          500 : "#ab7a5f",
          600 : "#b99179",
          700 : "#c5a491",
          800 : "#d1b6a8",
          900 : "#decbc0",
        },
        gray: {
          50 : '#f1f5f8',
          100 : '#102a42',
          200 : "#243a52",
          300 : "#324d67",
          400 : "#48647f",
          500 : "#617d98",
          600 : "#829ab0",
          700 : "#9eb2c7",
          800 : "#bcccdc",
          900 : "#dae2ec",
        }
      },
      gridTemplateColumns: {
        'cart': '1fr 1fr 1fr 1fr auto',
        'cartHeader': '316px 1fr 1fr 1fr auto'
      }
    },
  },
  plugins: [],
}

