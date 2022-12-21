import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Project from '../components/project';
import MyOctocat from '../assets/octocat.png';
import Image from 'react-bootstrap/Image'

function Homepage() {
  return (
    <>
    <Container id="About">
      <br />
      <Row className="justify-content-md-center">
        <h1> About Me </h1>
        <Col xs lg="2">
            <Image src={MyOctocat} alt="Custom octocat" 
            className = {{ float: 'right'}}
            style={{ width: '18rem' }} />
        </Col>
        <Col md="auto">
        <p>   
          Hello! My name is Laura Duffy. <br/>
          Welcome to my portfolio page! <br/>
          I am a software developer who is completing UC Berkeley's Coding Bootcamp! 
        </p>
        </Col>
        <Col xs lg="2"> </Col>
      </Row>
      <br /> 
    </Container>

    <Container id="Portfolio">
      <h1> Portfolio </h1>
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

    <Container id="Resume">
    <br />
      <Row>
        <h1> Resume </h1>
        <Card>
            <Card.Body>
                Skills: One, Two , Three, Four, Five, Six
            </Card.Body>
        </Card>
      </Row>
      <br /> 

    </Container>

    <Container id="Contact">
    <br />
      <Row>
        <h1> Contact </h1>
        <Card>
            <Card.Body>
                Insert Contact Form 
            </Card.Body>
        </Card>
      </Row>
      <br /> 

    </Container>
    </>
  );
}

export default Homepage;


