import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 200px 0px;
`;

export const ContentWrapper = styled.div`
    width: 90%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: absolute;
`;

export const Title = styled.h1`
    text-align: center;
    color: ${({theme}) => theme.colors.darkerBlack};
    font-size: 46px;
    line-height: 120%;
    font-weight: 600;
`;

export const BackgroundWrapper = styled.div`
    width: 100%;
    min-width: 1600px;
    max-width: 1800px;
    display: flex;
    flex-direction: column;
`;

export const BackgroundText1 = styled.h1`
    width: 100%;
    text-align: start;
    font-size: 144px;
    line-height: 90%;
    font-weight: 600;
    color: ${({theme}) => theme.colors.grey};
    overflow-wrap: none;
`;

export const BackgroundText2 = styled.h1`
    width: 100%;
    text-align: end;
    font-size: 144px;
    line-height: 90%;
    font-weight: 600;
    color: ${({theme}) => theme.colors.grey};
`;