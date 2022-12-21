import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
const placeholder = require('../assets/red-smoke.jpg');

function Project() {

return (
    <Col> 
    <Card>
      <Card.Img variant="top" src= {placeholder} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
      </Card.Body>
    </Card>
    </Col>
)
};

export default Project; 