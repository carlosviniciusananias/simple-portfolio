import styled from "styled-components";

export const Section = styled.div`
    margin: 50px 0;
    background-color: #000;
`;

export const ContactForm = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
`;

export const Container = styled.div`
    max-width: 1200px;
    padding: 25px 0;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);

    .contact-title {
        text-align: left;
        color: #FFF;
    }
`;