import React, { useEffect } from 'react';
import './index.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');

  return (
    <div className="header-content">
      <Navbar bg="dark" className="navbar-dark" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Health Trackr</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {userName
                ? (
                  <>
                    <Nav.Link onClick={() => navigate('adding')}>Add Weight</Nav.Link>
                    <Nav.Link onClick={() => navigate('list')}>Weight List</Nav.Link>
                    <Nav.Link onClick={() => navigate('/')}>Sign out</Nav.Link>
                  </>
                )
                : (
                  <>
                    <Nav.Link onClick={() => navigate('/login')}>Sign in</Nav.Link>
                    <Nav.Link onClick={() => navigate('/createuser')}>Sign up</Nav.Link>
                  </>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
