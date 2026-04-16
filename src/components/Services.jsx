import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="section" id="prestations">
      <div className="container">
        <h2 className="section-title">OUR PRODUCTS & DISTRIBUTION</h2>
        <p className="section-subtitle">
          We source, process, and distribute high-grade Suriname seafood worldwide.
        </p>

        <div className="carousel-container">
          <div className="carousel-btn prev">&#10094;</div>
          
          <div className="services-grid">
            <div className="service-card image-card" style={{ backgroundImage: 'url(/assets/images/suriname_red_snapper.png)' }}>
              <div className="card-content">
                <div className="icon-wrapper">🎣</div>
                <h3>Wild Red Snapper</h3>
                <p>Premium Suriname Lutjanus purpureus, caught daily.</p>
              </div>
            </div>

            <div className="service-card dark-card">
              <div className="card-content top-content">
                <div className="icon-wrapper-large">🚢</div>
                <h3>Global Cold-Chain</h3>
                <p>
                  State-of-the-art cold logistics guarantee ocean-to-market freshness anywhere in the world.
                </p>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>

            <div className="service-card image-card" style={{ backgroundImage: 'url(/assets/images/suriname_catfish.png)' }}>
              <div className="card-content">
                <div className="icon-wrapper">🐟</div>
                <h3>Koepila Catfish</h3>
                <p>Top grade sea catfish processed to international standards.</p>
              </div>
            </div>
          </div>
          
          <div className="carousel-btn next">&#10095;</div>
        </div>
      </div>
      
      {/* Background shape */}
      <div className="bg-shape-1"></div>
    </section>
  );
};

export default Services;
