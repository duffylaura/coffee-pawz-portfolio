import React from 'react';
// import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function Skills() {
    return (
        <Card className="skills-card">
        <Card.Title> Skills: </Card.Title>
        <Row>
        <div className="code1">Full Stack Web Development </div>
        <div className="code1">HTML5</div>
        <div className="code2"> JavaScript </div>
        <div className="code2"> Handlebars.js</div>
        <div className="code2">React.js </div>
        <div className="code2"> Express.js</div>
        <div className="code2"> Node.js </div>
        <div className="code3"> CSS </div>
        <div className="code3"> Responsive Web Design</div>
        <div className="code3"> Figma </div>
        <div className="code3"> Boostrap </div>
        <div className="code3"> Bulma </div>
        <div className="code3"> Leaflet </div>
        <div className="code4"> Relational Databases</div>
        <div className="code4"> Data Structures </div>
        <div className="code4"> MySQL / Sequelize </div>
        <div className="code4"> MongoDB / Mongoose </div>
        <div className="code5">  Mathematics </div>
        <div className="code5">  Problem Solving </div>
        <div className="code5">  Creativity </div>
        <div className="code6">  Agile Methodology </div>
        <div className="code6">  GitHub </div>
        <div className="code6">  GitFlow </div>
        <div className="code7">  GitHub Pages </div>
        <div className="code7">  Heroku </div>
        </Row>
        </Card>
  
    )
}

export default Skills; 