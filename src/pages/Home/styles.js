import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 105px auto 1fr;
    grid-template-areas:
        "header"
        "section"
    ;
`

export const SectionMain = styled.div`
    grid-area: section;
    display: flex;
    flex-direction: column;
    padding: 0 123px;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 7px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.PRINCIPAL};
        border-radius: 10px;
    }

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 40px 0 20px;

        > h1 {
            font-size: 32px;
            font-weight: 400;
            font-family: "Roboto Slab", serif;
            white-space: nowrap;
        }
    }
`

export const ButtonNew = styled(Link)`
    display: flex;
    width: 200px;
    background-color: ${({ theme }) => theme.COLORS.PRINCIPAL};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_FONT};
    height: 48px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    gap: 6px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;    
`
