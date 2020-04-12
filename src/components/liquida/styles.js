import styled from "styled-components";

export const LiquidaSection = styled.div`
    margin: 50px 0;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 425px);

    .description {

    }

    h3 {
        font-size: 22px;
        margin: 10px 0; 
    }

    p {
        margin: 10px 0;
    }

    span {
        font-weight: 800;
        font-size: 12px;
        padding-bottom: 2px;
        border-bottom: 1px solid #000;
    }

    img {
        max-width: 400px;
    }

    .box-banner {
        text-align: center;
        transform: scale(0.9);
        transition: transform .2s;
    }
    .box-banner:hover {
        transform: scale(1);
    }

    .box-banner a {
        text-decoration: inherit;
        color: inherit;
    }
`;