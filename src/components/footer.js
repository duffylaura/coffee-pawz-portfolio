import React from 'react';
// import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';

const Footer = () => (
<footer class="custom-footer">
    <div className="footer-copyright text-center py-3">
        © Laura Duffy
        <br />
        <Button className="footer-button"><a href="https://github.com/duffylaura"> GitHub</a></Button>
        <Button className="footer-button"><a href="https://www.linkedin.com/in/laura-duffy-a14061251/"> LinkedIn</a></Button>
        <Button className="footer-button"><a href="https://medium.com/@lauraduffy700"> Medium </a></Button>
    </div>
</footer>
)


export default Footer; 