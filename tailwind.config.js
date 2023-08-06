/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,mdx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        mainColor: '#1F4DED',
        mainUpColor: '#0034EB',
        mainDownColor: '#496CE7',
        borderColor: 'rgb(228, 228, 235)',
        textGrayColor: '#72717d',
        redColor: '#D8494A',
      },
      keyframes: {
        dropDown: {
          '0%': { transform: 'translateY(-100%) ' },
          '100%': { transform: 'translateY(0) ' },
        },
      },
      animation: {
        dropDown: 'dropDown 0.5s ease',
      },
    },
  },
  plugins: [],
};
