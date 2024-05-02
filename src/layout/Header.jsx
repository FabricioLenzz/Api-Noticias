import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (  
    <Navbar expand="lg" style={headerStyle}>
      <Container fluid>
        <Nav.Link href="/" style={headerStyle}>Ádamo Restaurante</Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link href="/produtos" style={headerStyle}>Produtos</Nav.Link>
            <Nav.Link href="/Contatos" style={headerStyle}>Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


const headerStyle = {
  color: '#f2f2f2',
  marginRight: '1.5rem',
  backgroundColor: '#ff4500',
};

const brandStyle = {
  color: '#f2f2f2',
  fontWeight: 'bold',
};


export default Header;