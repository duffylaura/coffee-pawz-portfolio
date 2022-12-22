import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

const ContactForm = () => {

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
    <div className="container mt-5">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
            <label className="form-label">
                Name
            </label>
            <input
                type='text'
                name='from_name'
                placeholder='from name'
                value={toSend.from_name}
                onChange={handleChange}
            />
        </div>

        <div className="mb-3">
            <label className="form-label">
            Email
            </label>
            <input
            type='email'
            name='reply_to'
            placeholder='Your email'
            value={toSend.reply_to}
            onChange={handleChange}
            />
        </div>

        <div className="mb-3">
            <label className="form-label">
                Message
            </label>
            <textarea 
            type='text'
            name='message'
            placeholder='Your message'
            value={toSend.message}
            onChange={handleChange}
            />
        </div>

        <br />
        <button className="btn btn-danger" type="submit">
        </button>
      </form>
      <br /> <br /> 
    </div>
  )
}
export default ContactForm