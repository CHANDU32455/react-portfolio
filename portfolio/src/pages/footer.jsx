import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#343a40',
        color: '#ffffff',
        padding: '40px 20px',
        textAlign: 'center'
    };

    const iconStyle = {
        margin: '0 10px',
        color: '#ffffff',
        fontSize: '24px'
    };

    const copyStyle = {
        marginTop: '20px',
    };

    return (
        <footer style={footerStyle}>
            <h5 className="footer__title mb-3">Chandu Chitteti</h5>
            <div className="footer__social mb-3">
                {/* External link for GitHub */}
                <a
                    href="https://github.com/CHANDU32455"
                    style={iconStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>

                {/* External link for LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/chandu-chitteti-081116270/"
                    style={iconStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>

                {/* External link for Email */}
                <a
                    href="mailto:chanduchitteti@outlook.com"
                    style={iconStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaEnvelope />
                </a>
            
                <a
                    href="https://www.youtube.com/@Programming365"
                    style={iconStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaYoutube />
                </a>
            </div>
            <p style={copyStyle} className="footer__copy mb-0">&copy; 2024. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
