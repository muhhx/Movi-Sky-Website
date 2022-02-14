import styled from 'styled-components'

export const StyledMenu = styled.div`
    position: sticky;
    top: 0;
    height: 0px;
    width: 100%;
    z-index: 99;
`;

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    background-color: #171717;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
`;

export const NavigationLink = styled.span`
    color: #f15924;
    font-size: 24px;
    cursor: pointer;
`;