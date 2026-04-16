import React from 'react';
import Header from './Header';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section" id="home">
      <div className="hero-bg-top"></div>
      <Header />
      
      <div className="hero-content container">
        <div className="hero-text">
          <p className="hero-subtitle">LOREM IPSUM DOLOR SIT</p>
          <h1 className="hero-title">LOREM IPSUM<br/>DOLOR SIT AMET<br/>ACCUMSAN</h1>
          <div className="hero-buttons">
            <button className="btn btn-primary">Lorem ipsum</button>
            <button className="btn btn-secondary">Lorem ipsum</button>
          </div>
        </div>
        
        <div className="hero-images">
          <img src="/assets/images/hero_jumping_fish.png" alt="Jumping fish" className="hero-fish-img" />
        </div>
      </div>
      
      <div className="hero-bottom container">
        <div className="hero-plate">
          <img src="/assets/images/hero_fish_plate.png" alt="Raw fish on ice" className="plate-img" />
        </div>
        <div className="hero-description">
          <h3>Fish restaurant</h3>
          <h2>LOREM IPSUM DOLOR SIT AMET,<br/>MITIUS NEC FRINGILLA<br/>ACCUMSAN.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="btn btn-secondary">Prestations</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
