import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="section" id="avis">
      <div className="container">
        <h2 className="section-title">TRUSTED GLOBALLY</h2>
        <p className="section-subtitle">
          Feedback from our international B2B partners and seafood distributors.
        </p>

        <div className="carousel-container">
          <div className="carousel-btn prev">&#10094;</div>
          
          <div className="testimonials-grid">
            {[1, 2, 3].map((item) => (
              <div className="testimonial-card" key={item}>
                <div className="testimonial-header">
                  <div className="avatar">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  </div>
                  <div className="user-info">
                    <h4>Global Seafood Imports LLC</h4>
                    <p>US Distribution Partner</p>
                  </div>
                  <div className="google-icon">G</div>
                </div>
                <div className="stars">
                  <span className="star-icon">★</span>
                  <span className="star-icon">★</span>
                  <span className="star-icon">★</span>
                  <span className="star-icon">★</span>
                  <span className="star-icon">★</span>
                </div>
                <p className="testimonial-text">
                  "SuriCatch has transformed our South American supply chain. The fresh fish quality is unparalleled, and their cold-chain logistics are impressively reliable."
                </p>
              </div>
            ))}
          </div>
          
          <div className="carousel-btn next">&#10095;</div>
        </div>
        
        <div className="testimonials-action">
          <button className="btn btn-secondary">Read More Reviews</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
