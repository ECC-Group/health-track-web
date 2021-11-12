import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { useNavigate } from 'react-router-dom';

import './index.scss';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <h1 className="brand mt-4 mb-5 font-monospace">Health Trackr</h1>
      <Form onSubmit={() => navigate('/dashboard')}>
        <Form.Group>
          <FloatingLabel controlId="floatingInput" label="Email address" className="mb-4">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-4">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Form.Group>

        <div className="checkbox mb-3">
          <input type="checkbox" value="remember-me" /> Remember me
        </div>

        <Button type="submit" variant="primary">
          Sign in
        </Button>
      </Form>
      <p className="mt-5 mb-3 font-monospace text-muted">&copy; R.Murad</p>
    </div>
  );
};

export default LandingPage;
