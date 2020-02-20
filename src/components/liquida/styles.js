import styled from "styled-components";

export const LiquidaSection = styled.div`
    margin: 50px 0;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 30px;

    span {
        font-weight: bold;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 425px);

    img {
        max-width: 350px;
    }
`;