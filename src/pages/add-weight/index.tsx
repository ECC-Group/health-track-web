import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FaWeight } from 'react-icons/fa';
import { SetWeight } from 'services/weight';

import { useNavigate } from 'react-router-dom';

import './index.scss';

const AddWeight = () => {
  const navigate = useNavigate();

  const [date, setDate] = useState<string>('');
  const [weight, setWeight] = useState<string>('');

  const addWeightHandler = (event: any) => {
    event.preventDefault();
    const userId = parseInt(localStorage.getItem('userId') ?? '0', 10);

    SetWeight(userId, date, parseInt(weight, 10)).then((result) => {
      console.log(result);
      navigate('/list');
    });
  };

  return (
    <div className="container d-flex flex-column align-items-center h-100">
        <FaWeight size={220} className="mb-5" />

        <Form onSubmit={addWeightHandler} className="form-floating w-75 m-auto">
          <Form.Group>
            <FloatingLabel controlId="floatingInput" label="Enter your weight(kg)" className="mb-4">
              <Form.Control type="number" value={weight} onChange={(change) => setWeight(change.target.value)} />
            </FloatingLabel>
          </Form.Group>
          <Form.Group>
            <FloatingLabel controlId="floatingInput" label="enter date" className="mb-4">
                <Form.Control type="date" value={date} onChange={(change) => setDate(change.target.value)} />
            </FloatingLabel>
          </Form.Group>

          <Button
            type="submit"
            className="btn btn-primary col-6 offset-3 mt-5"
          >Add weight
          </Button>
        </Form>
    </div>
  );
};

export default AddWeight;
