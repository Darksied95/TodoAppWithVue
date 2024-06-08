/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-dark": "url('/src/assets/bg-desktop-dark.jpg')",
        checkBackground: "linear-gradient(to left , hsl(192, 100%, 67%),hsl(280, 87%, 65%))",
      },
      colors: {
        brightBlue: "hsl(220, 98%, 61%)",
        "l-VeryLightGray": "hsl(0,0%,98%)",
        "l-VeryLightGrayishBlue": "hsl(236,33%,92%)",
        "l-LightGrayishBlue": "hsl(233,11%,84%)",
        "l-DarkGrayishBlue": "hsl(236,9%,61%)",
        "l-VeryDarkGrayishBlue": "hsl(235,19%,35%)",
        "d-VeryDarkBlue": "hsl(235,21%,11%)",
        "d-VeryDarkDesaturatedBlue": "hsl(235,24%,19%)",
        "d-LightGrayishBlue": "hsl(234,39%,85%)",
        "d-LightGrayishBluehover": "hsl(236,33%,92%)",
        "d-DarkGrayishBlue": "hsl(234,11%,52%)",
        "d-VeryDarkGrayishBlue": "hsl(233,14%,35%)",
        "d-VeryDarkGrayishBlue-50": "hsl(237,14%,26%)",
      }
    },
  },
  plugins: [],
}