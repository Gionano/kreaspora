/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-dvh': '100dvh',
      },
       colors: {
        brand: {
          primary: {
            light: '#fb923c', // orange-400
            DEFAULT: '#f97316', // orange-500
            dark: '#ea580c', // orange-600
          },
          secondary: {
            light: '#fca5a5', // red-400
            DEFAULT: '#ef4444', // red-500
            dark: '#dc2626', // red-600
          },
          accent: {
            light: '#fdbb74', // orange-300
            dark: '#f87171', // red-400
          },
        },
      },
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-medium': 'float-medium 6s ease-in-out infinite',
        'sway': 'sway 10s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'slide': 'slide 15s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'drift': 'drift 12s ease-in-out infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'float-fast': 'float-slow 4s ease-in-out infinite',
        'glow': 'glow 5s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(5deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-5deg)' },
        },
        'sway': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(2deg)' },
          '75%': { transform: 'rotate(-2deg)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.2)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px -5px rgba(59, 130, 246, 0.4)' }, /* blue-500 */
          '50%': { boxShadow: '0 0 35px 5px rgba(59, 130, 246, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};