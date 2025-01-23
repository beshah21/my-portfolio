import React from 'react';

const Services = () => {
    const paragraphStyle = {
        marginTop: '20px',
        fontSize: '2rem', // Adjust as needed
        lineHeight: '1.5', // Improves readability
        maxWidth: '600px', // Limit width for better readability
        marginLeft: 'auto', // Center the paragraph
        marginRight: 'auto', // Center the paragraph
        fontWeight: '300', // Lighter weight for paragraph text
        color: 'black',
        font:'Times New Roman'
    };
    return (
        <section id="services"style={{ backgroundImage: "url('https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=600')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="services container">
                <div className="service-top">
                    <h1 className="section-title">Serv<span>i</span>ces</h1>
                    <p style={paragraphStyle}>Struggle itself is significant, especially in challenging times. A lot of the struggle is believed to be intense, and the challenges we face reveal what we can endure. Struggles help us recognize our difficulties!</p>
                </div>
                <div className="service-bottom">
                <div className="services">
                  <div className="service-item">
                     <div className="icon"><img src="https://img.icons8.com/?size=100&id=vNKQXcyeaWkL&format=png&color=000000" alt="Service Icon" /></div>
                      <h2>Front-End Development</h2>
                      <p>Specializing in creating responsive and visually appealing user interfaces using modern web technologies.</p>
                    </div>
                <div className="service-item">
                    <div className="icon"><img src="https://img.icons8.com/?size=100&id=vNKQXcyeaWkL&format=png&color=000000" alt="Service Icon" /></div>
                    <h2>System Analysis</h2>
                   <p>Analyzing system requirements and designing solutions to improve efficiency and effectiveness.</p>
                </div>
                  <div className="service-item">
        <div className="icon"><img src="https://img.icons8.com/?size=100&id=vNKQXcyeaWkL&format=png&color=000000" alt="Service Icon" /></div>
        <h2>C#.NET Development</h2>
        <p>Developing robust applications using C#.NET, focusing on performance and scalability.</p>
    </div>
</div>
                    
                </div>
            </div>
        </section>
    );
};

export default Services;
