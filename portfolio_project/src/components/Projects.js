import React from 'react';
import './Projects.css'; // Assuming you will have some CSS for styling

const projects = [
	    {
		            title: "Printf",
		            description: "A custom implementation of the C printf function, capable of formatted output conversion.",
		            link: "https://github.com/DennisMakaka/printf" // Replace with the actual link
		        },
	    {
		            title: "Monty",
		            description: "A bytecode interpreter for Monty ByteCodes files.",
		            link: "https://github.com/DennisMakaka/monty" // Replace with the actual link
		        },
	    {
		            title: "Airbnb Clone",
		            description: "A simplified version of the Airbnb website with booking capabilities and user management.",
		            link: "https://github.com/DennisMakaka/airbnb-clone" // Replace with the actual link
		        },
	    {
		            title: "Simple Shell",
		            description: "A simple UNIX command line interpreter written in C.",
		            link: "https://github.com/DennisMakaka/simple-shell" // Replace with the actual link
		        },
	    {
		            title: "RSA Factoring",
		            description: "A project focused on factoring RSA keys.",
		            link: "https://github.com/DennisMakaka/RSA-factoring" // Replace with the actual link
		        }
];

const Projects = () => {
	    return (
		            <section id="projects" className="projects-section">
		                <h2>Projects</h2>
		                <div className="projects-grid">
		                    {projects.map((project, index) => (
					                        <div key={index} className="project-card">
					                            <h3>{project.title}</h3>
					                            <p>{project.description}</p>
					                            <a href={project.link} target="_blank" rel="noopener noreferrer">
					                                View on GitHub
					                            </a>
					                        </div>
					                    ))}
		                </div>
		            </section>
		        );
};

export default Projects;
