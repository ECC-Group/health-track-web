import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Login } from 'services/user';

import { useNavigate } from 'react-router-dom';

import './index.scss';

const LandingPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const executeLogin = (event: any) => {
    event.preventDefault();
    Login(email, password).then((result) => {
      navigate('/list');
    });
  };

  return (
    <div className="container text-center">
      <h1 className="brand mt-4 mb-5 font-monospace">Health Trackr</h1>
      <Form onSubmit={executeLogin}>
        <Form.Group controlId="email">
          <FloatingLabel controlId="floatingInput" label="Email address" className="mb-4">
            <Form.Control type="email" placeholder="name@example.com" onChange={(change) => setEmail(change.target.value)} value={email} />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="password">
          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-4">
            <Form.Control type="password" placeholder="name@example.com" onChange={(change) => setPassword(change.target.value)} value={password} />
          </FloatingLabel>
        </Form.Group>

        <div className="checkbox mb-3">
          <input type="checkbox" value="remember-me" /> Remember me
        </div>

        <Button type="submit" variant="primary">
          Sign in
        </Button>
      </Form>
      <p className="mt-5 mb-3 font-monospace text-muted">&copy;Empty Coffee Cups</p>
    </div>
  );
};

export default LandingPage;
