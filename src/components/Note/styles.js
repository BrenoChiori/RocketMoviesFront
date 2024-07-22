import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: rgba(255, 133, 155, 0.05);
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 24px;

    > h1 {
        font-family: "Roboto Slab", serif;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-bottom: 10px;
    }

    > span {
        display: flex;
        font-size: 13px;
        gap: 6px;
        color: ${({ theme }) => theme.COLORS.PRINCIPAL};
    }

    > p {
        margin: 15px 0 28px;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        text-align: justify;
    }

    > div {
        display: flex;
        gap: 6px;
    }
`