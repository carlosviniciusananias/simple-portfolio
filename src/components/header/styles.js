import styled from "styled-components";

export const Nav = styled.div`
    background-color: #000;
    color: #FFF;
    padding: 2px 0;
    text-align: center;
`;

export const Ul = styled.ul`
    display: grid;
    text-align: center;
    grid-template-columns: repeat(5, 1fr);

    p:hover{
        font-weight: bold;
    }
`;