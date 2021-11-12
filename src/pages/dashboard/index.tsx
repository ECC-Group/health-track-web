import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { useNavigate } from 'react-router-dom';

import './index.scss';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-sm navbar-light">
            <a href="/" className="navbar-brand font-monospace">Health Trackr</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#toggleMobileMenu"
              aria-controls="toggleMobileMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="toggleMobileMenu">
              <ul className="navbar-nav ms-auto">
                <li>
                  <a className="nav-link" href="adding.html">Add Weight</a>
                </li>
                <li>
                  <a className="nav-link" href="list.html">Weight List</a>
                </li>
                <li>
                  <a className="nav-link" href="Index.html">Sign out</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <article className="container mt-5 col-md-4 offset-md-4 text-center mb-5">
        <h2 className="font-monospace central-text">
          Welcome to your health track app, here you can track your weight and make sure you are succeeding on your healthy life style!
        </h2>
      </article>

      <div className="form-floating w-75 m-auto">
        <input
          type="number"
          className="form-control"
          id="floatingInput"
          placeholder="What is your weight?"
          aria-label="Recipient's weight"
          aria-describedby="button-addon2"
        />
        {/* <label htmlFor="floatingInput">Enter your weight(kg)</label> */}
      </div>
      <a href="list.html" className="btn btn-primary col-6 offset-3 mt-5" type="button">Add weight</a>
    </>
  );
};

export default Dashboard;
