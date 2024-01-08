import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

import IAAB3 from './fonts/IAAB3.woff2';
import SFRegular from './fonts/SF-Regular.woff2';
import SFBold from './fonts/SF-Bold.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'IAAB3-Mono';
    src: url(${IAAB3}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'SF PRO Text';
    src: url(${SFRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'SF PRO Text';
    src: url(${SFBold}) format('truetype');
    font-weight: 700;
    font-style: bold;
    font-display: auto;
  }

  * {
    box-sizing: border-box;
    
    margin: 0;
    padding: 0;
  }

  html {
    overflow-x: hidden;

    font-size: 20px;
  }

  body {
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100dvh;

    background: ${theme.colors.background};

    color: ${theme.colors.text};
    font-size: 1em;
    font-weight: 400;
    font-family: 'SF PRO Text';
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'IAAB3-Mono';
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  a, 
  button {
    font-family: 'SF PRO Text';
  }
`;
