import React, { useState } from 'react';

const Contact = () => {
    const [formVisible, setFormVisible] = useState(true);
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Set the confirmation message
        setConfirmationMessage('Thank you for your message! We will get back to you soon.');
        // Hide the form
        setFormVisible(false);
    };

    return (
        <section 
            id="contact" 
            style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                padding: '20px', 
                backgroundColor: 'rgb(0, 0, 78)', // Dark Blue
                color: 'white',
                marginTop: '80px' 
            }}
        >
            <div style={{ flex: '1', marginRight: '20px' }}>
                <img 
                    src={`${process.env.PUBLIC_URL}/assets/img/contact me.jpg`} 
                    alt="Contact" 
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
                />
                <p style={{ marginBottom: '20px', color: 'white', fontSize: "200%" }}>Beshah Ashenafe - Web Developer</p>
            </div>
            <div style={{ flex: '1' }}>
                <h1 className="section-title"><span  style={{ color:'white' }}>Contact</span><span>info</span></h1>
                
                <div className="contact-form">
                    {formVisible ? (
                        <>
                            <h2>Contact With Me</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required 
                                        placeholder="abebe alemu" 
                                        style={{ width: '100%', padding: '10px', margin: '5px 0' }} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone" 
                                        required 
                                        placeholder="0912121212" 
                                        style={{ width: '100%', padding: '10px', margin: '5px 0' }} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required 
                                        placeholder="example@gmail.com" 
                                        style={{ width: '100%', padding: '10px', margin: '5px 0' }} 
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        required 
                                        placeholder="Your message here..." 
                                        style={{ width: '100%', padding: '10px', margin: '5px 0', height: '100px' }} 
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
                                >
                                    Send Message
                                </button>
                            </form>
                        </>
                    ) : (
                        <p style={{ fontFamily: 'Times New Roman', color: 'white' }}>{confirmationMessage}</p> // Display confirmation message
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;