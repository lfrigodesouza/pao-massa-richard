import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
      --color-background: #F2F2F2;
      --color-primary: #FF7B00;
      --color-primary-darker: #B25600;
      --color-text: #000000;
      --color-white: #FFFFFF;

      --size-text: 16px;
      --size-text-lg: 20px;
      --font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
      height: 100%;
      min-width: 320px;
  }

  body {
      font-family: var(--font-family);
      background-color: var(--color-background);
  }
`;

export default GlobalStyles;
