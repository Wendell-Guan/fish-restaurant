import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="section" id="galerie">
      <div className="container">
        <h2 className="section-title">NOS GALERIES</h2>
        <p className="section-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
        </p>

        <div className="gallery-grid">
          <div className="gallery-item item-chef">
            <img src="/assets/images/gallery_chef.png" alt="Chef flambe" />
          </div>
          <div className="gallery-item item-crab">
            <img src="/assets/images/gallery_crab.png" alt="Crab" />
          </div>
          <div className="gallery-item item-school">
            <img src="/assets/images/footer_school.png" alt="Fish school" />
          </div>
          <div className="gallery-item item-squid">
            <img src="/assets/images/gallery_squid.png" alt="Squid dish" />
          </div>
          <div className="gallery-item item-shrimp">
            <img src="/assets/images/gallery_shrimp.png" alt="Shrimp bruschetta" />
          </div>
          <div className="gallery-item item-clams">
            <img src="/assets/images/gallery_clams.png" alt="Clams" />
          </div>
          <div className="gallery-item item-fish">
            <img src="/assets/images/hero_fish_plate.png" alt="Raw fish plate" />
          </div>
        </div>
        
        <div className="gallery-action">
          <button className="btn btn-secondary">Voir plus</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
