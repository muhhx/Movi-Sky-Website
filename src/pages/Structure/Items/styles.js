import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: ${({flex}) => flex.flexDirection};

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        min-height: 80vh;
        align-items: center;
    }
`;

export const ImageWrapper = styled.div`
    min-width: ${({width}) => width.width};
    height: 100%;
    position: relative;
    overflow: ${({custom}) => custom === false ? 'hidden' : 'true'};
    display: flex;
    align-items: ${({custom}) => custom === false ? 'center' : 'flex-start'};
    justify-content: ${({custom}) => custom === false ? 'center' : 'start'};

    @media only screen and (max-width: 900px) {
        width: 100%;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
`;

export const Image = styled.img`
    position: absolute;
    min-width: ${({custom}) => custom === false ? '100%' : 'auto'};
    height: ${({custom}) => custom === false ? 'auto' : '120%'};

    @media only screen and (max-width: 900px) {
        height: 160%;
    }
`;

export const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media only screen and (max-width: 900px) {
        align-items: flex-start;
        width: 90%;
    }

    @media only screen and (max-width: 750px) {
        padding: 70px 0px;
    }
`;

export const Title = styled.h1`
    font-size: 24px;
    color: ${({theme}) => theme.colors.darkerBlack};
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
    z-index: 1;
`; 

export const Subtitle = styled.h3`
    font-size: 18px;
    color: ${({theme}) => theme.colors.orange};
    font-weight: 600;
    line-height: 1.5;
    z-index: 1;
    `;

export const Description = styled.p`
    line-height: 1.5;
    font-weight: 300;
    text-align: justify;
    z-index: 1;
`;

export const Number = styled.span`
    font-size: 144px;
    color: white;
    font-weight: 600;
    line-height: 1;
    position: absolute;
    z-index: 0;
    top: 0;
    padding-top: 65px;
`;

export const Division = styled.div`
    width: 150px;
    height: 5px;
    background-color: rgb(0, 142, 152);
    z-index: 1;
`;

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
`;