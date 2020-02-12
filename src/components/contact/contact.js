// Importando o React
import React from "react";
import { Form, TextField, TextareaField, SubmitField } from 'react-components-form';
import Schema from 'form-schema-validation';

const formSchema = new Schema({
    login: {
        type: String,
        required: true
    },
    password: {
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
        <TextField name="name" label="name" type="text" />
        <TextField name="email" label="email" type="text" />
        <TextareaField name="description" label="description" type="description" />
        <SubmitField value="Submit" />
    </Form>
);

export default Contact;