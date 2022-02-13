import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.darkerBlack};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Grid = styled.div`
    width: 90%;
    max-width: 1000px;
    min-height: 100vh;
    margin: 150px 0px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 70px;
    grid-row-gap: 90px;

    @media only screen and (max-width: 950px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 100px;
    }

    @media only screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;