/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#050506',
          surface: '#0D0D0F',
          border: '#1A1A1F',
          muted: '#6B6B7B',
        },
        light: {
          bg: '#F6F2EA',
          surface: '#FFFFFF',
          border: '#E5E1D8',
          muted: '#6B6B7B',
        },
        accent: {
          DEFAULT: '#7B1FA2',
          light: '#9C27B0',
          dim: '#5C1680',
        },
      },
      fontFamily: {
        heading: ['var(--font-fira-sans)', 'sans-serif'],
        body: ['var(--font-poppins)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
