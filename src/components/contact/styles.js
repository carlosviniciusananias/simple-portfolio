import styled from "styled-components";

export const Section = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;

    .contact-title {
        margin-bottom: 10px;
    }

    .contact-title p {
        margin-bottom: 5px;
        font-weight: 800;
    }

    .contact-title span {
        font-size: 12px;
    }

    .newsletter-input {
        position: relative;
        border: 1px solid #000;
        width: 100%;
        height: 45px;
        max-width: 450px;
    }
    
    .form {
        position: relative;
    }

    .newsletter-input input {
        width: 100%;
        height: 100%;
        border: none;
        background: none;
        padding-left: 10px;
        color: #414141;
        font-weight: 300;
    }

    .form-btn {
        position: absolute;
        top: 0;
        height: 100%;
        width: 50px;
        border: 1px solid #000;
        background: #000;
        color: #FFF;
        font-size: 24px;
        font-weight: 100;
        right: 0;
        outline: none;
    }
`;