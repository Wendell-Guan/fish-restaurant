import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="section" id="prestations">
      <div className="container">
        <h2 className="section-title">NOS PRESTATIONS</h2>
        <p className="section-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>

        <div className="carousel-container">
          <div className="carousel-btn prev">&#10094;</div>
          
          <div className="services-grid">
            <div className="service-card image-card" style={{ backgroundImage: 'url(/assets/images/service_rod.png)' }}>
              <div className="card-content">
                <div className="icon-wrapper">🎣</div>
                <h3>Prestation 01</h3>
                <p>Lorem ipsum dolor sit amet aliqua.</p>
              </div>
            </div>

            <div className="service-card dark-card">
              <div className="card-content top-content">
                <div className="icon-wrapper-large">🦑</div>
                <h3>Prestation 02</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="btn btn-secondary">Lorem ipsum</button>
              </div>
            </div>

            <div className="service-card image-card" style={{ backgroundImage: 'url(/assets/images/footer_school.png)' }}>
              <div className="card-content">
                <div className="icon-wrapper">🐟</div>
                <h3>Prestation 03</h3>
                <p>Lorem ipsum dolor sit amet aliqua.</p>
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
