import React from 'react';

const Home = () => {
	return (
		<section id="home">
		      <div className="intro-text">
		        <h1>Greetings, I'm Dennis Anyende Makaka</h1>
		        <p>A full-stack developer specializing in responsive web and mobile solutions.</p>
		        <a href="#projects" className="cta-button">Explore My Work</a>
		        <div className="social-links">
		          <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
		          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
		          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter"><i className="fab fa-twitter"></i></a>
		          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fab fa-facebook-f"></i></a>
		          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fab fa-instagram"></i></a>
		        </div>
		<div className="contact-buttons">
		          <a href="https://wa.me/254799066347" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" className="whatsapp-button">
		            <i className="fab fa-whatsapp"></i> Chat on WhatsApp
		          </a>
		          <a href="mailto:makakait123@gmail.com" title="Send an Email" className="email-button">
		            <i className="fas fa-envelope"></i> Send an Email
		          </a>
		        </div>
		      </div>
		    </section>
		  );
};

export default Home;
