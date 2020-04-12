import styled from "styled-components";

export const Title = styled.h2`
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 30px;

    span {
        font-weight: bold;
    }
`;

export const ShelfSection = styled.div`
    margin: 50px 0;

    .slick-prev:before,
    .slick-next:before {
        color: #000;
    }
`;

export const ShelfItem = styled.div`
    max-width: 295px;
    transform: scale(0.9);
    transition: transform .2s;

    &:hover {
        transform: scale(1);
    }

    p {
        margin: 10px 0;
    }

    img {
        max-width: 295px;
        max-height: 295px;
    }
`;