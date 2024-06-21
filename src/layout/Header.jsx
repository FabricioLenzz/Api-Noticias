import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
 
function Header() {
  return (  
    <Navbar expand="lg" style={headerStyle}>
      <Container fluid>
        <Nav.Link href="/Noticias" style={headerStyle}>Central do meio ambiente</Nav.Link>
        
          <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link href="/about" style={headerStyle}>Sobre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
 
const headerStyle = {
  color: 'black',
  marginRight: '1.5rem',
  backgroundColor: '#0dcaf0',
};
 
const brandStyle = {
  color: '#f2f2f2',
  fontWeight: 'bold',
};
 
 
export default Header;