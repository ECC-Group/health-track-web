import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import LandingPage from 'pages/landing-page';
import Dashboard from 'pages/dashboard';

const MainRoutes = () => useRoutes([
    { path: '/', element: <LandingPage /> },
    { path: 'dashboard', element: <Dashboard /> },
  ]);

const Router = () => (
  <BrowserRouter>
      <MainRoutes />
  </BrowserRouter>
);

export default Router;
