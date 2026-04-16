import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <span className="logo-text">LOGO</span>
        </div>
        
        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#prestations">Prestations</a></li>
            <li><a href="#avis">Avis</a></li>
          </ul>
          <ul>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <p>RETROUVEZ NOUS</p>
          <div className="social-icons">
            <a href="#">📱</a>
            <a href="#">📸</a>
          </div>
        </div>
        
        <div className="footer-bottom-logo">
          <span className="logo-icon-large">🦈</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
