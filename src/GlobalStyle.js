import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #23d997;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: grey;
}
html{
    @media (max-width: 1200px){
        font-size: 75%;
    }
}
body{
    font-family: IBM Plex Sans;
    overflow-x: hidden;
}
body>*{
    width: 100%;
}
    h2{
        font-weight: lighter;
        font-size: 3rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
       
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color:#23d997;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;
