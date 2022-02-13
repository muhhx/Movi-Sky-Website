import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-self: center;
    gap: 15px;

    @media only screen and (max-width: 950px) {
        display: ${({display}) => display === false ? 'none' : 'flex'};
        align-items: center;
    }

    @media only screen and (max-width: 700px) {
        max-width: 360px;
    }
`;

export const IconWrapper = styled.div`
    width: 60px;
    aspect-ratio: 1;
`;

export const Icon = styled.img`
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    line-height: 120%;
    color: white;
    width: ${({width}) => width};

    @media only screen and (max-width: 950px) {
        text-align: center;
    }
`;

export const Description = styled.p`
    font-weight: 300;
    line-height: 1.5;
    color: white;
    text-align: justify;
`;