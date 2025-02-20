import React from 'react';
import '../css/ServicesList.css'; // Import CSS for styling

const ServicesList = () => {
    // List of services you offer
    const services = [
        {
            id: 1,
            title: "Frontend Development",
            description: "Building responsive and user-friendly interfaces using React, HTML, CSS, and JavaScript, ReactJs.",
            icon: "💻", // You can replace this with an actual icon or image
        },
        {
            id: 2,
            title: "Backend Development",
            description: "Developing robust and scalable server-side applications using Django, and databases like Mysql, Sqlite3, Firebase.",
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
        </div>
    );
};

export default ServicesList;