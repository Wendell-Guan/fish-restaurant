import React from 'react';
import { useTranslation } from 'react-i18next';
import './Testimonials.css';

const Testimonials = () => {
  const { t } = useTranslation();
  const items = t('testimonials.items', { returnObjects: true });
  return (
    <section className="section" id="avis">
      <div className="container">
        <h2 className="section-title">{t('testimonials.title')}</h2>
        <p className="section-subtitle">
          {t('testimonials.subtitle')}
        </p>

        <div className="carousel-container">
          <div className="carousel-btn prev">&#10094;</div>

          <div className="testimonials-grid">
            {items.map((item, idx) => (
              <div className="testimonial-card" key={idx}>
                <div className="testimonial-header">
                  <div className="avatar">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  </div>
                  <div className="user-info">
                    <h4>{item.partnerName}</h4>
                    <p>{item.partnerRole}</p>
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
                  {item.quote}
                </p>
              </div>
            ))}
          </div>

          <div className="carousel-btn next">&#10095;</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
