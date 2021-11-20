import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Create } from 'services/user';

import { useNavigate } from 'react-router-dom';

import './index.scss';

const CreateUser = () => (
  <div className="container text-center">
    <h1>Landing Page</h1>
  </div>
);

export default CreateUser;
