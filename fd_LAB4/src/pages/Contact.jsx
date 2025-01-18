import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div>
      <h1>Kontakt</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Imię</Form.Label>
          <Form.Control type="text" placeholder="Wprowadz swoje imie" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Adres email</Form.Label>
          <Form.Control type="email" placeholder="Wprowadz adres email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Wiadomość</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Wprowadź wiadomość" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Wyślij
        </Button>
      </Form>
    </div>
  );
};

export default Contact;