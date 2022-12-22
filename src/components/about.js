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
            I am looking for a Software Engineering position and am currently honing my software engineering skills through UC Berkeley's Full Stack Coding Bootcamp.
            I am changing career directions toward software engineering and product design/management from mathematics education and research.
            I hold a Professional Master's in Education from Trinity College, Dublin, Ireland, and have 8+ years of professional experience, culminating in a STEM Program Director position this past summer. Additionally, I was a top saleswoman for Croteaux Vineyards from 2015-2020. </p>
            </Container>
        </Row> <br/> <br/> <br/>
        </Container>
    )
}

export default About; 