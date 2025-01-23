import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState); // Toggle the menu state
    };

    return (
        <section id="header">
            <div className="header container">
                <div className="nav-bar">
                    <div className="brand">
                        <Link to="/" aria-label="Go to Home">
                            <h1>
                                <span>B</span>eshah <span>A</span>shenafi
                            </h1>
                        </Link>
                    </div>
                    <div className="nav-list">
                        <div 
                            className="hamburger" 
                            aria-label="Toggle Navigation" 
                            role="button" 
                            tabIndex={0} 
                            onClick={toggleMenu} // Call toggleMenu on click
                        >
                            <div className="bar"></div>
                        </div>
                        <ul className={isMenuOpen ? 'active' : ''}> {/* Apply active class based on state */}
                            <li><Link to="/" data-after="Home">Home</Link></li>
                            <li><Link to="/services" data-after="Service">Services</Link></li>
                            <li><Link to="/projects" data-after="Projects">Projects</Link></li>
                            <li><Link to="/about" data-after="About">About</Link></li>
                            <li><Link to="/contact" data-after="Contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
        </section>
    );
};

export default Header;