import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    background: linear-gradient(#fff, #ececec)
`;

export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const Title = styled.h1`
    font-size: 46px;
    line-height: 1;
    font-weight: 600;
    text-align: center;
    color: ${({theme}) => theme.colors.darkerBlack};
`;

export const Description = styled.p`
    width: 100%;
    max-width: 400px;
    text-align: center;
    font-weight: 300;
`;

export const Button = styled.button`
    background-color: transparent;
    border: solid 1px rgb(0, 142, 152);
    color: rgb(0, 142, 152);
    font-weight: 500;
    width: 200px;
    height: 50px;
    cursor: pointer;
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
`;