/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust the path according to your project structure
    "./pages/**/*.{js,ts,jsx,tsx}", // If you're using 'pages' directory
    "./components/**/*.{js,ts,jsx,tsx}", // If you have separate components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#cf2626', // Replace with your actual color
        secondary: '#ffffff', // Replace with your actual color
      },
      fontFamily: {
        sans: ['Tajwal', 'sans-serif'], // Example font family
      },
    },
  },
  plugins: [],
};
