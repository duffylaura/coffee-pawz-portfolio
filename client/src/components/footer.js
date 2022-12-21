import React from 'react';
import Container from 'react-bootstrap/Container';
const orangeCloud = require('../assets/orange-cloud.jpeg');

function Footer() {
    // made create a border around nave or image on the top of the nav bar like an infinity symbol
    return (
       <Container>
            <img src = {orangeCloud} alt="orange cloud" />
       </Container>
    )
};

export default Footer; 