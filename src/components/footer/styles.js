import styled from "styled-components";

export const Section = styled.div`
    ul {
        list-style: none;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    .footer-about {
        display: grid;
        text-align: left;
        grid-template-columns: repeat(4, 1fr);
    }

    .socials {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .socials img {
        max-width: 50px;
    }

    .footer-credit {
        text-align: center;
    }

    .footer-credit p {
        font-size: 12px;
        margin-top: 40px;
    }

    .footer-credit img {
        max-width: 50px;
        margin-top: 15px;
    }
`;