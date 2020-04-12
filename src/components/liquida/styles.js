import styled from "styled-components";

export const LiquidaSection = styled.div`
    margin: 50px 0;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 425px);

    img {
        max-width: 350px;
    }

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

    .box-banner {
        text-align: center;
    }

    .box-banner a {
        text-decoration: inherit;
        color: inherit;
    }
`;