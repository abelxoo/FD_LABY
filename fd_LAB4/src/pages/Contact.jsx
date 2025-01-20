import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setShowSuccess(true);
    e.target.reset();
  };

  return (
    <div>
      <h1>Kontakt</h1>
      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          Wiadomość została wysłana!
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Imię</Form.Label>
          <Form.Control type="text" placeholder="Wprowadz swoje imie" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Adres email</Form.Label>
          <Form.Control type="email" placeholder="Wprowadz adres email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Wiadomość</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Wprowadź wiadomość" 
            required 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Wyślij
        </Button>
      </Form>
    </div>
  );
};

export default Contact;