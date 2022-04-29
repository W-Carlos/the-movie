import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
    }

    body {
        background: black;
        color: white;
    }

`

export default GlobalStyle