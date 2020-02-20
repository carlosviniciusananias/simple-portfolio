// Importando o React
import React from "react";
import { Form, TextField, SubmitField } from 'react-components-form';
import Schema from 'form-schema-validation';

import { Section } from "./styles"
import { ContactForm } from "./styles"
import { Container } from "./styles"

import './contact-style.css'

const formSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Contact = () => (
    <Section>
        <Form
            schema={formSchema}
            onSubmit={model => console.log(model)}
            onError={(errors, data) => console.log('error', errors, data)}
        >
            <Container>
                <div className="contact-title">
                    <p>RECEBA NOVIDADES</p>
                    <p><strong>POR E-MAIL</strong></p>
                </div>

                <ContactForm>
                    <TextField name="name" label="name" type="text" placeholder="Seu nome" />
                    <TextField name="email" label="email" type="text" placeholder="Seu e-mail" />
                    <TextField name="cpf" label="cpf" type="text" placeholder="Seu CPF" />
                    <SubmitField value="Submit" />
                </ContactForm>
            </Container>
        </Form>
    </Section>
);

export default Contact;