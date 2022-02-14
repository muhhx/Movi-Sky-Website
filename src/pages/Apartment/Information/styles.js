import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    height: 550px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media only screen and (max-width: 970px) {
        flex-direction: column-reverse;
        justify-content: initial;
        align-items: initial;
        gap: 20px;
    }
`;

export const Description = styled.div`
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: end;

    @media only screen and (max-width: 970px) {
        width: 60%;
    }

    @media only screen and (max-width: 750px) {
        width: 100%;
    }
`;

export const Title = styled.h1`
    color: white;
    font-size: 46px;
    font-weight: 600;
    line-height: 120%;
    width: 60%;
    /* overflow-wrap: break-word; */
`;

export const Division = styled.div`
    width: 150px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.orange };
`;

export const ParagraphWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Paragraph = styled.p`
    color: white;
    text-align: justify;
    font-weight: 300;
`;

export const ImageWrapper = styled.div`
    width: 40%;
    height: 100%;
    position: relative;

    @media only screen and (max-width: 970px) {
        width: 100%;
    }
`;

export const Image = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    max-height: 110%;

    @media only screen and (max-width: 970px) {
        max-height: 120%;
    }
`;