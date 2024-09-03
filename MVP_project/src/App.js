import React from 'react';
import './App.css'; // Import the external CSS file for additional styling if needed

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <div className="intro-text">
          <h1>Welcome to My Portfolio</h1>
          <p>Full-Stack Developer | Tech Enthusiast | Problem Solver</p>
          <a href="#projects" className="cta-button">View My Projects</a>
          <div className="social-links">
            <a href="https://github.com/DennisMakaka" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/dennis-anyende-makaka" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/dennis_makaka" target="_blank" rel="noopener noreferrer" title="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/dennis.makaka" target="_blank" rel="noopener noreferrer" title="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/dennis.makaka" target="_blank" rel="noopener noreferrer" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="contact-buttons">
            <a href="https://wa.me/+254799066347" className="whatsapp-button" title="Chat on WhatsApp">
              <i className="fab fa-whatsapp"></i> WhatsApp Me
            </a>
            <a href="mailto:makakait123@gmail.com" className="email-button" title="Send an Email">
              <i className="fas fa-envelope"></i> Send an Email
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2024 Dennis Anyende Makaka. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
