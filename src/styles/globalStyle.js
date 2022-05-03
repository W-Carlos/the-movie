import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
    }

    body {
        background: black;
        color: white;

        /* width */
        ::-webkit-scrollbar {
        width: 9px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        /* box-shadow: inset 0 0 5px grey; */ 
        border-radius: 10px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: red; 
        border-radius: 10px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #b30000; 
        }
    }

`

export default GlobalStyle