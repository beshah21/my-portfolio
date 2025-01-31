import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const heroStyle = {
        backgroundImage: 'url(https://pfst.cf2.poecdn.net/base/image/77205db0efcce6773fc23f7900b7e68bc31c17d26d8f38f1722632b33e1de6a9?w=1024&h=768&pmaid=271225386)', // Add your background image URL here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh - 160px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginTop: '80px',
        marginBottom: '80px'
    };

    const paragraphStyle = {
        marginTop: '20px',
        fontSize: '2rem',
        lineHeight: '1.5',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: '300',
        color: 'white'
    };

    const buttonStyle = {
        padding: '12px 24px',
        fontSize: '1.5rem',
        color: 'white',
        backgroundColor: '#000000', // Black color
        border: 'none',
        borderRadius: '5px',
        textDecoration: 'none',
        display: 'inline-block',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        cursor: 'pointer',
    };

    const buttonHoverStyle = {
        backgroundColor: '#333333', // Darker shade for hover effect
        transform: 'scale(1.05)' // Slightly enlarge on hover
    };

    return (
        <section id="hero" style={heroStyle}>
            <div className="hero container">
                <div>
                    <h1>Hello, <span></span></h1>
                    <h1>My Name is <span></span></h1>
                    <h1>Beshah <span></span></h1>
                    <p style={paragraphStyle}>
                        Welcome to my portfolio website! Here, you can explore my projects, skills, and experiences in web development.
                    </p>
                    <Link to="/projects" 
                          style={buttonStyle} 
                          onMouseOver={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} 
                          onMouseOut={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor} 
                          onMouseDown={e => e.currentTarget.style.transform = buttonHoverStyle.transform} 
                          onMouseUp={e => e.currentTarget.style.transform = ''}>
                        View my work
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;