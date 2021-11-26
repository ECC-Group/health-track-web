// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

import IAppState from 'interfaces/app-state';
import Actions from 'shared/actions';

import './index.scss';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: IAppState) => state.user);
  const handleSignOut = (event: any) => {
    event.preventDefault();
    localStorage.removeItem('userId');
    dispatch(Actions.clearUser());
    navigate('login');
  };

  return (
    <div className="header-content font-monospace">
      <Navbar bg="dark" className="navbar-dark" expand="lg">
        <Container>
          <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Health Trackr</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {user.name !== ''
              ? (
                <>
                  <Nav>
                    <Nav.Link onClick={() => navigate('adding')}>Add Weight</Nav.Link>
                    <Nav.Link onClick={() => navigate('list')}>Weight List</Nav.Link>
                  </Nav>
                  <Nav className="ms-auto">
                    <p className="text-light d-inline align-middle">welcome {user.name}!</p>
                    <Nav.Link onClick={handleSignOut}>Sign out</Nav.Link>
                  </Nav>
                </>
              )
              : (
                <Nav className="ms-auto">
                  <Nav.Link onClick={() => navigate('/login')}>Sign in</Nav.Link>
                  <Nav.Link onClick={() => navigate('/create-user')}>Sign up</Nav.Link>
                </Nav>
              )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
