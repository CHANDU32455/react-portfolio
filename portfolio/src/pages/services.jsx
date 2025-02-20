import React from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css'; // Import the services CSS file
import servicesImg from '../assets/services.jpg';

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="services-component">
                <div className="services-details">
                    <h2 className="services-heading">Explore My Services</h2>
                    <p className="services-info">
                        I offer a wide range of web development and design services to help you
                        bring your ideas to life. Whether it's a custom website, an e-commerce platform,
                        or a web app, I'm here to assist you.
                    </p>
                    <Link to="/services_list" className="services-btn">
                        Explore My Services
                    </Link>
                </div>
                <div className="services-picture">
                    <img src={servicesImg} alt="Services" />
                </div>
            </div>
        </section>
    );
};

export default Services;
