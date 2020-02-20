import styled from "styled-components";

export const Main = styled.div`
    padding: 15px 0;
    background-color: #000;

    .item {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .imgItem {
        margin-right: 20px;
    }

    .itemText {
        color: #FFF;
    }
`;

export const Container = styled.div`
    display: grid;
    margin: 0 auto;
    max-width: 1200px;
    align-items: center;
    grid-template-columns: repeat(3, 1fr)
`;