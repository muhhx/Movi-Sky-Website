import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.darkerBlack};
    display: flex;
    flex-direction: column;
    align-items: center;
`;