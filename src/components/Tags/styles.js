import styled from "styled-components";

export const Container = styled.span`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
    border-radius: 8px;
    height: 24px;
    padding: 5px 16px;
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.WITHE};
`