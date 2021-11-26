import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import Header from 'templates/header';
import Login from 'pages/login';
import CreateUser from 'pages/create-user';
import Dashboard from 'pages/dashboard';
import List from 'pages/list';
import WeightChart from 'pages/weight-chart';
import AddWeight from 'pages/add-weight';

const MainRoutes = () => useRoutes([
    { path: 'login', element: <Login /> },
    { path: 'create-user', element: <CreateUser /> },
    { path: 'dashboard', element: <Dashboard /> },
    { path: 'list', element: <List /> },
    { path: 'chart', element: <WeightChart /> },
    { path: 'adding', element: <AddWeight /> },
  ]);

const Router = () => (
  <>
    <Header />
    <div className="page-content">
      <MainRoutes />
    </div>
  </>
);

export default Router;
