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

  background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23101c1a' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%2316322d' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23194a41' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%231a6256' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23187c6c' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;

  a{
    text-decoration:none;
    color:inherit;
  }
}
`;

export default GlobalStyle;
