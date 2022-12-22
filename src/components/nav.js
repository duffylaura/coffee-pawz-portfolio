import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand> Laura Duffy </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
            <Nav.Link href="#Home" className="colorChangeZero"> Home </Nav.Link>
            <Nav.Link href="#About-Me" className="colorChangeOne" > About </Nav.Link>
            <Nav.Link href="#Portfolio" className="colorChangeTwo"> Portfolio </Nav.Link>
            <Nav.Link href="#Resume"className="colorChangeThree"> Resume </Nav.Link>
            <Nav.Link  href="#Contact"className="colorChangeFour"> Contact </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar; 