import styled from "styled-components";

export const Header = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    height: 0px;
    z-index: 100;
`;  

export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100px;
    background: ${props => props.status === true ? '' : `linear-gradient(rgba(0,0,0, 50%), rgba(0,0,0, 0%))`};
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    max-width: 90%;
    height: 100%;
    align-self: center;
`;

export const Hamburger = styled.button`
    height: 25%;
    aspect-ratio: 1;
    border: none;
    cursor: pointer;
    background-color: transparent;
    z-index: 101;
`;

export const HamburgerImage = styled.img`
    width: 100%;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    @media only screen and (max-width: 900px) {
        position: initial;
        width: 100px;
    }
`;

export const Logo = styled.img`
    height: 60%;
    
    @media only screen and (max-width: 900px) {
        height: initial;
        width: 100%;
    }
`;

export const Button = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    width: auto;
    cursor: pointer;
    z-index: 101;

    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

export const Span = styled.span`
    color: white;
`;

export const Highlighter = styled.div`
    border-bottom: solid 1px white;
    width: 50%;
`;