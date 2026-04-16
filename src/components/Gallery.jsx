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
            <img src="https://images.unsplash.com/photo-1580481072645-022f9a6d4ce8?q=80&w=800" alt="Fresh market fish" />
          </div>
          <div className="gallery-item item-school">
            <img src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=800" alt="Fresh market fish display" />
          </div>
          <div className="gallery-item item-squid">
            <img src="/assets/images/suriname_croaker.png" alt="Whitemouth Croaker" />
          </div>
          <div className="gallery-item item-shrimp">
            <img src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=800" alt="Raw fish catch" />
          </div>
          <div className="gallery-item item-clams">
            <img src="https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=800" alt="Raw open market fish" />
          </div>
          <div className="gallery-item item-fish">
            <img src="https://images.unsplash.com/photo-1590038848493-27150fb57a55?q=80&w=800" alt="Whole raw fish on ice" />
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
