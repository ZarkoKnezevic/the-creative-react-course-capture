import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: #1b1b1b;
    font-family: 'Inter', sans-serif;
}
button {
    padding: 1rem 2rem;
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    font-weight: bold;
    background-color: transparent; 
    color: white;
    border: 3px solid #23d997;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        background-color: #23d997;
        color: white;
    }
}
h2 {
    font-size: 4rem;
    font-weight: lighter;
}
h3 {
    color: white;
}
h4 {
    font-size: 2rem;
    font-weight: bold;
}
a {
    font-size: 1.1rem;
}
span {
    font-weight: bold;
    color: #23d997;
}
p {
    padding: 3rem 0rem;
    font-size: 1.4rem;
    line-height: 150%;
    color: #ccc;
}

`;

export default GlobalStyle;
