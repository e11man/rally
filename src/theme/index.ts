export const colors = {
  primary: {
    main: '#25304A',
    light: '#3A4564',
    dark: '#1A2544',
  },
  accent: {
    main: '#F5AF53',
    light: '#FFCA70',
    dark: '#E99A20',
  },
  background: {
    default: '#FFFFFF',
    paper: '#F8F8FA',
    gradient: 'linear-gradient(to bottom, #F8F8FA, #E6E6E6)',
  },
  text: {
    primary: '#191A23',
    secondary: '#6E7A8A',
    disabled: '#A0A8B3',
  },
  common: {
    white: '#FFFFFF',
    black: '#000000',
    gray: '#E6E6E6',
  },
} as const;

export const typography = {
  fontFamily: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  fontSize: {
    hero: '48px',
    h1: '36px',
    h2: '30px',
    h3: '24px',
    h4: '20px',
    body: '16px',
    small: '14px',
    xsmall: '12px',
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
  '3xl': '6rem',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
