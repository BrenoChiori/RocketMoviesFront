import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 200px;
    background-color: rgba(255, 133, 155, 0.05);
    border-radius: 16px;
    padding: 20px 30px;
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
        gap: 8px
    }
`

export const Tags = styled.a`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
    border-radius: 8px;
    height: 24px;
    padding: 5px 16px;
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.WITHE};
`