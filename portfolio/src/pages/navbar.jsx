import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import TrafficHandling from '../components/TrafficHandling';
import useMediaQuery from '../utils/useMediaQuery';
import '../css/Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const isDesktop = useMediaQuery('(min-width: 769px)');
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = useCallback(() => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            setShowNavbar(false);
        } else {
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

    useEffect(() => {
        if (!isDesktop && isMenuOpen) {
            const onKey = (e) => {
                if (e.key === 'Escape') setIsMenuOpen(false);
            };
            window.addEventListener('keydown', onKey);
            return () => window.removeEventListener('keydown', onKey);
        }
    }, [isDesktop, isMenuOpen]);

    // Close menu when clicking outside on mobile
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!isDesktop && isMenuOpen && !e.target.closest('.mobile-drawer') && !e.target.closest('.menu-button')) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isDesktop, isMenuOpen]);

    return (
        <>
            <nav className={`navbar ${!showNavbar ? 'navbar-hidden' : ''}`}>
                <div className="navbar-content">
                    {/* Mobile Menu Button */}
                    {!isDesktop && (
                        <button
                            type="button"
                            className={`menu-button ${isMenuOpen ? 'is-open' : ''}`}
                            aria-label="Toggle navigation menu"
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen((v) => !v)}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    )}

                    {/* Logo */}
                    <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
                        <img src={logo} alt="My Logo" />
                    </Link>

                    {/* Desktop Navigation */}
                    {isDesktop && (
                        <div className="navbar-links">
                            <a href="#home" className="navbar-link">Home</a>
                            <a href="#about" className="navbar-link">About</a>
                            <a href="#experience" className="navbar-link">Experience</a>
                            <a href="#skills" className="navbar-link">Skills</a>
                            <a href="#projects" className="navbar-link">Projects</a>
                            <a href="#blogs" className="navbar-link">Blogs</a>
                        </div>
                    )}

                    {/* Desktop Traffic Metrics */}
                    {isDesktop && (
                        <div className="navbar-traffic">
                            <TrafficHandling />
                        </div>
                    )}
                </div>
            </nav>

            {/* Mobile Drawer */}
            {!isDesktop && (
                <>
                    <div
                        className={`mobile-overlay ${isMenuOpen ? 'show' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <aside className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
                        <div className="drawer-header">
                            <Link to="/" className="drawer-logo" onClick={() => setIsMenuOpen(false)}>
                                <img src={logo} alt="My Logo" />
                                <span>Portfolio</span>
                            </Link>
                        </div>
                        
                        <nav className="drawer-nav">
                            <a href="#home" className="drawer-link" onClick={() => setIsMenuOpen(false)}>
                                <span className="link-icon">🏠</span>
                                <span>Home</span>
                            </a>
                            <a href="#about" className="drawer-link" onClick={() => setIsMenuOpen(false)}>
                                <span className="link-icon">👤</span>
                                <span>About</span>
                            </a>
                            <a href="#experience" className="drawer-link" onClick={() => setIsMenuOpen(false)}>
                                <span className="link-icon">💼</span>
                                <span>Experience</span>
                            </a>
                            <a href="#skills" className="drawer-link" onClick={() => setIsMenuOpen(false)}>
                                <span className="link-icon">⚡</span>
                                <span>Skills</span>
                            </a>
                            <a href="#projects" className="drawer-link" onClick={() => setIsMenuOpen(false)}>
                                <span className="link-icon">🚀</span>
                                <span>Projects</span>
                            </a>
                            <a href="#blogs" className="drawer-link" onClick={() => setIsMenuOpen(false)}>
                                <span className="link-icon">📝</span>
                                <span>Blogs</span>
                            </a>
                        </nav>

                        <div className="drawer-traffic">
                            <TrafficHandling />
                        </div>
                    </aside>
                </>
            )}
        </>
    );
};

export default Navbar;