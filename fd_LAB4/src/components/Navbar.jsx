import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const is404Page = !['/login', '/', '/about', '/contact'].includes(location.pathname);

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          LAB4
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {(isLoggedIn || is404Page) && (
              <>
                <Nav.Link as={Link} to="/">
                  Strona główna
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  Info
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Kontakt
                </Nav.Link>
              </>
            )}
          </Nav>
          
          {isLoggedIn && (
            <Button variant="outline-light" onClick={handleLogout}>
              Wyloguj się
            </Button>
          )}
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;