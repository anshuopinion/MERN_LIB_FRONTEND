import { createGlobalStyle } from "styled-components";
import "fontsource-roboto";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`




${reset}

//Fonts

*, *:before,*:after{
box-sizing:border-box;

}
html{
  box-sizing:border-box;
  scroll-behavior:smooth;
 
}
body{
  

  font-family: 'Roboto', sans-serif;



  a{
    text-decoration:none;
    color:inherit;
  }
}
`;

export default GlobalStyle;
