/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myTupiBold: "myTupiBold",
        myTupi: "MyTupi",
      },
      colors: {
        "off-white": "#FAF9F6",
        beige: "#f5f5dc",
        myYellow: "#f8da3d",
        myGreen: "#5fae67",
        myPurple: "#c6bbca",
      },
    },
  },
  plugins: [],
};
