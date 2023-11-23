import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/styles';
import theme from './styles/theme';
import { Router } from './Router';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}
