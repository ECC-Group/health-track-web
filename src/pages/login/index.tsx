import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import { Login, GetUser } from 'services/user';
import Actions from 'shared/actions';

import './index.scss';

const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userId, setUserId] = useState<number | null>(parseInt(localStorage.getItem('userId') ?? '', 10));

  const executeLogin = (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    Login(email, password).then((id) => {
      GetUser(id).then((result) => {
        dispatch(Actions.setUser(result));
      });

      localStorage.setItem('userId', id.toString());
      setUserId(id);
      setIsLoading(false);
      navigate('/');
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

        {
          isLoading
          ? (
          <>
            <span className="visually-hidden">Loading...</span>
            <Spinner
              as="span"
              animation="border"
              variant="info"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span>Loading...</span>
          </>
            )
          // eslint-disable-next-line react/jsx-no-useless-fragment
          : <>Sign in</>
        }
        </Button>

      </Form>
      <p className="mt-5 mb-3 font-monospace text-muted">&copy;Empty Coffee Cups</p>
    </div>
  );
};

export default LandingPage;
