import styled from "styled-components";

export const Background = styled.div`
    width: 100%;
    background: linear-gradient(#E9E9E9, transparent);
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1100px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    @media only screen and (max-width: 360px) {
        padding: 200px 0px;
    }
`;