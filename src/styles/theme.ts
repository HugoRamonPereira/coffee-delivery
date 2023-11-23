import 'styled-components';

export default {
  font: {
    regular: 400,
    bold: 700,
    extrabold: 800,
    sizes: {
      tiny: '0.625rem',
      xsmall: '0.75rem',
      small: '0.875rem',
      regular: '1rem',
      medium: '1.2rem',
      large: '1.8rem',
      xlarge: '2rem',
      xxlarge: '3rem',
      huge: '5.2rem'
    }
  },
  colors: {
    product: {
      yellow: '#DBAC2C',
      yellowDark: '#C47F17',
      yellowLight: '#F1E9C9',
      purple: '#8047F8',
      purpleDark: '#4B2995',
      purpleLight: '#EBE5F9'
    },
    base: {
      baseTitle: '#272221',
      baseSubtitle: '#403937',
      baseText: '#574F4D',
      baseLabel: '#8D8686',
      baseHover: '#D7D5D5',
      baseButton: '#E6E5E5',
      baseInput: '#EDEDED',
      baseCard: '#F3F2F2',
      baseground: '#FAFAFA',
      white: '#FFFFFF'
    }
  },
  spacings: {
    tiny: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    huge: '5.6rem'
  },
  breakpoints: {
    mobileS: '(max-width: 320px)',
    mobileM: '(max-width: 375px)',
    mobileL: '(max-width: 425px)',
    tablet: '(max-width: 768px)',
    laptop: '(max-width: 1024px)',
    laptopL: '(max-width: 1440px)',
    desktop: '(max-width: 2560px)'
  }
} as const;
