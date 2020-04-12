import styled from "styled-components";

export const Nav = styled.div`
    background-color: #000;
    color: #FFF;
    padding: 2px 0;
    text-align: center;
    
    .navbar-content {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(4, 1fr);
    }

    p {
        font-size: 12px;
    }
`;

export const Ul = styled.ul`
    display: grid;
    text-align: center;
    grid-template-columns: repeat(5, 1fr);

    list-style: none;

    li {
        cursor: pointer;
    }

    a {
        text-transform: uppercase;
        text-decoration: inherit;
        color: inherit;
    }

    a:hover{
        font-weight: 800;
    }
`;