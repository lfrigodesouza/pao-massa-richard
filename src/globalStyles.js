import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
      --color-background: #F2F2F2;
      --color-text: #000000;
      --color-white: #FFFFFF;
      --color-black: #000000;
      --color-green: #2F9A26;
      --color-red: #CE3535;

      --font-size-sm: 14px;
      --font-size-md: 16px;
      --font-size-lg: 20px;
      --font-size-xg: 30px;
      --font-size-xxg: 60px;

      --font-family: 'Roboto', sans-serif;
      --font-family-secondary: 'Allura', cursive;
  }

  html, body, #root {
      height: 100%;
      min-width: 320px;
  }

  body {
      font-family: var(--font-family);
      background-color: var(--color-background);
      color: var(--color-text);
      font-size: var(--font-size-md);
  }
`;

export default GlobalStyles;
