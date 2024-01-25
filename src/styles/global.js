import { createGlobalStyle } from "styled-components";
import colors from "./colors";

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

    body {
        background-color: #fcfcfc;
    }
`

export default GlobalStyle
