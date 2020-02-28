import styled from "styled-components";

export const Main = styled.div`
    background-color: #000;
    
    .slick-prev:before,
    .slick-next:before {
        color: #000;
    }

    .slick-next {
        right: 35px;
    }

    .slick-prev {
        left: 35px;
        z-index: 999;
    }
`;