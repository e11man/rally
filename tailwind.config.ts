const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#25304A',
          light: '#3A4564',
          dark: '#1A2544',
          DEFAULT: '#25304A',
        },
        accent: {
          main: '#F5AF53',
          light: '#FFCA70',
          dark: '#E99A20',
          DEFAULT: '#F5AF53',
        },
        background: {
          default: '#FFFFFF',
          paper: '#F8F8FA',
        },
        text: {
          primary: '#191A23',
          secondary: '#6E7A8A',
          disabled: '#A0A8B3',
        },
        gray: {
          custom: '#E6E6E6',
          50: '#F9F9F9',
          100: '#F3F3F3',
          200: '#E6E6E6',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        hero: ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        h1: ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['30px', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        h4: ['20px', { lineHeight: '1.4', fontWeight: '500' }],
        body: ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        small: ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        xsmall: ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to bottom, #F8F8FA, #E6E6E6)',
      },
    },
  },
  plugins: [],
};

export default config;
