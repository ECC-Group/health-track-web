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
      <p>test</p>
    </div>
  );
};

export default AddWeight;
