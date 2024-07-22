import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    height: 105px;
    width: 100%;
    grid-area: header;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 123px;
`

export const Title = styled.h1`
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PRINCIPAL};
    white-space: nowrap;
`

export const Search = styled.div`
    width: 60%;
    margin: 0 64px;
`

export const ProfileButton = styled(Link)`
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
`


export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;
        direction: ltr;

        button {
            border: none;
            background: none;
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            margin-left: auto;
        }

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            white-space: nowrap;
        }
    }
`