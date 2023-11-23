import 'styled-components';

import theme from '../styles/theme';

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

// This file was added to the project because Styled-Components is not able
// to see the properties we add in our custom theme as we try to access them using .
// Now with these few lines as we type props.theme... Styled-Components will show
// the properties we have available and if we type something that does not exist an error will appear
