// Importando o React
import React from "react";

import { Section } from "./styles"

const Contact = () => (
    <Section>
        <div class="contact-form">
            <div className="contact-title">
                <p>FIQUE POR DENTRO DE TUDO</p>
                <span>Receba ofertas exclusivas e novidades direto no seu e-mail</span>
            </div>
            <form className="form">
                <div className="newsletter-input">
                    <input type="email" class="form-input" id="email" placeholder="Digite seu e-mail" />
                    <button type="submit" class="form-btn"> > </button>
                </div>
            </form>
        </div>
    </Section>
);

export default Contact;