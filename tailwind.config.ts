import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#7CB5A3',
          light: '#A3D5C3',
          dark: '#5A9B89',
        },
        navy: {
          DEFAULT: '#1E3A5F',
          light: '#2B4F7A',
          dark: '#152941',
        },
        emerald: {
          100: '#D1FAE5',
          300: '#6EE7B7',
          600: '#059669',
          700: '#047857',
        },
      },
      fontSize: {
        // Override text-sm to 16px so no senior-facing text falls below readable size.
        // Tailwind's default text-sm is 14px — too small for users aged 50+.
        'sm': ['16px', '1.6'],
        'base': ['16px', '1.6'],
        'lg': ['18px', '1.6'],
        'xl': ['20px', '1.5'],
        '2xl': ['24px', '1.4'],
        '3xl': ['30px', '1.3'],
        '4xl': ['36px', '1.2'],
      },
    },
  },
  plugins: [],
};

export default config;
