import React from 'react';
import { useTranslation } from 'react-i18next';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();
  return (
    <section className="section" id="prestations">
      <div className="container">
        <h2 className="section-title">{t('services.title')}</h2>
        <p className="section-subtitle">
          {t('services.subtitle')}
        </p>

        <div className="carousel-container">
          <div className="carousel-btn prev">&#10094;</div>
          
          <div className="services-grid">
            <div className="service-card image-card" style={{ backgroundImage: 'url(/assets/images/suriname_red_snapper.png)' }}>
              <div className="card-content">
                <div className="icon-wrapper">🎣</div>
                <h3>{t('services.snapperTitle')}</h3>
                <p>{t('services.snapperDesc')}</p>
              </div>
            </div>

            <div className="service-card dark-card">
              <div className="card-content top-content">
                <div className="icon-wrapper-large">🚢</div>
                <h3>{t('services.coldchainTitle')}</h3>
                <p>
                  {t('services.coldchainDesc')}
                </p>
                <button className="btn btn-secondary">{t('services.btnLearn')}</button>
              </div>
            </div>

            <div className="service-card image-card" style={{ backgroundImage: 'url(/assets/images/suriname_catfish.png)' }}>
              <div className="card-content">
                <div className="icon-wrapper">🐟</div>
                <h3>{t('services.catfishTitle')}</h3>
                <p>{t('services.catfishDesc')}</p>
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
