import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="section" id="galerie">
      <div className="container">
        <h2 className="section-title">FRESH CATCH SHOWCASE</h2>
        <p className="section-subtitle">
          A glimpse into our pristine daily harvest, ready for export.
        </p>

        <div className="gallery-grid">
          <div className="gallery-item item-chef">
            <img src="/assets/images/gallery_raw_grouper.png" alt="Raw Grouper on ice" />
          </div>
          <div className="gallery-item item-crab">
            <img src="/assets/images/suriname_red_snapper.png" alt="Fresh Suriname Red Snapper" />
          </div>
          <div className="gallery-item item-school">
            <img src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=800" alt="Fresh market fish display" />
          </div>
          <div className="gallery-item item-squid">
            <img src="/assets/images/suriname_croaker.png" alt="Whitemouth Croaker" />
          </div>
          <div className="gallery-item item-shrimp">
            <img src="/assets/images/hero_fish_plate.png" alt="Fresh Raw Fish Selection" />
          </div>
          <div className="gallery-item item-clams">
            <img src="https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=800" alt="Raw open market fish" />
          </div>
          <div className="gallery-item item-fish">
            <img src="https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=800" alt="Raw Salmon on ice" />
          </div>
        </div>
        
        <div className="gallery-action">
          <button className="btn btn-secondary">View Full Catalog</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
