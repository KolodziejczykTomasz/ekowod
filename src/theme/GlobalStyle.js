import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;   
  }
  
  body {    
    margin: 0 auto;
    max-width: 1250px;
    font-size: 1.6rem;
    font-family: 'Open Sans', Arial, sans-serif; 
  }
  `;

export default GlobalStyle;
