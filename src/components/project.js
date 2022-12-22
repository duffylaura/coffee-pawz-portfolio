import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
//const placeholder = require('../assets/red-smoke.jpg');

function Project(props) {

return (
  <Row>  
  {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
  {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
  {props.proj.map(item => ( 
    <Col>
    <Card key={item.id} className = "custom-card" style={{ width: '20rem' }} >
      <Card.Img variant="top" src= {`../img/${item.img}.png`} alt="clipart"/>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text> {item.about}</Card.Text>
          <Card.Link href= {item.deploy}>Deployed Link</Card.Link>
          <Card.Link href={item.repo}>Repository Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    
  ))}
</Row>

)};

export default Project; 