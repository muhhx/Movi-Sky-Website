import styled from "styled-components"

export const Section = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 200px;
    background: linear-gradient(${({ theme }) => theme.colors.darkerBlack} 80%, white 80%);

    @media only screen and (max-width: 750px) {
        padding-top: 100px;
    }
`;

export const ContainerWrapper = styled.div`
    width: 90%;
    max-width: 1000px;
    height: 500px;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Images = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 20px;
    margin-right: 20px;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center center;
`;

export const ButtonLeft = styled.button`
    width: 40px;
    aspect-ratio: 1;
    background: linear-gradient(90deg, #000 0%, transparent 100%);
    /* background: linear-gradient(90deg, #008e98 0%, transparent 100%); */
    border: none;
    position: absolute;
    left: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonRight = styled.button`
    width: 40px;
    aspect-ratio: 1;
    background: linear-gradient(-90deg, #000 0%, transparent 100%);
    /* background: linear-gradient(-90deg, #008e98 0%, transparent 100%); */
    border: none;
    position: absolute;
    right: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Panel = styled.div`
    width: calc(100% - 40px);
    height: 70px;
    background: linear-gradient(360deg, ${({ theme }) => theme.colors.darkerBlack} 10%, transparent 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    gap: 10px;
`;

export const Option = styled.button`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    border: none;
    background-color: ${(props) => props.isSelected === true ? 'white' : 'transparent'};
    border: solid 1.5px white;
    cursor: pointer;
`;

export const ArrowLeft = styled.img`
    width: 40%;
    transform: rotate(180deg);
`;

export const ArrowRight = styled.img`
    width: 40%;
`;
