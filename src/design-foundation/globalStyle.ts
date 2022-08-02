import { createGlobalStyle } from 'styled-components';
/*
 * Styled components global style configuration
 * used to globally inject configurable variables in styling
 * Main part of our styling is atomic and governed by themes configured in "system-design-variables.ts"
 * */
export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%;
    }
  body {
    color: ${({ theme }) => theme.colors.primary.text};
    background: ${({ theme }) => theme.colors.primary.background};

  }


  .icon {
    color: ${({ theme }) => theme.colors.primary.text};
    font-size: ${({ theme }) => theme.textFontSize.sm};
  }


  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0);

  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary.search};
  }
`;
