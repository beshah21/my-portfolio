import React from 'react';

const Hero = () => {
    const heroStyle = {
        backgroundImage: 'url(https://pfst.cf2.poecdn.net/base/image/77205db0efcce6773fc23f7900b7e68bc31c17d26d8f38f1722632b33e1de6a9?w=1024&h=768&pmaid=271225386)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh - 160px)', // Adjust height to account for header and footer
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginTop: '80px', // Adjust based on your header height
        marginBottom: '80px' // Adjust based on your footer height
    };

    const paragraphStyle = {
        marginTop: '20px',
        fontSize: '2rem', // Adjust as needed
        lineHeight: '1.5', // Improves readability
        maxWidth: '600px', // Limit width for better readability
        marginLeft: 'auto', // Center the paragraph
        marginRight: 'auto', // Center the paragraph
        fontWeight: '300', // Lighter weight for paragraph text
        color: 'white'
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
                </div>
            </div>
        </section>
    );
};

export default Hero;