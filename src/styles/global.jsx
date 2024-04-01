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

    body {
        background-color: #fcfcfc;
    }

    // Scrollbar custom
    ::-webkit-scrollbar {
    width: 8px;
    }

    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
    background: #a8a8a8;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #888;
    }
`

export default GlobalStyle
