/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#000000',
          secondary: '#0a0a0a',
          tertiary: '#141414',
        },
        accent: {
          white: '#ffffff',
          gray: '#888888',
          light: '#cccccc',
          dark: '#333333',
        },
        surface: 'rgba(255,255,255,0.03)',
        surfaceHover: 'rgba(255,255,255,0.06)',
        border: 'rgba(255,255,255,0.1)',
        borderLight: 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,255,255, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(255,255,255, 0.2)' },
        },
      },
    },
  },
  plugins: [],
}