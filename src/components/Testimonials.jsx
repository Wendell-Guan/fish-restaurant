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

        <div className="testimonials-grid">
          {[1, 2, 3].map((item) => (
            <div className="testimonial-card" key={item}>
              <div className="testimonial-header">
                <div className="avatar">👤</div>
                <div className="user-info">
                  <h4>Nom Prénom</h4>
                  <p>12/04/2023</p>
                </div>
                <div className="google-icon">G</div>
              </div>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          ))}
        </div>
        
        <div className="testimonials-action">
          <button className="btn btn-secondary">Voir plus</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
