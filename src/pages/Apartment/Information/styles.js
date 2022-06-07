import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.darkerBlack};
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 450px) {
        padding-top: 100px;
    }
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    min-height: 550px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media only screen and (max-width: 970px) {
        flex-direction: column-reverse;
        justify-content: initial;
        align-items: initial;
        gap: 20px;
    }

    @media only screen and (max-width: 750px) {
        gap: 50px;
    }
`;

export const Description = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: end;

    @media only screen and (max-width: 970px) {
        width: 100%;
    }
`;

export const Title = styled.h1`
    color: white;
    font-size: 46px;
    font-weight: 600;
    line-height: 120%;
    width: 100%;
    overflow-wrap: break-word;
`;

export const Division = styled.div`
    width: 150px;
    height: 5px;
    background-color: rgb(0, 142, 152);
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
    width: 50%;
    height: 100%;
    position: relative;

    @media only screen and (max-width: 970px) {
        display: none;
    }
`;

export const Image = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 100%;

    @media only screen and (max-width: 1100px) {
        transform: translateY(-60px);
    }
`;