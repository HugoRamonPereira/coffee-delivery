import { createGlobalStyle } from 'styled-components';

import {
  BalooBoldTtf,
  BalooBoldWoff,
  BalooBoldWoff2,
  BalooExtraBoldTtf,
  BalooExtraBoldWoff,
  BalooExtraBoldWoff2,
  RobotoRegularTtf,
  RobotoRegularWoff,
  RobotoRegularWoff2,
  RobotoBoldTtf,
  RobotoBoldWoff,
  RobotoBoldWoff2
} from '../assets/fonts';

import margins from './margins';
import paddings from './paddings';
import text from './text';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BalooBold';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url(${BalooBoldTtf}) format('ttf');
    src: url(${BalooBoldWoff}) format('woff');
    src: url(${BalooBoldWoff2}) format('woff2');
  }

  @font-face {
    font-family: 'BalooExtraBold';
    font-weight: 800;
    font-style: normal;
    font-display: swap;
    src: url(${BalooExtraBoldTtf}) format('ttf');
    src: url(${BalooExtraBoldWoff}) format('woff');
    src: url(${BalooExtraBoldWoff2}) format('woff2');
  }

  @font-face {
    font-family: 'RobotoRegular';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${RobotoRegularTtf}) format('ttf');
    src: url(${RobotoRegularWoff}) format('woff');
    src: url(${RobotoRegularWoff2}) format('woff2');
  }

  @font-face {
    font-family: 'RobotoBold';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url(${RobotoBoldTtf}) format('ttf');
    src: url(${RobotoBoldWoff}) format('woff');
    src: url(${RobotoBoldWoff2}) format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  ${margins}
  ${paddings}
  ${text}

`;
