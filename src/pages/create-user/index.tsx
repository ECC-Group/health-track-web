import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { CreateUser as Create, GetUser } from 'services/user';
import { Spinner } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Actions from 'shared/actions';

import './index.scss';

const CreateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createUser = (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    navigate('dashboard');

    console.log(name, email, password, age);

    // Create(name, email, password, age).then((id) => {
    //   GetUser(id).then((result) => {
    //     dispatch(Actions.setUser(result));
    //   });

    //   localStorage.setItem('userId', id.toString());
    //   setIsLoading(false);
    //   navigate('/');
    // });
  };

  return (
    <div className="container text-center">
      <h1 className="brand mt-4 mb-5 font-monospace">Health Trackr</h1>
      <div className="row">
        <h3>Sign up</h3>
      </div>
      <Form onSubmit={createUser} className="form pt-4">
        <Form.Group controlId="name">
          <FloatingLabel controlId="floatingInput" label="Name" className="mb-4">
            <Form.Control onChange={(change) => setName(change.target.value)} value={name} type="name" placeholder="Please enter your name" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="email">
          <FloatingLabel controlId="floatingInput" label="Email address" className="mb-4">
            <Form.Control onChange={(change) => setEmail(change.target.value)} value={email} type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="password">
          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-4">
            <Form.Control onChange={(change) => setPassword(change.target.value)} value={password} type="password" placeholder="Password must have min. 8 digits" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="age">
          <FloatingLabel controlId="floatingInput" label="Age" className="mb-4">
            <Form.Control onChange={(change) => setAge(parseInt(change.target.value, 10))} value={age} type="number" placeholder="Enter your age" />
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
