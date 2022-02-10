import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }

    body {
        font: normal 12px arial;
    }
`;

export const Section = styled.section`
    width: 100%;
    height: 300vh;
    background-color: blue;
`;