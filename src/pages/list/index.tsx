import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

import listContent from './mock-data';

import './index.scss';

const List = () => (
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
);

export default List;
