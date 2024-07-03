import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
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

        > a {
            display: flex;
            flex-direction: row;
            gap: 5px;
            align-items: center;
            color: ${({ theme }) => theme.COLORS.PRINCIPAL};

        }
    }
`

export const SectionMain = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

        > h1 {
        font-family: "Roboto Slab", serif;
        font-size: 36px;
        font-weight: 500;
        margin-top: 24px;
        }

    > div {
        display: flex;
        flex-direction: row;
        gap: 40px;
        margin: 40px 0;
    }

    .deleteButton{
        color: ${({ theme }) => theme.COLORS.PRINCIPAL};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    > h3 {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 20px;
        margin-top: 40px;
    }
`

export const ButtonSection = styled.section`
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin-bottom: 8px;
`

export const AddTags = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 16px;
    display: flex;
    flex-direction: row;
    gap: 14px;
    margin-bottom: 10px;
    border-radius: 8px;
`
