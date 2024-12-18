'use client';
import React, { useState } from 'react';
import '../styles/contact.css'; // Ensure this file contains your styling

const ContactPage = () => {
  const [formData, setFormData] = useState({
    subject: 'just saying hi',
    email: '',
    message: "let's talk about..."
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2 className="title">Let&apos;s Connect</h2>
        <p className="description">
          I am currently seeking new opportunities to apply my frontend development skills and contribute to exciting projects.
          If you have any opportunities or collaborations in mind, feel free to reach out!
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <h3>Github</h3>
            <a href="https://github.com/SyedaMehakShah" target="_blank" rel="noopener noreferrer">Visit Github</a>
          </div>
          <div className="contact-item">
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/syeda-mehak-shah-5365ab2b7/" target="_blank" rel="noopener noreferrer">Visit LinkedIn</a>
          </div>
          <div className="contact-item">
            <h3>Your Email</h3>
            <p>abc@gmail.com</p>
          </div>
        </div>

        <form action="#" method="POST" className="contact-inputs">
          <div className="input-group">
            <div className="input-item">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-item">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="input-item">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              placeholder="let's talk about..."
              required
            />
          </div>

          <div className="submit-btn">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
