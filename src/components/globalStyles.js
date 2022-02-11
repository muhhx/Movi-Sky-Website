import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font: normal 12px arial;
    }
`;

export const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;