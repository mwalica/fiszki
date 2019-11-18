import { createGlobalStyle } from "styled-components";
import { setFont, setRem, setColor } from "./styled/Styles";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700|Roboto+Condensed:300,400,700&display=swap');

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
} 

table {
    border-collapse: collapse;
    border-spacing: 0;
}

body {
    font-size: 100%;
    ${setFont.main};
    background: ${setColor.backgroundGrey50};
    color: ${setColor.grey800};
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    margin: 1rem;
}

a {
    text-decoration: none;
}

strong {
    font-weight: 700;
}

h1 {font-size: ${setRem(42)}}
h2 {font-size: ${setRem(36)}}
h3 {font-size: ${setRem(24)}}
h4 {font-size: ${setRem(20)}}
h5 {font-size: ${setRem(18)}}
h6 {font-size: ${setRem(16)}}

`;

export default GlobalStyle;
