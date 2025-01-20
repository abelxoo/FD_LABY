import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'xd' && password === 'xd') {
      onLogin();
      navigate('/');
    } else {
      setError('Nieprawidłowa nazwa użytkownika lub hasło');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="p-4 border rounded" style={{ backgroundColor: 'white', width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Logowanie</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nazwa użytkownika</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Wprowadź nazwę użytkownika"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Hasło</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Wprowadź hasło"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Zaloguj się
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;