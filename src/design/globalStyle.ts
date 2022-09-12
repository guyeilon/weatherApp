import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
        font-size: 62.5%;
        height: 100%;
        
      }
      body {
        min-height: 100%;

      
      background: ${({ theme }) => theme.colors.background.gradient};
      
        background-attachment: fixed;
        overflow-x: hidden;

        display: flex;
        flex-direction:column

      }

      html, body {
  position:relative;
  overflow-x:hidden;
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
     border-radius: 8px;
  }
`;
