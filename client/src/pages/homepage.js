import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Project from '../components/project';

function Homepage() {
  return (
    <Container>
      <br />
      <Row>
        <Card>
            <Card.Body>
              Hello! My name is Laura Duffy. <br/>
              Welcome to my portfolio page! <br/>
              I am a software developer who is completing UC Berkeley's Coding Bootcamp! 
            </Card.Body>
        </Card>
      </Row>
      <br />   
      <Row>
        <Project />
        <Project />
        <Project />
      </Row>
      <br />
      <Row>
        <Project />
        <Project />
        <Project />
      </Row>
    <br />
    </Container>
  );
}

export default Homepage;


