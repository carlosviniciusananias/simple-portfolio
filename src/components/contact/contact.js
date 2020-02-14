// Importando o React
import React from "react";
import { Form, TextField, SubmitField } from 'react-components-form';
import Schema from 'form-schema-validation';

import './contact-style.css';

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
    <div className="contact-section">
        <Form
            schema={formSchema}
            onSubmit={model => console.log(model)}
            onError={(errors, data) => console.log('error', errors, data)}
        >
            <div className="ct-container">
                <div className="contact-title">
                    <p>RECEBA NOVIDADES</p>
                    <p><strong>POR E-MAIL</strong></p>
                </div>

                <div className="contact">
                    <TextField name="name" label="name" type="text" placeholder="Seu nome" />
                    <TextField name="email" label="email" type="text" placeholder="Seu e-mail" />
                    <TextField name="cpf" label="cpf" type="text" placeholder="Seu CPF" />
                    <SubmitField value="Submit" />
                </div>
            </div>
        </Form>
    </div>
);

export default Contact;