import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
        font-size: 62.5%;
      min-height: 100%;
      
      
    }
    body {
      color: ${({ theme }) => theme.colors.primary.text};
      background: ${({ theme }) => theme.colors.background.gradient};
      /* background-repeat: no-repeat; */
      /* background-size: auto 100%; */
      /* background: red; */
       min-height: 100%;
         background-repeat: no-repeat;
    background-attachment: fixed;
       /* width: 100%; */
         
            /* min-height: 100vh; */
       
     
     

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
