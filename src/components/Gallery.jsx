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
            <img src="/assets/images/gallery_raw_grouper.png" alt="Raw Grouper on ice" />
          </div>
          <div className="gallery-item item-crab">
            <img src="/assets/images/gallery_crab.png" alt="Fresh Raw Crab" />
          </div>
          <div className="gallery-item item-school">
            <img src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=800" alt="Fresh market fish display" />
          </div>
          <div className="gallery-item item-squid">
            <img src="/assets/images/suriname_croaker.png" alt="Whitemouth Croaker" />
          </div>
          <div className="gallery-item item-shrimp">
            <img src="/assets/images/suriname_seabob_shrimp.png" alt="Fresh Seabob Shrimp" />
          </div>
          <div className="gallery-item item-clams">
            <img src="/assets/images/gallery_clams.png" alt="Fresh Raw Clams" />
          </div>
          <div className="gallery-item item-fish">
            <img src="https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=800" alt="Fresh sea fish varieties" />
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
