import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Login } from 'services/user';

import { useNavigate } from 'react-router-dom';

import './index.scss';

const LandingPage = () => (
  <div className="container text-center landing-page-content">
    <h1>Landing Page</h1>
  </div>
);

export default LandingPage;
