import React from 'react';
import { useTranslation } from 'react-i18next';
import './Gallery.css';

const Gallery = () => {
  const { t } = useTranslation();
  return (
    <section className="section" id="galerie">
      <div className="container">
        <h2 className="section-title">{t('gallery.title')}</h2>
        <p className="section-subtitle">
          {t('gallery.subtitle')}
        </p>

        <div className="gallery-grid">
          <div className="gallery-item item-chef">
            <img src="/assets/images/gallery_gregor_fish.jpg" alt="Fresh whole fish on ceramic plate" />
          </div>
          <div className="gallery-item item-crab">
            <img src="/assets/images/suriname_red_snapper.png" alt="Fresh Suriname Red Snapper" />
          </div>
          <div className="gallery-item item-squid">
            <img src="/assets/images/gallery_fresh_croaker_alt.png" alt="Whitemouth Croaker Select" />
          </div>
          <div className="gallery-item item-shrimp">
            <img src="/assets/images/gallery_sebastian_fish.jpg" alt="Fresh fish display" />
          </div>
          <div className="gallery-item item-school">
            <img src="/assets/images/gallery_jakub_fish.jpg" alt="Assorted raw fish selection" />
          </div>
          <div className="gallery-item item-clams">
            <img src="/assets/images/gallery_kier_fish.jpg" alt="Fresh fish on display" />
          </div>
        </div>
        
        <div className="gallery-action">
          <button className="btn btn-secondary">{t('gallery.btnFull')}</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
