import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {

const [show, setShow] = useState(false);
const handleClose = () => {
    setShow(false);
    window.location.reload(false);
}
const handleShow = () => setShow(true); 

const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
    });

const onSubmit = (e) => {
    e.preventDefault();
    send(
        'service_vhjeyyk',
        'template_reactPortfolio',
        toSend,
        'a78QJfiSCmzD4rUZp'
    )
        .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
        console.log('FAILED...', err);
        });
    };

const handleChange = (e) => {
setToSend({ ...toSend, [e.target.name]: e.target.value });
};

  return (
    <Card className="contact-card">
      <form onSubmit={onSubmit}>
            <input
                class = "custom-input"
                type='text'
                name='from_name'
                placeholder='  Your name...'
                value={toSend.from_name}
                onChange={handleChange}
            />
            <input
                class = "custom-input"
                type='email'
                name='reply_to'
                placeholder='  Your email...'
                value={toSend.reply_to}
                onChange={handleChange}
            />
            <textarea 
                class = "custom-input"
                type='text'
                name='message'
                placeholder='  Your message...'
                value={toSend.message}
                onChange={handleChange}
            />
        <button className="custom-button" type="submit" onClick={handleShow}> Send </button>
      </form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Your note has been sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body> Laura will get back to you as soon as possible! Thank you for reaching out!</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Okay!
          </Button>
        </Modal.Footer>
      </Modal>

    </Card>
  )
}
export default ContactForm