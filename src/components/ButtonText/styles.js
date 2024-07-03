import styled from "styled-components";

export const Container = styled.button`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.PRINCIPAL};
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    justify-content: center;
`