import React from 'react';
import { Link } from 'react-router-dom';
// import dotenv from 'dotenv';

const ContactForm = () => {
  return (
    <section className="contact-section contact-box">
      <Link to="/">Return Home</Link>
      <div className="contact-intro">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="b75c27fb-bbae-4f4c-9623-ac5c69c416dc" />
        <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
        <input type="hidden" name="from_name" value="My Website" />

        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input id="name" name="name" className="form-input" placeholder="Name" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              name="email"
              className="form-input"
              value="sanghakirandeep12@gmail.com"
              readOnly
              type="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Your Phone Number</label>
            <input id="phone" name="phone" className="form-input" placeholder="+1 (234) 567-8900" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-textarea" id="message" name="message" placeholder="Your message here..."></textarea>
          </div>
        </div>
        <button className="form-submit" type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;