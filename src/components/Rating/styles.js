import styled from "styled-components";

export const Container = styled.div`
    size: 20px;
    color: ${({ theme }) => theme.COLORS.PRINCIPAL};
    
    > span {
        margin-right: 5px;
    }
`