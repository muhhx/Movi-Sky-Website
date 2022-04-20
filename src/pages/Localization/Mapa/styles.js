import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    background: linear-gradient(rgba(0,0,0, 0%) 40%, rgba(255,255,255, 100%) 40%, rgba(255,255,255, 100%) 1000%);
`;

export const ImageWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 500px;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: end;
`;

export const Image = styled.img`
    min-height: 100%;
    position: absolute;
    top: 0;
`;

export const Description = styled.div`
    width: 50%;
    min-height: 60px;
    background-color: rgb(0, 142, 152);
    margin-right: 30px;
    padding: 5px 10px;
    position: relative;
    z-index: 1;
    transform: translateY(30px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;

    @media only screen and (max-width: 750px) {
        width: 100%;
        margin-right: 0;
    }
`;