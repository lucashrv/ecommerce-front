import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-size: 1rem;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
    }
`

export default GlobalStyle
