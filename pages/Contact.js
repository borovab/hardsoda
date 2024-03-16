import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import '../scss/Contact.scss'
import { CiLocationArrow1 } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import Footer from '../components/footer'


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform form submission logic here
      console.log('Form submitted:', formData);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
      isValid = false;
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <>
    <Container>
<div className="shiritizi">
    <div className="row">
        <div className="col-md-6">
            <div className="contact-form">
                <h3>Contact us</h3>
                <p><CiLocationArrow1 className='icons'/> Marsal Tito, Gostivar</p>
                <p> <IoIosPhonePortrait className='icons'/> +38975329526</p>
                <p>Or send us direct message from here.</p>
                <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label"></label>
                        <input type="text" name="name" placeholder='Your Name:' id="name" className={`form-control ${formErrors.name && 'is-invalid'}`} value={formData.name} onChange={handleChange} required />
                        <div className="invalid-feedback">{formErrors.name}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"></label>
                        <input type="email" name="email" id="email" placeholder='Your Email:' className={`form-control ${formErrors.email && 'is-invalid'}`} value={formData.email} onChange={handleChange} required />
                        <div className="invalid-feedback">{formErrors.email}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label"></label>
                        <textarea name="message" placeholder='Your Message:' id="message" className={`form-control ${formErrors.message && 'is-invalid'}`} value={formData.message} onChange={handleChange} required></textarea>
                        <div className="invalid-feedback">{formErrors.message}</div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-outline-light">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="col-md-6">
            <img src="https://scontent.cdninstagram.com/v/t39.30808-6/419736466_18246885661241053_5636701241590740914_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=ZwGcsB5CiJIAX-2L4Yy&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI4MDkwNjg2MzkyMTc0ODY4MA%3D%3D.2-ccb7-5&oh=00_AfAcY37D8y4zMAmhWSbq8AbUc66ki4eOEXvQsJtnYDt1RA&oe=65F89723&_nc_sid=10d13b" alt="Image Description" />
        </div>
    </div>
</div>
    </Container>
    <Footer className='py-5' />
    
</>
  );
};

export default ContactForm;
