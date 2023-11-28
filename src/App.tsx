import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/styles';
import theme from './styles/theme';
import { Router } from './Router';
import { CartContextProvider } from './context/CartContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </ThemeProvider>
  );
}
