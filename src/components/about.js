import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import MyOctocat from '../assets/octocat.png';
import Image from 'react-bootstrap/Image';


const About = () => {
    return (
        <Container> <br/><br/> 
        <Row>
          <h1> About. </h1><br/>
            <Container className="about-container">
            <Image src={MyOctocat} alt="Custom octocat" className = "profile-image"/>
            <br/><br/>
            <p> Hello! My name is Laura Duffy and I am a software developer. Welcome to my portfolio page!
                I am a software engineer specializing in frontend engineering, design, and UX/UI. 
            </p>
            </Container>
        </Row> <br/> <br/> <br/>
        </Container>
    )
}

export default About; 
