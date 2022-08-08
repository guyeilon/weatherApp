import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
        font-size: 62.5%;
      min-height: 100%;                    
      
      
    }
    body {
      color: ${({ theme }) => theme.colors.primary.text};
      background: ${({ theme }) => theme.colors.background.gradient};
      /* background: red; */

       min-height: 100%;
       
      /* background-repeat: no-repeat; */
      background-attachment: fixed;
      
       
     
     

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
