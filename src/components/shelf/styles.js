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
`;

export const ShelfName = styled.p`
    margin: 10px 0;
`;

export const ShelfImg = styled.div`
    img {
        max-width: 295px;
        max-height: 295px;
    }
`;