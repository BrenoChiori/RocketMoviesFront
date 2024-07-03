import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PRINCIPAL};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_FONT};

    height: 56px;
    border: none;
    border-radius: 10px;
    margin-top: 16px;
    font-size: 18px;
    font-weight: 500;
`