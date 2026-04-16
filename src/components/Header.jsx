import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header container">
      <nav className="header-nav left-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#prestations">Prestations</a></li>
          <li><a href="#galerie">Galerie</a></li>
        </ul>
      </nav>
      
      <div className="header-logo">
        <span className="logo-icon">
          <svg viewBox="0 0 100 100" width="50" height="50" style={{fill:"var(--clr-bg-deep)"}}>
            <circle cx="50" cy="50" r="45" fill="none" strokeWidth="2" stroke="currentColor"/>
            <text x="35" y="60" fontSize="30" >🐟</text>
          </svg>
        </span>
      </div>

      <nav className="header-nav right-nav">
        <ul>
          <li><a href="#avis">Avis</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
