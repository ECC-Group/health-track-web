import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FaWeight } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

import './index.scss';

const AddWeight = () => {
  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column align-items-center h-100">
        <FaWeight size={220} className="mb-5" />

        <Form onSubmit={() => navigate('/dashboard')} className="form-floating w-75 m-auto">
          <Form.Group>
            <FloatingLabel controlId="floatingInput" label="Enter your weight(kg)" className="mb-4">
              <Form.Control type="number" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>

          <Button
            type="submit"
            className="btn btn-primary col-6 offset-3 mt-5"
            onClick={() => navigate('/list')}
          >Add weight
          </Button>
        </Form>
    </div>
  );
};

export default AddWeight;
