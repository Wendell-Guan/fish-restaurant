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
          <p className="hero-subtitle">PREMIUM SEAFOOD DISTRIBUTOR</p>
          <h1 className="hero-title">FRESH CATCH<br/>FROM SOUTH AMERICA<br/>TO THE WORLD</h1>
          <div className="hero-buttons">
            <button className="btn btn-primary">Our Products</button>
            <button className="btn btn-secondary">Contact Sales</button>
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
          <h3>South American Export</h3>
          <h2>WILD-CAUGHT FISH,<br/>GUARANTEED FRESHNESS<br/>& COLD CHAIN.</h2>
          <p>
            SuriCatch is a leading fish distributor based in Suriname, specializing in exporting the finest wild-caught marine species. From the pristine waters of the Atlantic, right to your commercial market.
          </p>
          <p>
            Our dedicated fleet and strict cold-chain logistics ensure that high-demand varieties like Red Snapper, Grouper, and Whitemouth Croaker retain their absolute oceanic freshness upon global delivery.
          </p>
          <button className="btn btn-secondary">View Catalog</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
