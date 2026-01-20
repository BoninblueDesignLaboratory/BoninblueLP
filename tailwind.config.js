/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cyan: {
          400: '#22d3ee',
        },
      },
      backgroundImage: {
        'bonin-blue': 'linear-gradient(to bottom, #003B6F, #001F3F, #000000)',
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'sans-serif'],
        tech: ['var(--font-rajdhani)', 'sans-serif'],
        sans: ['var(--font-inter)', 'var(--font-noto-sans-jp)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
