import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        padding: 0; 
        font-family: "Nanum Gothic", sans-serif;
    }
`;

export default GlobalStyles;
