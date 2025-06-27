import React, { useState } from 'react';
import './portfolio.css';  // your styles
import { sendEmail } from '../utils/emailUtils';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, message } = formData;

    // Validation
    if (!name || !email || !message) {
      alert("Please fill in all the fields.");
      setLoading(false);
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    const templateParams = {
      title: "Contact Form Submission",
      name: name,
      email: email,
      message: message,
      time: new Date().toLocaleString(),
    };

    sendEmail(
      templateParams,
      () => {
        alert("Email successfully sent!");
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
      },
      (error) => {
        alert("Failed to send email: " + (error.text || "Unknown error"));
        setLoading(false);
      }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact__content">
        <h2>Let's Connect!</h2>
        <p className="contact__description">
          I’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
          Connecting with people is what fuels my passion, and I believe every conversation is an opportunity to learn and grow. So don’t hesitate—drop me a message, and let’s start a conversation!
        </p>
      </div>
      <div className="contact__container">
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact__input"
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact__input"
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="contact__input"
              required
              disabled={loading}
            />
          </div>
          <button type="submit" className="contact__button" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
