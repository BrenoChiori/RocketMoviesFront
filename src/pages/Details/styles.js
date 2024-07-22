import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Section = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 123px 50px;
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

    > span {
        margin: 40px 0 5px;

        a {
            display: flex;
            align-items: center;
            gap: 5px;
            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.PRINCIPAL};
        }
    }
`

export const SectionMain = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    > div {
        display: flex;
        flex-direction: row;
        gap: 19px;
        align-items: center;
        text-align: center;

        > h1 {
            font-family: "Roboto Slab", serif;
            font-size: 36px;
            font-weight: 500;
            margin-top: 24px;
        }

        > span {
            margin-top: 30px;
            display: flex;
            flex-direction: row;
            gap: 10px;
        }
    }
    
`

export const DataUser = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-top: 24px;

    > p {
        font-size: 16px;
    }
`

export const TagSections = styled.div`
    margin-top: 20px;
`

export const TextSection = styled.p`
    font-size: 16px;
    text-align: justify;
    margin-top: 40px;
`