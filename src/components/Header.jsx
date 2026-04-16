import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header container">
      <nav className="header-nav left-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#prestations">Our Services</a></li>
          <li><a href="#galerie">Products</a></li>
        </ul>
      </nav>
      
      <div className="header-logo">
        <span className="logo-icon" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '900', fontSize: '1.2rem', color: 'var(--clr-bg-deep)' }}>
          <svg viewBox="0 0 100 100" width="40" height="40" style={{fill:"var(--clr-bg-deep)"}}>
            <circle cx="50" cy="50" r="45" fill="none" strokeWidth="2" stroke="currentColor"/>
            <text x="35" y="60" fontSize="30" >🐟</text>
          </svg>
          SuriCatch
        </span>
      </div>

      <nav className="header-nav right-nav">
        <ul>
          <li><a href="#avis">Partners</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
