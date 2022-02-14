import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 2000px;
    min-height: 700px;
    display: grid;
    grid-template-columns: .8fr .3fr .2fr .8fr .8fr;
    grid-template-rows: .2fr .3fr .2fr .3fr .2fr .2fr .2fr .1fr;
`;

export const Image = styled.img`
    position: absolute;
    min-height: 100%;
`;

export const Image2 = styled.img`
    position: absolute;
    height: 100%;
`;

export const ImageWrapper1 = styled.div`
    position: relative;
    grid-column: 1 / 3;
    grid-row: 3 / 6;
    display: flex;
    justify-content: end;
    align-items: center;

    @media only screen and (max-width: 970px) {
        grid-column: 1 / 4;
        grid-row: 2 / 5;
        justify-content: start;
    }

    @media only screen and (max-width: 750px) {
        grid-column: 1 / 5;
        justify-content: end;
    }
`;

export const ImageWrapper2 = styled.div`
    position: relative;
    grid-column: 2 / 4;
    grid-row: 7 / 9;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media only screen and (max-width: 970px) {
        grid-column: 4 / 6;
        grid-row: 6 / 9;
        justify-content: end;
    }

    @media only screen and (max-width: 750px) {
        grid-column: 3 / 6;
        justify-content: start;
    }
`;

export const ImageWrapper3 = styled.div`
    position: relative;
    grid-column: 4 / 5;
    grid-row: 2 / 4;
    overflow: hidden;
    display: flex;
    justify-content: start;
    align-items: center;

    @media only screen and (max-width: 970px) {
        display: none;
    }
`;

export const ImageWrapper4 = styled.div`
    position: relative;
    grid-column: 5 / 6;
    grid-row: 5 / 8;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: start;

    @media only screen and (max-width: 970px) {
        display: none;
    }
`;