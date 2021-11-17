import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

import listContent from './mock-data';

import './index.scss';

const List = () => (
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
                  <a className="nav-link" href="adding">Add Weight</a>
                </li>
                <li>
                  <a className="nav-link" href="list">Weight List</a>
                </li>
                <li>
                  <a className="nav-link" href="/">Sign out</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div className="container vertical-snap justify-content-around">
        <table className="table text-center">
          <thead className="position-sticky top-0 bg-white">
            <tr>
              <th className="col-4" scope="col">Date</th>
              <th className="col-4" scope="col">kg</th>
              <th className="col-2" scope="col">Edit</th>
              <th className="col-2" scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {listContent.map((content, index) => (
              <tr key={index}>
                <td>{content.date}</td>
                <td>{content.weight}</td>
                <td><FaEdit /></td>
                <td><FaTrash /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

export default List;
