import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header container">
      <div className="header-logo">
        <span className="logo-icon">🐟</span>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#prestations">Prestations</a></li>
          <li><a href="#galerie">Galerie</a></li>
          <li><a href="#avis">Avis</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
