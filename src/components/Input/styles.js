import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;
        padding: 12px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        &:-webkit-outer-spin-button,
        &:-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
        
    }

    > svg {
        margin-left: 16px;
    }
`