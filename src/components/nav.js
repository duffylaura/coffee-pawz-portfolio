import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import { NavLink } from 'react-router-dom'


function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"> Laura Duffy </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 

            <Nav.Link href="#About-Me" > About Me </Nav.Link>
            <Nav.Link href="#Portfolio"> Portfolio </Nav.Link>
            <Nav.Link href="#Resume"> Resume </Nav.Link>
            <Nav.Link  href="#Contact"> Contact </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar; 