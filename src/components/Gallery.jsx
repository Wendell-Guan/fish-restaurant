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
            <img src="/assets/images/gallery_raw_grouper.png" alt="Raw Grouper on ice" />
          </div>
          <div className="gallery-item item-crab">
            <img src="/assets/images/suriname_red_snapper.png" alt="Fresh Suriname Red Snapper" />
          </div>
          <div className="gallery-item item-squid">
            <img src="/assets/images/gallery_fresh_croaker_alt.png" alt="Whitemouth Croaker Select" />
          </div>
          <div className="gallery-item item-shrimp">
            <img src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=800" alt="Fresh market fish display" />
          </div>
          <div className="gallery-item item-school">
            <img src="/assets/images/hero_fish_plate.png" alt="Assorted Raw Fish Selection" />
          </div>
          <div className="gallery-item item-clams">
            <img src="https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=800" alt="Pristine market catch" />
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
