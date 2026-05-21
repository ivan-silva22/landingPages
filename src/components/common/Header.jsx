import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="main-header">
      <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#inicio" className="brand-logo fw-bold">
            PIXEL<span className="text-info">STUDIO</span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center">
                <Nav.Link href="#inicio" className="nav-item-link px-3">Inicio</Nav.Link>
              <Nav.Link href="#soluciones" className="nav-item-link px-3">Soluciones</Nav.Link>
              <Nav.Link href="#precios" className="nav-item-link px-3">Planes</Nav.Link>
              
              
              <Nav.Link 
                href="https://wa.me/5493865692626" 
                className="btn btn-outline-info btn-sm ms-lg-3 px-4 fw-bold"
                target="_blank"
              >
                Contacto Directo
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;