import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer container">
                <div className="brand">
                    <h1><span>B</span>eshah <span>A</span>shenafi</h1>
                </div>
                <h2>Find Me</h2>
                <div className="social-icon">
                    <div className="social-item">
                        <a href="https://web.facebook.com/bbbestBoyyyy"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt="Facebook Icon" /></a>
                    </div>
                    <div className="social-item">
                        <a href="https://www.instagram.com/freeperson21341234455/?__pwa=1"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="Instagram Icon" /></a>
                    </div>
                    <div className="social-item">
                        <a href="tel:+251948100497"> {/* Replace with your actual phone number */}
                        <img src="https://img.icons8.com/?size=100&id=9729&format=png&color=000000" alt="Phone Icon" />
                        </a>
                    </div>
                    <div className="social-item">
                        <a href="https://t.me/Future_f0"><img src="https://img.icons8.com/?size=100&id=k4jADXhS5U1t&format=png&color=000000" alt="Behance Icon" /></a>
                    </div>
                </div>
                <p>Copyright © 2025 Beshah. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
