import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    min-height: 250px;

    border: none;
    resize: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 10px;
    padding: 19px 16px;

    overflow: hidden;

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`