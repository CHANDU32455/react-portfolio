import React, { useState, useEffect } from 'react';
import './portfolio.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        // Initialize EmailJS with your user ID from the .env file
        emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail();
    };

    const sendEmail = () => {
        setLoading(true);
        setError('');
        setSuccess('');

        const { name, email, message } = formData;

        // Validate input
        if (!name || !email || !message) {
            setError("Please fill in all the fields.");
            setLoading(false);
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.");
            setLoading(false);
            return;
        }

        // Email template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_email: "cchantigadu75@gmail.com",
        };

        // Send email using EmailJS
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            templateParams
        )
        .then((response) => {
            alert("Email successfully sent!");
            // Clear form fields
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            alert("Failed to send email: " + error.text);
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <section id='contact' className="contact-section">
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
                        />
                    </div>
                    <button type="submit" className="contact__button" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
            </div>
        </section>
    );
};

export default Contact;
