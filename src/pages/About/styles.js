import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
`;

export const Grid = styled.div`
    height: 450px;
    width: 100%;
    background-color: blue;
    display: grid;
    grid-template-columns: 1.2fr .1fr .7fr 1.2fr 1fr;
    grid-template-rows: .6fr .1fr .3fr 1fr .2fr;

    @media only screen and (max-width: 750px) {
        height: auto;
    }
`;

export const Title = styled.h1`
    font-size: 46px;
    font-weight: 700;
    background-color: aqua;
    grid-column: 2 / 5;
    grid-row: 1 / 3;
    z-index: 2;

    @media only screen and (max-width: 750px) {
        grid-column: 1 / 5;
    }
`;

export const InformationWrapper = styled.h3`
    font-size: 24px;
    background-color: white;
    grid-column: 4 / 6;
    grid-row: 4 / 5;

    @media only screen and (max-width: 750px) {
        grid-column: 1 / 6;
    }
`;

export const Subtitle = styled.p`
    font-size: 18px;
`;

export const Paragraph = styled.p`
    font-size: 12px;
    font-weight: 400;
`;

export const Button = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    width: 150px;
    cursor: pointer;
`;

export const Span = styled.span`
    color: red;
    font-size: 12px;
    font-weight: 400;
`;

export const Highlighter = styled.div`
    border-bottom: solid 1px red;
    width: 50%;
`;

export const ImageWrapper1 = styled.div`
    background-color: purple;
    grid-column: 1 / 3;
    grid-row: 2 / 6;
    overflow: hidden;
    position: relative;

    @media only screen and (max-width: 750px) {
        display: none;
    }
`; 

export const ImageWrapper2 = styled.div`
    background-color: green;
    grid-column: 5 / 6;
    grid-row: 1 / 2;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 750px) {
        grid-column: 4 / 6;
        grid-row: 1 / 4;
    }
`;

export const Image = styled.img`
    width: 320px;
    min-width: 100%;
    min-height: 100%;
    position: absolute;
`;