import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Create } from 'services/user';

import { useNavigate } from 'react-router-dom';

import './index.scss';

const CreateUser = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <h1 className="brand mt-4 mb-5 font-monospace">Health Trackr</h1>
      <div className="row">
        <h3>Sign up</h3>
      </div>
      <Form className="formbox pt-4">
        <Form.Group controlId="name">
          <FloatingLabel controlId="floatingInput" label="Name" className="mb-4">
            <Form.Control type="name" placeholder="Please enter your name" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="surname">
          <FloatingLabel controlId="floatingInput" label="Surname" className="mb-4">
            <Form.Control type="surname" placeholder="Please enter your surname" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="email">
          <FloatingLabel controlId="floatingInput" label="Email address" className="mb-4">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="password">
          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-4">
            <Form.Control type="password" placeholder="name@example.com" />
          </FloatingLabel>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sine up
        </Button>
      </Form>
      <p className="mt-4 font-monospace text-muted">&copy;Empty Coffee Cups</p>
    </div>
  );
};

export default CreateUser;
