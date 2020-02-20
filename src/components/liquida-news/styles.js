import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 30px;

    span {
        font-weight: bold;
    }
`;

