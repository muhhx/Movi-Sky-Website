import styled from "styled-components";

export const LeftContainer = styled.div`
    width: 100%;
    min-height: 500px;
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    @media only screen and (max-width: 750px) {
        display: none;
    }
`;

export const RightContainer = styled.div`
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;

export const Title = styled.h1`
    color: rgb(0, 142, 152) ;
    font-size: 46px;
    font-weight: 600;
    line-height: 120%;
`;

export const Information = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

export const Subtitle = styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-size: 24px;
    font-weight: 500;
    line-height: 120%;
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-size: 12px;
    font-weight: 400;
`;

export const Button = styled.button`
    border: 1px solid rgb(0, 142, 152);
    background-color: transparent;
    color: rgb(0, 142, 152);
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 500;
    padding: 15px 50px;
    cursor: pointer;
`;