import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Header from 'templates/header';
import Login from 'pages/login';
import CreateUser from 'pages/create-user';
import LandingPage from 'pages/landing-page';
import Dashboard from 'pages/dashboard';
import List from 'pages/list';
import AddWeight from 'pages/add-weight';

const MainRoutes = () => useRoutes([
    { path: '/', element: <LandingPage /> },
    { path: 'login', element: <Login /> },
    { path: 'createuser', element: <CreateUser /> },
    { path: 'dashboard', element: <Dashboard /> },
    { path: 'list', element: <List /> },
    { path: 'adding', element: <AddWeight /> },
  ]);

const Router = () => (
  <BrowserRouter>
    <Header />
    <MainRoutes />
  </BrowserRouter>
);

export default Router;
