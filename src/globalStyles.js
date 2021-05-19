import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
      --color-background: #F2F2F2;
      --color-primary: #FF7B00;
      --color-text: #000000;
      --color-white: #FFFFFF;

      --size-text: 16px;
      --size-text-lg: 20px;
  }

  html, body, #root {
      height: 100%;
      min-width: 320px;
  }

  body {
      background-color: var(--color-background);
  }
`;

export default GlobalStyles;
