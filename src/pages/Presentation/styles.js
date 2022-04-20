import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: 10px;
    position: relative;
    `;

export const WrapperHeader = styled.div`
    max-width: 1000px;
    width: 90%;
    height: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    z-index: 10;
`;

export const Title = styled.h1`
    color: white;
    font-size: 46px;
    max-width: 320px;
    width: 100%;
    line-height: 120%;
    font-weight: 400;
`;

export const Subtitle = styled.h3`
    color: white;
    font-size: 18px;
    font-weight: 300;
`;

export const ImageWrapper = styled.div`
    height: 80px;
`;

export const Image = styled.img`
    height: 100%;
`;

export const WrapperInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    z-index: 10;

    @media only screen and (max-width: 900px) {
        justify-content: center;
    }
`;

export const Info = styled.div`
    width: 40%;
    height: 70px;
    background-color: #E9E9E9;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    text-align: center;
    padding: 0px 10px;
    font-weight: 600;

    @media only screen and (max-width: 900px) {
        width: 90%;
    }
`;

export const VideoWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
`;

export const VideoMask = styled.div`
    background-color: rgba(0,0,0, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
`;

export const Video = styled.video`
    min-width: 100%;
    min-height: 100%;
    z-index: 1;
    align-self: center;
`;