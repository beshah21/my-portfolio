import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <div className="projects container">
                <div className="projects-header">
                    <h1 className="section-title">Recent <span>Projects</span></h1>
                </div>
                <div className="all-projects">
                    <div className="project-item">
                    <div className="project-info">
            <h1>Personal Website</h1>
            <h2>Coding is Love</h2>
            <p>A personal website showcasing my skills and projects.</p>
        </div>
        <div className="project-img">
            <img src="https://pfst.cf2.poecdn.net/base/image/ddf202eee16691ac571fb76e8b05495322e6c373b5d1f3cf49eb9a45532befe3?w=1024&h=768&pmaid=271243945" alt="Personal Website" /> {/* Update image path as needed */}
        </div>
    </div>
    <div className="project-item">
        <div className="project-info">
            <h1>House Rental Management GUI App</h1>
            <h2>Effortless Property Management</h2>
            <p>A user-friendly GUI application for managing house rentals efficiently.</p>
        </div>
        <div className="project-img">
            <img src="https://pfst.cf2.poecdn.net/base/image/caffcd72b7ca7ff0d69c2fb21c46909c7266d0fa35c074e64184d1b6b69876b4?w=1024&h=768&pmaid=271247027" alt="House Rental Management GUI App" /> {/* Update image path as needed */}
        </div>
    </div>
    <div className="project-item">
        <div className="project-info">
            <h1>Hotel Management Console App</h1>
            <h2>Streamlining Hotel Operations</h2>
            <p>A console application designed to manage hotel operations effectively.</p>
        </div>
        <div className="project-img">
            <img src="https://pfst.cf2.poecdn.net/base/image/741aed8a803c7a6684fe3f9e98e87c3a5821e0ac33722f47cbe4922a2bc2f9b4?w=1024&h=768&pmaid=271247659" alt="Hotel Management Console App" /> {/* Update image path as needed */}
        </div>
    </div>
    <div className="project-item">
        <div className="project-info">
            <h1>Student Management Console App</h1>
            <h2>Organizing Student Data</h2>
            <p>A console application for managing student information and records.</p>
        </div>
        <div className="project-img">
            <img src="https://pfst.cf2.poecdn.net/base/image/33fda3cffa2c21c078b849f374df35a9564d31f6fa002ecd720cf8e3f3fb34b4?w=1024&h=768&pmaid=271247993" alt="Student Management Console App" /> {/* Update image path as needed */}
        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
