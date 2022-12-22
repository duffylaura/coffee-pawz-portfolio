import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Pdf = () => {
// Function will execute on click of button
const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Duffy-Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Duffy-Resume.pdf';
            alink.click();
        })
    })
}

return (
    <Card>
        <Card.Body>
        <center>
            <Button onClick={onButtonClick} className="download-button">
                Click to Download Resume
            </Button>
        </center>
        </Card.Body>
    </Card>
);
}

export default Pdf; 
