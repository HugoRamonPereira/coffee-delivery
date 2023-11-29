import 'styled-components';

export default {
  font: {
    titleXl: '3rem',
    titleL: '2rem',
    titleM: '1.5rem',
    titleS: '1.2rem',
    titleXs: '1.125rem',
    textBoldL: '1.25rem',
    textBoldM: '1rem',
    textBoldS: '0.75rem',
    textRegularL: '1.25rem',
    textRegularM: '1rem',
    textRegularS: '0.875rem',
    tag: '0.625rem',
    buttonL: '0.875rem',
    buttonS: '0.75rem'
  },
  families: {
    regular: 'Roboto',
    title: 'Baloo 2'
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
      baseGround: '#FAFAFA',
      white: '#FFFFFF',
      error: '#FF0033'
    }
  }
} as const;
