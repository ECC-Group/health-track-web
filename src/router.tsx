import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import LandingPage from 'pages/landing-page';
import Dashboard from 'pages/dashboard';
import List from 'pages/list';
import AddWeight from 'pages/add-weight';

const MainRoutes = () => useRoutes([
    { path: '/', element: <LandingPage /> },
    { path: 'dashboard', element: <Dashboard /> },
    { path: 'list', element: <List /> },
    { path: 'adding', element: <AddWeight /> },
  ]);

const Router = () => (
  <BrowserRouter>
      <MainRoutes />
  </BrowserRouter>
);

export default Router;
