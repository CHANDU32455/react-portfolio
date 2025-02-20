import React, { useState } from 'react';
import '../css/ServicesList.css'; // Import CSS for styling
import { sendEmail } from '../utils/emailUtils';  // Assuming emailUtils is the reusable function for sending emails

const ServicesList = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        purpose: '',
        service: '',
        description: '',
        location: '',  // Added location field
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const services = [
        {
            id: 1,
            title: "Frontend Development",
            description: "Building responsive and user-friendly interfaces using React, HTML, CSS, and JavaScript.",
            icon: "💻",
        },
        {
            id: 2,
            title: "Backend Development",
            description: "Developing robust and scalable server-side applications using Django, and databases like MySQL, SQLite3, Firebase",
            icon: "⚙️",
        },
        {
            id: 3,
            title: "Full-Stack Development",
            description: "End-to-end development of web applications, from frontend to backend, ensuring seamless integration.",
            icon: "🌐",
        },
        {
            id: 4,
            title: "UI/UX Design",
            description: "Designing intuitive and visually appealing user interfaces to enhance user experience.",
            icon: "🎨",
        },
        {
            id: 5,
            title: "Website Maintenance",
            description: "Providing ongoing support and updates to ensure your website runs smoothly and stays up-to-date.",
            icon: "🔧",
        },
        {
            id: 6,
            title: "SEO Optimization",
            description: "Optimizing websites for search engines to improve visibility and drive organic traffic.",
            icon: "🔍",
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage();
    };

    const sendMessage = () => {
        setLoading(true);
        setError('');
        setSuccess('');

        const { name, email, purpose, service, description, location } = formData;

        // Validate input
        if (!name || !email || !purpose || !service || !description || !location) {
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

        const templateParams = {
            from_name: name,
            from_email: email,
            purpose: purpose,
            service: service,
            description: description,
            location: location,  // Added location to the template
            to_email: "cchantigadu75@gmail.com",
        };

        sendEmail(templateParams, 
            (response) => {
                setSuccess("Email successfully sent!");
                setFormData({ name: '', email: '', purpose: '', service: '', description: '', location: '' });
            },
            (error) => {
                setError("Failed to send email: " + error.text);
            }
        );

        setLoading(false);
        setModalOpen(false);  // Close the modal after submission
    };

    return (
        <div className="services-list">
            <h1 className="services-title">Services I Offer</h1>
            <div className="services-container">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h2 className="service-title">{service.title}</h2>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>

            {/* Floating Request Services Button */}
            <button className="request-services-btn" onClick={() => setModalOpen(true)}>
                Request Services
            </button>

            {/* Modal */}
            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <button className="modal-close-btn" onClick={() => setModalOpen(false)}>X</button>
                        <h2>Request Service</h2>
                        <form onSubmit={handleSubmit} className="modal-form">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="modal-input"
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
                                    className="modal-input"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="purpose">Purpose of Request:</label>
                                <input
                                    type="text"
                                    id="purpose"
                                    name="purpose"
                                    value={formData.purpose}
                                    onChange={handleChange}
                                    className="modal-input"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="service">Service Requested:</label>
                                <input
                                    type="text"
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="modal-input"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Brief Description of Requirements:</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="modal-input"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location:</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="modal-input"
                                    required
                                />
                            </div>
                            <button type="submit" className="modal-submit-btn" disabled={loading}>
                                {loading ? 'Sending...' : 'Submit Request'}
                            </button>
                        </form>
                        {error && <p className="error-message">{error}</p>}
                        {success && <p className="success-message">{success}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesList;
