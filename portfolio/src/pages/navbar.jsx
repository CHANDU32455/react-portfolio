import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import TrafficHandling from '../components/TrafficHandling';
import useMediaQuery from '../utils/useMediaQuery'; // Custom hook for media queries
import '../css/Navbar.css'; // Import the external CSS file
import logo from '../assets/logo.jpg'; // Adjust the path if needed

const Navbar = () => {
    const isDesktop = useMediaQuery('(min-width: 769px)');
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            setShowNavbar(false);
        } else {
            // Scrolling up
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <>
            <nav className={`navbar ${!showNavbar ? 'navbar-hidden' : ''}`}>
                <Link to="/" className="logo">
                    <img src={logo} alt="My Logo" />
                </Link>
                <div className="navbar-container">
                    <a href="#home" className="navbar-item">Home</a>
                    <a href="#about" className="navbar-item">About</a>
                    <a href="#experience" className="navbar-item">Experience</a>
                    <a href="#skills" className="navbar-item">Skills</a>
                    <a href="#projects" className="navbar-item">Projects</a>
                    <a href="#blogs" className='navbar-item'>Blogs</a>
                    <a href="#contact" className="navbar-item">Contact</a>
                </div>
                {isDesktop && (
                    <div className="navbar-traffic">
                        <TrafficHandling />
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
