import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="section" id="avis">
      <div className="container">
        <h2 className="section-title">NOS AVIS CLIENTS</h2>
        <p className="section-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                    <h4>Nom Prénom</h4>
                    <p>12/04/2023</p>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            ))}
          </div>
          
          <div className="carousel-btn next">&#10095;</div>
        </div>
        
        <div className="testimonials-action">
          <button className="btn btn-secondary">Voir plus</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
