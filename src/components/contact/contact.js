// Importando o React
import React from "react";
import { Form, TextField, TextareaField, SubmitField } from 'react-components-form';
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
    <Form
        schema={formSchema}
        onSubmit={model => console.log(model)}
        onError={(errors, data) => console.log('error', errors, data)}
    >
        <TextField name="name" label="name" type="text" placeholder="Nome completo" />
        <TextField name="email" label="email" type="text" placeholder="Digite seu e-mail" />
        <TextareaField name="description" label="description" type="description" placeholder="Assunto" />
        <SubmitField value="Submit" />
    </Form>
);

export default Contact;