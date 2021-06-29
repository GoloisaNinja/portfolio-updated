import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  select{
    height: 40px;
    font-size: 16px;
  }
  html {
    background: #225d35;
  }
  body{
    font-family: 'Inter', sans-serif;
    line-height: 1.2;
    background: linear-gradient(to left bottom,#3d3d3d, #00de53);
    /* background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh; */
    color: #dbdbdb;
  }
  strong{
    font-weight: bold;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 20px 0;
  }
  h1{
    font-size: 3em;
  }
  h2{
    font-size: 2.5em;
  }
  h3{
    font-size: 2em;
  }
  h4{
    font-size: 1.5em;
  }
  h5{
    font-size: 1em;
  }
  h6{
    font-size: 0.75em;
  }
  ul{
    >li{
      list-style: none;
    }
  }
`;
